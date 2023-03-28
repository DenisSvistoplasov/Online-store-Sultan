import React from 'react';
import styles from './oneproductpage.sass';
import { useParams } from 'react-router-dom';
import { Container } from '../Container';
import { IconBox } from '../icons/box';
import { IconBottle } from '../icons/bottle';
import { IconCart } from '../icons/cart';
import { IProduct } from '../../data/catalog';
import { IconShare } from '../icons/share';
import { IconDownload } from '../icons/download';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { plusToCart, minusFromCart, selectProductInCartCount, removeFromCart } from '../../store/slices/cartSlice';
import { classnames } from '../../utils/classnames';
import { selectProductsByIds, selectProductsStatus } from '../../store/slices/productsSlice';
import { Counter } from '../Counter';
import { fixNumber } from '../../utils/fixNumber';


export function OneProductPage() {
  const isLoading = useAppSelector(selectProductsStatus)==='loading';
  const id = useParams().id || 0;
  const productData = useAppSelector(selectProductsByIds([id]))[0];
  const count = useAppSelector(selectProductInCartCount(id));
  const dispatch = useAppDispatch();

  if (isLoading) return <>Loading...</>;

  const {
    imageUrl,
    name,
    quantityType,
    amount,
    barcode,
    manufacturer,
    brand,
    description,
    price,
    fullDescription,
    types: type,
    isPopular,
  } = productData;




  const onPlus = () => dispatch(plusToCart(id));
  const onMinus = () => dispatch(minusFromCart(id));
  const onRemove = () => dispatch(removeFromCart(id));

  return (
    <section className={styles.section}>
      <Container className={styles.container}>

        <div className={styles["img-wrapper"]}>
          {isPopular && <div className={styles.popular}>ПОПУЛЯРНОЕ</div>}
          <img src={imageUrl} alt={name} className={styles.img} />
        </div>

        <div className={styles["text-content"]}>

          <div className={styles["in-stock"]}>В наличии</div>
          <h3 className={styles.description}><span className={styles.name}>{name}</span> {description}</h3>
          <div className={styles.amount}>
            {quantityType == 'вес' && <IconBox />}
            {quantityType == 'объем' && <IconBottle />}
            {amount}
          </div>

          <div className={styles.controls}>
            <div className={styles.price}>{fixNumber(price)} ₸</div>
            <Counter count={count} onMinus={onMinus} onPlus={onPlus}/>
            {count ?
              <button className={styles.remove} onClick={onRemove}>Убрать<IconCart /></button> :
              <button className={styles.add} onClick={onPlus}>В корзину<IconCart /></button>
            }
            <div className={styles.share}><IconShare /></div>
            <div className={styles['promotion-and-price-list']}>
              <p className={styles.promotion}>При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области</p>
              <a href="" className={styles["price-list-link"]}>Прайс-лист<IconDownload /></a>
            </div>
          </div>



          <div className={styles.manufacturer}>Производитель:<b>{manufacturer}</b></div>
          <div className={styles.brand}>Бренд:<b>{brand}</b></div>
          <div className={styles.barcode}>Штрихкод:<b>{barcode}</b></div>

          <div className={styles['description-dropdown']}>Описание <span className={styles['dropdown-arrow']}>▼</span></div>
          <div className={styles.delimiter}>
          </div>
          <div className={styles['characteristics-dropdown']}>Характеристики <span className={styles['dropdown-arrow']}>▼</span></div>
        </div>

      </Container>
    </section>
  );
}
