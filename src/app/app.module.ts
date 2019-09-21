import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptMaterialBottomSheetModule } from "nativescript-material-bottomsheet/angular";
import { NgRippleModule } from "nativescript-ng-ripple";
import { NgShadowModule } from "nativescript-ngx-shadow";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { SideMenuModule } from "~/app/side-menu/side-menu.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NgShadowModule,
        NativeScriptUISideDrawerModule,
        NativeScriptMaterialBottomSheetModule.forRoot(),
        NgRippleModule,
        SideMenuModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {}
