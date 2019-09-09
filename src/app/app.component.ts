import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { AndroidData, ShapeEnum } from "nativescript-ngx-shadow";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    fabShadow: AndroidData = {
        elevation: 9,
        bgcolor: "#ff1744",
        shape: ShapeEnum.RECTANGLE,
        cornerRadius: 10,
        translationZ: 10
    };
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    public elevation: any = 15;
    
    constructor(private router: Router, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }
    
    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    
    ngOnInit(): void {
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();
        
        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }
    
    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }
    
    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
    
    public toggleClass() {
    
    }
    
    public dummy() {
    
    }
}
