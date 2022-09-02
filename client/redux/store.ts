import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import dates from "./dates/reducer";
import users from "./users/reducer";

const combinedReducer = combineReducers({
  dates,
  users,
});

const masterReducer = (state: any, action: any) => {
  console.log("state", state);
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      users,
      dates,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(
    masterReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export const wrapper = createWrapper(initStore);
