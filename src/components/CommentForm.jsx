import { useState } from "react";

const CommentForm = (props) => {
    const [comment, setComment] = useState("");

    const handleChange = (event) => {
        const newComment = event.target.value;
        setComment(newComment);
    };

    return (
        <div>
            <textarea
                className="comment"
                onChange={handleChange}
                value={comment}
                placeholder="Write your comment here"
            />
            <p>{comment}</p>
        </div>
    );
}

export default CommentForm;