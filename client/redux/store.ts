import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import dates from "./dates/reducer";
import users from "./users/reducer";
import form from "./form/reducer";
const combinedReducer = combineReducers({
  dates,
  users,
  form,
});

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      users,
      dates,
      form,
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
