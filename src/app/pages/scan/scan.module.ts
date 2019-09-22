import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptFormsModule, NativeScriptRouterModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { NgRippleModule } from "nativescript-ng-ripple";
import { NgShadowModule } from "nativescript-ngx-shadow";
import { SheetComponent } from "~/app/pages/scan/bottom-sheet/sheet.component";
import { ScanComponent } from "~/app/pages/scan/scan.component";

const routes: Routes = [
    { path: "", component: ScanComponent }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
        NgShadowModule,
        NativeScriptFormsModule,
        NgRippleModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        ScanComponent,
        SheetComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        BarcodeScanner
    ],
    entryComponents: [
        SheetComponent
    ]
})
export class ScanModule {}
