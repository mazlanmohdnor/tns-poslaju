// import { Injectable } from '@angular/core';
// import { Resolve } from '@angular/router';
// import { LANG_LIST } from "~/app/constants/language.constant";
// import { THEME_LIST } from "~/app/constants/theme.constant";
// import { SubjectService } from "~/app/shared/services/subject/subject.service";
// import { ThemeSwitcherService } from "~/app/shared/services/theme/theme-switcher.service";
//
//
// @Injectable({
//     providedIn: 'root'
// })
// export class AppResolverService implements Resolve<any> {
//     constructor(
//         // private storage: NativeStorage,
//         private themeSwitcherService: ThemeSwitcherService,
//         private subject: SubjectService,
//         // private langService: LangService
//     ) { }
//
//     public resolve(): any {
//         this.storage.keys().then(keys => {
//             console.log('keys :', keys);
//             if (keys.includes('theme')) {
//                 console.log('theme set');
//                 this.storage.getItem('theme').then(theme => {
//                     console.log('theme storage:', theme);
//                     this.themeSwitcherService.setTheme(theme.id);
//                 });
//             } else {
//                 console.log('theme not set, set default value');
//                 this.themeSwitcherService.setTheme(THEME_LIST[1].id);
//             }
//
//             if (keys.includes('lang')) {
//                 this.storage.getItem('lang').then(lang => {
//                     this.subject.broadcastLang(lang);
//                 });
//             } else {
//                 this.langService.setLang(LANG_LIST[1])
//             }
//         });
//
//     }
// }
