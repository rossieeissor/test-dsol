import { useContext } from "react";
import { Link } from "react-router-dom";

import { UsersContext } from "../../context/Users.context";

import "./users-list.styles.scss";

export default function UsersList() {
  const { users, setCurrentUser } = useContext(UsersContext);

  const setUserFromClick = (event) => {
    const clickedUser = users.find((user) => {
      return user.id === Number(event.target.id);
    });
    setCurrentUser(clickedUser);
    localStorage.setItem("currentUser", JSON.stringify(clickedUser));
  };
  return (
    <div className="users-list">
      {users.map((user) => (
        <div key={user.id} className="users-list__item">
          <div></div>
          <Link
            className="item__link"
            to="/user"
            id={user.id}
            onClick={setUserFromClick}
          >
            {user.name}
          </Link>
          <div></div>
        </div>
      ))}
    </div>
  );
}
