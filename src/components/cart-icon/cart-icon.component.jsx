import React from "react";
// import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { showCartToggle } from "../redux/cart/cartActions";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalItemsQuantity = (items) =>
    items.reduce((sum, item) => sum + item.quantity, 0);

  const handleHideCart = () => {
    dispatch(showCartToggle());
  };

  return (
    <div className='cart-icon' onClick={handleHideCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalItemsQuantity(cartItems)}</span>
    </div>
  );
};

export default CartIcon;
