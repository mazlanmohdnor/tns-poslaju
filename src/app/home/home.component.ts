import { Component, OnInit } from "@angular/core";
import { AndroidData, Elevation, ShapeEnum } from "nativescript-ngx-shadow";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ListPicker } from "tns-core-modules/ui/list-picker";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styles: [`
        Label {
            text-align: center;
        }

        .ex1, .ex2 {
            background-color: white;
        }

        .ex3, .ex4 {
            color: white;
        }

        .ex3 {
            background-color: #006968;
            border-radius: 15;
        }

        .ex4 {
            background-color: #ff1744;
            border-radius: 50%;
            width: 80;
            height: 80;
        }
    `]
})
export class HomeComponent implements OnInit {
    elevation = 2;
    shape = ShapeEnum;
    stdElevations: string[] = [];
    androidData: AndroidData;
    bclass = "ex2";
    bclass2 = "ex3";
    bclass3 = "ex4";
    
    ngOnInit(): void {
        for (const x in Elevation) {
            if (isNaN(parseInt(x, 10))) {
                this.stdElevations.push(x);
            }
        }
        this.androidData = this.getAndroidData();
    }
    
    getAndroidData(): AndroidData {
        return {
            elevation: this.elevation
            // bgcolor: "#ff1744",
            // shape: ShapeEnum.OVAL
        };
    }
    
    toggleClass() {
        this.bclass = this.bclass == "ex2" ? "ex3" : "ex2";
        this.bclass2 = this.bclass2 == "ex3" ? "ex4" : "ex3";
        this.bclass3 = this.bclass3 == "ex4" ? "ex3" : "ex4";
    }
    
    setElevation(newValue) {
        const picker = newValue.object as ListPicker;
        this.elevation = Elevation[this.stdElevations[picker.selectedIndex]];
        this.androidData = this.getAndroidData();
    }
    
    dummy() {} //dummy tap function to make a view clickable
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
