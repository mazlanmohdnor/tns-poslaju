import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { View } from "tns-core-modules/ui/core/view";
import { SearchBar } from "tns-core-modules/ui/search-bar";
// import { registerElement } from 'nativescript-angular/element-registry';
// registerElement(
//     'Fab',
//     () => require('@nstudio/nativescript-floatingactionbutton').Fab
// );

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
    @ViewChild("btnFabRef", { static: false }) btnFab: ElementRef;
    @ViewChild("AbsoluteLayoutRef", { static: false }) absoluteLayoutRef: ElementRef;
    private _selectedItems: string;
    
    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions
    ) {}
    
    setFabPosition(args) {
        setTimeout(() => {
            const stackSize = args.object.getActualSize();
            const btnFab = this.btnFab.nativeElement as View;
            btnFab.top = stackSize.height - 90;
            btnFab.left = stackSize.width - 90;
        });
    }
    
    ngOnInit(): void {
        this._dataItems = new ObservableArray(DATAITEMS);
    
    }
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    public scan() {
        this.routerExtensions.navigate(["/scan"], {
            transition: {
                name: "slideLeft"
            }
        });
    }
    
    public onSubmit($event: Event) {
    
    }
    
    public onTextChange($event) {
    
    }
    
    //
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
        
        this.routerExtensions.navigate(["/progress-detail"], {
            transition: {
                name: "slideLeft"
            },
            queryParams: args
        });
    }
    
    onTapFab() {
        this.routerExtensions.navigate(["/scan"], {
            transition: {
                name: "slideLeft"
            }
        });
    }
    
    public onItemSelectedq($event) {
    
    }
}
