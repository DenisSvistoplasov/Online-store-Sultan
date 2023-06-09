import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import styles from './searchandpick.sass';
import { InputWithButton } from '../../InputWithButton';
import { IconSearchLight } from '../../icons/searchLight';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

interface ISearchAndPickProps {
  title: string;
  options: { count: number; value: string; }[];
  chosen?: string[];
  toShowLimit?: number;
  onChange: (value: string) => void;
}

export function SearchAndPick(props: ISearchAndPickProps) {
  const {
    title,
    options,
    chosen = [],
    toShowLimit = useBreakpoint() === 'mobile' ? 2 : 4,
    onChange
  } = props;

  const [optionsToShow, setOptionsToShow] = useState(options);
  const [optionsCount, setOptionsCount] = useState(toShowLimit);
  const [isAllShown, setIsAllShown] = useState(false);

  useEffect(() => { setOptionsToShow(options); }, [options]);

  const onReveal = () => {
    setOptionsCount(Infinity);
    setIsAllShown(true);
  };

  const onInput = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.trim();

    if (value) {
      const filteredOptions = options.filter(option => option.value.toLowerCase().includes(value.toLowerCase()));
      setOptionsToShow(filteredOptions);
    }
    else {
      setOptionsToShow(options);
    }
  };

  const onCheckboxChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    onChange(target.value);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <InputWithButton icon={<IconSearchLight />} placeholder='Поиск...' className={styles.input} onInput={onInput} />

      {optionsToShow.length ?
        <ul className={styles.list}>
          {optionsToShow.slice(0, optionsCount).map(option => (
            <li className={styles.item} key={option.value}>
              <label className={styles.label}>
                <input type="checkbox"
                  className={styles.checkbox}
                  value={option.value}
                  checked={chosen.includes(option.value)}
                  onChange={onCheckboxChange} />
                <div className={styles['custom-checkbox']}></div>
                <span className={styles['option-name']}>{option.value}</span>
                <span className={styles['option-count']}>({option.count})</span>
              </label>
            </li>
          ))}
        </ul> :
        <div className={styles['not-found']}>Не найдено</div>
      }

      {!isAllShown && optionsCount < optionsToShow.length &&
        <button className={styles.rest} onClick={onReveal}>Показать все <span className={styles.rest__icon}>▼</span></button>}
    </div>
  );
}
