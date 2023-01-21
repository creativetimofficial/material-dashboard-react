import ActionTypes from "Redux/Constants/action-types";

const initialState = { products: [{}] };
const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.DELETE_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.ADD_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default ProductReducer;
