import { Injectable } from '@angular/core';

export class CheckoutForm {
  public name: string;
  public address: string;

  constructor() {
    this.reset();
  }

  public reset() {
    this.name = '';
    this.address = '';
  }
}

@Injectable()
export class CheckoutFormService {

  constructor() { }

  prepareCheckoutForm() {
    return new CheckoutForm();
  }
}
