import { PosType } from "~/app/constants/pos.type";
import { PostPostResponse } from "~/app/interfaces/ILatestInfo";

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
