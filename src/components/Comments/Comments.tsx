import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css';
import { Avatar } from '../Avatar/Avatar';
import { useState } from 'react';

interface ICommentsProps {
  content: string,
  onDeletecomment: (comment: string) => void;
};

export function Comments({ content, onDeletecomment }: ICommentsProps) {

  const [clapCount, setClapCount] = useState(0);

  function handleNewClapComment() {
    setClapCount((currentValueClapCount) => {
      return currentValueClapCount + 1
    });
  };

  function handleDeleteComment() {
    onDeletecomment(content);
  };

  return (
    <div className={styles.commentList}>
      <div className={styles.comment}>
        <Avatar
          hasBorder={false}
          src='https://github.com/erickmarquesc.png'
        />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Erick Marques</strong>
                <time
                  title='21 de Agosto às 17:00h'
                  dateTime='2022-08-21 17:00:00'
                >
                  Prublicado há 1h
                </time>
              </div>
              <button
                title='Deletar comentário'
                onClick={handleDeleteComment}
              >
                <Trash size={24} />
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button onClick={handleNewClapComment}>
              <ThumbsUp />
              Aplaudir <span>{clapCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};