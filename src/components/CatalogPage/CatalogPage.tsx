import React, { useEffect, useState } from 'react';
import styles from './catalogpage.sass';
import { Container } from '../Container';
import { Select } from '../Select';
import { ProductsList } from '../ProductsList';
import { Filter, IFilterRestrictions } from '../Filter';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { selectProducts, setProducts } from '../../store/slices/productsSlice';
import { Pagination } from '../Pagination';
import { pickPaginationPart } from '../../utils/pickPaginationPart';
import { IProduct } from '../../data/catalog';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { IconProductViewType } from '../icons/productViewType';
import { IconBarsUp } from '../icons/barsUp';
import { IconBarsDown } from '../icons/barsDown';
import { Sorting } from './Sorting';
import { ProductTypes } from './ProductTypes';

export type sortingType = 'name up' | 'name down' | 'price up' | 'price down';

const INITIAL_SORTING: sortingType = 'name up';
const INITIAL_PAGE = 1;
const PRODUCTS_PER_PAGE = 5;
const PRODUCTS_PER_PAGE_DESKTOP = 6;

export function CatalogPage() {
  const breakpoint = useBreakpoint();
  const productsPerPage = breakpoint === 'mobile' ? PRODUCTS_PER_PAGE : PRODUCTS_PER_PAGE_DESKTOP;
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  const [filterRestrictions, setFilterRestrictions] = useState<IFilterRestrictions>({});
  const [sortingType, setSortingType] = useState(INITIAL_SORTING);
  const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState(products);


  useEffect(() => {
    dispatch(setProducts());
  }, []);

  useEffect(() => {
    let newProductsList = applyFilter(products, filterRestrictions);
    newProductsList.sort(sortingFunctions[sortingType]);
    setFilteredAndSortedProducts(newProductsList);
  }, [filterRestrictions, products]);

  useEffect(() => {
    let newProductsList = [...filteredAndSortedProducts];
    let a = newProductsList.sort(sortingFunctions[sortingType]);
    setFilteredAndSortedProducts(newProductsList);
  }, [sortingType]);


  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.navigation}>
          <a href="" className={styles.back}>Назад</a>
          <div className={styles.crumbs}>
            <a href="" className={styles.crumbs__main}>Главная</a>
            <div className={styles.crumbs__delimiter}></div>
            <span className={styles.crumbs__current}>Косметика и гигиена</span>
          </div>
        </div>

        <div className={styles.inner}>

          <div className={styles.inner__top}>
            <h1 className={styles.title}>Косметика и гигиена</h1>
            {breakpoint === 'desktop' &&
              <>
                <div className={styles['sorting-and-view']}>
                  <Sorting sortingType={sortingType} onChoice={setSortingType} />
                  <IconProductViewType />
                </div>
                <ProductTypes className={styles.types} />
              </>
            }
          </div>


          <aside className={styles.inner__left}>
            <Filter className={styles.filter} sendRestrictions={setFilterRestrictions} staticOpen />
            <ProductTypes className={styles.types} />
          </aside>


          {breakpoint === 'mobile' &&
            <Sorting sortingType={sortingType} onChoice={setSortingType} />
          }

          <div className={styles.inner__content}>
            <ProductsList products={filteredAndSortedProducts} className={styles.products} initialPage={INITIAL_PAGE} productsPerPage={productsPerPage} />

            <p className={styles['bottom-text']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
          </div>

        </div>
      </Container>
    </section>
  );
}


const sortingFunctions = {
  ['name up']: (a: IProduct, b: IProduct) => a.name > b.name ? 1 : -1,
  ['name down']: (a: IProduct, b: IProduct) => a.name <= b.name ? 1 : -1,
  ['price up']: (a: IProduct, b: IProduct) => parseFloat(a.price) - parseFloat(b.price),
  ['price down']: (a: IProduct, b: IProduct) => parseFloat(b.price) - parseFloat(a.price),
};


const applyFilter = (products: IProduct[], restrictions: IFilterRestrictions) => {
  const { brands, manufacturers, maxPrice, minPrice } = restrictions;

  return products.filter(product => {
    if (maxPrice !== undefined && parseFloat(product.price) > maxPrice) return false;
    if (minPrice !== undefined && parseFloat(product.price) < minPrice) return false;

    if (brands && brands.length && !brands.includes(product.brand)) return false;
    if (manufacturers && manufacturers.length && !manufacturers.includes(product.manufacturer)) return false;

    return true;
  });
};

