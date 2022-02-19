
export interface Books {
    _id: number;
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: Object;
    thumbnailUrl: string;
    shortDescription?:string;
    longDescription?: string;
    rating: number;
    authors: Array<string>;
    category: string
}
