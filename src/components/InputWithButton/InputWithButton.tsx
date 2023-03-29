import React, { FormEvent, FormEventHandler, ReactNode, useRef } from 'react';
import styles from './inputwithbutton.sass';
import { classnames } from '../../utils/classnames';

interface IInputWithButtonProps{
  className?: string;
  icon: ReactNode;
  placeholder: string;
  onClick?: (text: string) => void;
  onInput?: (e:FormEvent<HTMLInputElement>)=>void;
}

export function InputWithButton({ className, icon, placeholder, onClick = () => {}, onInput=()=>{} }: IInputWithButtonProps) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className={classnames(styles.wrapper, className)}>
      <input type="text" className={styles.input} ref={ref} placeholder={placeholder} onInput={onInput} />
      <button className={classnames(styles.btn, 'interactive-btn')} onClick={()=>onClick(ref.current?.value||'')}>{icon}</button>
    </div>
  );
}
