import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { clearCart, selectCartProductsIds, selectCartRepresentation } from '../../store/slices/cartSlice';
import { selectProducts, selectProductsStatus } from '../../store/slices/productsSlice';
import { classnames } from '../../utils/classnames';
import { fixNumber } from '../../utils/fixNumber';
import { Container } from '../Container';
import { Counter } from '../Counter';
import { Modal } from '../Modal';
import { IconBottle } from '../icons/bottle';
import { IconBox } from '../icons/box';
import { IconCart } from '../icons/cart';
import { IconTrashCan } from '../icons/trashCan';
import { BasketProduct } from './BasketProduct';
import styles from './basketpage.sass';
import { IconComplete } from '../icons/complete';
import { InfoMessage } from '../InfoMessage';

export function BasketPage() {
  const isLoading = useAppSelector(selectProductsStatus) === 'loading';
  const { products, totalCost } = useAppSelector(selectCartRepresentation);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && sectionRef.current.getBoundingClientRect().bottom < 0) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [products]);

  const onOrder = () => {
    setIsOpenModal(true);
  };
  const onCloseModal = () => {
    dispatch(clearCart());
    setIsOpenModal(false);
  };

  return (
    <section className={styles.section} ref={sectionRef}>
      {isLoading ?
        <InfoMessage text='Loading...' /> :

        products.length === 0 ?
          <InfoMessage text='Корзина пуста' /> :

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
              <button className={classnames(styles.order, 'interactive-btn')} onClick={onOrder}>Оформить заказ</button>
            </div>
          </Container>}

      {isOpenModal &&
        <Modal onClose={onCloseModal}>
          <div className={styles['success-img']}><IconComplete /></div>
          <h2 className={styles['modal-title']}>Спасибо за заказ</h2>
          <p className={styles['modal-subtitle']}>Наш менеджер свяжется с вами в ближайшее время</p>
        </Modal>}
    </section>
  );
}