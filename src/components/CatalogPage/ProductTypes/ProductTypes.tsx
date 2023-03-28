import React from 'react';
import styles from './producttypes.sass';
import { classnames } from '../../../utils/classnames';
import { useAppSelector } from '../../../hooks/storeHooks';
import { selectProductsTypes } from '../../../store/slices/productsSlice';
import { productTypes } from '../../../data/catalog';

export const typesText = {
  body: 'Уход за телом',
  face: 'Уход за лицом',
  hands: 'Уход за руками',
  hair: 'Уход за волосами',
};

export function ProductTypes({ className = '' }) {
  const types = useAppSelector(selectProductsTypes);
  return (
    <ul className={classnames(styles.types, className)}>
      {types.map((type, i) => (
        <li key={i}><a href={'#/catalog/' + type} className={styles['type-btn']}>{typesText[type]}</a></li>
      ))}
      {/* <li><a href='' className={styles['type-btn']}>Уход за&nbsp;руками</a></li>
      <li><a href='' className={styles['type-btn']}>Уход за&nbsp;ногами</a></li>
      <li><a href='' className={styles['type-btn']}>Уход за&nbsp;лицом</a></li>
      <li><a href='' className={styles['type-btn']}>Уход за&nbsp;волосами</a></li>
      <li><a href='' className={styles['type-btn']}>Средства для&nbsp;загара</a></li>
      <li><a href='' className={styles['type-btn']}>Средства для&nbsp;бритья</a></li>
      <li><a href='' className={styles['type-btn']}>Подарочные наборы</a></li>
      <li><a href='' className={styles['type-btn']}>Гигиеническая продукция</a></li>
      <li><a href='' className={styles['type-btn']}>Гигиена полости&nbsp;рта</a></li>
      <li><a href='' className={styles['type-btn']}>Бумажная продукция</a></li> */}
    </ul>
  );
}
