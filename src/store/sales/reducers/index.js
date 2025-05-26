import { createReducer } from "@reduxjs/toolkit";
import actionType from "../actions";

const initialState = {
  list: [],
  saleSelected: {},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionType.getSales, (state, action) => {
      state.list = action.payload;
    })
    .addCase(actionType.addSale, (state, action) => {
      state.list = action.payload;
    })
    .addCase(actionType.deleteSale, (state, action) => {
      state.list = action.payload;
    })
    .addCase(actionType.getSaleById, (state, action) => {
      state.saleSelected = action.payload;
    })
    .addCase(actionType.updateField, (state, action) => {
      const { value, field } = action.payload
      state.saleSelected[field] = value;
    })
});

export default reducer;