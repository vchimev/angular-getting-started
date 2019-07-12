import { Component } from '@angular/core';

import { CartService } from '@src/app/cart.service';
import { CheckoutFormService } from '@src/app/form/checkout-form.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CheckoutFormService]
})
export class CartComponent {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formService: CheckoutFormService
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formService.prepareCheckoutForm();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
