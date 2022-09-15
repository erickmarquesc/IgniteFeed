import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from '../Avatar/Avatar';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';

interface IHeaderPostProps {
  author: {
    avatarUrl: string,
    name: string,
    role: string,
  },
  publishedAt: Date,
};

export function HeaderPost({ author, publishedAt }: IHeaderPostProps) {

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <header>
      <div className={styles.author}>

        <Avatar src={author.avatarUrl} />

        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>

      </div>

      <time
        title={publishedDateFormatted}
        dateTime={publishedAt.toISOString()}
      >
        {publishedDateRelativeToNow}
      </time>

    </header>
  );
};