import { PostPostResponse } from "~/app/interfaces/ILatestInfo";
import { PosType } from "~/app/type/pos.type";

export interface ITracking {
    trackingNum: string;
    latestStatus?: string;
    code?: number;
    data?: any | PostPostResponse[];
    icon: string;
    title: string;
    registrationId?: string;
    type: PosType;
}
