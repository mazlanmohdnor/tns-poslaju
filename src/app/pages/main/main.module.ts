import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptFormsModule, NativeScriptRouterModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgRippleModule } from "nativescript-ng-ripple";
import { NgShadowModule } from "nativescript-ngx-shadow";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { MainComponent } from "~/app/pages/main/main.component";

const routes: Routes = [
    { path: "", component: MainComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NgShadowModule,
        NgRippleModule
    ],
    declarations: [
        MainComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MainModule {}
