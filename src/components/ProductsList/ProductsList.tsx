import React, { useEffect, useState } from 'react';
import styles from './productslist.sass';
import { classnames } from '../../utils/classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { Product } from './Product/Product';
import { selectProducts, getProducts } from '../../store/slices/productsSlice';
import { IProduct } from '../../data/catalog';
import { pickPaginationPart } from '../../utils/pickPaginationPart';
import { Pagination } from '../Pagination';

interface IProductsListProp {
  className?: string;
  products: IProduct[];
  initialPage: number;
  productsPerPage: number;
}
export function ProductsList({ className = '', products, initialPage, productsPerPage }: IProductsListProp) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { productsPart, numberOfPages } = pickPaginationPart(products, currentPage, productsPerPage);

  return (
    <>
      <ul className={classnames(styles.list, className)}>
        {productsPart.map((productItem, i) => <Product key={i} data={productItem} className={styles.product} />)}
      </ul>
      <Pagination className={styles.pagination} currentPage={currentPage} numberOfPages={numberOfPages} onChange={setCurrentPage} />
    </>
  );
}
