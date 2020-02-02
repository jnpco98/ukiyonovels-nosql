import INovel from "../models/entities/Novel";

export interface IFetchNovels {
    readonly type: "FETCH_NOVELS";
    readonly payload: INovel[];
}

export interface IFetchNovel {
    readonly type: "FETCH_NOVEL";
    readonly id: string;
    readonly payload: INovel;
}

export interface IFetchNovelByFilter {
    readonly type: "FETCH_NOVELS_FILTERED";
    readonly payload: INovel[];
}

export interface INovelSearch {
    readonly type: "SEARCH_NOVEL";
    readonly payload: INovel[];
}

export interface IAddNovel {
    readonly type: "ADD_NOVEL";
    readonly payload: INovel;
}

export interface IUpdateNovel {
    readonly type: "UPDATE_NOVEL";
    readonly payload: INovel;
    readonly id: string;
}

export interface IDeleteNovel {
    readonly type: "DELETE_NOVEL";
    readonly payload: INovel;
    readonly id: string;
}

export type NovelActionTypes = 
    | IFetchNovel 
    | IFetchNovels
    | IFetchNovelByFilter 
    | INovelSearch 
    | IAddNovel 
    | IUpdateNovel 
    | IDeleteNovel;