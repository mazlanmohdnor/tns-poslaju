import { Component, OnInit } from "@angular/core";
import { APP } from "~/environments/private/private";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    APP_VERSION: string = APP.APP_VERSION;
    
    constructor() { }
    
    ngOnInit() {}
    
}
