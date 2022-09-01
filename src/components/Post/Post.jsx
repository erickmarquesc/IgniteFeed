import { HeaderPost } from './HeaderPost';
import styles from './Post.module.css';
import { BodyPost } from './BodyPost';
import { FormPost } from './FormPost';

export function Post({ author, publishedAt, content }) {

  return (
    <article className={styles.post}>

      <HeaderPost author={author} publishedAt={publishedAt} />
      <BodyPost content={content} />
      <FormPost />

    </article>
  );
};