import React from "react";
import { NavLink } from "react-router-dom";

// TODO: Change the link below to go back to the home page.

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <NavLink to={"/"} className="btn btn-link">Go Home</NavLink>
      </li>
    </ol>
  </nav>
);

export default PostsNav;
