import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/action";
import "./ProductPage.css";

const ProductPage = () => {
  const dispatch = useDispatch();

  const product = {
    name: "realmext",
    price: 1000,
  };

  const removeProduct = {
    name: "realmext",
    price: 1000,
  };

  return (
    <>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(removeFromCart(removeProduct))}
        >
          Remove from Cart
        </button>
      </div>
    </>
  );
};

export default ProductPage;
