import { HeaderPost } from './HeaderPost';
import styles from './Post.module.css';
import { BodyPost } from './BodyPost';
import { FormPost } from './FormPost';

interface IContent {
  content: string;
  type: string;
};

interface IPostProps {
  author: {
    avatarUrl: string,
    name: string,
    role: string,
  },
  publishedAt: Date;
  content: IContent[];
};

export function Post({ author, publishedAt, content }: IPostProps) {

  return (
    <article className={styles.post}>

      <HeaderPost author={author} publishedAt={publishedAt} />
      <BodyPost content={content} />
      <FormPost />

    </article>
  );
};