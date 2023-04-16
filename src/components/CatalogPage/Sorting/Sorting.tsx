import React, { memo } from 'react';
import styles from './sorting.sass';
import { Select } from '../../Select';
import { IconBarsUp } from '../../icons/barsUp';
import { IconBarsDown } from '../../icons/barsDown';
import { sortingType } from '../CatalogPage';
import { classnames } from '../../../utils/classnames';

interface ISortingProps {
  onChoice: (value: sortingType) => void;
  currentType: sortingType;
  className?: string;
}

function Sorting({ onChoice, currentType, className }: ISortingProps) {
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
        selected={currentType} />
    </div>
  );
}
  
const SortingMemo = memo(Sorting);
export { SortingMemo as Sorting };
