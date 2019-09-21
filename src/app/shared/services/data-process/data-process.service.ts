import { Injectable } from "@angular/core";
import { IDisplayItem } from "~/app/interfaces/IDisplayItem";
import { PostPostResponse } from "~/app/interfaces/ILatestInfo";
import { ITracking } from "~/app/interfaces/ITracking";
import { DataStorageService } from "~/app/shared/services/data-storage/data-storage.service";
import { PosLajuService } from "~/app/shared/services/pos-backend/pos-laju.service";

@Injectable({
    providedIn: "root"
})
export class DataProcessService {
    
    constructor(
        private dataProvider: DataStorageService,
        private pos: PosLajuService
    ) { }
    
    async getBrowserDetail(scanData: IDisplayItem) {
        const result = await this.pos.getDetailBrowser(scanData.trackingNum, scanData.type);
        console.log("DataProcessService: result :", result);
        if (!result) {
            return;
        }
        return new Promise(resolve => {
            result.subscribe((posResponse: PostPostResponse) => {
                console.log("posResponse :", posResponse);
                if (posResponse !== null) {
                    const dataObj: ITracking = {
                        title: scanData.title ? scanData.title : scanData.trackingNum,
                        trackingNum: scanData.trackingNum,
                        data: posResponse,
                        code: 200,
                        icon: scanData.icon ? scanData.icon : "basket",
                        registrationId: scanData.registrationId,
                        type: scanData.type
                    };
                    
                    // the boolean become string
                    if (!this.checkBoolean(scanData.isView)) {
                        console.log("saving");
                        this.dataProvider.save(dataObj);
                        resolve(dataObj);
                    }
                    console.log("just view");
                    resolve(dataObj);
                }
            });
        });
        
    }
    
    async getNativeDetail(scanData: IDisplayItem): Promise<ITracking | any> {
        const posResponse = await this.pos.getDetail(scanData.trackingNum, scanData.type);
        console.log("posResponse getNativeDetail:", posResponse);
        const response = JSON.parse(posResponse.data);
        console.log("response :", response);
        if (!Array.isArray(response) && scanData.type !== "dhl") {
            console.log("data null, ignore. redirect back to main");
        } else if (scanData.type === "dhl" && response && response.status === 400 || response && response.status === 404
            || response && response.status === 500) {
            // use for dhl, when there is no result or invalid input
            console.log("error message scanData.type dhl:", response);
            return response;
        } else {
            const dataObj: ITracking = {
                title: scanData.title ? scanData.title : scanData.trackingNum,
                trackingNum: scanData.trackingNum,
                data: JSON.parse(posResponse.data),
                code: 200,
                icon: scanData.icon ? scanData.icon : "basket",
                registrationId: scanData.registrationId,
                type: scanData.type
            };
            
            // the boolean become string
            if (!this.checkBoolean(scanData.isView)) {
                console.log("saving");
                this.dataProvider.save(dataObj);
                return dataObj;
            }
            console.log("just view");
            return dataObj;
        }
    }
    
    checkBoolean(isView: any) {
        return isView === 'true';
    }
    
}
