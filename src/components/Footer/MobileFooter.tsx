import { Contacts } from '../Contacts/Contacts';
import { Container } from '../Container';
import { PriceListLink } from '../Header/PriceListLink';
import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { PaymentSystems } from '../PaymentSystems/PaymentSystems';
import { Subscribe } from '../Subscribe/Subscribe';
import { CategoriesNav } from './CategoriesNav/CategoriesNav';
import styles from './footer.sass';

export function MobileFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles['logo-and-price-list']}>
          <Logo light />
          <PriceListLink className={styles['price-list-link']} />
        </div>
        <p className={styles.description}>Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и&nbsp;Акмолинской области</p>
        <Subscribe />
        <div className={styles['menu-and-categories']}>
          <Nav className={styles.nav} />
          <CategoriesNav />
        </div>
        <Contacts withSocialsList />
        <PaymentSystems />
      </Container>
    </footer>
  );
}