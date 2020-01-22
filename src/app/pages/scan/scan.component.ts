import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { BarcodeScanner, ScanOptions } from "nativescript-barcodescanner";
import { BottomSheetOptions, BottomSheetService } from "nativescript-material-bottomsheet/angular";
import { getJSON } from "tns-core-modules/http";
import { SheetComponent } from "~/app/pages/scan/bottom-sheet/sheet.component";
import { PosLajuService } from "~/app/shared/services/pos-backend/pos-laju.service";

@Component({
    selector: "scan",
    templateUrl: "./scan.component.html",
    providers: [PosLajuService],
    styles: [`
        .input-custom {
            color: #444;
            margin: 15 5 10 5;
        }
    `]
})
export class ScanComponent implements OnInit {
    public trackingNumber: string = "ERB136623742MY"; // 8050169956
    
    constructor(
        private bottomSheet: BottomSheetService,
        private containerRef: ViewContainerRef,
        private routerExtensions: RouterExtensions,
        private posService: PosLajuService
    ) {
    }
    
    ngOnInit(): void {
    
    }
    
    public onTapCamera(event) {
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
    
    public onTapCategory($event) {
        const options: BottomSheetOptions = {
            viewContainerRef: this.containerRef,
            context: [
                {
                    icon: "\uf466",
                    text: "Facebook"
                },
                {
                    icon: "b",
                    text: "Google"
                },
                {
                    icon: "c",
                    text: "ASAS"
                }
            ]
        };
        
        this.bottomSheet.show(SheetComponent, options).subscribe(result => {
            console.log("Option selected:", result);
        });
        
    }
    
    public onTapTrack($event) {
        console.log("tap");
        // this.posService.getDetailBrowser(this.trackingNumber).subscribe(result => {
        //     console.log("result :", result);
        // });
        getJSON("http://cj-api.herokuapp.com/poslaju/ERB136623742MY").then((result: any) => {
            console.log("result :", result);
            this.routerExtensions.navigate(["/progress-detail"], {
                transition: {
                    name: "slideLeft",
                    curve: "ease"
                },
                queryParams: {
                    item: JSON.stringify(result)
                }
            });
            
        }, (e) => {
            console.log("e :", e);
        });
        
        // request({
        //     url: "https://mobile-app.pos.com.my/API/POSApiService.svc",
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "SOAPAction": "	http://tempuri.org/IPOSApiService/GetTrackNTraceWebApi	HEADER	METHOD",
        //         "Host": "mobile-app.pos.com.my"
        //     },
        //     content: `<v:Envelope xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:d="http://www.w3.org/2001/XMLSchema" xmlns:c="http://schemas.xmlsoap.org/soap/encoding/" xmlns:v="http://schemas.xmlsoap.org/soap/envelope/">
        //                 <v:Header />
        //                 <v:Body>
        //                     <GetTrackNTraceWebApi xmlns="http://tempuri.org/" id="o0" c:root="1">
        //                         <cnno i:type="d:string">ERB136623742MY</cnno>
        //                         <cultureCode i:type="d:string">En</cultureCode>
        //                     </GetTrackNTraceWebApi>
        //                 </v:Body>
        //             </v:Envelope>`
        // }).then(function(response) {
        //     console.log("response :", response);
        //     const result = response.content.toJSON();
        //     console.log("result :", result);
        //     try {
        //         var doc = new dom().parseFromString(result["data"],  "text/xml" );
        //     } catch (e) {
        //         console.log("parsing error " + e);
        //     }
        //
        //     console.log("Parsed! " + doc);
        //     console.log("Parsed! " + doc);
        //     var select = Xpath.useNamespaces({
        //         "envlp": "http://schemas.xmlsoap.org/soap/envelope/",
        //         "lg":"http://test.com"
        //     });
        // });
    }
    
    goBack(): void {
        this.routerExtensions.back();
    }
    
    public onTapSave($event) {
    
    }
}
