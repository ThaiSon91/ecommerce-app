import React from "react";
import Layout from "./../components/layout/layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </div>
            <h4 className="text-center">
              {cart?.length > 1
                ? `You Have ${cart.length} items in your cart ${
                    auth?.token ? "" : "Please login to checkout"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
