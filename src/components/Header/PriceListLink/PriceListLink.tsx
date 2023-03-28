import React from 'react';
import styles from './pricelistlink.sass';
import { classnames } from '../../../utils/classnames';
import { IconDownload } from '../../icons/download';

export function PriceListLink({className=''}) {
  return (
    <a href="" className={classnames(styles.link, className)}>Прайс-лист<IconDownload/></a>
  );
}
