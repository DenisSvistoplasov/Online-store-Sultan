import React, { ReactNode, useState } from 'react';
import styles from './dropdown.sass';
import { classnames } from '../../utils/classnames';

interface IDropdownProps {
  className?: string;
  button: ReactNode;
  children: ReactNode;
}

export function Dropdown({ className, button, children }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classnames(styles.wrapper, className)}>
      <button className={styles.btn} onClick={() => setIsOpen(x => !x)}>
        {button}
        <div className={classnames(styles.arrow, { [styles.open]: isOpen })}>▼</div>
      </button>
      {isOpen && <div className={styles.dropdown}>{children}</div>}
    </div>
  );
}
