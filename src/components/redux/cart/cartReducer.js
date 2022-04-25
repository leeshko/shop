import { addToCartUtil, removeItemFromCart } from "./cart.utils";
import {
  SHOW_CART,
  ADD_ITEM_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from "./cartTypes";

const initialState = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addToCartUtil(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
