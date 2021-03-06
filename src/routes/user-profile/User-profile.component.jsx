import { useContext } from "react";

import { Link } from "react-router-dom";

import { UsersContext } from "../../context/Users.context";

import PostsList from "../../routes/posts-list/Posts-list.component";
import Button from "../../components/button/button.component";

import "./user-profile.styles.scss";

export default function UserProfile() {
  const { currentUser, userLength } = useContext(UsersContext);
  const { username, name, email, phone, website, company } = currentUser;

  return (
    <>
      {userLength ? (
        <>
          <div className="user-info">
            <div className="empty"></div>
            <div className="user-info__username-wrapper">
              <div className="user-info__username">{username}</div>
            </div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="user-info__item-wrapper">
              <div className="user-info__item">{name}</div>
              <div className="user-info__item">{email}</div>
              <div className="user-info__item">{phone}</div>
              <div className="user-info__item">{website}</div>
              <div className="user-info__item">{company.name}</div>
              <div className="user-info__item">{company.bs}</div>
            </div>
            <div className="empty"></div>
          </div>
          <PostsList quantity={3} />

          <Link to="/posts">
            <Button>Go to all posts</Button>
          </Link>
        </>
      ) : (
        <Link to="/">User has not chosen</Link>
      )}
    </>
  );
}
