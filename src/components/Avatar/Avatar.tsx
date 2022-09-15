import styles from './Avatar.module.css';
import {ImgHTMLAttributes} from 'react';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean,
}

export function Avatar({hasBorder = true, src, alt, ...props}: IAvatarProps) {
  
  return (
    <img className={hasBorder ? styles.avatar : styles.avatarBorderFalse} src={src} alt={alt}/>
  );
};