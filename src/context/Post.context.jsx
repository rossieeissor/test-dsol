import { createContext, useState, useEffect } from "react";

export const PostContext = createContext({
  currentPost: {},
});

export const PostProvider = ({ children }) => {
  const [currentPost, setCurrentPost] = useState({});
  const value = { currentPost, setCurrentPost };

  useEffect(() => {
    const postFromStorage = JSON.parse(localStorage.getItem("currentPost"));
    if (postFromStorage) setCurrentPost(postFromStorage);
  }, []);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
