import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';

export function Header() {
  const { toggleModal } = useModal();

  return (
    <>
      <header className={`py-5 ${styles.header}`}>
        <h1>Buscador de Bebidas</h1>
        <FontAwesomeIcon icon={faCartShopping} className={styles.cart} onClick={toggleModal} />
      </header>
    </>
  );
};