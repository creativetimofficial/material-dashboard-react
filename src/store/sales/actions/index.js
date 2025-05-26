import { createAction } from "@reduxjs/toolkit";
import actionType from "./actionType";

const addSale = createAction(actionType.ADD_SALE);
const deleteSale = createAction(actionType.DELETE_SALE);
const getSales = createAction(actionType.GET_SALES);
const getSaleById = createAction(actionType.GET_SALE_BY_ID);
const updateField = createAction(actionType.UPDATE_FIELD);
const selectSale = createAction(actionType.SELECT_SALE);

export default {
  addSale,
  deleteSale,
  getSales,
  getSaleById,
  updateField,
  selectSale,
}