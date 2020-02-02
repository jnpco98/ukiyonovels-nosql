import { INovelFilter } from "./Novel";

export default interface IArtist extends INovelFilter {
    alterateNames: string[];
}
