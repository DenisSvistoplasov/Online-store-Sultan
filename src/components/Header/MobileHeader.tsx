import { useAppSelector } from "../../hooks/storeHooks";
import { selectCartTotalCount } from "../../store/slices/cartSlice";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { IconCart } from "../icons/cart";
import { IconCatalog } from "../icons/catalog";
import { IconSearchDark } from "../icons/searchDark";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import styles from './header.sass';


export function MobileHeader() {
  const cartTotalCount = useAppSelector(selectCartTotalCount);
  
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Container className={styles['top-container']}>
          <MobileMenu/>
          <Logo />

          <a href="#/basket" className={styles.basket}>
            <IconCart />
            <div className={styles.basket__count}>{cartTotalCount}</div>
          </a>
        </Container>
      </div>

      <div className={styles.header__bottom}>
        <Container className={styles['bottom-container']}>
          <a href="#/catalog" className={styles.catalog}><IconCatalog />Каталог</a>
          <button className={styles.search}><IconSearchDark />Поиск</button>
        </Container>
      </div>
    </header>
  );
}