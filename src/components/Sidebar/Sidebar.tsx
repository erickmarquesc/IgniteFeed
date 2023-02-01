import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import styles from './Sidebar.module.css';
import cover from '../../assets/capa.svg';
import { Avatar } from '../Avatar/Avatar';

interface IUrls {
  gitHubURL: string;
  linkedinURL: string;
  avatarURL: string;
};

export function Sidebar({ gitHubURL, linkedinURL, avatarURL }: IUrls) {

  gitHubURL = 'https://github.com/erickmarquesc';
  linkedinURL = 'https://www.linkedin.com/in/erick-marques-cabral-999b151b4/';
  avatarURL = 'https://github.com/erickmarquesc.png';
  
  return (
    <aside className={styles.sidebar}>

      <img className={styles.cover} src={cover} />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src={avatarURL} />
        <strong>Erick Marques</strong>
        <span>Web Developer and<br /> UI Designer</span>
      </div>

      <footer>
        <a href={gitHubURL} target={'_blank'}>
          <GithubLogo size={32} weight="thin" />
          Meu GitHub
        </a>
        <a href={linkedinURL} target={'_blank'}>
          <LinkedinLogo size={32} weight="thin" />
          Meu Linkedin
        </a>
      </footer>

    </aside >
  );
};