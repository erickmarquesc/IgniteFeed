import styles from './Post.module.css';

export function FormPost() {
  return (
    <form className={styles.commentForm}>
      <strong>Deixe eu feedback</strong>
      <textarea
        placeholder='Deixe um comentário'
      />
      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
  );
};