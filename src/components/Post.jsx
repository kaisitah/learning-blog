const Post = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p className="post-time">{props.timestamp}</p>
            {props.children}
        </div>
    );
}

export default Post;