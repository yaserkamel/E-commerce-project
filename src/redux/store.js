import { createStore ,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"
import { composeWithDevTools } from "redux-devtools-extension";

const initialstate={};
const Meddleware=[thunk]

const store=createStore(rootReducer , initialstate ,composeWithDevTools( applyMiddleware(...Meddleware)))

export default store;