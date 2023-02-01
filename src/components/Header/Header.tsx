import igniteLogo from '../../assets/Ignite-logo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite Feed"/>
      <strong >Ignite Feed</strong>
    </header>
  );
};