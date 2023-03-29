import React from 'react';
import styles from './navigation.sass';
import { useLocation, useParams } from 'react-router-dom';
import { Container } from '../Container';
import { typesText } from '../CatalogPage/ProductTypes';
import { useAppSelector } from '../../hooks/storeHooks';
import { selectProductsByIds } from '../../store/slices/productsSlice';

const sectionsAndTypesNames = {
  ...typesText,
  ['catalog']: 'Каталог',
  ['product']: 'Каталог',
  ['basket']: 'Корзина',
} as { [key: string]: string; };

export function Navigation() {
  const location = useLocation();
  const path = location.pathname.split('/').slice(1);
  const crumbs = path.map(el => sectionsAndTypesNames[el]).filter(Boolean);

  const id = path[path.length-1];
  const productName = useAppSelector(selectProductsByIds([id]))?.[0]?.name; 
  if (path[path.length-2]==='product' && productName) crumbs.push(productName)

  return (
    <div className={styles.navigation}>
      <Container>
        <a href="#/" className={styles.back}>Назад</a>
        <div className={styles.crumbs}>
          <a href="#/" className={styles.crumbs__main}>Главная</a>
          {crumbs.map((el,i) => (
            <span key={i} className={styles.crumbs__path}>{el}</span>))}
        </div>
      </Container>
    </div>
  );
}
