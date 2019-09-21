import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { ListViewEventData, RadListView } from "nativescript-ui-listview";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { isAndroid } from "tns-core-modules/platform";
import { SearchBar } from "tns-core-modules/ui/search-bar";

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
    styles: [`
    
    `]
})
export class MainComponent implements OnInit {
    _dataItems: ObservableArray<DataItem>;
    private _selectedItems: string;
    
    constructor(
        private router: Router, private routerExtensions: RouterExtensions
    ) {
        // Use the component constructor to inject providers.
    }
    
    ngOnInit(): void {
        setTimeout(() => {
            this._dataItems = new ObservableArray(DATAITEMS);
        
        }, 3000);
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
    
    public searchBarLoaded(args) {
        var searchbar: SearchBar = args.object;
        if (isAndroid) {
            searchbar.android.clearFocus();
        }
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
    
    public onItemSelected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedTitles = "Selected items: ";
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        
        this._selectedItems = selectedTitles;
        const selectedItem = this._dataItems.getItem(args.index);
        console.log("Item selected: " + (selectedItem && selectedItem.name));
    }
    
    public onItemSelecting(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedTitles = "Selecting item: ";
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        
        const selectedItem = this._dataItems.getItem(args.index);
        console.log("Item selecting: " + (selectedItem && selectedItem.name));
    }
    
    public onItemDeselecting(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedTitles = "Deselecting item: ";
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
            
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }
        
        const selectedItem = this._dataItems.getItem(args.index);
        console.log("Item deselecting: " + (selectedItem && selectedItem.name));
    }
    
    public onItemDeselected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        if (selectedItems.length > 0) {
            let selectedTitles = "Selected items: ";
            for (let i = 0; i < selectedItems.length; i++) {
                selectedTitles += selectedItems[i] ? selectedItems[i].name : "";
                
                if (i < selectedItems.length - 1) {
                    selectedTitles += ", ";
                }
            }
            
            this._selectedItems = selectedTitles;
        } else {
            this._selectedItems = "No Selected items.";
        }
        
        const deselectedItem = this._dataItems.getItem(args.index);
        console.log("Item deselected: " + (deselectedItem && deselectedItem.name));
    }
}
