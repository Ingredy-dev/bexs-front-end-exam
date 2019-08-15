import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { routing } from './app.route';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    PagamentosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
