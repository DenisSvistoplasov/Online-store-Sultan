import { useAppSelector } from "../../hooks/storeHooks";
import { selectCartTotalCount, selectCartTotalCost } from "../../store/slices/cartSlice";
import { classnames } from "../../utils/classnames";
import { fixNumber } from "../../utils/fixNumber";
import { Container } from "../Container";
import { Logo } from "../Logo";
import { Nav } from "../Nav";
import { IconCart } from "../icons/cart";
import { IconCatalog } from "../icons/catalog";
import { Contact } from "./Contact";
import { PriceListLink } from "./PriceListLink";
import { SearchBlock } from "./SearchBlock";
import styles from './header.sass';

export function DesktopHeader() {
  const cartTotalCount = useAppSelector(selectCartTotalCount);
  const cartTotalCost = useAppSelector(selectCartTotalCost);

  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <Container className={styles['top-container']}>
          <ul className={styles['contacts-list']}>
            <li className={styles.contact}>
              <Contact className={styles.contact_address} title='г. Кокчетав, ул. Ж. Ташенова 129Б' subtitle='(Рынок Восточный)' link={false} />
            </li>
            <li className={styles.contact}>
              <Contact className={styles.contact_email} title='opt.sultan@mail.ru' subtitle='На связи в любое время' href='mailto:opt.sultan@mail.ru' />
            </li>
          </ul>
          <Nav className={styles.nav} />
        </Container>
      </div>

      <div className={styles.header__bottom}>
        <Container className={styles['bottom-container']}>
          <Logo className={styles.logo} />
          <a href="#/catalog" className={classnames(styles.catalog, 'interactive-btn')}><IconCatalog />Каталог</a>
          <SearchBlock className={styles['search-block']} />
          <div className={styles["phone-block"]}>
            <Contact
              className={styles.contact_tel} title='+7 (777) 490-00-91'
              subtitle={<>время работы: 9:00-20:00<button className={styles['request-a-call']}>Заказать звонок</button></>}
              href='tel:+77774900091' />
          </div>
          <PriceListLink className={styles['price-list-link']} />
          <div className={styles.delimiter}/>
          <a href='#/basket' className={styles["basket-block"]}>
            <div className={styles.basket}>
              <IconCart />
              <div className={styles.basket__count}>{cartTotalCount}</div>
            </div>
            <div className={styles["basket-info"]}>
              <div className={styles["basket-title"]}>Корзина</div>
              <div className={styles["basket-value"]}>{fixNumber(cartTotalCost)} ₸</div>
            </div>
          </a>

        </Container>
      </div>

    </header>
  );
}