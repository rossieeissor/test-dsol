import "./button.styles.scss";

export default function Button({ children, ...otherProps }) {
  return (
    <button className="button" {...otherProps}>
      {children}
    </button>
  );
}
