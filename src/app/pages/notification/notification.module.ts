import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NotificationComponent } from "~/app/pages/notification/notification.component";

const routes: Routes = [
    { path: "", component: NotificationComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        NotificationComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NotificationModule {}
