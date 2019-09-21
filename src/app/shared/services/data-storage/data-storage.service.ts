// import { Injectable } from '@angular/core';
// import { ITracking } from '@interfaces/ITracking';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { SubjectService } from '@services/subject/subject.service';
// import { from, Observable } from 'rxjs';
//
// @Injectable({
//     providedIn: 'root'
// })
// export class DataStorageService {
//     constructor(
//         private storage: NativeStorage,
//         private subject: SubjectService
//     ) { }
//
//     save(dataObj: ITracking): Promise<any> {
//         return new Promise((resolve) => {
//             console.log('Data to be saved:', dataObj);
//             let dataArr: ITracking[] = [];
//
//             this.storage.keys().then(keys => {
//                 console.log('keys :', keys);
//                 if (!keys.includes('tracking')) {
//                     console.log('no tracking key, adding..');
//                     dataArr = [];
//                     dataArr.unshift(dataObj);
//                     this.storage.setItem('tracking', dataArr).then((savedData) => {
//                         resolve(savedData);
//                         this.subject.broadcastData(savedData);
//                     });
//                 } else {
//                     console.log('key exist, proceed normal');
//                     this.storage.getItem('tracking').then((data) => {
//                         console.log('Stored data', data);
//                         if (data == null) { // if there is no data at all
//                             console.log('No data, adding', dataObj);
//                             dataArr = [dataObj];
//                             this.storage.setItem('tracking', dataArr).then((savedData) => {
//                                 resolve(savedData);
//                                 this.subject.broadcastData(savedData);
//                             });
//                         } else {
//                             console.log('Has data, pushing', dataObj);
//                             dataArr = data;
//                             dataArr.unshift(dataObj);
//                             this.storage.setItem('tracking', dataArr).then((savedData) => {
//                                 resolve(savedData);
//                                 this.subject.broadcastData(savedData);
//                             });
//                         }
//                     });
//                 }
//             });
//
//
//         });
//     }
//
//     delete(trackingNum): Promise<any> {
//         console.log('trackingNum to be deleted:', trackingNum);
//         return new Promise((resolve) => {
//             this.storage.getItem('tracking').then(data => {
//                 console.log('list all data before delete:', data);
//                 const dataArr = data;
//                 const index = dataArr.map(x => x.trackingNum).indexOf(trackingNum);
//                 console.log('deleting data index:', index);
//                 dataArr.splice(index, 1);
//                 console.log('dataArr :', dataArr);
//                 if (dataArr.length === 0) {
//                     console.log('dataArr length:', dataArr.length);
//                     this.storage.setItem('tracking', []).then((savedData) => {
//                         console.log('after remove respond:', savedData);
//                         resolve(savedData);
//                         this.subject.broadcastData(savedData);
//                     });
//                 } else {
//                     this.storage.setItem('tracking', dataArr).then((savedData) => {
//                         resolve(savedData);
//                         this.subject.broadcastData(savedData);
//                     });
//                 }
//             }).catch(err => {
//                 console.log('error delete:', err);
//             });
//         });
//     }
//
//     clearAll() {
//         // just remove tracking list
//         this.storage.remove('tracking');
//         this.subject.setData([]);
//     }
//
//     getAll(): Observable<ITracking[]> {
//         return from(this.storage.getItem('tracking'));
//     }
//
//     getAllWithToken(): Promise<string | never> {
//         return this.storage.getItem('tracking').then(data => {
//             return this.storage.getItem('registrationId').then(registrationId => {
//                 return JSON.stringify({
//                     tokenId: registrationId,
//                     trackingDataList: data
//                 });
//             });
//         });
//     }
//
//     saveAll(dataList: ITracking[]): Promise<any | never> {
//         return this.storage.remove('tracking').then(() => {
//             this.storage.setItem('tracking', dataList).then(savedData => {
//                 this.subject.broadcastData(savedData);
//             });
//         });
//     }
//
//     findByTrackingNo(trackingNo) {
//         return this.storage.getItem('tracking').then(data => data.trackingNum === trackingNo);
//     }
//
//     findByTrackingNoOrTitle(args: string) {
//         return this.storage.getItem('tracking').then(result => {
//             if (result) {
//                 return result.filter(item => {
//                     return item.title.toLowerCase().includes(args.toLowerCase()) ||
//                         item.trackingNum.toLowerCase().includes(args.toLowerCase());
//                 });
//             }
//         });
//     }
//
// }
