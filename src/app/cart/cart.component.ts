import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addChosenProduct, removeChosenProduct } from '../state/actions/chosen-product.actions';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { ChosenProduct } from '../models/chosen-product.interface';
import { selectChosenProductsState } from '../state/selectors/chosen-product.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  testProductId: string = ''; // Field to hold the product ID
  testProductName: string = '';
  chosenProducts$!: Observable<ChosenProduct[]>; // Observable to hold the chosen products

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.chosenProducts$ = this.store.select(selectChosenProductsState); // Select the chosen products from the store
  }

  addProduct(): void {
    if (!this.testProductId) return; // Guard clause to prevent adding undefined or empty ID
    const testProduct = { id: this.testProductId, productName: this.testProductName || 'Test Product', productDetails: 'Details', unitPrice: 100, qty: 0 };
    this.store.dispatch(addChosenProduct({ chosenProduct: testProduct }));
  }

  removeProduct(): void {
    if (!this.testProductId) return; // Guard clause to prevent removing undefined or empty ID
    this.store.dispatch(removeChosenProduct({ productId: this.testProductId })); // Use testProductId directly
  }
}