import { createAction, createReducer } from "@reduxjs/toolkit";
import { FileId, File } from "../lib/files";

export interface FileState {
  [id: string]: File;
}

const DEFAULT_STATE: FileState = {};

// Action: prepare files
export const prepare = createAction<{ fileId: FileId }>("FILE/PREPARE");
export type ActionPrepare = ReturnType<typeof prepare>;

// Action: add files
export const add = createAction<{files: File[]}>("FILE/ADD");
export type ActionAdd = ReturnType<typeof add>;

export const files = createReducer<FileState>(
  DEFAULT_STATE,
  builder => builder
    .addCase(add, (state, action) => {
      const newFiles: {[id: string]: File} = {};

      action.payload.files.forEach(newFile => {
        newFiles[newFile.id] = newFile;
      });

      return {
        ...state,
        ...newFiles
      };
    })
);
