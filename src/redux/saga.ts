import { fork, take, call, select, put } from "redux-saga/effects";
import { loadFiles, ActionLoadFiles } from "./browser";
import { selectFilesState } from './selectors';
import { FilesStatusesState, FileStatus } from "./filesStatuses";
import { getFileId, loadFromGithub, File } from "../lib/files";
import { add } from './files';

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
            const newFiles: File[] = yield call(loadFromGithub, action.payload);
            yield put(add(newFiles));
    }
}

export function* watchBrowserLoadFiles() {
  while (true) {
    const action: ActionLoadFiles = yield take(loadFiles.type);
    yield call(onBrowserLoadFiles, action);
  }
}

export function* rootSaga() {
  yield fork(watchBrowserLoadFiles);
}
