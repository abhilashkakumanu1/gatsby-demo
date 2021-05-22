import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1>Hey bro!!!!</h1>
      <p>This now is my about page</p>
      <Link to="/">Home page</Link>
    </Layout>
  );
};

export default AboutPage;
