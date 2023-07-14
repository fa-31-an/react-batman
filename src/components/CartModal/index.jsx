import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartModal.module.css'
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';
import useCart from '../../hooks/useCart';
import ModalCard from './Components/Card';

export default function CartModal() {
  const { isOpen, toggleModal } = useModal();
  const {
    cart,
    clearCart,
    confirmPurchase,
    purchaseTotal,
  } = useCart();

  if (isOpen) return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={toggleModal} />
        <h2>THE CART</h2>
        <section className={styles.modalBody}>
          <div className={styles.modalDrinksListContainer}>
            {cart.itemsInCart.length === 0 && (
              <h3>Todavía no tienes productos en el carrito</h3>
            )}
            {cart.itemsInCart.map((drink) => (
              <ModalCard key={drink.idDrink} drink={drink} />
            ))}
          </div>
          <aside>
            <p><strong>subtotal: {purchaseTotal}</strong></p>
            <p>TOTAL: xxxxx</p>
            <div className={styles.btnContainer}>
              <button className={styles.clear} onClick={clearCart}>Vaciar carrito</button>
              <button className={styles.buy} onClick={confirmPurchase}>Confirmar compra</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
};
