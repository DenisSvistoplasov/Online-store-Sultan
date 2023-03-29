import React, { useEffect, useState } from 'react';
import styles from './productslist.sass';
import { classnames } from '../../utils/classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { Product } from './Product/Product';
import { selectProducts, getProducts } from '../../store/slices/productsSlice';
import { IProduct } from '../../data/catalog';
import { pickPaginationPart } from '../../utils/pickPaginationPart';
import { Pagination } from '../Pagination';
import { selectCartProductsIds } from '../../store/slices/cartSlice';

interface IProductsListProp {
  className?: string;
  products: IProduct[];
  initialPage: number;
  productsPerPage: number;
}
export function ProductsList({ className = '', products, initialPage, productsPerPage }: IProductsListProp) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { productsPart, numberOfPages } = pickPaginationPart(products, currentPage, productsPerPage);
  const cartProductsIds = useAppSelector(selectCartProductsIds);

  return (
    <>
      <ul className={classnames(styles.list, className)}>
        {productsPart.map((productItem, i) => <Product key={i} data={productItem} className={styles.product} count={cartProductsIds[productItem.id]} />)}
      </ul>
      <Pagination className={styles.pagination} currentPage={currentPage} numberOfPages={numberOfPages} onChange={setCurrentPage} />
    </>
  );
}
