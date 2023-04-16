import React, { FocusEvent, ReactNode, SyntheticEvent, useRef, useState } from 'react';
import styles from './select.sass';
import { entry } from '../../../webpack.config';
import { classnames } from '../../utils/classnames';
import { sortingType } from '../CatalogPage';

interface ISelectProps {
  entries: [sortingType, ReactNode][];
  onChoice: (value: sortingType) => void;
  selected: sortingType;
  className?: string;
}
export function Select({ entries, onChoice, selected, className }: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false);


  const choose = (value: sortingType) => {
    onChoice(value);
    setIsOpen(false);
  };

  const onBlur = (e: FocusEvent) => {
    if (!e.relatedTarget?.closest('.' + styles.container)) setIsOpen(false);
  };


  return (
    <div className={classnames(styles.container, className)} onBlur={onBlur}>
      <button className={styles.btn} onClick={() => setIsOpen(x => !x)} >
        {entries.find(([type]) => type === selected)?.[1]}
        <div className={classnames(styles.triangle, { [styles.open]: isOpen })}>&#9660;</div>
      </button>

      {isOpen &&
        <ul className={styles.list}>
          {entries.map((entry, index) => (
            <li className={styles.item} key={index}>
              <button className={styles.item__btn} onClick={() => choose(entry[0])}>
                {entry[1]}
              </button>
            </li>))}
        </ul>}
    </div>
  );
}
