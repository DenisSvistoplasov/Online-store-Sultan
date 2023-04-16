import { Nav } from '../../Nav';
import { Contact } from '../Contact';
import { PriceListLink } from '../PriceListLink';
import styles from './MobileMenu.sass';

export function MobileMenu() {
  return (
    <div className={styles.menu}>
      <input className={styles['dropdown-checkbox']} type="checkbox" id='dropdown-checkbox' />
      <label htmlFor="dropdown-checkbox" className={styles.menu__btn}></label>

      <div className={styles.menu__modal}>
        <div className={styles.menu__inner}>
          <ul className={styles['contacts-list']}>
            <li className={styles.contact}>
              <Contact className={styles.contact_address} title='г. Кокчетав, ул. Ж. Ташенова 129Б' subtitle='(Рынок Восточный)' link={false} />
            </li>
            <li className={styles.contact}>
              <Contact className={styles.contact_email} title='opt.sultan@mail.ru' subtitle='На связи в любое время' href='mailto:opt.sultan@mail.ru' />
            </li>
            <li className={styles.contact}>
              <Contact className={styles.contact_tel} title='Отдел продаж' subtitle={<>+7 (777) 490-00-91 <div style={{ height: 5 }} />время работы: 9:00-20:00</>} href='tel:+77774900091' />
            </li>
          </ul>

          <button className={styles['request-a-call']}>Заказать звонок</button>
          <Nav className={styles.nav} />
          <PriceListLink />
        </div>
        <label className={styles['close-zone']} htmlFor="dropdown-checkbox"></label>
      </div>
    </div>
  );
}