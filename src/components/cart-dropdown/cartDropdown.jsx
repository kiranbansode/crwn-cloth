import React from "react";
import Button from "../button/button";
import "./cartDropdown.scss";
import CartItem from "../cart-item/cartItem";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-item">
      {" "}
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}{" "}
    </div>
    <Button>Go to Checkout</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps, null)(CartDropDown);
