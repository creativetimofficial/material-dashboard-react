import SaleActions from '../actions';
import api from '../../../services';

const getSales = () => (dispatch, getState) => {
  api.Sales.getSales().then(response => {
    dispatch(SaleActions.getSales(response.data));
  });
}

const getSaleById = (id) => (dispatch, getState) => {
  api.Sales.getSaleById(id).then(response => {
    dispatch(SaleActions.getSaleById(response.data));
  })
}

const addSale = data => (dispatch, getState) => {
  api.Sales.addSale(data).then(response => {
    dispatch(getSales());
  })
}

const deleteSale = id => (dispatch, getState) => {
  api.Sales.deleteSale(id).then(response => {
    dispatch(getSales());
  });
}

const updateSale = (id, data) => (dispatch, getState) => {
  api.Sales.updateSale(id, data).then(response => {
    dispatch(getSales());
  })
}

const selectSale = (id) => (dispatch, getState) => {
  dispatch(SaleActions.getSaleById(id));
}

const clearSelectedSale = () => (dispatch, getState) => {
  dispatch(SaleActions.getSaleById({}));
}

const updateField = (value, field) => (dispatch) => {
  const data = { value, field };
  dispatch(SaleActions.updateField(data));
}

export default {
  addSale,
  deleteSale,
  getSales,
  updateSale,
  getSaleById,
  updateField,
  selectSale,
  clearSelectedSale,
}