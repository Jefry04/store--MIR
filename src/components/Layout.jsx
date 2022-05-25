import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <span>
        <Link to="/" className="link">
          <h3>HOME</h3>
        </Link>
        <Link to="/about" className="link">
          <h3>ABOUT</h3>
        </Link>
      </span>
    </div>
  );
};

export default Layout;
