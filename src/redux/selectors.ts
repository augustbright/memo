import { AppState } from './configure';
import { FilesStatusesState } from './filesStatuses';
import { BrowserState } from './browser';

export const selectFilesState = (state: AppState): FilesStatusesState => state.filesStatuses;
export const selectBrowserState = (state: AppState): BrowserState => state.browser;