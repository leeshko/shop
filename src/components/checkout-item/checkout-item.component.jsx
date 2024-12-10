import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItem } from "../redux/cart/cartActions";
// import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow'
        onClick={() => dispatch(removeItem(cartItem))}
        >&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow'
               onClick={() => dispatch(addItemToCart(cartItem))}
        >&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div
        className='remove-button'
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
