import React, { ReactNode } from 'react';
import styles from './contact.sass';
import { classnames } from '../../../utils/classnames';

interface IContactProps {
  link?: boolean;
  href?: string;
  title: string;
  subtitle: string | ReactNode;
  className?: string;
}

export function Contact({ link = true, href='', title, subtitle, className }: IContactProps) {
  const ContactEL = link ? 'a' : 'div';
  return (
    <ContactEL className={classnames(styles.contact, className)} href={href}>
      <b className={styles.title}>{title}</b>
      <div className={styles.subtitle}>{subtitle}</div>
    </ContactEL>
  );
}
