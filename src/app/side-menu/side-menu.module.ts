import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgShadowModule } from "nativescript-ngx-shadow";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { MenuRoutingModule } from "~/app/side-menu/menu-routing.module";
import { SideMenuComponent } from "~/app/side-menu/side-menu.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MenuRoutingModule,
        NgShadowModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        SideMenuComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        SideMenuComponent
    ]
})
export class SideMenuModule {}
