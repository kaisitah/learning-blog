import { Link } from "react-router-dom";
import Menubar from "./Menubar.jsx";
import Button from "./Button.jsx";
import Searchbar from "./Searchbar.jsx";
import ContentsTable from "./ContentsTable.jsx";
import CommentForm from "./CommentForm.jsx";
import Comments from "./Comments.jsx";

const LandingPage = (props) => {
  return (
    <div className="LandingPage">
      <Menubar>
        <Button>Search</Button>
        <Searchbar />
      </Menubar>
      <p>
        <strong>This is a blog about my journey of learning to code</strong>
      </p>
      <Link to="/posts/" className="router-link">
        Blog posts
      </Link>
      <ContentsTable />
      <h3>Leave a comment</h3>
      <CommentForm />
      <Button>Send comment</Button>
      <h3>Previous comments</h3>
      <Comments />
    </div>
  );
};

export default LandingPage;
