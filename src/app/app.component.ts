import { Component, OnInit } from "@angular/core";
import * as storage from "nativescript-localstorage";
// const firebase = require("nativescript-plugin-firebase");
import * as firebase from "nativescript-plugin-firebase";
import { firestore } from "nativescript-plugin-firebase";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    
    constructor() {
    
    }
    
    ngOnInit() {
        console.log('asdad');
        this.initFirebase();
    
    
        // firebase.init({ persist: true })
        //         .then(res => {
        //             console.log("successss:", res);
        //         })
        //         .catch(err => {
        //             console.log("error", err);
        //         });
    }
    
    async initFirebase() {
        try {
            const apiCollection = firebase.firestore.collection("api");
            apiCollection.get({ source: "server" }).then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const api: firestore.DocumentData = doc.data();
                    console.log("api server :", JSON.parse(api.url));
                });
            });
        } catch (err) {
            console.log(">>>>> Firebase init error: " + err);
        }
    }
    
    checkApi() {
        console.log("checking api");
        storage.setItem("api", JSON.stringify({
            "poslaju": "http://postpost.wittydata.com/api/poslaju/",
            "jnt": "http://postpost.wittydata.com/api/jnt/",
            "gdex": "http://postpost.wittydata.com/api/gdex/",
            "ninjavan": "http://postpost.wittydata.com/api/ninjavan/",
            "skynet": "http://postpost.wittydata.com/api/skynet/",
            "airpak": "https://postpost.wittydata.com/api/airpak/",
            "citylink": "http://postpost.wittydata.com/api/citylink/",
            "abx": "http://postpost.wittydata.com/api/abx/",
            "lwe": "https://postpost.wittydata.com/api/lwe/",
            "lex": "http://postpost.wittydata.com/api/lex/",
            "dhl": "http://postpost.wittydata.com/api/dhl/",
            "lineclear": "https://postpost.wittydata.com/api/lineclear/",
            "cj": "http://postpost.wittydata.com/api/cjcentury/",
            "shopee": "https://shopeexpress.com.my/api/v2/fleet_order/tracking/search?sls_tracking_number=",
            "tnt": "https://www.tnt.com/api/v3/shipment?con=",
            "fedex": "https://cj-api.herokuapp.com/fedex/",
            "mypoz": "https://cj-api.herokuapp.com/mypoz/",
            "taqbin": "https://cj-api.herokuapp.com/taqbin/",
            "ups": "https://cj-api.herokuapp.com/ups/",
            "zepto": "https://cj-api.herokuapp.com/zepto/",
            "pgeon": "https://cj-api.herokuapp.com/pgeon/"
        }));
        // let getItem = storage.getItem("api");
        // console.log("api local:", JSON.parse(getItem));
        // if (!keys.includes('apiVersion')) {
        //     this.fireService$ = this.fireService.getApi().subscribe(data => {
        //         data.map(e => {
        //             const api: any = e.payload.doc.data();
        //             storage.setItem('apiVersion', api.version).then(() => console.log('Api version set!'));
        //             storage.setItem('api', api.url).then(() => console.log('Api changed set!'));
        //         });
        //     });
        // } else {
        //     console.log('Api version set!, checking version.');
        //     this.fireService$ = this.fireService.getApi().subscribe(data => {
        //         data.map(e => {
        //             const api: any = e.payload.doc.data();
        //             console.log('api.version on server:', api.version);
        //             storage.getItem('apiVersion').then(apiVersion => {
        //                 console.log('apiVersion local:', apiVersion);
        //
        //                 if (api.version !== apiVersion) {
        //                     console.log('Api changed in the server, saving..');
        //                     storage.setItem('api', JSON.parse(api.url))
        //                         .then((res) => console.log('Api set!', res));
        //                     storage.setItem('apiVersion', api.version)
        //                         .then((res) => console.log('Api version set!', res));
        //                 } else {
        //                     console.log('api sync with the server', api.version, '==', apiVersion);
        //                 }
        //             });
        //         });
        //     });
        // }
    }
    
}
