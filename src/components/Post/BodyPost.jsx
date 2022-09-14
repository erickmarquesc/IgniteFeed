import styles from './Post.module.css';

export function BodyPost({ content }) {
  return (
    <div className={styles.content}>
      {content.map(line => {
        if (line.type === 'paragraph') {
          return (
            <p key={line.content}>
              {line.content}
            </p>);
        } else if (line.type === 'link') {
          return (
            <p key={line.content}>
              <a href='#'>
                {line.content}
              </a>
            </p>
          );
        }
      })}
    </div>
  );
};