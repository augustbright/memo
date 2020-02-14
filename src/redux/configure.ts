import { Store } from "redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { browser } from "./browser";
import { files } from "./files";

export const reducer = combineReducers({ browser, files });
export type AppState = ReturnType<typeof reducer>;

export default (preloadedState?: AppState): Store<AppState> => {
  return configureStore({
    reducer,
    preloadedState
  });
};
