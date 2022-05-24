import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import "./navbar.styles.scss";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar">
        <h1 className="navbar__title">CONCERT CLUB</h1>
      </nav>
      <Outlet />
    </Fragment>
  );
}
