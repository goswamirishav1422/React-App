import { addToCartConst } from "./constant";
export const cartReducer = (intialState = [], action) => {
    console.log(1111,action)
  if (action.type === addToCartConst) {
    return intialState;
  } else {
    console.log("no action called");
    

    return intialState
  }
};
