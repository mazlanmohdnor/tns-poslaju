import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProgressDetailComponent } from "~/app/pages/progress-detail/progress-detail.component";

const routes: Routes = [
    { path: "", component: ProgressDetailComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        ProgressDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProgressDetailModule {}
