import React, { ReactNode, SyntheticEvent, useEffect } from 'react';
import styles from './modal.sass';
import { IconClose } from '../icons/close';

interface IModalProps {
  onClose?: () => void;
  children: ReactNode;
}

export function Modal({ onClose = () => {}, children }: IModalProps) {

  useEffect(() => {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.paddingRight = scrollWidth + 'px';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const onClickWrapper = (e: SyntheticEvent) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains(styles.wrapper)) onClose();
  };

  return (
    <div className={styles.wrapper} onClick={onClickWrapper}>
      <div className={styles.modal}>
        <button className={styles['close-btn']} onClick={onClose}><IconClose /></button>

        <div className={styles.inner}>
          {children}
        </div>
      </div>
    </div>
  );
}
