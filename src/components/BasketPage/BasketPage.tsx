import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { clearCart, selectCartRepresentation } from '../../store/slices/cartSlice';
import { selectProductsStatus } from '../../store/slices/productsSlice';
import { classnames } from '../../utils/classnames';
import { fixNumber } from '../../utils/fixNumber';
import { Container } from '../Container';
import { BasketProduct } from './BasketProduct';
import styles from './basketpage.sass';
import { InfoMessage } from '../InfoMessage';
import { useAutoscroll } from '../../hooks/useAutoscroll';
import { OrderPlacedModal } from './OrderPlacedModal';

export function BasketPage() {
  const isLoading = useAppSelector(selectProductsStatus) === 'loading';
  const { products, totalCost } = useAppSelector(selectCartRepresentation);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (sectionRef.current && sectionRef.current.getBoundingClientRect().bottom < 0) {
  //     sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  //   }
  // }, [products]);
  useAutoscroll(sectionRef.current, [products]);

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
        // <Modal onClose={onCloseModal}>
        //   <div className={styles['success-img']}><IconComplete /></div>
        //   <h2 className={styles['modal-title']}>Спасибо за заказ</h2>
        //   <p className={styles['modal-subtitle']}>Наш менеджер свяжется с вами в ближайшее время</p>
        // </Modal>}
        <OrderPlacedModal onClose={onCloseModal} />}
    </section>
  );
}