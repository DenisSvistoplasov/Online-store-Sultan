import React from 'react';
import styles from './pricelistlink.sass';
import { classnames } from '../../../utils/classnames';

export function PriceListLink({className=''}) {
  return (
    <a href="" className={classnames(styles.link, className)}>Прайс-лист<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.9 6.8H11.1V2.6H6.8V6.8H4.0L9.0 12.5L13.9 6.8ZM3.3 13.9H14.6V15.3H3.3V13.9Z" fill="white" /></svg></a>
  );
}
