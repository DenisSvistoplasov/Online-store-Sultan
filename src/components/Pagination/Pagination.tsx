import React, { useMemo, useState } from 'react';
import styles from './pagination.sass';
import { classnames } from '../../utils/classnames';
import { IconArrowTickYellow } from '../icons/arrow-tick_left_yellow';

interface IPaginationProps {
  currentPage: number;
  numberOfPages: number;
  onChange: (page: number) => void;
  className?: string;
}

export function Pagination(props: IPaginationProps) {
  const {
    currentPage,
    numberOfPages,
    onChange,
    className
  } = props;

  const pages = useMemo(() => new Array(numberOfPages).fill(0).map((_, i) => i + 1), [numberOfPages]);

  const onClickPage = (page: number) => {
    onChange(page);
  };

  const onClickBack = () => {
    if (currentPage - 1 !== 0) {
      onChange(currentPage - 1);
    }
  };

  const onClickForward = () => {
    if (currentPage + 1 <= numberOfPages) {
      onChange(currentPage + 1);
    }
  };

  return (
    <div className={classnames(styles.wrapper, className)}>
      <button className={classnames(styles.back, 'interactive-btn')} onClick={onClickBack}><IconArrowTickYellow /></button>
      <ul className={styles.list}>
        {pages.map(page => (
          <li key={page} className={styles.item}>
            <button
              className={classnames(styles.page, { [styles.active]: page == currentPage }, 'interactive-btn')}
              onClick={() => onClickPage(page)}
            >{page}</button>
          </li>
        ))}
      </ul>
      <button className={classnames(styles.forward, 'interactive-btn')} onClick={onClickForward}><IconArrowTickYellow /></button>
    </div>
  );
}
