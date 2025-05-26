import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.clients;

const currentClients = createSelector(selectSelf, (state) => state.list);
const currentClientSelected = createSelector(selectSelf, (state)=> state.clientSelected);

export default {
  currentClients,
  currentClientSelected,
}