import { Store } from "redux";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";
import { browser, loadFiles } from "./browser";
import { files } from "./files";
import { filesStatuses } from "./filesStatuses";
import { selectBrowserState } from "./selectors";

export const reducer = combineReducers({ browser, files, filesStatuses });
export type AppState = ReturnType<typeof reducer>;

export default (preloadedState?: AppState): Store<AppState> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer,
    preloadedState,
    middleware: [sagaMiddleware, ...getDefaultMiddleware()]
  });

  sagaMiddleware.run(rootSaga);

  // load files
  const state = store.getState();
  const currentLocation = selectBrowserState(state);
  store.dispatch(loadFiles(currentLocation));
  
  return store;
};
