import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html",
    styles: [`
        .my-label {
            color: #444;
            font-size: 16;
            padding: 8;
            text-align: center;
            vertical-align: middle;
            width: 90%;
        }
    `]
})
export class FeaturedComponent implements OnInit {
    public elevation: any = 10;
    
    constructor() {
        // Use the component constructor to inject providers.
    }
    
    ngOnInit(): void {
        // Init your component properties here.
    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
