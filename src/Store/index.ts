import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {nodesSlice} from "./Reducers/Nodes";

const reducer = combineReducers({
  nodes: nodesSlice.reducer
});

const store = configureStore({
  reducer,
});

export default store;
export {
  nodesSlice
};
