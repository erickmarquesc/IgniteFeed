import styles from './Post.module.css';
import { Comments } from '../Comments/Comments';
import { useState } from 'react';

export function FormPost() {

  const [comments, setComments] = useState(['Comentário legal! 🚧']);
  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  function handleNewCommentChange(){
    setNewCommentText(event.target.value);
  };

  return (
    <>
      <form
        className={styles.commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe eu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <Comments commentsMap={comments} />
    </>
  );
};