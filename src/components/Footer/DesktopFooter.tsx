import { Contacts } from '../Contacts/Contacts';
import { Container } from '../Container';
import { PriceListLink } from '../Header/PriceListLink';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { PaymentSystems } from '../PaymentSystems/PaymentSystems';
import { SocialsList } from '../SocialsList/SocialsList';
import { Subscribe } from '../Subscribe/Subscribe';
import { CategoriesNav } from './CategoriesNav/CategoriesNav';
import styles from './footer.sass';

export function DesktopFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <Logo className={styles.logo} light />
          <p className={styles.description}>Компания «Султан» — снабжаем розничные магазины товарами "под&nbsp;ключ" в Кокчетаве и&nbsp;Акмолинской области</p>
          <Subscribe />
        </div>

        <div className={styles.right}>
          <Nav className={styles.nav} />
          <CategoriesNav />
          <div className={styles['price-list-and-socials']}>
            <h2 className={styles['price-list-and-socials__title']}>Скачать прайс-лист:</h2>
            <PriceListLink className={styles['price-list-link']} />
            <SocialsList />
          </div>
          <div className={styles['contacts-and-payments']}>
            <Contacts />
            <PaymentSystems />
          </div>
        </div>
      </Container>
    </footer>
  );
}
