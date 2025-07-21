'use client';

import { TodoFilter as FilterType } from '@/lib/types';
import styles from './TodoFilter.module.css';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
}

export default function TodoFilter({ filter, onFilterChange, activeCount, completedCount }: TodoFilterProps) {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        <span>{activeCount} active</span>
        <span>•</span>
        <span>{completedCount} completed</span>
      </div>
      
      <div className={styles.filters}>
        <button
          onClick={() => onFilterChange('all')}
          className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
          aria-pressed={filter === 'all'}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange('active')}
          className={`${styles.filterButton} ${filter === 'active' ? styles.active : ''}`}
          aria-pressed={filter === 'active'}
        >
          Active
        </button>
        <button
          onClick={() => onFilterChange('completed')}
          className={`${styles.filterButton} ${filter === 'completed' ? styles.active : ''}`}
          aria-pressed={filter === 'completed'}
        >
          Completed
        </button>
      </div>
    </div>
  );
}