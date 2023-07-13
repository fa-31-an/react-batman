import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <>
      <header className={`py-5 ${styles.header}`}>
        <h1>Buscador de Bebidas</h1>
        <FontAwesomeIcon icon={faCartShopping} />
      </header>
    </>
  );
};