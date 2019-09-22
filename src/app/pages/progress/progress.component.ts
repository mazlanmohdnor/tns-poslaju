import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "progress",
    templateUrl: "./progress.component.html",
    styleUrls: ["./progress.component.scss"]
})
export class ProgressComponent implements OnInit {
    
    constructor(
        private routerExtensions: RouterExtensions
    ) { }
    
    ngOnInit(): void {
    }
    
    goBack(): void {
        this.routerExtensions.back();
    }
    
}
