import { useContext, useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { PostContext } from "../../context/Post.context";
import { UsersContext } from "../../context/Users.context";

import Post from "../../components/post/post.component";

import "./posts-list.styles.scss";

export default function PostsList(props) {
  const navigate = useNavigate();
  const { currentUser, userLength } = useContext(UsersContext);
  const { setCurrentPost } = useContext(PostContext);
  const [currentUsersPosts, setCurrentUsersPosts] = useState([]);
  const limitedPosts = currentUsersPosts.slice(0, props.quantity);

  const setPostFromClick = event => {
    const clickedPost = currentUsersPosts.find(post => {
      return post.id === Number(event.target.id);
    });
    setCurrentPost(clickedPost);
    localStorage.setItem("currentPost", JSON.stringify(clickedPost));
    navigate("/detailed");
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${currentUser.id}`)
      .then(res => res.json())
      .then(posts => setCurrentUsersPosts(posts));
  }, [currentUser]);
  return (
    <>
      {userLength ? (
        <div className="posts-list">
          <h2 className="posts-list__title">Posts</h2>
          <div className="posts-list__container">
            {(props.quantity ? limitedPosts : currentUsersPosts).map(post => (
              <Post clickHandler={setPostFromClick} key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <Link to="/">User has not chosen</Link>
      )}
    </>
  );
}
