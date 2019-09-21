import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ProgressComponent } from "~/app/pages/progress/progress.component";

const routes: Routes = [
    { path: "", component: ProgressComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [
        ProgressComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProgressModule {}
