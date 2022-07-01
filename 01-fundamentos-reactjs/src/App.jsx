// JSX = Javascript + XML 
import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
        <Post 
        author="Giovanni Della Dea" 
        content = "Lorem ipsum dolor sit amet consectetur" 
      />
      <Post 
        author="Giovanni Della Dea" 
        content = "Lorem ipsum dolor sit amet consectetur" 
      />
        </main>
      </div>
      
    
    </div>
    
  )
}

