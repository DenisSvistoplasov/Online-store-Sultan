import React, { ReactNode } from 'react';
import styles from './container.sass';
import { classnames } from '../../utils/classnames';

export function Container({ className, children }: { className?: string; children: ReactNode; }) {
  return (
    <div className={classnames(styles.container, className)}>
      {children}
    </div>
  );
}
