// import { Injectable } from '@angular/core';
// import { ILanguage } from '@interfaces/ILanguage';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { TranslateService } from '@ngx-translate/core';
// import { SubjectService } from '@services/subject/subject.service';
//
// @Injectable({
//     providedIn: 'root'
// })
// export class LangService {
//
//     constructor(
//         private storage: NativeStorage,
//         private subject: SubjectService,
//         public translate: TranslateService
//     ) { }
//
//     setLang(lang: ILanguage): void {
//         this.storage.setItem('lang', lang);
//         this.subject.broadcastLang(lang);
//     }
//
//     getLang(): Promise<any> {
//         return this.storage.getItem('lang');
//     }
//
//     getLanguage(str: string, arg?: string): string {
//         let lang: string = '';
//         if (!arg) {
//             this.translate.get(str).subscribe(value => { lang = value; });
//         }
//         else {
//             this.translate.get(str, { value: arg }).subscribe(value => { lang = value; });
//         }
//         return lang;
//     }
// }
