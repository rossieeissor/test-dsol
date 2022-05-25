import "./post.styles.scss";

export default function Post({ post, clickHandler }) {
  return (
    <div className="post" key={post.id}>
      <h2 className="post__title" onClick={clickHandler} id={post.id}>
        {post.title}
      </h2>
      <p className="post__body">{post.body}</p>
    </div>
  );
}
