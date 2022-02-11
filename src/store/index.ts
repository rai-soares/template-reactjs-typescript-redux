import { combineReducers, createStore } from "redux";

export interface RootState {
  rootState : {}
}

const store = createStore<RootState, any, any, any>(
  combineReducers({
  })
);

export default store;
