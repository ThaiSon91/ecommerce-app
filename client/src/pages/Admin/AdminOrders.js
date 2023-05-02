import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/layout";
import axios from "axios";
import toast from "react-hot-toast";

const AdminOrders = () => {
  return (
    <Layout title="All Orders Data">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
        </div>
      </div>
      ;
    </Layout>
  );
};

export default AdminOrders;
