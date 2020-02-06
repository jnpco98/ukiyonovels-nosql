export interface BaseQuery {
    page?: number;
    count?: number;
}

export default interface Entity {
    id: string;
    createdAt: Date;
    lastModified: Date;
}