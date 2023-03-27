import React, { FormEvent, SyntheticEvent, useEffect, useState } from 'react';
import styles from './searchandpick.sass';
import { InputWithButton } from '../../InputWithButton';
import { IconSearchLight } from '../../icons/searchLight';
import { useBreakpoint } from '../../../hooks/useBreakpoint';

interface ISearchAndPickProps {
  title: string;
  options: { count: number; value: string; }[];
  chosen?: string[];
  toShow?: number;
  onChange: (value: string) => void;
}

export function SearchAndPick(props: ISearchAndPickProps) {
  const {
    title,
    options,
    chosen = [],
    toShow = useBreakpoint() === 'mobile' ? 2 : 4,
    onChange
  } = props;

  const [_options, setOptions] = useState(options);
  const [_toShow, setToShow] = useState(toShow);
  const [isAllShown, setIsAllShown] = useState(false);
  // const [checkedValues, setCheckedValues] = useState([] as string[]);

  useEffect(() => { setOptions(options); }, [options]);

  const onReveal = () => {
    setToShow(Infinity);
    setIsAllShown(true);
  };

  const onInput = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    if (value.trim()) {
      const filteredOptions = options.filter(option => option.value.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      setOptions(filteredOptions);
    }
    else {
      setOptions(options);
    }

  };

  const onCheckboxChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;

    // let newValues: string[];
    // if (target.checked) {
    //   newValues = [...checkedValues, target.value];
    // }
    // else {
    //   newValues = checkedValues.filter(value => value != target.value);
    //   setCheckedValues(prev => prev.filter(value => value != target.value));
    // }
    // setCheckedValues(newValues);
    onChange(target.value);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <InputWithButton icon={<IconSearchLight />} placeholder='Поиск...' className={styles.input} onInput={onInput} />

      <ul className={styles.list}>
        {_options.slice(0, _toShow).map(option => (
          <li className={styles.item} key={option.value}>
            <label className={styles.label}>
              <input type="checkbox" className={styles.checkbox} value={option.value} checked={chosen.includes(option.value)} onChange={onCheckboxChange} />
              <div className={styles['custom-checkbox']}></div>
              <span className={styles['option-name']}>{option.value}<span className={styles['option-count']}>({option.count})</span></span>

            </label>
          </li>
        ))}
      </ul>

      {!isAllShown && _toShow < _options.length && <button className={styles.rest} onClick={onReveal}>Показать все <span className={styles.rest__icon}>▼</span></button>}
    </div>
  );
}
