import React from 'react';
import styles from './main.sass';
import { Navigation } from '../Navigation';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../CatalogPage';
import { OneProductPage } from '../OneProductPage';
import { BasketPage } from '../BasketPage';

export function Main() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Routes>
        <Route path="/" Component={()=><Navigate to='/catalog' />} />
        <Route path="/catalog/:type?" element={<CatalogPage />} />
        <Route path="/product/:id" element={<OneProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </main>
  );
}
