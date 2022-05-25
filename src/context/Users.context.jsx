import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext({
  users: [],
  currentUser: {},
  userLength: 0,
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const userLength = Object.keys(currentUser).length;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const userFromStorage = JSON.parse(localStorage.getItem("currentUser"));
    if (userFromStorage) setCurrentUser(userFromStorage);
  }, []);

  const value = { users, currentUser, setCurrentUser, userLength };
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
