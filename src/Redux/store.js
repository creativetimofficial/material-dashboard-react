import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./Reducers/index";

const middleware = [];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
