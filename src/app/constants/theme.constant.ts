import { ITheme, IThemeStyle, IThemeVar } from "~/app/interfaces/ITheme";

export const THEME_LIST: ITheme[] = [
    {
        id: "default",
        description: "SETTING_PAGE.THEME.RED",
        value: "default",
        hex: "#F6515F"
    },
    {
        id: "blue",
        description: "SETTING_PAGE.THEME.BLUE",
        value: "blue",
        hex: "#3E6FD5"
    },
    {
        id: "dark",
        description: "SETTING_PAGE.THEME.DARK",
        value: "dark",
        hex: "#222428"
    }
];

export class THEME_VAR_LIST {
    public static RED: IThemeStyle[] = [
        { themeVariable: "--ion-color-primary", value: "#F6515F" },
        { themeVariable: "--ion-color-primary-shadow", value: "0px 0.75rem 24px rgba(254, 99, 106, 0.5)" },
        { themeVariable: "--ion-color-primary-rgb", value: "56, 128, 255" },
        { themeVariable: "--ion-color-primary-contrast", value: "#fbfaff" },
        { themeVariable: "--ion-color-primary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-primary-shade", value: "#e14c58" },
        { themeVariable: "--ion-color-primary-tint", value: "#d04551" },
        
        { themeVariable: "--ion-color-secondary", value: "#20c67b" },
        { themeVariable: "--ion-color-secondary-rgb", value: "112, 68, 255" },
        { themeVariable: "--ion-color-secondary-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-secondary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-secondary-shade", value: "#1fb46c" },
        { themeVariable: "--ion-color-secondary-tint", value: "#1db16f" },
        { themeVariable: "--ion-color-secondary-shadow", value: "0px 0.75rem 24px rgba(29,177,111, 0.5)" },
        
        { themeVariable: "--ion-color-tertiary", value: "#0cd1e8" }
        , { themeVariable: "--ion-color-tertiary-rgb", value: "12, 209, 232" },
        { themeVariable: "--ion-color-tertiary-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-tertiary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-tertiary-shade", value: "#0bb8cc" },
        { themeVariable: "--ion-color-tertiary-tint", value: "#24d6ea" },
        { themeVariable: "--ion-color-tertiary-shadow", value: "0px 0.75rem 24px rgba(12,209,232, 0.5)" },
        
        { themeVariable: "--ion-color-success", value: "#10dc60" },
        { themeVariable: "--ion-color-success-rgb", value: "16, 220, 96" },
        { themeVariable: "--ion-color-success-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-success-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-success-shade", value: "#0ec254" },
        { themeVariable: "--ion-color-success-tint", value: "#28e070" },
        
        { themeVariable: "--ion-color-warning", value: "#ffce00" },
        { themeVariable: "--ion-color-warning-rgb", value: "255, 206, 0" },
        { themeVariable: "--ion-color-warning-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-warning-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-warning-shade", value: "#e0b500" },
        { themeVariable: "--ion-color-warning-tint", value: "#ffd31a" },
        
        { themeVariable: "--ion-color-danger", value: "#f04141" },
        { themeVariable: "--ion-color-danger-rgb", value: "245, 61, 61" },
        { themeVariable: "--ion-color-danger-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-danger-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-danger-shade", value: "#d33939" },
        { themeVariable: "--ion-color-danger-tint", value: "#f25454" },
        
        { themeVariable: "--ion-color-dark", value: "#222428" },
        { themeVariable: "--ion-color-dark-rgb", value: "34, 34, 34" },
        { themeVariable: "--ion-color-dark-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-dark-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-dark-shade", value: "#1e2023" },
        { themeVariable: "--ion-color-dark-tint", value: "#383a3e" },
        
        { themeVariable: "--ion-color-medium", value: "#989aa2" },
        { themeVariable: "--ion-color-medium-rgb", value: "152, 154, 162" },
        { themeVariable: "--ion-color-medium-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-medium-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-medium-shade", value: "#86888f" },
        { themeVariable: "--ion-color-medium-tint", value: "#a2a4ab" },
        
        { themeVariable: "--ion-color-light", value: "#f4f5f8" },
        { themeVariable: "--ion-color-light-rgb", value: "244, 244, 244" },
        { themeVariable: "--ion-color-light-contrast", value: "#000000" },
        { themeVariable: "--ion-color-light-contrast-rgb", value: "0, 0, 0" },
        { themeVariable: "--ion-color-light-shade", value: "#d7d8da" },
        { themeVariable: "--ion-color-light-tint", value: "#f5f6f9" },
        
        { themeVariable: "--font-color", value: "#444" },
        { themeVariable: "--black-font-secondary", value: "rgba(68, 68, 68, 0.64)" },
        { themeVariable: "--shadow-normal", value: "0 4px 16px rgba(0, 0, 0, .12)" },
        { themeVariable: "--ion-bgcolor", value: "#fbfaff" },
        { themeVariable: "--ion-card-bgcolor", value: "#fff" },
        { themeVariable: "--fab-button-color", value: "#F6515F" },
        { themeVariable: "--tracking-header", value: "#F6515F" },
        { themeVariable: "--font-button-color", value: "#fff" }
    
    ];
    public static BLUE: IThemeStyle[] = [
        { themeVariable: "--ion-color-primary", value: "#3E6FD5" },
        { themeVariable: "--ion-color-primary-shadow", value: "0px 0.75rem 24px rgba(62, 111, 213, 0.5)" },
        { themeVariable: "--ion-color-primary-rgb", value: "56, 128, 255" },
        { themeVariable: "--ion-color-primary-contrast", value: "#fbfaff" },
        { themeVariable: "--ion-color-primary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-primary-shade", value: "#13a7ff" },
        { themeVariable: "--ion-color-primary-tint", value: "#3354a8" },
        
        { themeVariable: "--ion-color-secondary", value: "#63D217" },
        { themeVariable: "--ion-color-secondary-rgb", value: "112, 68, 255" },
        { themeVariable: "--ion-color-secondary-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-secondary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-secondary-shade", value: "#65e517" },
        { themeVariable: "--ion-color-secondary-tint", value: "#59b116" },
        { themeVariable: "--ion-color-tertiary-shadow", value: "0px 0.75rem 24px rgba(99,210,23, 0.5)" },
        
        { themeVariable: "--ion-color-tertiary", value: "#FE306E" }
        , { themeVariable: "--ion-color-tertiary-rgb", value: "12, 209, 232" },
        { themeVariable: "--ion-color-tertiary-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-tertiary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-tertiary-shade", value: "#fe2f79" },
        { themeVariable: "--ion-color-tertiary-tint", value: "#c12559" },
        { themeVariable: "--ion-color-tertiary-shadow", value: "0px 0.75rem 24px rgba(254,48,110, 0.5)" },
        
        { themeVariable: "--ion-color-success", value: "#10dc60" },
        { themeVariable: "--ion-color-success-rgb", value: "16, 220, 96" },
        { themeVariable: "--ion-color-success-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-success-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-success-shade", value: "#0ec254" },
        { themeVariable: "--ion-color-success-tint", value: "#28e070" },
        
        { themeVariable: "--ion-color-warning", value: "#ffce00" },
        { themeVariable: "--ion-color-warning-rgb", value: "255, 206, 0" },
        { themeVariable: "--ion-color-warning-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-warning-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-warning-shade", value: "#e0b500" },
        { themeVariable: "--ion-color-warning-tint", value: "#ffd31a" },
        
        { themeVariable: "--ion-color-danger", value: "#f04141" },
        { themeVariable: "--ion-color-danger-rgb", value: "245, 61, 61" },
        { themeVariable: "--ion-color-danger-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-danger-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-danger-shade", value: "#d33939" },
        { themeVariable: "--ion-color-danger-tint", value: "#f25454" },
        
        { themeVariable: "--ion-color-dark", value: "#222428" },
        { themeVariable: "--ion-color-dark-rgb", value: "34, 34, 34" },
        { themeVariable: "--ion-color-dark-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-dark-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-dark-shade", value: "#1e2023" },
        { themeVariable: "--ion-color-dark-tint", value: "#383a3e" },
        
        { themeVariable: "--ion-color-medium", value: "#989aa2" },
        { themeVariable: "--ion-color-medium-rgb", value: "152, 154, 162" },
        { themeVariable: "--ion-color-medium-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-medium-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-medium-shade", value: "#86888f" },
        { themeVariable: "--ion-color-medium-tint", value: "#a2a4ab" },
        
        { themeVariable: "--ion-color-light", value: "#f4f5f8" },
        { themeVariable: "--ion-color-light-rgb", value: "244, 244, 244" },
        { themeVariable: "--ion-color-light-contrast", value: "#000000" },
        { themeVariable: "--ion-color-light-contrast-rgb", value: "0, 0, 0" },
        { themeVariable: "--ion-color-light-shade", value: "#d7d8da" },
        { themeVariable: "--ion-color-light-tint", value: "#f5f6f9" },
        
        { themeVariable: "--font-color", value: "#444" },
        { themeVariable: "--black-font-secondary", value: "rgba(68, 68, 68, 0.64)" },
        { themeVariable: "--shadow-normal", value: "0 4px 16px rgba(0, 0, 0, .12)" },
        { themeVariable: "--ion-bgcolor", value: "#fbfaff" },
        { themeVariable: "--ion-card-bgcolor", value: "#fff" },
        { themeVariable: "--fab-button-color", value: "#3E6FD5" },
        { themeVariable: "--tracking-header", value: "#3E6FD5" },
        { themeVariable: "--font-button-color", value: "#fff" }
    
    ];
    public static DARK: IThemeStyle[] = [
        { themeVariable: "--ion-color-primary", value: "#1E1E1E" },
        { themeVariable: "--ion-color-primary-rgb", value: "30,30,30" },
        { themeVariable: "--ion-color-primary-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-primary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-primary-shade", value: "#1a1a1a" },
        { themeVariable: "--ion-color-primary-tint", value: "#353535" },
        
        { themeVariable: "--ion-color-secondary", value: "#018786" },
        { themeVariable: "--ion-color-secondary-rgb", value: "1,135,134" },
        { themeVariable: "--ion-color-secondary-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-secondary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-secondary-shade", value: "#017776" },
        { themeVariable: "--ion-color-secondary-tint", value: "#1a9392" },
        { themeVariable: "--ion-color-tertiary-shadow", value: "0px 0.75rem 24px rgba(99,210,23, 0.5)" },
        
        { themeVariable: "--ion-color-tertiary", value: "#602080" },
        { themeVariable: "--ion-color-tertiary-rgb", value: "96,32,128" },
        { themeVariable: "--ion-color-tertiary-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-tertiary-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-tertiary-shade", value: "#541c71" },
        { themeVariable: "--ion-color-tertiary-tint", value: "#70368d" },
        { themeVariable: "--ion-color-tertiary-shadow", value: "0px 0.75rem 24px rgba(254,48,110, 0.5)" },
        
        { themeVariable: "--ion-color-success", value: "#10dc60" },
        { themeVariable: "--ion-color-success-rgb", value: "16, 220, 96" },
        { themeVariable: "--ion-color-success-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-success-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-success-shade", value: "#0ec254" },
        { themeVariable: "--ion-color-success-tint", value: "#28e070" },
        
        { themeVariable: "--ion-color-warning", value: "#ffce00" },
        { themeVariable: "--ion-color-warning-rgb", value: "255, 206, 0" },
        { themeVariable: "--ion-color-warning-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-warning-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-warning-shade", value: "#e0b500" },
        { themeVariable: "--ion-color-warning-tint", value: "#ffd31a" },
        
        { themeVariable: "--ion-color-danger", value: "#B00020" },
        { themeVariable: "--ion-color-danger-rgb", value: "34,34,34" },
        { themeVariable: "--ion-color-danger-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-danger-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-danger-shade", value: "#9b001c" },
        { themeVariable: "--ion-color-danger-tint", value: "#b81a36" },
        
        { themeVariable: "--ion-color-dark", value: "#222428" },
        { themeVariable: "--ion-color-dark-rgb", value: "34, 34, 34" },
        { themeVariable: "--ion-color-dark-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-dark-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-dark-shade", value: "#1e2023" },
        { themeVariable: "--ion-color-dark-tint", value: "#383a3e" },
        
        { themeVariable: "--ion-color-medium", value: "#989aa2" },
        { themeVariable: "--ion-color-medium-rgb", value: "152, 154, 162" },
        { themeVariable: "--ion-color-medium-contrast", value: "#ffffff" },
        { themeVariable: "--ion-color-medium-contrast-rgb", value: "255, 255, 255" },
        { themeVariable: "--ion-color-medium-shade", value: "#86888f" },
        { themeVariable: "--ion-color-medium-tint", value: "#a2a4ab" },
        
        { themeVariable: "--ion-color-light", value: "#f4f5f8" },
        { themeVariable: "--ion-color-light-rgb", value: "244, 244, 244" },
        { themeVariable: "--ion-color-light-contrast", value: "#000000" },
        { themeVariable: "--ion-color-light-contrast-rgb", value: "0, 0, 0" },
        { themeVariable: "--ion-color-light-shade", value: "#d7d8da" },
        { themeVariable: "--ion-color-light-tint", value: "#f5f6f9" },
        
        { themeVariable: "--font-color", value: "#fbfaff" },
        { themeVariable: "--black-font-secondary", value: "rgba(255,255,255,0.88)" },
        { themeVariable: "--shadow-normal", value: "0px 4px 16px -4px rgba(0,0,0,0.75)" },
        { themeVariable: "--ion-color-primary-shadow", value: "0px 4px 16px -4px rgba(0,0,0,0.75)" },
        { themeVariable: "--ion-bgcolor", value: "#121212" },
        { themeVariable: "--ion-card-bgcolor", value: "#1E1E1E" },
        { themeVariable: "--fab-button-color", value: "#F6515F" },
        { themeVariable: "--tracking-header", value: "#121212" },
        { themeVariable: "--font-button-color", value: "#fff" }
    ];
}

export class THEME_SELECTION {
    public static DEFAULT: IThemeVar[] = [
        {
            name: "default",
            styles: THEME_VAR_LIST.RED
        },
        {
            name: "blue",
            styles: THEME_VAR_LIST.BLUE
        },
        {
            name: "dark",
            styles: THEME_VAR_LIST.DARK
        }
    ];
}
