import {} from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

export type FileType = "file" | "dir";
export type FileId = string;

export interface File {
  type: FileType;
  id: FileId;
  name: string;
  link: string;
}

export interface FileState {
  [id: string]: File;
}

const DEFAULT_STATE: FileState = {};

export const prepare = createAction<{fileId: FileId}>("FILE/PREPARE");

export const files = createReducer<FileState>(DEFAULT_STATE, builder => 
    builder
        .addCase(prepare, (state, action) => {
            // side effects
        })
);
