'use client';

import { useState, FormEvent } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onAdd: (title: string, description?: string) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showDescription, setShowDescription] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (title.trim()) {
      onAdd(title.trim(), description.trim() || undefined);
      setTitle('');
      setDescription('');
      setShowDescription(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className={styles.input}
          aria-label="Todo title"
        />
        <button
          type="button"
          onClick={() => setShowDescription(!showDescription)}
          className={styles.toggleButton}
          aria-label="Toggle description field"
        >
          {showDescription ? '−' : '+'}
        </button>
        <button
          type="submit"
          disabled={!title.trim()}
          className={styles.addButton}
          aria-label="Add todo"
        >
          Add
        </button>
      </div>
      
      {showDescription && (
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description (optional)"
          className={styles.description}
          rows={3}
          aria-label="Todo description"
        />
      )}
    </form>
  );
}