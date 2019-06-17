import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module.tns';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';

import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShippingComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    TopBarComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    NativeScriptUIDataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
