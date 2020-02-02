import INovel from "../models/entities/Novel";
import { NovelActionTypes } from "./actionTypes";

interface INovelInitialState {
    novels: {
        [key: string]: {
            novel: INovel,
            current: boolean,
            search: boolean
        }
    };
}

const initialState: INovelInitialState = { novels: {} };

const NovelReducer = (state = initialState, action: NovelActionTypes): INovelInitialState => {
    const newState = { ...state };

    switch(action.type) {
        case "ADD_NOVEL":
            break;
        case "DELETE_NOVEL":
            break;
        case "FETCH_NOVEL":
            break;
        case "FETCH_NOVELS":
            break;
        case "FETCH_NOVELS_FILTERED":
            break;
        case "SEARCH_NOVEL":
            action.payload.forEach(novel => {
                const existingNovel = newState.novels[novel.handle];
                
                if(existingNovel) {
                    existingNovel.search = true;
                } else {
                    newState.novels[novel.handle] = { 
                        novel, current: false, search: true 
                    };
                }
            });
            break;
        case "UPDATE_NOVEL":
            break;
        default:
            break;
    }

    return newState;
}

export default NovelReducer;