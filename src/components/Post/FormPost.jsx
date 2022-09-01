import styles from './Post.module.css';
import { Comments } from '../Comments/Comments';
import { useState } from 'react';

export function FormPost() {

  const [comments, setComments] = useState([1, 2]);

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, comments.length + 1]);
  };

  return (
    <>
      <form
        className={styles.commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe eu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <Comments commentsMap={comments}/>
    </>
  );
};