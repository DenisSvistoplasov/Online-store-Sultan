import React from 'react';
import styles from './nav.sass';
import { classnames } from '../../utils/classnames';

export function Nav({className=''}) {
  return (
    <nav className={classnames(styles.nav, className)}>
      <h2 className={styles.title}>Меню сайта:</h2>
      <ul className={styles.list}>
        <ul className={styles.item}><a href="" className={styles.link}>О компании</a></ul>
        <ul className={styles.item}><a href="" className={styles.link}>Доставка и оплата</a></ul>
        <ul className={styles.item}><a href="" className={styles.link}>Возврат</a></ul>
        <ul className={styles.item}><a href="" className={styles.link}>Контакты</a></ul>
      </ul>
    </nav>
  );
}
