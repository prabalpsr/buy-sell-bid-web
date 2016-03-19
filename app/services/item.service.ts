import { Injectable } from 'angular2/core';

import { LISTING } from './mock-listing';



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
}
