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
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub. Meu objetivo é estar sempre em evolução! 🚀' },
      { type: 'link', content: '👉 coffeeDelivery.com' },
      { type: 'paragraph', content: '#novoprojeto #boraCodar #rocketseat' },
    ],
    publishedAt: new Date('2023-01-01 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/marcelocabralc2.png',
      name: "Marcelo Cabral",
      role: 'Designer',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal ✌️' },
      { type: 'paragraph', content: 'Finalmente meu primo finalizou seu novo projeto para o portfólio. Foi um baita desafio criar todo o design, mas consegui 💪🏻' },
      { type: 'link', content: 'Acesse e deixe seu feedback 👉 coffeeDelivery.com' },
      { type: 'paragraph', content: '#ui #userexperience' },
    ],
    publishedAt: new Date('2022-12-28 20:00:00'),
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
