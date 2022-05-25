import { useEffect, useContext, useState } from "react";
import СommentInput from "../../components/comment-input/comment-input.component";
import Button from "../../components/button/button.component";

import { PostContext } from "../../context/Post.context";

import "./detailed-post.styles.scss";

export default function DetailedPost() {
  const { currentPost } = useContext(PostContext);
  const [comments, setComments] = useState([]);
  const [formIsShown, setFormIsShown] = useState(false);

  function toogleCommentForm() {
    setFormIsShown((prev) => !prev);
  }

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`
    )
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((error) => console.log(error));
  }, [currentPost]);

  return (
    <div className="detailed">
      <div className="detailed__post">
        <h2 className="detailed__title">{currentPost.title}</h2>
        <p className="detailed__body">{currentPost.body}</p>
      </div>
      <div className="detailed__comments">
        <h3 className="comments__title">comments</h3>
        {comments.map((comment) => (
          <div className="comments__item" key={comment.id}>
            <h3 className="item__name">{comment.name}</h3>
            <p className="item__email">{comment.email}</p>
            <p className="item__body">{comment.body}</p>
          </div>
        ))}
      </div>
      <Button onClick={toogleCommentForm}>
        {formIsShown ? "Hide form" : "Post a comment"}
      </Button>
      {formIsShown && <СommentInput />}
    </div>
  );
}
