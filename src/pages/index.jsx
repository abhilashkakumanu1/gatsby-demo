import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const HomePage = () => {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <p>This is my first gatsby site</p>
      <Link to="/about">About Page</Link>
    </Layout>
  );
};

export default HomePage;
