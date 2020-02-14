import { fork, take, call, select, put } from "redux-saga/effects";
import { loadFiles, ActionLoadFiles, setLocation, ActionSetLocation } from "./browser";
import { selectFilesState } from './selectors';
import { FilesStatusesState, FileStatus, setFileStatus } from "./filesStatuses";
import { getFileId, loadFromGithub, File, FileLocation } from "../lib/files";
import { add } from './files';

export function* browserLoadFiles(location: FileLocation) {
  const fileId = getFileId(location);
  if (!fileId) {
    throw new Error("Invalid location");
  }

  yield put(setFileStatus({fileId, status: FileStatus.LOADING}));
  const newFiles: File[] = yield call(loadFromGithub, location);
  yield put(add(newFiles));
  yield put(setFileStatus({fileId, status: FileStatus.READY}));
}

export function* onBrowserLoadFiles(action: ActionLoadFiles) {
    const filesStates: FilesStatusesState = yield select(selectFilesState);
    const fileId = getFileId(action.payload);

    if (!fileId) {
      // Means, no location is selected
      return;
    }

    const fileStatus = filesStates[fileId];

    switch (fileStatus) {
        case FileStatus.READY:
            break;
        case FileStatus.LOADING:
            break;
        default:
          yield call(browserLoadFiles, action.payload);
    }
}

export function* watchBrowserLoadFiles() {
  while (true) {
    const action: ActionLoadFiles = yield take(loadFiles.type);
    yield call(onBrowserLoadFiles, action);
  }
}

export function* onBrowserSetLocation(action: ActionSetLocation) {
  yield put(loadFiles(action.payload));
}

export function* watchBrowserSetLocation() {
  while (true) {
    const action: ActionSetLocation = yield take(setLocation.type);
    yield call(onBrowserSetLocation, action);
  }
}

export function* rootSaga() {
  yield fork(watchBrowserLoadFiles);
  yield fork(watchBrowserSetLocation);
}
