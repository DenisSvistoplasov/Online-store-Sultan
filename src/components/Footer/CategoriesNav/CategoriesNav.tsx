import styles from './CategoriesNav.sass';

export function CategoriesNav() {
  return (
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
  );
}