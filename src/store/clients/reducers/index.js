import { createReducer } from "@reduxjs/toolkit";
import actionType from "../actions";

const initialState = {
  list: [],
  clientSelected: {},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionType.getClients, (state, action) => {
      state.list = action.payload;
    })
    .addCase(actionType.addClient, (state, action) => {
      state.list = action.payload;
    })
    .addCase(actionType.deleteClient, (state, action) => {
      state.list = action.payload;
    })
    .addCase(actionType.getClientById, (state, action) => {
      state.clientSelected = action.payload;
    })
    .addCase(actionType.updateField, (state, action) => {
      const { value, field } = action.payload
      state.clientSelected[field] = value;
    })
});

export default reducer;