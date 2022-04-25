import { ADD_ITEM_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, SHOW_CART } from './cartTypes';

export const showCartToggle = () => ({
    type: SHOW_CART,
})
export const addItemToCart = item => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})
export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})
export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
})