import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/main",
        pathMatch: "full"
    },
    {
        path: "main",
        loadChildren: () => import("~/app/pages/main/main.module").then(m => m.MainModule)
        // data: { preload: true, delay: false }
    },
    {
        path: "contact-pos",
        redirectTo: "/menu/main"
    },
    {
        path: "setting",
        loadChildren: () => import("~/app/pages/settings/settings.module").then(m => m.SettingsModule)
        // data: { preload: true, delay: true }
    },
    {
        path: "notification",
        loadChildren: () => import("~/app/pages/notification/notification.module").then(m => m.NotificationModule)
        // data: { preload: false, delay: false }
    },
    {
        path: "share",
        redirectTo: "main"
    },
    {
        path: "rate",
        redirectTo: "main"
    },
    {
        path: "more-apps",
        redirectTo: "main"
    },
    {
        path: "about",
        loadChildren: () => import("~/app/pages/about/about.module").then(m => m.AboutModule)
    },
    {
        path: "contact-dev",
        redirectTo: "main"
    },
    {
        path: "scan",
        loadChildren: () => import("~/app/pages/scan/scan.module").then(m => m.ScanModule),
        // data: { preload: true, delay: false }
        
    },
    {
        path: "progress-detail",
        loadChildren: () => import("~/app/pages/progress-detail/progress-detail.module").then(m => m.ProgressDetailModule)
        // data: { preload: true, delay: false }
    }
    // {
    //     path: "menu",
    //     component: SideMenuComponent,
    //     resolve: {
    //         // storage: AppResolverService
    //     },
    //
    //     children: [
    //
    //     ]
    // }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class MenuRoutingModule {}
