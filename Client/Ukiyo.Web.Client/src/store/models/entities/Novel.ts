import ITag from "./Tag";
import IGenre from "./Genre";
import IOrigin from "./Origin";
import IAuthor from "./Author";
import IArtist from "./Artist";

export default interface INovel {
    title: string;
    handle: string;
    description: string;
    tags: ITag[];
    genres: IGenre[];
    origins: IOrigin[];
    authors: IAuthor[];
    artists: IArtist[];
    relatedNovels: string[];
    associatedNames: string[];
    mediaGallery: string[];
    coverImage: string[];
    lastModified: Date;
}

export interface INovelFilter {
    name: string;
}