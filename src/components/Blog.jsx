import { Link } from "react-router-dom";
import Menubar from "./Menubar.jsx";
import Button from "./Button.jsx";
import Searchbar from "./Searchbar.jsx";
import Post from "./Post.jsx";
import { posts } from "../data.js";

function Blog() {
  return (
    <div>
      <Menubar>
        <Button />
        <Searchbar />
      </Menubar>
      <p>
        <strong>This is a blog about my journey of learning to code</strong>
      </p>
      <Link to="/" className="router-link">
        Back to home
      </Link>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          timestamp={post.timestamp}
          content={post.content}
        />
      ))}
      <Link to="/" className="router-link">
        Back to home
      </Link>
    </div>
  );
}

export default Blog;
