import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Comments({commentsMap}) {
  return (
    <div className={styles.commentList}>
      {commentsMap.map(comment => {
        return (
          <div key={comment} className={styles.comment}>
            <Avatar hasborder={false} src='https://github.com/erickmarquesc.png' />
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
                  <button title='Deletar comentário'>
                    <Trash size={24} />
                  </button>
                </header>
                <p>{comment}</p>
              </div>
              <footer>
                <button>
                  <ThumbsUp />
                  Aplaudir <span>20</span>
                </button>
              </footer>
            </div>
          </div>
        )
      })}
    </div>

  );
};