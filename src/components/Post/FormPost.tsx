import { Comments } from '../Comments/Comments';
import styles from './Post.module.css';
import { useState, FormEvent, ChangeEvent } from 'react';

export function FormPost() {

  const [comments, setComments] = useState(['Comentário legal! 🚧']);
  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  };

  function deleteComment(commentToDelete: string) {
    /* Para respeitar a imutabilidade para manter a performance 
     * usamos o useState para atualizar as variáveis do sistema.
     */
    /* Para isso usei o filter que retorna true quando a premissa é verdadaeir
     * mantendo o commentário quando false é deletado.
     */
    const commentWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(commentWithoutDeletedOne);
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <>
      <form
        className={styles.commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe eu feedback</strong>
        <textarea
          required
          name='comment'
          value={newCommentText}
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
        />
        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>
      {comments.map(comment => {
        return (
          <Comments
            key={comment}
            content={comment}
            onDeletecomment={deleteComment} />
        );
      })}
    </>
  );
};