// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
//
// @Injectable({
//     providedIn: 'root'
// })
// export class FirebaseService {
//
//     constructor(
//         private firestore: AngularFirestore,
//         private fireAuth: AngularFireAuth
//     ) { }
//
//     getInfo() {
//         return this.firestore.collection('info').snapshotChanges();
//     }
//
//     public getApi() {
//         return this.firestore.collection('api').snapshotChanges();
//     }
//
//     getNotification() {
//         return this.firestore.collection('notification', ref =>
//             ref.where('active', '==', true)
//                .where('deleted', '==', false)
//                .orderBy('datetime', 'desc')
//         ).valueChanges();
//     }
//
//     getComments(notification): Observable<any> {
//         console.log('notification :', notification);
//         return this.firestore.collection<any>('notification')
//                    .doc(notification.notificationId).valueChanges();
//     }
//
//     like(notification) {
//         const ref = this.firestore.collection('notification').doc(notification.notificationId);
//         ref.get().subscribe(data => {
//             const docData = data.data();
//             let likedByList: string[] = docData.likedBy;
//             if (!likedByList.includes(this.fireAuth.auth.currentUser.email)) {
//                 console.log('user not liked, push and add 1');
//                 likedByList.push(this.fireAuth.auth.currentUser.email);
//                 console.log('likedByList', likedByList);
//                 ref.update({ 'like': docData.like + 1 });
//                 ref.set({ 'likedBy': likedByList }, { merge: true });
//             } else {
//                 console.log('remove email, minus 1');
//                 likedByList.splice(likedByList.indexOf(this.fireAuth.auth.currentUser.email), 1);
//                 ref.update({ 'like': docData.like - 1 });
//                 ref.set({ 'likedBy': likedByList }, { merge: true });
//             }
//         });
//     }
//
//     dislike(notification) {
//         const ref = this.firestore.collection('notification').doc(notification.notificationId);
//         ref.get().subscribe(data => {
//             const docData = data.data();
//             if (!docData.likedBy.includes('lan.psis@gmail.com')) {
//                 ref.update({ 'dislike': data.data().dislike + 1 });
//             }
//         });
//     }
//
//     public sendComment(comment: any, notification: any): AngularFirestoreDocument<any> {
//         const ref = this.firestore.collection('notification').doc(notification.notificationId);
//         ref.get().subscribe(data => {
//             const docData = data.data();
//             let commentList: any[] = docData.comments;
//             console.log('commentList', commentList);
//             commentList.push({
//                 avatarURL: this.fireAuth.auth.currentUser.photoURL,
//                 comment: comment,
//                 username: this.fireAuth.auth.currentUser.displayName,
//                 createdDate: new Date(),
//                 email: this.fireAuth.auth.currentUser.email
//             });
//             ref.set({ 'comments': commentList }, { merge: true });
//
//         });
//         return ref;
//
//     }
// }
