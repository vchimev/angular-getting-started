import { Injectable } from '@angular/core';

// import window from './utils';
import { Store } from './store';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = Store.load();

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);

    this.updateStore();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.updateStore();

    return this.items;
  }

  updateStore() {
    Store.save(this.items);
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
