import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import style from './App.module.css';
import { Post } from './components/Post/Post';
import './global.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/erickmarquesc.png',
      name: "Erick",
      role: 'Desenvolvedor',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ๐' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. ร um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto รฉ DoctorCare ๐' },
      { type: 'link', content: '๐ jane.design/doctorcare' },
      { type: 'paragraph', content: '#novoprojeto #nlw #rocketseat' },
    ],
    publishedAt: new Date('2022-08-29 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/marcelocabralc2.png',
      name: "Marcelo Cabral",
      role: 'Designer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal โ๏ธ' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfรณlio. Foi um baita desafio criar todo o design e codar na unha, mas consegui ๐ช๐ป' },
      { type: 'link', content: 'Acesse e deixe seu feedback ๐ devonlane.design' },
      { type: 'paragraph', content: '#uiux #userexperience' },
    ],
    publishedAt: new Date('2022-08-30 20:00:00'),
  },
];

function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  );
};

export default App;
