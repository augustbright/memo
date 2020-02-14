import { AppState } from './configure';
import { FilesStatusesState } from './filesStatuses';

export const selectFilesState = (state: AppState): FilesStatusesState => state.filesStatuses;