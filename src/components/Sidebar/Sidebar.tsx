import { PencilSimpleLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import cover from '../../assets/capa.svg';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img className={styles.cover} src={cover} />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src='https://github.com/erickmarquesc.png'/>
        <strong>Erick Marques</strong>
        <span>Web Developer and<br /> UI Designer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  );
};