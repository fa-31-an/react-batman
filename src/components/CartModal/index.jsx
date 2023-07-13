import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartModal.module.css'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/userModal';

export default function CartModal() {
  const { isOpen, toggleModal } = useModal();
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} />
        <h2>THE CART</h2>
        <section className={styles.modalBody}>
          <div className={styles.modalDrinksListContainer}>
            <article className={styles.card}>
              <img src='https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg' alt='' />
              <span>NAME</span>
              <span>CUÁNTO DUELE</span>
              <div className={styles.counter}>
                <button> - </button>
                <span>N</span>
                <button> + </button>
              </div>
              <FontAwesomeIcon icon={faTrash} className={styles.iconTrash} />
            </article>
          </div>
          <aside>
            <p><strong>subtotal: xxxxx</strong></p>
            <p>TOTAL</p>
            <div className={styles.btnContainer}>
              <button className={styles.clear}>Vaciar carrito</button>
              <button className={styles.buy}>Confirmar compra</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};
