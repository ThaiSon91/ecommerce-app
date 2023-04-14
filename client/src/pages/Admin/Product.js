import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import React from "react";

const Product = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
