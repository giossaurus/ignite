// JSX = Javascript + XML 
import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Giovanni Della Dea" 
        content = "Lorem ipsum dolor sit amet consectetur" 
      />
      <Post 
        author="Giovanni Della Dea" 
        content = "Lorem ipsum dolor sit amet consectetur" 
      />
      
    
    </div>
    
  )
}

