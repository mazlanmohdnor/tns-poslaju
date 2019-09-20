import { Component, OnInit } from "@angular/core";
import { BottomSheetParams } from "nativescript-material-bottomsheet/angular";
import { ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
    selector: "sheet-component",
    templateUrl: "sheet.component.html"
})
export class SheetComponent implements OnInit {
    options: any[];
    
    constructor(private params: BottomSheetParams) {}
    
    ngOnInit() {
        this.options = this.params.context;
    }
    
    iconFromCode(code) {
        console.log("code :", code);
        return String.fromCharCode(code);
    }
    
    onTap({ index }: ItemEventData) {
        this.params.closeCallback(this.options[index]);
    }
}
