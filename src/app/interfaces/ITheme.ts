export interface ITheme {
    id: string;
    description: string;
    value: string;
    hex?: string;
}

export interface IThemeVar {
    name: string;
    styles: IThemeStyle[];
}

export interface IThemeStyle {
    themeVariable: string;
    value: string;
}
