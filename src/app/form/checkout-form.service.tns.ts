import { Injectable } from '@angular/core';

export class CheckoutForm {
  public name = '';
  public address = '';

  public reset() {
    this.name = '';
    this.address = '';
  }
}

@Injectable()
export class CheckoutFormService {
  public prepareCheckoutForm() {
    return new CheckoutForm();
  }
}
