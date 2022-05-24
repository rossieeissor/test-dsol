import { useEffect, useContext, useState } from "react";

import { PostContext } from "../../context/Post.context";

export default function DetailedPost() {
  const { currentPost } = useContext(PostContext);
  const [comments, setComments] = useState([]);

  const testFunc = () => {
    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      body: JSON.stringify({
        title: "new comment",
        body: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        postId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${currentPost.id}/comments`
    )
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(error => console.log(error));
  }, [currentPost.id]);

  return (
    <div>
      <h2>{currentPost.title}</h2>
      <p>{currentPost.body}</p>
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <button onClick={testFunc}>ADD COMMENT</button>
    </div>
  );
}
