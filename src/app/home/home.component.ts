import { Component, OnInit } from "@angular/core";
import { Elevation } from "nativescript-ngx-shadow";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styles: [`

    `]
})
export class HomeComponent implements OnInit {
    elevation = Elevation.FAB_RESTING;
    public textFieldValue: any = "asdas";
    
    ngOnInit(): void {
    
    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
