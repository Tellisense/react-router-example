import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link className="font-bold m-12" to="/admin/posts">Posts</Link>
      </li>
      <li>
        <Link className="font-bold m-12" to="/admin/users">Users</Link>
      </li>
    </ul>
  );
};

export default SideBar;
