import React, { useEffect, useMemo, useState } from 'react';
import styles from './productslist.sass';
import { classnames } from '../../utils/classnames';
import { useAppSelector } from '../../hooks/storeHooks';
import { Product } from './Product/Product';
import { IProduct } from '../../data/catalog';
import { pickPaginationPart } from '../../utils/pickPaginationPart';
import { Pagination } from '../Pagination';
import { selectCartProductsIds } from '../../store/slices/cartSlice';
import { InfoMessage } from '../InfoMessage';

interface IProductsListProp {
  className?: string;
  products: IProduct[];
  initialPage: number;
  productsPerPage: number;
  shouldPaginationSync: boolean;
  parentContainer: HTMLDivElement | null;
}
export function ProductsList(
  { className = '', products, initialPage, productsPerPage, shouldPaginationSync, parentContainer }: IProductsListProp) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const { productsPart, numberOfPages } = useMemo(
    () => pickPaginationPart(products, currentPage, productsPerPage),
    [products, currentPage, productsPerPage]);
  const cartProductsIds = useAppSelector(selectCartProductsIds);

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [shouldPaginationSync]);

  useEffect(() => {
    if (parentContainer && parentContainer.getBoundingClientRect().top < 0) {
      parentContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [productsPart]);

  return (
    <>
      {productsPart.length > 0 ?
        <>
          <ul className={classnames(styles.list, className)}>
            {productsPart.map((productItem, i) => <Product key={i} data={productItem} className={styles.product} count={cartProductsIds[productItem.id]} />)}
          </ul>
          <Pagination className={styles.pagination} currentPage={currentPage} numberOfPages={numberOfPages} onChange={setCurrentPage} />
        </> :
        <InfoMessage text='Подходящий товар не найден' />}
    </>
  );
}
