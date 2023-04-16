import {InputWithButton} from '../InputWithButton';
import {IconTick} from '../icons/tick';
import styles from './Subscribe.sass';

export function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribe__title}>Подпишись на скидки и акции</div>
      <InputWithButton icon={<IconTick />} placeholder='Введите ваш E-mail' className={styles.subscribe__input} />
    </div>
  );
}