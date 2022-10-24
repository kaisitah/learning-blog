import "./Post.css";

const Post = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p className="post-time">Posted on {props.timestamp}</p>
            {props.content}
        </div>
    );
}

export default Post;