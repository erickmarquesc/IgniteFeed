import styles from './Post.module.css';

export function BodyPost(){
  return (
    <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉 <a href="">jane.design/doctorcare</a></p>
      <p>#novoprojeto #nlw #rocketseat</p>
    </div>
  );
};