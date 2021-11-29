import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { sessionReducer } from "./reducers/sessionReducer";
import { userReducer } from "./reducers/userReducer";
// import { contactReducer } from "./reducers/contactReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  sessionReducer,
  userReducer,
  // contactReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
