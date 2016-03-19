import { Injectable } from 'angular2/core';
import { LISTING } from './mock-listing';
import { Item } from './item';


@Injectable()
export class ItemService {
    getItems() {
        return Promise.resolve(LISTING);
    }

    getItem(id: number) {
        return Promise.resolve(LISTING).then(
            heroes => heroes.filter(h => h.itemId === id)[0]
        );
    }
    
    saveItem(item:Item){
        if(item.itemId){
            
        }else{
            LISTING.push(item);
        }
    }
}
