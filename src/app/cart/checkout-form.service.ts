import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class CheckoutFormService {

  constructor(public formBuilder: FormBuilder) { }

  prepareForm(form: object) {
    return this.formBuilder.group(form);
  }


  prepareCheckoutForm() {
    return this.formBuilder.group({
      name: '',
      address: ''
    });
  }
}
