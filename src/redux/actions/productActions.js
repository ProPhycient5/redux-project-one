import { ActionTypes } from "../constants/actionTypes";

export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
    return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product,
    };
  };