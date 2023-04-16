import { IconTelegram } from '../icons/telegram';
import { IconWhatsApp } from '../icons/whatsApp';
import styles from './SocialsList.sass';

export function SocialsList() {
  return (
    <div className={styles.socials}>
      <h3 className={styles.socials__title}>Связь в&nbsp;мессенджерах:</h3>
      <ul className={styles.socials__list}>
        <li className={styles.social__item}><a href="" className={styles.social__link}><IconWhatsApp /></a></li>
        <li className={styles.social__item}><a href="" className={styles.social__link}><IconTelegram /></a></li>
      </ul>
    </div>
  );
}