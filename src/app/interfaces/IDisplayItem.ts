import { PosType } from "~/app/type/pos.type";

export interface IDisplayItem {
    title: string;
    trackingNum: string;
    icon: string;
    isView?: boolean;
    registrationId?: string;
    type: PosType
}
