import { combineReducers } from "redux";
import salesReducer from './sales/reducers'
import clientsReducer from './clients/reducers'

const combinedReducers = combineReducers({
   sales: salesReducer,
   clients: clientsReducer
  });
export default combinedReducers;