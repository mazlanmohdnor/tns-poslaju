// import { Injectable } from '@angular/core';
//
//
// @Injectable({
//     providedIn: 'root'
// })
// export class AuthService {
//
//     constructor(
//         private google: GooglePlus,
//         private fireAuth: AngularFireAuth,
//     ) { }
//
//
//     async checkAuth(): Promise<firebase.Unsubscribe> {
//         return this.fireAuth.auth.onAuthStateChanged((user) => {
//             return !!user;
//         });
//
//         // let a = await this.fireAuth.auth.currentUser;
//         // setTimeout(()=>{
//         //     console.log('this.fireAuth.auth.currentUser :', this.fireAuth.auth.currentUser);
//         // },3000)
//         // console.log('a',a);
//         // return !!a;
//     }
//
//     authenticate(): Promise<firebase.auth.UserCredential> {
//         if (this.platform.is('cordova')) {
//             return this.nativeGoogleLogin();
//         } else {
//             return this.webGoogleLogin();
//         }
//     }
//
//     async nativeGoogleLogin(): Promise<any | firebase.auth.UserCredential> {
//         try {
//             let res = await this.google.login({
//                 'webClientId': '447792138736-rn0o3u7cdbtd22jl9s0oj0qmuejc81pk.apps.googleusercontent.com',
//                 'offline': true
//             });
//             const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
//             return await firebase.auth().signInWithCredential(googleCredential);
//         } catch (err1) {
//             return err1;
//         }
//     }
//
//     async promptAuth(): Promise<firebase.auth.UserCredential> {
//         return new Promise(async resolve => {
//             const [alert] = await Promise.all([this.alertController.create({
//                 header: 'Sign In Required',
//                 message: 'Sign in with your google account',
//                 backdropDismiss: true,
//                 buttons: [
//                     {
//                         text: 'Okay',
//                         handler: () => {
//                             console.log('Confirm Okay');
//                             resolve(this.authenticate());
//                         }
//                     }
//                 ]
//             })]);
//
//             await alert.present();
//         });
//
//     }
//
//     private async webGoogleLogin(): Promise<firebase.auth.UserCredential> {
//         try {
//             const provider = new firebase.auth.GoogleAuthProvider();
//             const credential = await this.fireAuth.auth.signInWithPopup(provider);
//             console.log('credential :', credential);
//             return credential;
//         } catch (e) {
//             console.log('e', e);
//         }
//     }
// }
