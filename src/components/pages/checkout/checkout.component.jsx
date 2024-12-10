import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../stripe-button/stripe-button.component";
import "./checkout.styles.scss";

const CheckoutPage = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const totalItemsPrice = (items) =>
    items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>{`TOTAL: $${totalItemsPrice(cartItems)}`}</div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
      </div>
      <StripeCheckoutButton price={totalItemsPrice(cartItems)} />
    </div>
  );
};

export default CheckoutPage;
