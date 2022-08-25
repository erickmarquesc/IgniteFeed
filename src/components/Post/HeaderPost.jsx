import { Avatar } from '../Avatar/Avatar';
import styles from './Post.module.css';

export function HeaderPost() {
  return (
    <header>
      <div className={styles.author}>
                
        <Avatar borderGreen={true}/>

        <div className={styles.authorInfo}>
          <strong>Erick Marques</strong>
          <span>Web Developer</span>
        </div>

      </div>
      <time
        title='21 de Agosto às 17:00h'
        dateTime='2022-08-21 17:00:00'
      >
        Prublicado há 1h
      </time>
    </header>
  );
};