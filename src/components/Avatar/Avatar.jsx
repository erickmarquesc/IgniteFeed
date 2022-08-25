import styles from './Avatar.module.css';

export function Avatar({borderGreen}) {
  const onAvatar = borderGreen;

  return onAvatar ?
    <img className={styles.avatar} src='https://github.com/erickmarquesc.png' />
    :
    <img  className={styles.avatarBorderFalse} src='https://github.com/erickmarquesc.png' />;
};