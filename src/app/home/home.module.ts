import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { registerElement } from "nativescript-angular/element-registry";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { NgShadowModule } from "nativescript-ngx-shadow";
import { SheetComponent } from "~/app/home/bottom-sheet/sheet.component";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

registerElement("BarcodeScanner", () => require("nativescript-barcodescanner").BarcodeScannerView);

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        NgShadowModule,
        NativeScriptFormsModule
    ],
    declarations: [
        HomeComponent,
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
export class HomeModule { }
