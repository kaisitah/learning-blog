import { useState, useEffect } from "react";
import { fetchComments } from "../fetchData";

const Comments = () => {
    const [commentData, setCommentData] = useState();

    const fetchData = async function () {
        const data = await fetchComments();
        setCommentData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {commentData && commentData.data.Blog_Comments.map((comment) => (
                <div key={comment.comment_id}>
                    <h6>Commenting post <em>"{comment.post_title}"</em></h6>
                    <p>{comment.comment_text}</p>
                </div>
            ))}
        </>
    );
}

export default Comments;