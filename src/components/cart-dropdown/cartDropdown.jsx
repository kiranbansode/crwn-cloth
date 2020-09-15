import React from "react";
import Button from "../button/button";
import "./cartDropdown.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-item"></div>
    <Button>Go to Checkout</Button>
  </div>
);

export default CartDropDown;
