'use client';

import { useState } from 'react';
import { Todo } from '@/lib/types';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onUpdate: (id: string, title: string, description?: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onUpdate, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description || '');

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, editTitle.trim(), editDescription.trim() || undefined);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      onDelete(todo.id);
    }
  };

  return (
    <li className={styles.item}>
      {isEditing ? (
        <div className={styles.editMode}>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className={styles.editInput}
            aria-label="Edit todo title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description (optional)"
            className={styles.editDescription}
            rows={2}
            aria-label="Edit todo description"
          />
          <div className={styles.editActions}>
            <button onClick={handleSave} className={styles.saveButton}>
              Save
            </button>
            <button onClick={handleCancel} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.viewMode}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className={styles.checkbox}
            aria-label={`Mark ${todo.title} as ${todo.completed ? 'incomplete' : 'complete'}`}
          />
          <div className={styles.content}>
            <h3 className={`${styles.title} ${todo.completed ? styles.completed : ''}`}>
              {todo.title}
            </h3>
            {todo.description && (
              <p className={styles.description}>{todo.description}</p>
            )}
          </div>
          <div className={styles.actions}>
            <button
              onClick={() => setIsEditing(true)}
              className={styles.editButton}
              aria-label={`Edit ${todo.title}`}
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className={styles.deleteButton}
              aria-label={`Delete ${todo.title}`}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  );
}