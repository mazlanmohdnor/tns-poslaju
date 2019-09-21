import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "list-card",
    templateUrl: "./list-card.component.html",
    styleUrls: ["./list-card.component.scss"]
})
export class ListCardComponent implements OnInit {
    
    colorList: string[] = [
        "#DB76C9",
        "#228CDB",
        "#0B7189",
        "#88AB75",
        "#366666",
        "#ED7D3A"
    ];
    @Input("data") dataObj: any;
    @Input("type") type: "noYetDelivered" | "delivered" | "location" | "date" | "process";
    
    constructor() { }
    
    ngOnInit() {}
    
}
