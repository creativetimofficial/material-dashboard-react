import ClientActions from '../actions';
import api from '../../../services';

const getClients = (filter) => (dispatch, getState) => {
  api.Clients.getClients(filter).then(response => {
    dispatch(ClientActions.getClients(response.data));
  });
}

const getClientById = (id) => (dispatch, getState) => {
  api.Clients.getClientById(id).then(response => {
    dispatch(ClientActions.getClientById(response.data));
  })
}

const addClient = data => (dispatch, getState) => {
  api.Clients.addClient(data).then(response => {
    dispatch(getClients());
  })
}

const deleteClient = id => (dispatch, getState) => {
  api.Clients.deleteClient(id).then(response => {
    dispatch(getClients());
  });
}

const updateClient = (id, data) => (dispatch, getState) => {
  api.Clients.updateClient(id, data).then(response => {
    dispatch(getClients());
  })
}

const selectClient = (id) => (dispatch, getState) => {
  dispatch(ClientActions.getClientById(id));
}

const clearSelectedClient = () => (dispatch, getState) => {
  dispatch(ClientActions.getClientById({}));
}

const updateField = (value, field) => (dispatch) => {
  const data = { value, field };
  dispatch(ClientActions.updateField(data));
}

export default {
  addClient,
  deleteClient,
  getClients,
  updateClient,
  getClientById,
  updateField,
  selectClient,
  clearSelectedClient,
}