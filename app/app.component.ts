import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, RouteData, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {ListingComponent} from './listing/listing.component';
import {ItemService} from './services/item.service';
import {ItemDetailsComponent} from './item-details/item-details'


@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ItemService, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/listing', name: 'Listing', component: ListingComponent, useAsDefault: true },
  { path: '/item/:id', name: 'Details', component: ItemDetailsComponent },
  { path: '/item', name: 'AddItem', component: ItemDetailsComponent }  
])
export class AppComponent implements OnInit{
  public title = 'Listing';
  public state = {};
  
  constructor(private _router: Router){
      
  }
  
   ngOnInit() {       
       this._router.subscribe(next => this.state = next )
  }
}
