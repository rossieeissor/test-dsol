import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext({
  users: [],
  currentUser: {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

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

  const value = { users, currentUser, setCurrentUser };
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};
