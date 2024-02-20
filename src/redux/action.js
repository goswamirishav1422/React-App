import { addToCartConst } from "./constant";
export const addToCart = (data) => {
  return {
    type: addToCartConst,
    data,
  };
};
