import ActionTypes from "../Constants/action-types";

export const showProducts = (products) => {
  console.log("show");
  return {
    type: ActionTypes.SHOW_PRODUCTS,
    payload: products,
  };
};

export const editProducts = (products) => {
  console.log("edit");
  return {
    type: ActionTypes.EDIT_PRODUCTS,
    payload: products,
  };
};

export const addProducts = (products) => {
  console.log("del");

  return {
    type: ActionTypes.ADD_PRODUCTS,
    payload: products,
  };
};
