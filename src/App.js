import { Routes, Route } from "react-router-dom";

import Navbar from "./routes/navbar/Navbar.component";
import UsersList from "./routes/users-list/Users-list.component";
import UserProfile from "./routes/user-profile/User-profile.component";
import PostsList from "./components/posts-list/Posts-list.component";
import DetailedPost from "./routes/detailed-post/Detailed-post.component";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<UsersList />} />
        <Route path="user" element={<UserProfile />} />
        <Route path="posts" element={<PostsList />} />
        <Route path="detailed" element={<DetailedPost />} />
      </Route>
    </Routes>
  );
}
