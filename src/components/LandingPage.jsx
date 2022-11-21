import { Link, } from "react-router-dom";
import Menubar from "./Menubar.jsx";
import Button from "./Button.jsx";
import Searchbar from "./Searchbar.jsx";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Menubar>
        <Button />
        <Searchbar />
      </Menubar>
      <p>
        <strong>This is a blog about my journey of learning to code</strong>
      </p>
      <Link to = "/posts/" className = "router-link">Blog posts</Link>
    </div>
  );
}

export default LandingPage;
