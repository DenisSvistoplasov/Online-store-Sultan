import React, { useEffect, useRef, useState } from 'react';
import styles from './catalogpage.sass';
import { Container } from '../Container';
import { Select } from '../Select';
import { ProductsList } from '../ProductsList';
import { Filter, IFilterRestrictions } from '../Filter';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { selectProducts, getProducts } from '../../store/slices/productsSlice';
import { Pagination } from '../Pagination';
import { pickPaginationPart } from '../../utils/pickPaginationPart';
import { IProduct, productTypes } from '../../data/catalog';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { IconProductViewType } from '../icons/productViewType';
import { IconBarsUp } from '../icons/barsUp';
import { IconBarsDown } from '../icons/barsDown';
import { Sorting } from './Sorting';
import { useParams } from 'react-router-dom';
import { ProductTypes } from './ProductTypes';

export type sortingType = 'name up' | 'name down' | 'price up' | 'price down';

const INITIAL_SORTING: sortingType = 'name up';
const INITIAL_PAGE = 1;
const PRODUCTS_PER_PAGE = 5;
const PRODUCTS_PER_PAGE_DESKTOP = 6;

export function CatalogPage() {
  const breakpoint = useBreakpoint();
  const productsPerPage = breakpoint === 'mobile' ? PRODUCTS_PER_PAGE : PRODUCTS_PER_PAGE_DESKTOP;
  const products = useAppSelector(selectProducts);
  const productType = useParams().type as productTypes;

  const [filterRestrictions, setFilterRestrictions] = useState<IFilterRestrictions>({});
  const [sortingType, setSortingType] = useState(INITIAL_SORTING);
  const [productsOfCurrentType, setProductsOfCurrentType] = useState<IProduct[]>([]);
  const [productsToShow, setProductsToShow] = useState<IProduct[]>([]);
  const [shouldPaginationSync, setShouldPaginationSync] = useState(false);
  const [shouldFilterSync, setShouldFilterSync] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Type
    let newProductsOfCurrentType = productType ? pickProductsByType(products, productType) : products;
    // Filter
    let newProductsToShow = applyFilter(newProductsOfCurrentType, filterRestrictions);
    // Sorting
    newProductsToShow.sort(sortingFunctions[sortingType]);

    setProductsOfCurrentType(newProductsOfCurrentType);
    setProductsToShow(newProductsToShow);
    setShouldPaginationSync(x => !x);
  }, [products]);

  useEffect(() => {
    // Type
    let newProductsOfCurrentType = productType ? pickProductsByType(products, productType) : products;
    // Filter
    setFilterRestrictions({});
    // Sorting
    setSortingType(INITIAL_SORTING);

    setProductsOfCurrentType(newProductsOfCurrentType);
    setShouldFilterSync(x => !x);
  }, [productType]);

  useEffect(() => {
    // Filter
    let newProductsToShow = applyFilter(productsOfCurrentType, filterRestrictions);
    // Sorting
    newProductsToShow.sort(sortingFunctions[sortingType]);

    setProductsToShow(newProductsToShow);
    setShouldPaginationSync(x => !x);
  }, [filterRestrictions]);

  useEffect(() => {
    // Sorting
    let newProductsToShow = [...productsToShow];
    newProductsToShow.sort(sortingFunctions[sortingType]);

    setProductsToShow(newProductsToShow);
    setShouldPaginationSync(x => !x);
  }, [sortingType]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <Container>

        <div className={styles.inner}>

          <div className={styles.inner__top}>
            <h1 className={styles.title}>Косметика и гигиена</h1>
            {breakpoint === 'desktop' &&
              <>
                <div className={styles['sorting-and-view']}>
                  <Sorting sortingType={sortingType} onChoice={setSortingType} />
                  <IconProductViewType />
                </div>
                <ProductTypes className={styles.types} currentType={productType} />
              </>
            }
          </div>

          <aside className={styles.inner__left}>
            <Filter className={styles.filter} sendRestrictions={setFilterRestrictions} staticOpen={breakpoint === 'desktop'}
              shouldFilterSync={shouldFilterSync} />
            <ProductTypes className={styles.types} currentType={productType} />
          </aside>


          {breakpoint === 'mobile' &&
            <Sorting sortingType={sortingType} onChoice={setSortingType} />
          }

          <div className={styles.inner__content}>
            <ProductsList
              className={styles.products}
              products={productsToShow}
              initialPage={INITIAL_PAGE}
              productsPerPage={productsPerPage}
              shouldPaginationSync={shouldPaginationSync}
              parentContainer={sectionRef.current}
            />

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
  ['price up']: (a: IProduct, b: IProduct) => (a.price) - (b.price),
  ['price down']: (a: IProduct, b: IProduct) => (b.price) - (a.price),
};

const applyFilter = (products: IProduct[], restrictions: IFilterRestrictions) => {
  const { brands, manufacturers, maxPrice, minPrice } = restrictions;

  return products.filter(product => {
    if (maxPrice !== undefined && product.price > maxPrice) return false;
    if (minPrice !== undefined && product.price < minPrice) return false;

    if (brands && brands.length && !brands.includes(product.brand)) return false;
    if (manufacturers && manufacturers.length && !manufacturers.includes(product.manufacturer)) return false;

    return true;
  });
};

const pickProductsByType = (products: IProduct[], type: productTypes) => {
  return products.filter(product => product.types.includes(type));
};