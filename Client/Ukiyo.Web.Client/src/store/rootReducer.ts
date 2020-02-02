import { combineReducers } from 'redux';
import NovelReducer from './novel/reducers';

const rootReducer = combineReducers({ novel: NovelReducer });

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;