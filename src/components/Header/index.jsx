import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';
import useAuth from '../../hooks/useAuth';

export function Header() {
  const { toggleModal } = useModal();
  const { currentSession, logout } = useAuth();

  return (
    <>
      <header className={`py-5 ${styles.header}`}>
        <h1>Buscador de Bebidas</h1>
        {
          currentSession && (
            <>
              <p>{currentSession.name}</p>
              <FontAwesomeIcon icon={faCartShopping} className={styles.cart} onClick={toggleModal} />
              <button onClick={logout}>Cerrar sesión</button>
            </>
          )
        }
      </header>
    </>
  );
};