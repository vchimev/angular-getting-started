import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class CheckoutFormService {
  constructor(private formBuilder: FormBuilder) { }

  prepareCheckoutForm() {
    return this.formBuilder.group({
      name: '',
      address: ''
    });
  }
}
