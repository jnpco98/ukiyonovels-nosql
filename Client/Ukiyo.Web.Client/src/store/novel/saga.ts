import { put, call, takeLatest } from 'redux-saga/effects';
import Novel from "../models/entities/Novel";
import axios from 'axios';
import queryString from 'query-string';
import { fetchNovelAsync, fetchNovelPaginatedAsync, searchNovelAsync, addNovelAsync, updateNovelAsync, deleteNovelAsync } from './action';

interface HttpResponse {
    success: boolean;
    statusCode: number;
    message: string;
}

// https://localhost:5001/api/novel/5e358013abfbf100873f7f06 | json
function* fetchNovelSaga (action: ReturnType<typeof fetchNovelAsync.request>) {
    try {
        const response: HttpResponse & { data: Novel } = yield call(() => axios.get(`novel/${action.payload.id}`));
        if(!response.success) throw new Error(response.message);
        yield put(fetchNovelAsync.success(response.data));
    } catch (error) {
        yield put(fetchNovelAsync.failure(error));
    }
}

// https://localhost:5001/api/novel?count=2&page=0 | json
function* fetchNovelsPaginatedSaga (action: ReturnType<typeof fetchNovelPaginatedAsync.request>) {
    const query = queryString.stringify({ ...action.payload }, { arrayFormat: 'comma' });

    try {
        const response: HttpResponse & { data: Novel[] } = yield call(() => axios.get(`localhost:5000/api/novel?${query}`));
        if(!response.success) throw new Error(response.message);
        yield put(fetchNovelPaginatedAsync.success(response.data));
    } catch (error) {
        yield put(fetchNovelPaginatedAsync.failure(error));
    }
}

// curl https://localhost:5001/api/novel?count=2&page=0&genre=action,seinen&tag=magic | json
function* searchNovelsSaga (action: ReturnType<typeof searchNovelAsync.request>) {
    const query = queryString.stringify({ ...action.payload }, { arrayFormat: 'comma' });

    try {
        const response: HttpResponse & { data: Novel[] } = yield call(() => axios.get(`localhost:5000/api/novel?${query}`));
        if(!response.success) throw new Error(response.message);
        yield put(searchNovelAsync.success(response.data));
    } catch (error) {
        yield put(searchNovelAsync.failure(error));
    }
}

// curl -d "{ \"title\":\"This is a new novel\",\"description\":\"This is a novel posted from curl\"}" -H "Content-Type: application/json" -X POST https://localhost:5001/api/novel | json
function* addNovelSaga (action: ReturnType<typeof addNovelAsync.request>) {
    try {
        const response: HttpResponse & { data: { entities: Novel[], created: number } } = yield call(() => axios.post(`novel`, { ...action.payload.novel }));
        if(!response.success) throw new Error(response.message);
        yield put(addNovelAsync.success(response.data.entities[0]));
    } catch (error) {
        yield put(addNovelAsync.failure(error));
    }
}

// curl -d "{\"id\":\"5e3a9add96c1616508bd7ff1\",\"title\":\"This is a new novel\",\"description\":\"This is a novel posted from curl PRT\"}" -H "Content-Type: application/json" -X PUT https://localhost:5001/api/novel?id=5e3a9add96c1616508bd7ff1 | json
function* updateNovelSaga (action: ReturnType<typeof updateNovelAsync.request>) {
    try {
        const response: HttpResponse & { data: { entities: Novel[], modified: number } } = yield call(() => axios.put(`novel`, { ...action.payload.novel }));
        if(!response.success) throw new Error(response.message);
        yield put(updateNovelAsync.success(response.data.entities[0]));
    } catch (error) {
        yield put(updateNovelAsync.failure(error));
    }
}

// curl -X DELETE "https://localhost:5001/api/novel/5e3a9add96c1616508bd7ff1" | json
function* deleteNovelSaga (action: ReturnType<typeof deleteNovelAsync.request>) {
    try {
        const response: HttpResponse & { data: { entities: Novel[], modified: number } } = yield call(() => axios.delete(`novel/${action.payload.id}`));
        if(!response.success) throw new Error(response.message);
        yield put(deleteNovelAsync.success(response.data.entities[0]));
    } catch (error) {
        yield put(deleteNovelAsync.failure(error));
    }
}

const novelsSaga = [
    takeLatest(fetchNovelAsync.request, fetchNovelSaga),
    takeLatest(fetchNovelPaginatedAsync.request, fetchNovelsPaginatedSaga),
    takeLatest(searchNovelAsync.request, searchNovelsSaga),
    takeLatest(addNovelAsync.request, addNovelSaga),
    takeLatest(updateNovelAsync.request, updateNovelSaga),
    takeLatest(deleteNovelAsync.request, deleteNovelSaga)
];

export default novelsSaga; 