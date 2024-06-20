import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { chosenProductReducer } from './state/reducers/chosen-product.reducer';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
    StartPageComponent,
    ProductListComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ chosenProducts: chosenProductReducer }, {}),
    StoreDevtoolsModule.instrument() // Configure Redux DevTools
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
