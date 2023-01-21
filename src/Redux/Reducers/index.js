import { combineReducers } from "redux";
import ProductReducer from "Redux/Reducers/ProductReducer";

const reducers = combineReducers({
  allProducts: ProductReducer,
});

export default reducers;
