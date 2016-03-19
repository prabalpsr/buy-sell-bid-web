import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Item } from '../services/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'item-listing',
  templateUrl: 'app/listing/listing.component.html',
  styleUrls: ['app/listing/listing.component.css'],
  directives: []
})
export class ListingComponent implements OnInit {
  public items: Item[];
  public selectedItem: Item;

  constructor(private _itemService: ItemService, private _router: Router) { }

  getHeroes() {
    this.selectedItem = undefined;
    this.items = [];

    this._itemService.getItems().then(items => this.items = items);

    return this.items;
  }

  gotoDetail(item: Item) {
    this._router.navigate(['Details', { id: item.itemId }]);
    
  }

  ngOnInit() {
    this.items = this.getHeroes();
  }

  onSelect(item: Item) {
    this.selectedItem = item;
  }
}
