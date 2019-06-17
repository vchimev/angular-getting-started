import { Component } from '@angular/core';
// import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { CheckoutFormService } from './checkout-form.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ CheckoutFormService ]
})
export class CartComponent {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private checkoutFormService: CheckoutFormService
    // private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.checkoutFormService.prepareCheckoutForm();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
