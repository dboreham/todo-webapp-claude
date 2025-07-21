import { Todo } from './types';

const STORAGE_KEY = 'todos';

export const loadTodos = (): Todo[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const todos = JSON.parse(stored);
    return todos.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
      updatedAt: new Date(todo.updatedAt),
    }));
  } catch (error) {
    console.error('Failed to load todos:', error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Failed to save todos:', error);
  }
};