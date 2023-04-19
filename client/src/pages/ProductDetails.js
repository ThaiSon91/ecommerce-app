import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});

  //init details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {/* <h1>ProductDetails</h1>
      {JSON.stringify(product, null, 4)} */}
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300px"
            width="350px"
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Price: {product.price}</h6>
          {/* <h6>Category: {product.category.name}</h6> */}
          <button className="btn btn-secondary ms-1">ADD TO CARD</button>
        </div>
      </div>
      <div className="row">Similar Products</div>
    </Layout>
  );
};

export default ProductDetails;
