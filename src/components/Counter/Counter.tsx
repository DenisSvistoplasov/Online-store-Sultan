import React from 'react';
import styles from './counter.sass';
import { classnames } from '../../utils/classnames';

interface ICounterProps {
  className?: string;
  count: number;
  onPlus: () => void;
  onMinus: () => void;
}
export function Counter({ className, count, onPlus, onMinus }: ICounterProps) {
  return (
    <div className={classnames(styles.counter, className)}>
      <button onClick={onMinus}>-</button>
      <div className={styles.count}>{count}</div>
      <button onClick={onPlus}>+</button>
    </div>
  );
}
