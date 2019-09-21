import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Browse",
    templateUrl: "./notification.component.html",
    styles: [`
    
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
}
