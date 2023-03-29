import React from 'react';
import styles from './main.sass';
import { Navigation } from '../Navigation';
import { Route, Routes } from 'react-router-dom';
import { CatalogPage } from '../CatalogPage';
import { OneProductPage } from '../OneProductPage';
import { BasketPage } from '../BasketPage';

export function Main() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/catalog/:type?" element={<CatalogPage />} />
        <Route path="/product/:id" element={<OneProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </main>
  );
}
