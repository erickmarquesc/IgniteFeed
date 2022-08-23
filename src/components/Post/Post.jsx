import { BodyPost } from './BodyPost';
import { HeaderPost } from './HeaderPost';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <HeaderPost />
      <BodyPost />
      <form className={styles.commentForm}>
        <strong>Deixe eu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
};