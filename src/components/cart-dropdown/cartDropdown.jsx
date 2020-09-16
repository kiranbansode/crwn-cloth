import React from "react";
import Button from "../button/button";
import "./cartDropdown.scss";
import CartItem from "../cart-item/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your cart is empty </span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go to Checkout
    </Button>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps, null)(CartDropDown));
