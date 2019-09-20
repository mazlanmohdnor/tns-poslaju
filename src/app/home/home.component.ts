import { Component, OnInit } from "@angular/core";
import { BarcodeScanner, ScanOptions } from "nativescript-barcodescanner";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styles: [`
        .input-custom {
            color: #444;
            margin: 15 5 0 5;

        }

    `]
})
export class HomeComponent implements OnInit {
    public trackingNumber: string;
    
    constructor() {
    }
    
    ngOnInit(): void {
    
    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    public onTap(event) {
        console.log("OPEN NOTIFICATION!");
        const scanOptions: ScanOptions = {
            formats: "QR_CODE, EAN_13, CODE_39, CODE_128, CODE_39_MOD_43",
            message: "Scan the QR Code",
            cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
            cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
            showFlipCameraButton: true,   // default false
            preferFrontCamera: false,     // default false
            showTorchButton: true,        // default false
            beepOnScan: true,             // Play or Suppress beep on scan (default true)
            torchOn: false,               // launch with the flashlight on (default false)
            closeCallback: () => {
                console.log("Scanner closed");
            }, // invoked when the scanner was closed (success or abort)
            openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
            
        };
        new BarcodeScanner().scan(scanOptions).then((result) => {
                // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
                console.log({
                    title: "Scan result",
                    message: "Format: " + result.format + ",\nValue: " + result.text,
                    okButtonText: "OK"
                });
                
                this.trackingNumber = result.text;
            }, (errorMessage) => {
                console.log("No scan. " + errorMessage);
            }
        );
    }
}
