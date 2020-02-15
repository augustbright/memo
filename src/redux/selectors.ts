import { AppState } from './configure';
import { FilesStatusesState } from './filesStatuses';
import { BrowserState } from './browser';
import { FileType, getFileId, FileLocation, File } from '../lib/files';
import { FileState } from './files';

export const selectFiles = (state: AppState): FileState => state.files;
export const selectFilesStatuses = (state: AppState): FilesStatusesState => state.filesStatuses;
export const selectBrowser = (state: AppState): BrowserState => state.browser;
export const selectCurrentLocation = (state: AppState): FileLocation => selectBrowser(state);
export const selectBrowserPath = (state: AppState): string | void => selectBrowser(state).path;
export const selectLocationType = (state: AppState): FileType => {
    const path = selectBrowserPath(state) || '';

    if (path.match(/\.ya?ml$/)) {
        return 'file';
    } else {
        return 'dir';
    }
};

export const selectCurrentLocationFiles = (state: AppState): File[] => {
    if (selectLocationType(state) !== 'dir') {
        return [];
    }

    const currentLocationId = getFileId(selectCurrentLocation(state)) || '';
    return Object.entries(selectFiles(state))
        .filter(([key, value]) => {
            return key.startsWith(currentLocationId) && key.split(currentLocationId)[1].split('/').length === 2;
        })
        .map(([key, value]) => value);
};
