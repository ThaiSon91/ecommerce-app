import React from "react";
import Layout from "../../components/layout/layout";
import UserMenu from "../../components/layout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"Dashboard - Your Orders"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md3-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>All Oders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
