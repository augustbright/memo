import { createAction, createReducer } from "@reduxjs/toolkit";
import { FileId } from "../lib/files";

// types
export enum FileStatus {
  LOADING,
  READY
}

// state
export interface FilesStatusesState {
  [id: string]: FileStatus;
}

const DEFAULT_STATE: FilesStatusesState = {};

// actions
const setFileStatus = createAction<{ fileId: FileId; status: FileStatus }>(
  "FILES_STATUSES/SET_FILE_STATUS"
);

// reducer
export const filesStatuses = createReducer(DEFAULT_STATE, builder =>
  builder.addCase(setFileStatus, (state, action) => ({
    ...state,
    [action.payload.fileId]: action.payload.status
  }))
);
