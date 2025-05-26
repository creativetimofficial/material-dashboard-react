import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.sales;

const currentSales = createSelector(selectSelf, (state) => state.list);
const currentSaleSelected = createSelector(selectSelf, (state)=> state.saleSelected);

export default {
  currentSales,
  currentSaleSelected,
}