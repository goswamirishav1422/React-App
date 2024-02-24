import React from "react";
import { useSelector } from "react-redux";
const NavBar = () => {
  const addCart = useSelector((state) => state.cartReducer);
  return (
    <>
      <span>{addCart.length}cartCount</span>
    </>
  );
};

export default NavBar;
