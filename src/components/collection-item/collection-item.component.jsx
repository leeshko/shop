import React from "react";
import { useDispatch } from 'react-redux';
import CustomButton from "../custom-button/custom-button.component";
import { addItemToCart } from "../redux/cart/cartActions";
import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={addToCart} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
