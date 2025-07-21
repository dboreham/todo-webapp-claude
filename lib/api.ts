import { Todo } from './types';

const API_BASE = '/api/todos';

export const todoApi = {
  async getAll(): Promise<Todo[]> {
    const response = await fetch(API_BASE);
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const data = await response.json();
    return data.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.created_at),
      updatedAt: new Date(todo.updated_at),
    }));
  },

  async create(title: string, description?: string): Promise<Todo> {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create todo');
    }
    
    const data = await response.json();
    return {
      ...data,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  },

  async update(id: string, updates: Partial<Todo>): Promise<Todo> {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update todo');
    }
    
    const data = await response.json();
    return {
      ...data,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
    };
  },

  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete todo');
    }
  },
};
