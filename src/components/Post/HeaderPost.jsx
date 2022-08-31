import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Avatar } from '../Avatar/Avatar';
import styles from './Post.module.css';

export function HeaderPost({ author, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true,
  })
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