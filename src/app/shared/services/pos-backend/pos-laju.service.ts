import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PosType } from "~/app/constants/pos.type";
import { ApiObject } from "~/app/interfaces/api-object.interface";

@Injectable({
    providedIn: "root"
})
export class PosLajuService {
    
    constructor(
        private httpClient: HttpClient
        // private http: H TTP,
        // private storage: NativeStorage,
        // private localStorage: Storage,
        // private platform: Platform,
        // private fireService: FirebaseService
    ) { }
    
    private static chooseApi(type: PosType, api: ApiObject, trackingNum) {
        let url: string;
        if (type === "poslaju") {
            url = api.poslaju + trackingNum;
        } else if (type === "gdex") {
            url = api.gdex + trackingNum;
        } else if (type === "jnt") {
            url = api.jnt + trackingNum;
        } else if (type === "skynet") {
            url = api.skynet + trackingNum;
        } else if (type === "citylink") {
            url = api.citylink + trackingNum;
        } else if (type === "lex") {
            url = api.lex + trackingNum;
        } else if (type === "ninjavan") {
            url = api.ninjavan + trackingNum;
        } else if (type === "abx") {
            url = api.abx + trackingNum;
        } else if (type === "dhl") {
            url = api.dhl + trackingNum + "&language=en&requesterCountryCode=MY";
        } else if (type === "cj") {
            url = api.cj + trackingNum;
        } else {
            console.log("No type found, consider it comes from previous version which always poslaju");
            url = api.poslaju + trackingNum;
        }
        console.log("url :", url);
        return url;
    }
    
    getDetail(trackingNum, type: PosType = "poslaju") {
        // return new Promise(resolve => {
        //     this.storage.getItem("api").then(api => {
        //         console.log("api resolve, fetching tracking detail", api);
        //         if (api) {
        // if (type === 'dhl') {
        //     if (!api.dhl) {
        //         this.fireService.getApi().subscribe(data => {
        //             data.map(e => {
        //                 const apiDhl: any = e.payload.doc.data();
        //                 this.storage.setItem('api', JSON.parse(apiDhl.url)).then(api2 => {
        //                     console.log('Api set!', api2);
        //                     this.extracted(type, api2, trackingNum, resolve);
        //                 });
        //             });
        //         });
        //     } else {
        //         this.extracted(type, api, trackingNum, resolve);
        //     }
        // } else if (type === 'abx') {
        //     if (!api.abx) {
        //         this.fireService.getApi().subscribe(data => {
        //             data.map(e => {
        //                 const apiAbx: any = e.payload.doc.data();
        //                 this.storage.setItem('api', JSON.parse(apiAbx.url)).then(api3 => {
        //                     console.log('Api set!', api3);
        //                     resolve(this.http.get(PosLajuService.chooseApi(type, api3, trackingNum), {}, {}));
        //                 });
        //             });
        //         });
        //     } else {
        //         resolve(this.http.get(PosLajuService.chooseApi(type, api, trackingNum), {}, {}));
        //     }
        // } else if (type === 'cj') {
        //     if (!api.cj) {
        //         this.fireService.getApi().subscribe(data => {
        //             data.map(e => {
        //                 const apiAbx: any = e.payload.doc.data();
        //                 this.storage.setItem('api', JSON.parse(apiAbx.url)).then(api4 => {
        //                     console.log('Api set!', api4);
        //                     resolve(this.http.get(PosLajuService.chooseApi(type, api4, trackingNum), {}, {}));
        //                 });
        //             });
        //         });
        //     } else {
        //         resolve(this.http.get(PosLajuService.chooseApi(type, api, trackingNum), {}, {}));
        //     }
        // } else {
        // resolve(this.http.get(PosLajuService.chooseApi(type, api, trackingNum), {}, {}));
        // }
        //         }
        //     });
        // });
    }
    
    getDetailBrowser(trackingNum: string, type: PosType = "cj"): Observable<any> {
        let a = {
            poslaju: "http://postpost.wittydata.com/api/poslaju/",
            gdex: "http://postpost.wittydata.com/api/gdex/",
            jnt: "http://postpost.wittydata.com/api/jnt/",
            skynet: "http://postpost.wittydata.com/api/skynet/",
            citylink: "http://postpost.wittydata.com/api/citylink/",
            lex: "http://postpost.wittydata.com/api/lex/",
            ninjavan: "http://postpost.wittydata.com/api/ninjavan/",
            abx: "http://postpost.wittydata.com/api/abx/",
            dhl: "https://www.logistics.dhl/utapi?trackingNumber=",
            // cj: "http://cj-api.herokuapp.com/cj/"
            cj: "/api/"
        };
        const url = PosLajuService.chooseApi(type, a, trackingNum);
        console.log("url :", url);
        return this.httpClient.get<any>(url);
        
    }
    
    // extracted(type: PosType, api: any, trackingNum, resolve) {
    //     this.http.get(PosLajuService.chooseApi(type, api, trackingNum), {}, {})
    //         .then(result => {
    //             console.log("res :", result);
    //             const res = JSON.parse(result.data);
    //             if (res.shipments) {
    //                 const resData = res.shipments.find(el => el.id === trackingNum);
    //                 console.log("resData :", resData);
    //                 if (resData) {
    //                     const finalData = resData.events.map(el2 => {
    //                         console.log("el2 :", el2);
    //                         return {
    //                             date: el2.timestamp,
    //                             status: el2.status ? `${ el2.status } ${ el2.description || "" }` : el2.description,
    //                             location: el2.location.address.addressLocality
    //                         };
    //                     });
    //                     console.log("res native", finalData);
    //                     resolve({ data: JSON.stringify(finalData) });
    //                 } else {
    //                     console.log("no result");
    //                     resolve({ data: null });
    //                 }
    //             } else {
    //                 resolve({ data: null });
    //             }
    //         }).catch(error => {
    //         console.log("error.error", error.error);
    //         resolve({ data: JSON.stringify(error.error) });
    //     });
    // }
    
}
