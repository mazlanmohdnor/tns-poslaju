import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/internal/operators";
import * as app from "tns-core-modules/application";

@Component({
    selector: "side-menu",
    templateUrl: "./side-menu.component.html"
})
export class SideMenuComponent implements OnInit {
    public elevation: any = 15;
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    
    constructor(
        private router: Router, private routerExtensions: RouterExtensions
    ) {
        // Use the component constructor to inject providers.
    }
    
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    
    ngOnInit(): void {
        this._activatedUrl = "";
        this._sideDrawerTransition = new SlideInOnTopTransition();
        
        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }
    
    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }
    
    onNavItemTap(navItemRoute: string): void {
        console.log("navItemRoute :", navItemRoute);
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
