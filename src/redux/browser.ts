import {createAction, createReducer} from '@reduxjs/toolkit';
import {FileId} from './files';

type RepositoryId = string;
type WorkingRepository = RepositoryId | null;
type WorkingDirectory = FileId | null;

// State
interface IBrowserState {
    repo: WorkingRepository;
    cwd: WorkingDirectory;
}

const DEFAULT_STATE = {
    repo: null,
    cwd: null
};

// Action: Set current work dir
const ACTION_SET_CWD = 'BROWSER/SET_CWD';
type PayloadOfSetCWD = WorkingDirectory;
export const setCWD = createAction<PayloadOfSetCWD>(ACTION_SET_CWD);

// Action: Set current repo
const ACTION_SET_REPO = 'BROWSER/SET_REPO';
type PayloadOfSetRepo = WorkingRepository;
export const setRepo = createAction<PayloadOfSetRepo>(ACTION_SET_REPO);

// Reducer
export const browser = createReducer<IBrowserState>(DEFAULT_STATE, builder => 
    builder
        .addCase(setCWD, (state, action) => ({
            ...state,
            cwd: action.payload
        }))
        .addCase(setRepo, (state, action) => ({
            ...state,
            repo: action.payload,
            cwd: null
        }))
);
