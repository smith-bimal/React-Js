import { useState } from "react";
import CommentForm from "./CommentForm";
import "./Comment.css";

export default function Comment() {
    let [comments, setComments] = useState([]);

    function addNewComment(comment) {
        setComments([...comments, comment]);
    }

    return (
        <div>
            <CommentForm addNewComment={addNewComment} />
            <br /><br />

            <h4>All Comments</h4>
            <div className="comment-container">
            {
                comments.map((comment, index) => (
                    <div className="Comment" key={index}>
                        <span>{comment.remarks}</span>
                        <span>&nbsp; &#9733; {comment.rating}</span>
                        <p>- {comment.username}</p>
                    </div>
                ))
            }
            </div>
        </div>
    )
}