import React from 'react';
import styles from './product.sass';
import { IProduct } from '../../../data/catalog';
import { IconBox } from '../../icons/box';
import { IconBottle } from '../../icons/bottle';
import { IconCart } from '../../icons/cart';
import { classnames } from '../../../utils/classnames';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { plusToCart } from '../../../store/slices/cartSlice';
import { fixNumber } from '../../../utils/fixNumber';


export function Product({ data, className }: { data: IProduct, className?: string; }) {
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

  const onAdd = () => dispatch(plusToCart(id));

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
        <a href={"#/product/"+id} className={styles['product-link']}><span className={styles.name}>{name}</span> {description}</a>
      </h3>
      <div className={styles.barcode}>Штрихкод:<b>{barcode}</b></div>
      <div className={styles.manufacturer}>Производитель:<b>{manufacturer}</b></div>
      <div className={styles.brand}>Бренд:<b>{brand}</b></div>
      <div className={styles.bottom}>
        <div className={styles.price}>{fixNumber(price)} ₸</div>
        <button className={styles.add} onClick={onAdd}>В КОРЗИНУ<IconCart /></button>
      </div>
    </article>
  );
}
