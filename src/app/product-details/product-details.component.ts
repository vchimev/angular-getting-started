// #docplaster
// #docregion imports, cart-service
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
// #enddocregion imports
import { CartService } from '../cart.service';
// #enddocregion cart-service

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
// #docregion props-methods, get-product, inject-cart-service, add-to-cart
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
