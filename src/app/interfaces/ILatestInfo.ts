import { PosType } from "~/app/type/pos.type";

export interface ILatestInfo {
    trackNum: string;
    lastItem: any;
    lastLoc: any;
    title?: any;
    dataPos: PostPostResponse[];
    lastDate: any;
    type: PosType
}

export interface PostPostResponse {
    date: string,
    status: string,
    location: string
}
