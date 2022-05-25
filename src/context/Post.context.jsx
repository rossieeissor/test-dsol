import { createContext, useState, useEffect } from "react";

export const PostContext = createContext({
  currentPost: {},
});

export const PostProvider = ({ children }) => {
  const [currentPost, setCurrentPost] = useState({});
  const postLength = Object.keys(currentPost).length;
  const value = { currentPost, setCurrentPost, postLength };

  useEffect(() => {
    const postFromStorage = JSON.parse(localStorage.getItem("currentPost"));
    if (postFromStorage) setCurrentPost(postFromStorage);
  }, []);

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
