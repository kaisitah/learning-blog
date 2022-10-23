import './App.css';
import Menubar from './components/Menubar';
import Button from './components/Button';
import Searchbar from './components/Searchbar';
import Post from './components/Post';
import { posts } from "./data";

function App() {
  return (
    <div className="App">
      <Menubar>
        <Button />
        <Searchbar />
      </Menubar> 
      <p><strong>This is a blog about my journey of learning to code</strong></p>
      {posts.map(post =>
        <Post 
          key={post.id}
          title={post.title}
          timestamp={post.timestamp}
          content={post.content} />
      )}
    </div>
  );
}

export default App;
