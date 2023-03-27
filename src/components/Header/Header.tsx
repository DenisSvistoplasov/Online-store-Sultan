import React from 'react';
import styles from './header.sass';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { IconCart } from '../icons/cart';
import { IconCatalog } from '../icons/catalog';
import { IconSearchDark } from '../icons/searchDark';
import { Container } from '../Container';
import { Contact } from './Contact';
import { Nav } from '../Nav';
import { PriceListLink } from './PriceListLink';
import { Logo } from '../Logo';
import { SearchBlock } from './SearchBlock';


export function Header() {
  if (useBreakpoint() == 'desktop') return <HeaderDesktop />;

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Container className={styles['top-container']}>
          <div className={styles.menu}>
            <input className={styles['dropdown-checkbox']} type="checkbox" id='dropdown-checkbox' />
            <label htmlFor="dropdown-checkbox" className={styles.menu__btn}></label>

            <div className={styles.modal}>
              <div className={styles.menu__inner}>
                <ul className={styles['contacts-list']}>
                  <li className={styles.contact}>
                    <Contact className={styles.contact_address} title='г. Кокчетав, ул. Ж. Ташенова 129Б' subtitle='(Рынок Восточный)' link={false} />
                  </li>
                  <li className={styles.contact}>
                    <Contact className={styles.contact_email} title='opt.sultan@mail.ru' subtitle='На связи в любое время' />
                  </li>
                  <li className={styles.contact}>
                    <Contact className={styles.contact_tel} title='Отдел продаж' subtitle={<>+7 (777) 490-00-91 <div style={{ height: 5 }} />время работы: 9:00-20:00</>} />
                  </li>
                </ul>

                <button className={styles['request-a-call']}>Заказать звонок</button>
                <Nav className={styles.nav} />
                <PriceListLink />
              </div>
              <label className={styles['close-zone']} htmlFor="dropdown-checkbox"></label>
            </div>
          </div>

          <Logo />

          <a href="" className={styles.basket}>
            <IconCart />
            <div className={styles.basket__count}>3</div>
          </a>
        </Container>

      </div>

      <div className={styles.header__bottom}>
        <Container className={styles['bottom-container']}>
          <a href="" className={styles.catalog}><IconCatalog />Каталог</a>
          <button className={styles.search}><IconSearchDark />Поиск</button>
        </Container>
      </div>
    </header>
  );
}

function HeaderDesktop() {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Container className={styles['top-container']}>
          <ul className={styles['contacts-list']}>
            <li className={styles.contact}>
              <Contact className={styles.contact_address} title='г. Кокчетав, ул. Ж. Ташенова 129Б' subtitle='(Рынок Восточный)' link={false} />
            </li>
            <li className={styles.contact}>
              <Contact className={styles.contact_email} title='opt.sultan@mail.ru' subtitle='На связи в любое время' />
            </li>
          </ul>
          <Nav className={styles.nav} />
        </Container>
      </div>

      <div className={styles.header__bottom}>
        <Container className={styles['bottom-container']}>
          <Logo className={styles.logo} />
          <a href="" className={styles.catalog}><IconCatalog />Каталог</a>
          <SearchBlock className={styles['search-block']} />
          <div className={styles["phone-block"]}>
            <Contact className={styles.contact_tel} title='+7 (777) 490-00-91' subtitle={<>время работы: 9:00-20:00<div style={{ height: 5 }} /><button className={styles['request-a-call']}>Заказать звонок</button></>} />            
          </div>
          <PriceListLink className={styles['price-list-link']} />
          <div className={styles.delimiter}>
          </div>
          <div className={styles["basket-block"]}>
            <a href="" className={styles.basket}>
              <IconCart />
              <div className={styles.basket__count}>3</div>
            </a>
            <div className={styles["basket-info"]}>
              <div className={styles["basket-title"]}>Корзина</div>
              <div className={styles["basket-value"]}>12 478 ₸</div>
            </div>
          </div>


        </Container>
      </div>

    </header>
  );
}
