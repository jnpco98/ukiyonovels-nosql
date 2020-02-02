import { INovelFilter } from "./Novel";

export default interface IAuthor extends INovelFilter {
    alterateNames: string[];
}
