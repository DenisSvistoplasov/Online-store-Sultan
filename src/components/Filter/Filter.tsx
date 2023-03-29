import React, { SyntheticEvent, useState } from 'react';
import styles from './filter.sass';
import { SearchAndPick } from './SearchAndPick';
import { useAppSelector } from '../../hooks/storeHooks';
import { selectBrandsAndManufacturers } from '../../store/slices/productsSlice';
import { classnames } from '../../utils/classnames';
import { IconTrashCan } from '../icons/trashCan';

export interface IFilterRestrictions {
  brands?: string[];
  manufacturers?: string[];
  minPrice?: number;
  maxPrice?: number;
}

interface IFilterProps {
  sendRestrictions: (restrictions: IFilterRestrictions) => void;
  // restrictions: IFilterRestrictions;
  defaultMinPrice?: number;
  defaultMaxPrice?: number;
  className?: string;
  staticOpen?: boolean;
}

export function Filter(props: IFilterProps) {
  const {
    sendRestrictions,
    defaultMinPrice = 0,
    defaultMaxPrice = 10000,
    className,
    staticOpen = false
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const [minPrice, setMinPrice] = useState(defaultMinPrice);
  const [maxPrice, setMaxPrice] = useState(defaultMaxPrice);

  const { brands, manufacturers } = useAppSelector(selectBrandsAndManufacturers);

  const [chosenBrands, setChosenBrands] = useState([] as string[]);
  const [chosenManufacturers, setChosenManufacturers] = useState([] as string[]);

  const onApply = () => {
    sendRestrictions({
      brands: chosenBrands,
      manufacturers: chosenManufacturers,
      minPrice,
      maxPrice,
    });
  };

  const onClear = () => {
    setChosenBrands([]);
    setChosenManufacturers([]);
  };

  const onChangeManufacturers = (value: string) => {
    const isPresent = chosenManufacturers.includes(value);
    if (isPresent) {
      setChosenManufacturers(chosenManufacturers.filter(el => el !== value));
    }
    else {
      setChosenManufacturers([...chosenManufacturers, value]);
    }
  };

  const onChangeBrands = (value: string) => {
    const isPresent = chosenBrands.includes(value);
    if (isPresent) {
      setChosenBrands(chosenBrands.filter(el => el !== value));
    }
    else {
      setChosenBrands([...chosenBrands, value]);
    }
  };

  const onChangeMinPrice = (e: SyntheticEvent) => {
    const value = +(e.target as HTMLInputElement).value;
    if (value <= maxPrice) setMinPrice(value);
  };

  const onChangeMaxPrice = (e: SyntheticEvent) => {
    const value = +(e.target as HTMLInputElement).value;
    if (value >= minPrice) setMaxPrice(value);
  };

  const onFocus = (e: SyntheticEvent) => (e.target as HTMLInputElement).select();

  return (
    <div className={classnames(styles.filters, className)}>
      <button className={classnames(styles.filters__title, { [styles.open]: isOpen })} onClick={() => setIsOpen(x => !x)}>ПОДБОР ПО ПАРАМЕТРАМ</button>

      {(staticOpen || isOpen) && <div className={styles.dropdown}>
        <div className={styles.price}>
          <div className={styles.price__title}>Цена<b>₸</b></div>
          <div className={styles.price__inputs}>
            <input type="number" className={styles.price__input} onChange={onChangeMinPrice} onFocus={onFocus} value={minPrice} />
            <div className={styles.dash}></div>
            <input type="number" className={styles.price__input} onChange={onChangeMaxPrice} onFocus={onFocus} value={maxPrice} />
          </div>
        </div>

        <SearchAndPick
          options={manufacturers}
          chosen={chosenManufacturers}
          title='Производитель'
          onChange={onChangeManufacturers} />

        <div className={styles.delimiter}></div>

        <SearchAndPick
          options={brands}
          chosen={chosenBrands}
          title='Бренд'
          onChange={onChangeBrands} />

        <div className={styles.bottom}>
          <button className={classnames(styles.apply, 'interactive-btn')} onClick={onApply}>Показать</button>
          <button className={classnames(styles.clear, 'interactive-btn')} onClick={onClear}><IconTrashCan /></button>
        </div>
      </div>}
    </div>
  );
}
