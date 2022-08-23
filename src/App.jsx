import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import style from './App.module.css';
import { Post } from './components/Post/Post';
import './global.css';

function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
