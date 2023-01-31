import styles from './Post.module.css';

interface IContent {
  type: string;
  content: string;
};

interface IBodyPostProps {
  content: IContent[],
};

export function BodyPost({ content }: IBodyPostProps) {
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
              <a href='https://coffee-delivery-chi-olive.vercel.app/' target={'_blank'}>
                {line.content}
              </a>
            </p>
          );
        }
      })}
    </div>
  );
};