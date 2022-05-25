import "./comment.styles.scss";

export default function Comment({ comment }) {
  return (
    <div className="comments__item" key={comment.id}>
      <h3 className="item__name">{comment.name}</h3>
      <p className="item__email">{comment.email}</p>
      <p className="item__body">{comment.body}</p>
    </div>
  );
}
