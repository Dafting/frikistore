import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FrikitiendaContactoComponent } from './frikitienda-contacto/frikitienda-contacto.component';
import { CartComponent } from './cart/cart.component';
import { FrikitiendaProductosComponent } from './frikitienda-productos/frikitienda-productos.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FrikitiendaContactoComponent,
    CartComponent,
    FrikitiendaProductosComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
