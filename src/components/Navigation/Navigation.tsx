import React from 'react';
import styles from './navigation.sass';
import { useLocation } from 'react-router-dom';
import { Container } from '../Container';
import { typesText } from '../CatalogPage/ProductTypes';

const sectionsAndTypesNames = {
  ...typesText,
  ['catalog']: 'Каталог',
  ['product']: 'Товар',
  ['cart']: 'Корзина',
} as { [key: string]: string; };

export function Navigation() {
  const location = useLocation();
  const path = location.pathname.split('/').slice(1).map(el => sectionsAndTypesNames[el] || 'Каталог');
  return (
    <div className={styles.navigation}>
      <Container>
        <a href="#/" className={styles.back}>Назад</a>
        <div className={styles.crumbs}>
          <a href="#/" className={styles.crumbs__main}>Главная</a>
          {path.map((el,i) => (
            <span key={i} className={styles.crumbs__path}>{el}</span>))}
        </div>
      </Container>
    </div>
  );
}
