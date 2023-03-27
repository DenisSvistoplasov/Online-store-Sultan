import React from 'react';
import styles from './sorting.sass';
import { Select } from '../../Select';
import { IconBarsUp } from '../../icons/barsUp';
import { IconBarsDown } from '../../icons/barsDown';
import { sortingType } from '../CatalogPage';
import { classnames } from '../../../utils/classnames';

interface ISortingProps{
  onChoice: (value:sortingType)=>void;
  sortingType: sortingType;
  className?: string;
}

export function Sorting({onChoice, sortingType, className}:ISortingProps) {
  return (
    <div className={classnames(styles.sorting, className)}>
      <div className={styles.sorting__title}>Сортировка:</div>
      <Select className={styles.sorting__select}
        onChoice={onChoice}
        entries={[
          ['name up', <>Название (А-Я)</>],
          ['name down', <>Название (Я-А)</>],
          ['price up', <>Цена <IconBarsUp /></>],
          ['price down', <>Цена <IconBarsDown /></>],
        ]}
        selected={sortingType} />
    </div>
  );
}
