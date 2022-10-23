import "./Post.css";

const Post = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p className="post-time">{props.timestamp}</p>
            {props.content}
        </div>
    );
}

export default Post;