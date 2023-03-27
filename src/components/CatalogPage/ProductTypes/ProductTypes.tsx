import React from 'react';
import styles from './producttypes.sass';
import { classnames } from '../../../utils/classnames';

export function ProductTypes({className=''}) {
  return (
    <ul className={classnames(styles.types, className)}>
      <li><a href='' className={styles['type-btn']}>Уход за&nbsp;телом</a></li>
      <li><a href='' className={styles['type-btn']}>Уход за&nbsp;руками</a></li>
      <li><a href='' className={styles['type-btn']}>Уход за&nbsp;ногами</a></li>
      <li><a href='' className={styles['type-btn']}>Уход за&nbsp;лицом</a></li>
      <li><a href='' className={styles['type-btn']}>Уход за&nbsp;волосами</a></li>
      <li><a href='' className={styles['type-btn']}>Средства для&nbsp;загара</a></li>
      <li><a href='' className={styles['type-btn']}>Средства для&nbsp;бритья</a></li>
      <li><a href='' className={styles['type-btn']}>Подарочные наборы</a></li>
      <li><a href='' className={styles['type-btn']}>Гигиеническая продукция</a></li>
      <li><a href='' className={styles['type-btn']}>Гигиена полости&nbsp;рта</a></li>
      <li><a href='' className={styles['type-btn']}>Бумажная продукция</a></li>
    </ul>
  );
}
