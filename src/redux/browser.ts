import {createAction, createReducer} from '@reduxjs/toolkit';
import {FileId} from './files';

type WorkingDirectory = FileId | null;

// State
interface IBrowserState {
    cwd: WorkingDirectory;
}

const DEFAULT_STATE = {
    cwd: null
};

// Action: Set current work dir
const ACTION_SET_CWD = 'BROWSER/SET_CWD';
type PayloadOfSetCWD = WorkingDirectory;
export const setCWD = createAction<PayloadOfSetCWD>(ACTION_SET_CWD);

// Reducer
export const browser = createReducer<IBrowserState>(DEFAULT_STATE, builder => 
    builder
        .addCase(setCWD, (state, action) => ({
            cwd: action.payload
        }))
);