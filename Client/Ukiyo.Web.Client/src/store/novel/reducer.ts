import { createReducer } from "typesafe-actions";
import Novel from "../models/entities/Novel";
import { fetchNovelAsync, fetchNovelPaginatedAsync, searchNovelAsync, addNovelAsync, updateNovelAsync, deleteNovelAsync } from "./action";
import { combineReducers } from "redux";

const loadingReducer = createReducer(false)
    .handleAction([
        fetchNovelAsync.request, fetchNovelPaginatedAsync.request, searchNovelAsync.request, addNovelAsync.request, updateNovelAsync.request, deleteNovelAsync.request
    ], (state, action) => true)
    .handleAction([
        fetchNovelAsync.success, fetchNovelPaginatedAsync.success, searchNovelAsync.success, addNovelAsync.success, updateNovelAsync.success, deleteNovelAsync.success,
        fetchNovelAsync.failure, fetchNovelPaginatedAsync.failure, searchNovelAsync.failure, addNovelAsync.failure, updateNovelAsync.failure, deleteNovelAsync.failure
    ], (state, action) => false);

const errorReducer = createReducer(null)
    .handleAction([
        fetchNovelAsync.failure, fetchNovelPaginatedAsync.failure, searchNovelAsync.failure, addNovelAsync.failure, updateNovelAsync.failure, deleteNovelAsync.failure
    ], (state, action) => action.payload);

const dataReducer = createReducer({})
    .handleAction([fetchNovelAsync.success, addNovelAsync.success, updateNovelAsync.success, deleteNovelAsync.success], (state, action) => ({ ...state,  [action.payload.handle]: action.payload }))
    .handleAction([fetchNovelPaginatedAsync.success, searchNovelAsync.success], (state, action) => ({ ...state, ...action.payload.reduce<{ [key: string]: Novel }>((acc, curr) => ((acc[curr.handle] = curr), acc), {}) }));

const novelsReducer = combineReducers({
    loading: loadingReducer,
    error: errorReducer,
    data: dataReducer
});

export default novelsReducer;