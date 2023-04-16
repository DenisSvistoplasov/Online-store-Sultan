import styles from './PaymentSystems.sass';
import visaImg from '../../assets/img/footer/visa.png';
import mastercardImg from '../../assets/img/footer/mastercard.png';

export function PaymentSystems() {
  return (
    <ul className={styles['payment-systems']}>
      <li className={styles["payment-systems__item"]}>
        <img src={visaImg} alt="visa" className={styles["payment-systems__img"]} />
      </li>
      <li className={styles["payment-systems__item"]}>
        <img src={mastercardImg} alt="mastercard" className={styles["payment-systems__img"]} />
      </li>
    </ul>
  );
}
