import React from 'react';
import styles from './basketproduct.sass';
import { IconBox } from '../../icons/box';
import { IconBottle } from '../../icons/bottle';
import { IconTrashCan } from '../../icons/trashCan';
import { Counter } from '../../Counter';
import { IProduct } from '../../../data/catalog';
import { classnames } from '../../../utils/classnames';
import { useAppDispatch } from '../../../hooks/storeHooks';
import { minusFromCart, plusToCart, removeFromCart } from '../../../store/slices/cartSlice';
import { fixNumber } from '../../../utils/fixNumber';

interface IBasketProductProps extends IProduct {
  cost: number;
  count: number;
  className?: string;
}

export function BasketProduct(props: IBasketProductProps) {
  const {
    isPopular,
    imageUrl,
    name,
    quantityType,
    amount,
    description,
    count,
    cost,
    id,
    className
  } = props;

  const dispatch = useAppDispatch();

  const onPlus = () => dispatch(plusToCart(id));
  const onMinus = () => dispatch(minusFromCart(id));
  const onRemove = () => dispatch(removeFromCart(id));

  return (
    <article className={classnames(styles.product, className)}>
      {isPopular && <div className={styles.popular}>ПОПУЛЯРНОЕ</div>}
      <div className={styles["img-wrapper"]}><img src={imageUrl} alt={name} className={styles.img} /></div>

      <div className={styles['text-content']}>
        <div className={styles.amount}>
          {quantityType == 'вес' && <IconBox />}
          {quantityType == 'объем' && <IconBottle />}
          {amount}
        </div>
        <h3 className={styles.description} title={name+' '+description}>{name} {description}</h3>
        <p className={styles['extra-description']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. </p>
      </div>

      <div className={styles.controls}>
        <Counter count={count} onPlus={onPlus} onMinus={onMinus} />
        <div className={styles.delimiter_vertical} />
        <div className={styles.cost}>{fixNumber(cost)} ₸</div>
        <div className={styles.delimiter_vertical} />
        <button className={styles.remove} onClick={onRemove}><IconTrashCan /></button>
      </div>
    </article>
  );
}
