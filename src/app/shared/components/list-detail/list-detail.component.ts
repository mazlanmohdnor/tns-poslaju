// import { Component, Input, OnInit } from "@angular/core";
// import { Observable } from "rxjs";
// import { ILatestInfo, PostPostResponse } from "~/app/interfaces/ILatestInfo";
// import { PosType } from "~/app/constants/pos.type";
//
// @Component({
//     selector: "app-list-detail",
//     templateUrl: "./list-detail.component.html",
//     styleUrls: ["./list-detail.component.scss"]
// })
// export class ListDetailComponent implements OnInit {
//     @Input("trackingNo") trackingNo: string;
//     @Input("type") type: PosType;
//     @Input("refresh") refresh: boolean = false;
//     isLoading: boolean = true;
//     timeout: boolean = false;
//     dataObj: ILatestInfo;
//     isNull: boolean = false;
//
//     constructor(
//         // private posService
//     ) {
//     }
//
//     ngOnInit() {
//     }
//
//     ngOnChanges() {
//         console.log("refresh :", this.refresh);
//         this.getLatestInfo();
//     }
//
//     getLatestInfo(): any {
//
//         this.getNativeDetail();
//     }
//
//     getBrowserDetail() {
//         this.posService.getDetailBrowser(this.trackingNo, this.type)
//             .then((result: Observable<PostPostResponse>) => {
//                 console.log("result getLatestInfo ListDetailComponent:", result);
//                 if (result) {
//                     result.subscribe(result => {
//                         console.log("result subscribe", result);
//                         this.getLatestInfoProcess(result);
//                     });
//                 }
//             });
//     }
//
//     getNativeDetail() {
//         this.posService.getDetail(this.trackingNo, this.type)
//             .then(result => {
//                 console.log("result getLatestInfo ListDetailComponent:", result);
//                 if (result) {
//                     this.getLatestInfoProcess(JSON.parse(result.data));
//                 }
//             });
//     }
//
//     getLatestInfoProcess(result) {
//         console.log("result list detail :", result);
//         if (result !== null) {
//             this.isLoading = false;
//             this.timeout = false;
//             this.isNull = false;
//
//             this.dataObj = {
//                 trackNum: this.trackingNo,
//                 dataPos: result,
//                 lastItem: result[0].status,
//                 lastDate: result[0].date,
//                 lastLoc: result[0].location,
//                 type: this.type
//             };
//
//         } else {
//             this.isLoading = false;
//             this.timeout = false;
//             this.isNull = true;
//             this.dataObj = undefined;
//         }
//     }
// }
