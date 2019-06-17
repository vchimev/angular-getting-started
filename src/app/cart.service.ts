import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [
    {
      name: 'AAA',
      price: 111
    },
    {
      name: 'BBB',
      price: 222
    },
    {
      name: 'CCC',
      price: 333
    },
  ];

  constructor(
    private http: HttpClient
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
