import { useAppSelector } from '../../hooks/storeHooks';
import { selectCartProductsIds, selectCartRepresentation } from '../../store/slices/cartSlice';
import { selectProducts, selectProductsStatus } from '../../store/slices/productsSlice';
import { classnames } from '../../utils/classnames';
import { fixNumber } from '../../utils/fixNumber';
import { Container } from '../Container';
import { Counter } from '../Counter';
import { IconBottle } from '../icons/bottle';
import { IconBox } from '../icons/box';
import { IconCart } from '../icons/cart';
import { IconTrashCan } from '../icons/trashCan';
import { BasketProduct } from './BasketProduct';
import styles from './basketpage.sass';

export function BasketPage() {
  const isLoading = useAppSelector(selectProductsStatus) === 'loading';
  const { products, totalCost } = useAppSelector(selectCartRepresentation);

  if (isLoading) return <div style={{ textAlign: 'center', padding: 50 }}>Loading...</div>;
  if (products.length === 0) return <div style={{ textAlign: 'center', padding: 50 }}>Корзина пуста</div>;


  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>КОРЗИНА</h1>

        <ul className={styles.list}>
          {products.map(product => (
            <li key={product.id} className={styles.item}>
              <div className={styles.delimiter} />
              <BasketProduct {...product} />
            </li>
          ))}
        </ul>

        <div className={classnames(styles.delimiter, styles.delimiter_common)} />

        <div className={styles.bottom}>
          <div className={styles['total-cost']}>{fixNumber(totalCost)} ₸</div>
          <button className={styles.order}>Оформить заказ</button>
        </div>
      </Container>
    </section>
  );
}