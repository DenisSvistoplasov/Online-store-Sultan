import React from 'react';
import styles from './searchblock.sass';
import { InputWithButton } from '../../InputWithButton';
import { IconSearchLight } from '../../icons/searchLight';

export function SearchBlock({className=''}) {
  return (
    <InputWithButton className={className} icon={<IconSearchLight/>} placeholder='Поиск...' />
  );
}
