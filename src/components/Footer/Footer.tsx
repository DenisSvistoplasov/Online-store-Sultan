import React from 'react';
import styles from './footer.sass';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { PriceListLink } from '../Header/PriceListLink';
import { InputWithButton } from '../InputWithButton';
import { IconTick } from '../icons/tick';
import { Nav } from '../Nav';
import { Contact } from '../Header/Contact';
import { IconWhatsApp } from '../icons/whatsApp';
import { IconTelegram } from '../icons/telegram';
import visaImg from '../../assets/img/footer/visa.png';
import mastercardImg from '../../assets/img/footer/mastercard.png';
import { useBreakpoint } from '../../hooks/useBreakpoint';

export function Footer() {
  if (useBreakpoint() === 'desktop') return <FooterDesktop />;
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles['logo-and-price-list']}>
          <Logo light />
          <PriceListLink className={styles['price-list-link']} />
        </div>

        <p className={styles.description}>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и&nbsp;Акмолинской области</p>

        <div className={styles.subscribe}>
          <div className={styles.subscribe__title}>Подпишись на скидки и акции</div>
          <InputWithButton icon={<IconTick />} placeholder='Введите ваш E-mail' className={styles.subscribe__input} />
        </div>

        <div className={styles['menu-and-categories']}>
          <Nav className={styles.nav} />
          <div className={styles.categories}>
            <h2 className={styles.categories__title}>Категории:</h2>
            <ul className={styles.categories__list}>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Бытовая химия</a></li>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Косметика и гигиена</a></li>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Товары для дома</a></li>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Товары для детей и мам</a></li>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Посуда</a></li>
            </ul>
          </div>
        </div>

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
            <div className={styles.socials}>
              <h3 className={styles.socials__title}>Связь в&nbsp;мессенджерах:</h3>
              <ul className={styles.socials__list}>
                <li className={styles.social__item}><a href="" className={styles.social__link}><IconWhatsApp /></a></li>
                <li className={styles.social__item}><a href="" className={styles.social__link}><IconTelegram /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <ul className={styles['payment-systems']}>
          <li className={styles["payment-systems__item"]}><img src={visaImg} alt="visa" className={styles["payment-systems__img"]} /></li>
          <li className={styles["payment-systems__item"]}><img src={mastercardImg} alt="mastercard" className={styles["payment-systems__img"]} /></li>
        </ul>
      </Container>
    </footer>
  );
}

function FooterDesktop() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Logo className={styles.logo} light />
          <p className={styles.description}>Компания «Султан» — снабжаем розничные магазины товарами "под&nbsp;ключ" в Кокчетаве и&nbsp;Акмолинской области</p>
          <div className={styles.subscribe}>
            <div className={styles.subscribe__title}>Подпишись на скидки и акции</div>
            <InputWithButton icon={<IconTick />} placeholder='Введите ваш E-mail' className={styles.subscribe__input} />
          </div>
        </div>

        <div className={styles.right}>
          <Nav className={styles.nav} />
          <div className={styles.categories}>
            <h2 className={styles.categories__title}>Категории:</h2>
            <ul className={styles.categories__list}>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Бытовая химия</a></li>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Косметика и гигиена</a></li>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Товары для дома</a></li>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Товары для детей и мам</a></li>
              <li className={styles.categories__item}><a href="" className={styles.categories__link}>Посуда</a></li>
            </ul>
          </div>
          <div className={styles['price-list-and-socials']}>
            <h2 className={styles['price-list-and-socials__title']}>Скачать прайс-лист:</h2>
            <PriceListLink className={styles['price-list-link']} />
            <div className={styles.socials}>
              <h3 className={styles.socials__title}>Связь в&nbsp;мессенджерах:</h3>
              <ul className={styles.socials__list}>
                <li className={styles.social__item}><a href="" className={styles.social__link}><IconWhatsApp /></a></li>
                <li className={styles.social__item}><a href="" className={styles.social__link}><IconTelegram /></a></li>
              </ul>
            </div>
          </div>
          <div className={styles['contacts-and-payments']}>
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
              </div>
            </div>
            <ul className={styles['payment-systems']}>
              <li className={styles["payment-systems__item"]}><img src={visaImg} alt="visa" className={styles["payment-systems__img"]} /></li>
              <li className={styles["payment-systems__item"]}><img src={mastercardImg} alt="mastercard" className={styles["payment-systems__img"]} /></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
