import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartReducer = (intialState = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('[action.data, intialState]',[action.data, intialState])
      return [action.data, ...intialState];

    case REMOVE_FROM_CART:
      console.log("intialState", intialState);
      intialState.length = intialState.length ? intialState.length - 1 : [];
      return [...intialState];

    default:
      return intialState;
  }
};
