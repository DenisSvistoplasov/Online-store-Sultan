import { Modal } from '../../Modal';
import { IconComplete } from '../../icons/complete';
import styles from './OrderPlacedModal.sass';


export function OrderPlacedModal({ onClose = () => {} }) {

  return (
    <Modal onClose={onClose}>
      <div className={styles['success-img']}><IconComplete /></div>
      <h2 className={styles['modal-title']}>Спасибо за заказ</h2>
      <p className={styles['modal-subtitle']}>Наш менеджер свяжется с вами в ближайшее время</p>
    </Modal>
  );
}
