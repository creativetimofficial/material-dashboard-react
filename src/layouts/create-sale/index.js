import { useSelector, useDispatch } from 'react-redux';

import CreateSale from "./CreateSale";
import fromSales from '../../store/sales/selectors';
import fromClients from '../../store/clients/selectors';
import salesCommands from '../../store/sales/commands';
import clientsCommands from '../../store/clients/commands';

const ConnectedCreateSale = () => {
  const dispatch = useDispatch();

  const selectorProps = {
    saleSelected: useSelector(fromSales.currentSaleSelected),
    clientsList: useSelector(fromClients.currentClients),
  }

  const dispatchProps = {
    addSale: sale => dispatch(salesCommands.addSale(sale)),
    updateField: (value, field) => dispatch(salesCommands.updateField(value, field)),
    fetchClients: filter => dispatch(clientsCommands.getClients(filter)),
  }
  return (<CreateSale {...dispatchProps}{...selectorProps}></CreateSale>)
}

export default ConnectedCreateSale;