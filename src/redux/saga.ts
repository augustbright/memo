import { fork, take, call, select } from "redux-saga/effects";
import { prepare, ActionPrepare } from "./files";
import { selectFilesState } from './selectors';
import { FilesStatusesState, FileStatus } from "./filesStatuses";

export function* onFilePrepare(action: ActionPrepare) {
    const filesStates: FilesStatusesState = yield select(selectFilesState);
    const fileStatus = filesStates[action.payload.fileId];

    switch (fileStatus) {
        case FileStatus.READY:
            break;
        case FileStatus.LOADING:
            break;
        default:
            // start load file
    }
}

export function* watchFilePrepare() {
  while (true) {
    const action: ActionPrepare = yield take(prepare.type);
    yield call(onFilePrepare, action);
  }
}

export function* rootSaga() {
  yield fork(watchFilePrepare);
}
