import { createAction, createReducer } from "@reduxjs/toolkit";
import { FileLocation } from "../lib/files";

export type BrowserState = FileLocation;
const DEFAULT_STATE: BrowserState = {};

// Action: Set current location
export const setLocation = createAction<FileLocation>("BROWSER/SET_LOCATION");
export type ActionSetLocation = ReturnType<typeof setLocation>;

// Action: Load files
export const loadFiles = createAction<FileLocation>("BROWSER/LOAD_FILES");
export type ActionLoadFiles = ReturnType<typeof loadFiles>;

// Reducer
export const browser = createReducer<BrowserState>(DEFAULT_STATE, builder =>
  builder
    .addCase(setLocation, (state, action) => ({
      ...state,
      ...action.payload
    }))
);
