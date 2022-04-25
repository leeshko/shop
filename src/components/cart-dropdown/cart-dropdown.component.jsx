import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { showCartToggle } from '../redux/cart/cartActions';

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        navigate("/checkout")
        dispatch(showCartToggle());

        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
