import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "ns-progress-detail",
    templateUrl: "./progress-detail.component.html",
    styleUrls: ["./progress-detail.component.css"]
})
export class ProgressDetailComponent implements OnInit {
    route$: any;
    items: any;
    
    constructor(
        private routerExtensions: RouterExtensions,
        public route: ActivatedRoute
    ) { }
    
    ngOnInit(): void {
        this.route$ = this.route.queryParams
                          .subscribe((res: any) => {
                              console.log("res :", JSON.parse(res.item));
                              this.items = JSON.parse(res.item);
                          });
    }
    
    goBack(): void {
        this.routerExtensions.back();
    }
    
    public onItemTap($event) {
        
    }
}
