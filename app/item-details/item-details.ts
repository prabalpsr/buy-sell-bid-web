import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import * as moment from 'moment';

import { Item } from '../services/item';
import { ItemService } from '../services/item.service';



@Component({
    selector: 'item-details',
    templateUrl: 'app/item-details/item-details.html',
    styleUrls: ['app/item-details/item-details.css'],
    directives: [DATEPICKER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
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
            let curDate = new Date();
            var endDate = new Date();
            endDate.setDate(endDate.getDate() + 7);
            
            this.item =  new Item();
            
            this.item.listingStartDate = curDate;
            this.item.listingEndDate = endDate;
                
            this.newMode = true;        
        }
    }
    
    saveItem(){
        this._itemService.saveItem(this.item);
        this._router.navigate(['Listing']);
    }
}
