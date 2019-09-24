import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { registerElement } from "nativescript-angular/element-registry";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

registerElement(
    "Fab",
    () => require("@nstudio/nativescript-floatingactionbutton").Fab
);

@Component({
    selector: "Browse",
    templateUrl: "./notification.component.html",
    styles: [`
        .fab-button {
            width: 56;
            height: 56;
            margin: 15;
            background-color: #ff4081;
            horizontal-align: right;
            vertical-align: bottom;
        }
    `]
})
export class NotificationComponent implements OnInit {
    
    constructor(
        private routerExtensions: RouterExtensions
    ) {
        // Use the component constructor to inject providers.
    }
    
    ngOnInit(): void {
        // Init your component properties here.
    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    public scan() {
    
    }
    
    goBack(): void {
        this.routerExtensions.back();
    }
    
    public fabTap() {
    
    }
}
