import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { registerElement, RouterExtensions } from "nativescript-angular";
import { firestore } from "nativescript-plugin-firebase";
import * as firebase from "nativescript-plugin-firebase";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { SearchBar } from "tns-core-modules/ui/search-bar";
registerElement(
    "Fab",
    () => require("@nstudio/nativescript-floatingactionbutton").Fab
);
export class DataItem {
    constructor(public id?: number,
                public name?: string,
                public description?: string,
                public title?: string,
                public text?: string,
                public image?: string,
                public selected?: boolean,
                public type?: string,
                public category?: string,
                public size?: number,
                public color?: string) {
    }
}

export const DATAITEMS: DataItem[] = [
    {
        "id": 1,
        "name": "Item 1",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 2,
        "name": "Item 2",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 3,
        "name": "Item 3",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 4,
        "name": "Item 4",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 5,
        "name": "Item 5",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 6,
        "name": "Item 6",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 7,
        "name": "Item 7",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }, {
        "id": 8,
        "name": "Item 8",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 9,
        "name": "Item 9",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    },
    {
        "id": 10,
        "name": "Item 10",
        "description": "This is item description.",
        "title": "This is item Title",
        "text": "This is item Text",
        "image": "This is item Image",
        "selected": false
    }
];

@Component({
    selector: "Browse",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
    _dataItems: ObservableArray<DataItem>;
    _dataItems2 = DATAITEMS;
    url: any;
    
    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions
    ) {}
    
    ngOnInit(): void {
        this._dataItems = new ObservableArray(DATAITEMS);
            this.initFirebase();
    
        // firebase.init({}).then(res => {
        //     console.log('success');
        // });
    }
    
    async initFirebase() {
        try {
            const apiCollection = firebase.firestore.collection("api");
            apiCollection.get({ source: "server" }).then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const api: firestore.DocumentData = doc.data();
                    this.url = JSON.parse(api.url);
                    console.log("api server:", JSON.parse(api.url));
                });
            });
        } catch (err) {
            console.log(">>>>> Firebase init error: " + err);
        }
    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    public scan() {
        this.routerExtensions.navigate(["/scan"], {
            transition: {
                name: "slideLeft",
                curve:'ease'
            }
        });
    }
    
    public onSubmit($event: Event) {
    
    }
    
    public onTextChange($event) {
    
    }
    
    public searchBarLoaded(args) {
        const searchBar: SearchBar = args.object;
        searchBar.android.clearFocus();
    }
    
    public onPullToRefreshInitiated(args) {
        setTimeout(() => {
            const listView = args.object as RadListView;
            listView.notifyPullToRefreshFinished();
        }, 3000);
    }
    
    public onItemReordered(args: ListViewEventData) {
        console.log("Item reordered. Old index: " + args.index + " " + "new index: " + args.data.targetIndex);
    }
    
    public onItemSelected(args: any) {
        console.log("args :", args);
        
        // this.routerExtensions.navigate(["/progress-detail"], {
        //     transition: {
        //         name: "slideLeft",
        //         curve:'ease'
        //     },
        //     queryParams: args
        // });
    }
    
    onTapFab() {
        this.routerExtensions.navigate(["/scan"], {
            transition: {
                name: "slideLeft",
                curve:'ease'
            }
        });
    }
    
}
