import styles from './producttypes.sass';
import { classnames } from '../../../utils/classnames';
import { useAppSelector } from '../../../hooks/storeHooks';
import { selectProductsTypes } from '../../../store/slices/productsSlice';
import { memo } from 'react';

export const typesText = {
  body: 'Уход за телом',
  face: 'Уход за лицом',
  hands: 'Уход за руками',
  hair: 'Уход за волосами',
};

function ProductTypes({ className = '', currentType='' }) {
  const types = useAppSelector(selectProductsTypes);
  return (
    <ul className={classnames(styles.types, className)}>
      {types.map((type, index) => (
        <li key={index}><a href={'#/catalog/' + type} className={classnames(styles['type-btn'], {[styles.active]:currentType===type})}>{typesText[type]}</a></li>
      ))}
    </ul>
  );
}

const ProductTypesMemo = memo(ProductTypes);
export { ProductTypesMemo as ProductTypes };