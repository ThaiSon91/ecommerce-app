import React from "react";
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <Layout title={"Go back - Page not found"}>
      <div className="pnf">
        <h1 classNamr="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops! Page Not Found</h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
