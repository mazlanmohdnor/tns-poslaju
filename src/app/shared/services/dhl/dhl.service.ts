// import { FirebaseService } from '@services/firebase/firebase.service';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class DhlService {
//
//   constructor(
//     private storage: NativeStorage,
//     private fireService: FirebaseService,
//     private http: HTTP
//   ) { }
//
//   getDetail(trackingNum: string) {
//     return new Promise(resolve => {
//       this.storage.getItem('api').then(api => {
//         console.log('api resolve, fetching tracking detail', api);
//         if (api) {
//           if (!api.dhl) {
//             this.fireService.getApi().subscribe(data => {
//               data.map(e => {
//                 const apiDhl: any = e.payload.doc.data();
//                 this.storage.setItem('api', JSON.parse(apiDhl.url)).then(api2 => {
//                   console.log('Api set!', api2);
//                   this.extracted(api2, trackingNum, resolve);
//                 });
//               });
//             });
//           } else {
//             this.extracted(api, trackingNum, resolve);
//           }
//         }
//       });
//     });
//   }
//
//   extracted(api: any, trackingNum, resolve) {
//     const url = api.dhl + trackingNum + '&language=en&requesterCountryCode=MY';
//     this.http.get(url, {}, {})
//       .then(result => {
//         console.log('res :', result);
//         const res = JSON.parse(result.data);
//         if (res.shipments) {
//           const resData = res.shipments.find(el => el.id === trackingNum);
//           console.log('resData :', resData);
//           if (resData === 1) {
//             const finalData = resData.events.map(el2 => {
//               console.log('el2 :', el2);
//               return {
//                 date: el2.timestamp,
//                 status: el2.status ? `${el2.status} ${el2.description || ''}` : el2.description,
//                 location: el2.location.address.addressLocality
//               };
//             });
//             console.log('res native', finalData);
//             resolve({ data: JSON.stringify(finalData) });
//           } else if (resData > 1) {
//             console.log('many result result');
//             resolve({ data: resData });
//           } else {
//             resolve({ data: null });
//           }
//         } else {
//           resolve({ data: null });
//         }
//       }).catch(error => {
//         console.log('error.error', error.error);
//         resolve({ data: JSON.stringify(error.error) });
//       });
//   }
// }
