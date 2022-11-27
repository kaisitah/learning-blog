import { useState } from "react";
import Button from "./Button";

const CommentForm = (props) => {
    const [comment, setComment] = useState("");
    const [commentSender, setCommentSender] = useState("");

    const handleCommentChange = (event) => {
        const newComment = event.target.value;
        setComment(newComment);
    };

    const handleCommentSenderChange = (event) => {
        const newCommentSender = event.target.value;
        setCommentSender(newCommentSender);
    };

    return (
        <div>
            <textarea
                className="comment"
                onChange={handleCommentChange}
                value={comment}
                placeholder="Write your comment here"
            />
            <br />
            <input
                type="text"
                className="comment"
                onChange={handleCommentSenderChange}
                value={commentSender}
                placeholder="Your name or alias"
            />
            <h4>Preview your comment</h4>
            <p>{comment}</p>
            <p>{commentSender}</p>
            <Button>Send comment</Button>
        </div>
    );
}

export default CommentForm;