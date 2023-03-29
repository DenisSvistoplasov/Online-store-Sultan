import React from 'react';
import styles from './product.sass';
import { IProduct } from '../../../data/catalog';
import { IconBox } from '../../icons/box';
import { IconBottle } from '../../icons/bottle';
import { IconCart } from '../../icons/cart';
import { classnames } from '../../../utils/classnames';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { minusFromCart, plusToCart } from '../../../store/slices/cartSlice';
import { fixNumber } from '../../../utils/fixNumber';
import { Counter } from '../../Counter';


export function Product({ data, className, count = 0 }: { data: IProduct; className?: string; count?: number; }) {
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
    id,
  } = data;

  const dispatch = useAppDispatch();

  const onPlus = () => dispatch(plusToCart(id));
  const onMinus = () => dispatch(minusFromCart(id));

  return (
    <article className={classnames(styles.product, className)}>
      {isPopular && <div className={styles.popular}>ПОПУЛЯРНОЕ</div>}
      <div className={styles["img-wrapper"]}><img src={imageUrl} alt={name} className={styles.img} /></div>
      <div className={styles.amount}>
        {quantityType == 'вес' && <IconBox />}
        {quantityType == 'объем' && <IconBottle />}
        {amount}
      </div>
      <h3 className={styles.description}>
        <a href={"#/product/" + id} className={styles['product-link']}><span className={styles.name}>{name}</span> {description}</a>
      </h3>
      <div className={styles.barcode}>Штрихкод:<b>{barcode}</b></div>
      <div className={styles.manufacturer}>Производитель:<b>{manufacturer}</b></div>
      <div className={styles.brand}>Бренд:<b>{brand}</b></div>
      <div className={styles.bottom}>
        <div className={styles.price}>{fixNumber(price)} ₸</div>
        {count ?
          <Counter className={styles.counter} count={count} onMinus={onMinus} onPlus={onPlus} /> :
          <button className={classnames(styles.add, 'interactive-btn')} onClick={onPlus}>В КОРЗИНУ<IconCart /></button>}
      </div>
    </article>
  );
}
