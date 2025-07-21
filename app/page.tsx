'use client';

import { useState, useEffect } from 'react';
import { Todo, TodoFilter as FilterType } from '@/lib/types';
import { todoApi } from '@/lib/api';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import TodoFilter from '@/components/TodoFilter';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await todoApi.getAll();
      setTodos(data);
    } catch (err) {
      setError('Failed to load todos. Please check your database connection.');
      console.error('Error loading todos:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (title: string, description?: string) => {
    try {
      setError(null);
      const newTodo = await todoApi.create(title, description);
      setTodos([newTodo, ...todos]);
    } catch (err) {
      setError('Failed to create todo');
      console.error('Error creating todo:', err);
    }
  };

  const toggleTodo = async (id: string) => {
    try {
      setError(null);
      const todo = todos.find(t => t.id === id);
      if (!todo) return;
      
      const updatedTodo = await todoApi.update(id, { completed: !todo.completed });
      setTodos(todos.map(t => t.id === id ? updatedTodo : t));
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const updateTodo = async (id: string, title: string, description?: string) => {
    try {
      setError(null);
      const updatedTodo = await todoApi.update(id, { title, description });
      setTodos(todos.map(t => t.id === id ? updatedTodo : t));
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      setError(null);
      await todoApi.delete(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <main className="container">
      <h1>Todo App</h1>
      
      <TodoForm onAdd={addTodo} />
      
      {error && (
        <div style={{
          background: '#fee',
          color: '#c00',
          padding: '1rem',
          borderRadius: '4px',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}
      
      <TodoFilter
        filter={filter}
        onFilterChange={setFilter}
        activeCount={activeCount}
        completedCount={completedCount}
      />
      
      {isLoading ? (
        <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p>
      ) : (
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      )}
    </main>
  );
}