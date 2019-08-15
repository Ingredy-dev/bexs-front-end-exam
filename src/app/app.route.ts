import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';

const APP_ROUTES: Routes = [
    { path: 'pagamentos', component: PagamentosComponent },
    { path: '', component: CheckoutComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);