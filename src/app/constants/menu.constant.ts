export const MENU_TYPE = {
    SHARE: "shareApp",
    SETTING: "setting",
    DISCUSSION: "discussion",
    RATE: "rateApp",
    MORE_APP: "moreApps"
};

export const MENU_LIST = [
    {
        title: "SIDE_PAGE.MENU.DISCUSSION",
        iconClass: "chatbubbles",
        order: "",
        routerLink: "/menu/notification",
        menuType: MENU_TYPE.DISCUSSION
    },
    {
        title: "SIDE_PAGE.MENU.SETTING",
        iconClass: "construct",
        order: "",
        routerLink: "/menu/setting",
        menuType: MENU_TYPE.SETTING
    },
    {
        title: "SIDE_PAGE.MENU.SHARE",
        iconClass: "share",
        order: "",
        routerLink: "/menu/share-page",
        menuType: MENU_TYPE.SHARE
    },
    {
        title: "SIDE_PAGE.MENU.RATE",
        iconClass: "star",
        order: "",
        routerLink: "/menu/rate-page",
        menuType: MENU_TYPE.RATE
    },
    {
        title: "SIDE_PAGE.MENU.MORE",
        iconClass: "apps",
        order: "",
        routerLink: "/menu/more-apps-page",
        menuType: MENU_TYPE.MORE_APP
    }
];

