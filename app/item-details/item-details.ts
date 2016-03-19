import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { Item } from '../services/item';
import { ItemService } from '../services/item.service';

@Component({
    selector: 'item-details',
    templateUrl: 'app/item-details/item-details.html',
    styleUrls: ['app/item-details/item-details.css'],
    directives: []
})
export class ItemDetailsComponent implements OnInit {
    public item: Item;
    public selectedItem: Item;
    public editMode = false;
    public newMode = false;
    
    constructor(private _itemService: ItemService, private _router: Router, private _routeParms: RouteParams) { }


    gotoDetail(item: Item) {
        this._router.navigate(['Details', { id: item.itemId }]);
    }

    ngOnInit() {
        let itemId = +this._routeParms.get('id');
        if (itemId) {
            this._itemService.getItem(itemId).then(item => this.item = item);
        }
        else{
            this.item =  new Item();
            this.newMode = true;        
        }
    }

    onSelect(item: Item) {
        this.selectedItem = item;
    }
}
