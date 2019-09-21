import { Injectable } from "@angular/core";
import { THEME_LIST, THEME_SELECTION } from "~/app/constants/theme.constant";
import { IThemeVar } from "~/app/interfaces/ITheme";

@Injectable({
    providedIn: "root"
})
export class ThemeSwitcherService {
    
    themes: IThemeVar[] = THEME_SELECTION.DEFAULT;
    currentTheme: number = 0;
    
    constructor(
        // private domCtrl: DomController,
        // private statusBar: StatusBar,
        // private header: HeaderColor,
        // private storage: NativeStorage
    ) {}
    
    cycleTheme() {
        if (this.themes.length > this.currentTheme + 1) {
            this.currentTheme++;
        } else {
            this.currentTheme = 0;
        }
        
        this.setTheme(this.themes[this.currentTheme].name);
    }
    
    setTheme(selectedThemeValue: string): void {
        console.log("selectedThemeValue :", selectedThemeValue);
        const selectedTheme = THEME_LIST.find(theme2 => {
            return theme2.value === selectedThemeValue;
        });
        
        // this.storage.setItem('theme', selectedTheme).then(res => {
        //     console.log('theme set with value: :', res);
        // });
        
        const theme = this.themes.find(theme2 => {
            return theme2.name === selectedTheme.value;
        });
        
        const hex: string = THEME_LIST.find(x => x.value === theme.name).hex;
        // this.statusBar.backgroundColorByHexString(hex);
        // this.header.tint(hex);
        //
        // this.domCtrl.write(() => {
        //     theme.styles.forEach(style => {
        //         document.documentElement.style.setProperty(style.themeVariable, style.value);
        //     });
        // });
        
    }
    
}
