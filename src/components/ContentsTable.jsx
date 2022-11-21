import { Link, } from "react-router-dom";
import { posts } from "../data";

const ContentsTable = (props) => {
    return (
        <div>
            <h3>All posts</h3>
            <ul>  
                {posts.map((post) => (
                    <li>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContentsTable;