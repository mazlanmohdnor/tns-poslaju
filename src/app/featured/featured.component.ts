import { Component, OnInit } from "@angular/core";
import { Elevation } from "nativescript-ngx-shadow";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html",
    styles: [`
        .my-label {
            color: #444;
            font-size: 16;
            line-height: 8;
            padding: 8;
            text-align: center;
            vertical-align: middle;
            width: 90%;
        }

        .title {
            font-size: 20;
            font-weight: bold;
        }
    `]
})
export class FeaturedComponent implements OnInit {
    elevation = Elevation.FAB_RESTING;
    
    constructor() {
        // Use the component constructor to inject providers.
    }
    
    ngOnInit(): void {
    
    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
}
