import styles from './Header.module.css'

export const Header = () => {
  return (
    <>
      <header className={`py-5 ${styles.header}`}>
        <h1>Buscador de Bebidas</h1>
      </header>
    </>
  );
};