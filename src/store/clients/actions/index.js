import { createAction } from "@reduxjs/toolkit";
import actionType from "./actionType";

const addClient = createAction(actionType.ADD_CLIENT);
const deleteClient = createAction(actionType.DELETE_CLIENT);
const getClients = createAction(actionType.GET_CLIENTS);
const getClientById = createAction(actionType.GET_CLIENT_BY_ID);
const updateField = createAction(actionType.UPDATE_FIELD);
const selectClient = createAction(actionType.SELECT_CLIENT);

export default {
  addClient,
  deleteClient,
  getClients,
  getClientById,
  updateField,
  selectClient,
}