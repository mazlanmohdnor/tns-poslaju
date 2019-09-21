import { API_KEYS, APP, APPCOLOR, FIREBASE } from "./private/private";

export const environment = {
    production: true,
    appVersion: APP.APP_VERSION,
    KEYS: API_KEYS,
    FIREBASE_CONFIG: FIREBASE.FIREBASE_CONFIG,
    STATUS_BAR_COLOR: APPCOLOR.HEADER,
    HEADER_COLOR: APPCOLOR.HEADER
};
