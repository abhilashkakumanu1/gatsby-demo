import React from "react";
import { Link } from "gatsby";

import { container } from "./layout.module.css";

const Layout = ({ pageTitle = "My gatsby demo site", children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
        </ul>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
