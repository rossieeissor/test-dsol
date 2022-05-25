import { useState, useContext } from "react";

import { PostContext } from "../../context/Post.context";

import Button from "../button/button.component";

import "./comment-input.styles.scss";

let textFields = {
  name: "",
  email: "",
  text: ""
};

export default function СommentInput() {
  const { currentPost } = useContext(PostContext);
  const [inputFields, setInputFields] = useState(textFields);
  const { name, email, text } = inputFields;

  function changeHandler(event) {
    setInputFields((prevInputFields) => ({
      ...prevInputFields,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/comments", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        body: text,
        postId: currentPost.id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setInputFields(textFields);
        alert("Your comment has been sent");
      });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Your name: </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          required
          onChange={changeHandler}
        />
        <label htmlFor="email">Your email: </label>
        <input
          id="emal"
          type="email"
          name="email"
          value={email}
          required
          onChange={changeHandler}
        />
        <label htmlFor="text">Your comment: </label>
        <textarea
          id="text"
          name="text"
          value={text}
          required
          onChange={changeHandler}
        />
        <Button type="submit">Send comment</Button>
      </form>
    </div>
  );
}
