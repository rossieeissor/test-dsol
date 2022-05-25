import { useEffect, useContext, useState } from "react";

import { Link } from "react-router-dom";
import { PostContext } from "../../context/Post.context";

import СommentInput from "../../components/comment-input/comment-input.component";
import Comment from "../../components/comment/comment.component";
import Button from "../../components/button/button.component";

import "./detailed-post.styles.scss";

export default function DetailedPost() {
  const { currentPost, postLength } = useContext(PostContext);
  const [comments, setComments] = useState([]);
  const [formIsShown, setFormIsShown] = useState(false);

  function toogleCommentForm() {
    setFormIsShown(prev => !prev);
  }

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`
    )
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(error => console.log(error));
  }, [currentPost]);

  return (
    <>
      {postLength ? (
        <div className="detailed">
          <div className="detailed__post">
            <h2 className="detailed__title">{currentPost.title}</h2>
            <p className="detailed__body">{currentPost.body}</p>
          </div>
          <div className="detailed__comments">
            <h3 className="comments__title">comments</h3>
            {comments.map(comment => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </div>
          <Button onClick={toogleCommentForm}>
            {formIsShown ? "Hide form" : "Post a comment"}
          </Button>
          {formIsShown && <СommentInput />}
        </div>
      ) : (
        <Link to="/">User has not chosen</Link>
      )}
    </>
  );
}
