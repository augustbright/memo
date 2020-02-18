import { createAction, createReducer } from "@reduxjs/toolkit";
import { File } from "../lib/files";

export interface FileState {
  [id: string]: File;
}

const DEFAULT_STATE: FileState = {};

// Action: add files
export const add = createAction<File[]>("FILE/ADD");
export type ActionAdd = ReturnType<typeof add>;

export const files = createReducer<FileState>(
  DEFAULT_STATE,
  builder => builder
    .addCase(add, (state, action) => {
      const newFiles: {[id: string]: File} = {};

      action.payload.filter((newFile) => {
        return !(state[newFile.id]) || !state[newFile.id].content;
      })
      .forEach(newFile => {
        newFiles[newFile.id] = newFile;
      });

      return {
        ...state,
        ...newFiles
      };
    })
);
