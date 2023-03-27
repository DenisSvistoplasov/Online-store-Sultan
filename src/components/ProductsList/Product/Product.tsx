import React from 'react';
import styles from './product.sass';
import { IProduct } from '../../../data/catalog';
import { IconBox } from '../../icons/box';
import { IconBottle } from '../../icons/bottle';
import { IconCart } from '../../icons/cart';
import { classnames } from '../../../utils/classnames';


export function Product({data, className}: {data:IProduct, className?:string}) {
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
    type,
    isPopular,
  } = data;
  return (
    <article className={classnames(styles.product, className)}>
      {isPopular && <div className={styles.popular}>ПОПУЛЯРНОЕ</div>}
      <div className={styles["img-wrapper"]}><img src={imageUrl} alt={name} className={styles.img} /></div>
      <div className={styles.amount}>
        {quantityType=='вес' && <IconBox/>}
        {quantityType == 'объем' && <IconBottle />}
        {amount}
      </div>
      <h3 className={styles.description}><span className={styles.name}>{name}</span> {description}</h3>
      <div className={styles.barcode}>Штрихкод:<b>{barcode}</b></div>
      <div className={styles.manufacturer}>Производитель:<b>{manufacturer}</b></div>
      <div className={styles.brand}>Бренд:<b>{brand}</b></div>
      <div className={styles.bottom}>
        <div className={styles.price}>{price}</div>
        <button className={styles.add}>В КОРЗИНУ<IconCart/></button>
      </div>
    </article>
  );
}
