import React from 'react';
import styles from './notfound.sass';
import { classnames } from '../../utils/classnames';

export function NotFound({className='', text=''}) {
  return (
    <div className={classnames(styles.wrapper, className)}>{text}</div>
  );
}
