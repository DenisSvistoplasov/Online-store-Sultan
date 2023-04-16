import styles from './Contacts.sass';
import { Contact } from '../Header/Contact';
import { SocialsList } from '../SocialsList/SocialsList';

interface IContactsProps {
  withSocialsList?: boolean;
}

export function Contacts({ withSocialsList }: IContactsProps) {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.contacts__title}>Контакты:</h2>
      <div className={styles.contacts__inner}>
        <Contact
          className={styles.contact_tel}
          title='+7 (777) 490-00-91'
          subtitle={<>время работы: 9:00-20:00<div style={{ height: 5 }} /><button className={styles['request-a-call']}>Заказать звонок</button></>}
          href='tel:+77774900091' />
        <Contact
          className={styles.contact_email}
          title='opt.sultan@mail.ru'
          subtitle='На связи в любое время'
          href='mailto:opt.sultan@mail.ru' />
        {withSocialsList && <SocialsList />}
      </div>
    </div>
  );
}
