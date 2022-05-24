import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <span>
        <Link to="/" className="link">
          <h3>HOME</h3>
        </Link>
        <h3>ABOUT</h3>
      </span>
    </div>
  );
};

export default Layout;
