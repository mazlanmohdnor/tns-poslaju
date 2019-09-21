import { Component, OnInit } from "@angular/core";
import { Elevation } from "nativescript-ngx-shadow";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Featured",
    templateUrl: "./about.component.html",
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
export class AboutComponent implements OnInit {
    elevation = Elevation.FAB_RESTING;
    text: string = "Pos Laju Tracking is sssa free app to help users to track Pos Laju Parcel. This is NOT an Official Pos Laju Tracking Apps by Pos Laju Malaysia. But we develop it as a community project for Malaysian. Please refer to Pos Laju Malaysia for more information. Thank you.";
   
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
