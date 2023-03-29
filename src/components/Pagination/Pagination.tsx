import React, { useState } from 'react';
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

  const onClickPage = (page: number) => {
    onChange(page);
  };

  const onClickBack = () => {
    if (currentPage - 1) {
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
        {new Array(numberOfPages).fill(0).map((_, index) => (
          <li key={index} className={styles.item}>
            <button
              className={classnames(styles.page, { [styles.active]: index + 1 == currentPage }, 'interactive-btn')}
              onClick={() => onClickPage(index + 1)}
            >{index + 1}</button>
          </li>
        ))}
      </ul>
      <button className={classnames(styles.forward, 'interactive-btn')} onClick={onClickForward}><IconArrowTickYellow /></button>
    </div>
  );
}
