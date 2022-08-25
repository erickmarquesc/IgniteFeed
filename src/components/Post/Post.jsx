import { HeaderPost } from './HeaderPost';
import styles from './Post.module.css';
import { BodyPost } from './BodyPost';
import { Comments } from '../Comments/Comments';
import { FormPost } from './FormPost';

export function Post() {
  return (
    <article className={styles.post}>
      <HeaderPost />
      <BodyPost />
      <FormPost />
      <div className={styles.commentList}>
        <Comments />
      </div>
    </article>
  );
};