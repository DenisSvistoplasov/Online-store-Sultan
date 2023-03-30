import React from 'react';
import styles from './infomessage.sass';
import { classnames } from '../../utils/classnames';

export function InfoMessage({ className = '', text = '' }) {
  return (
    <div className={classnames(styles.wrapper, className)}>{text}</div>
  );
}
