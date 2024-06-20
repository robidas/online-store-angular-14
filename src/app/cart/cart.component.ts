import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addChosenProduct, removeChosenProduct } from '../state/actions/chosen-product.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  testProductId: string = ''; // Field to hold the product ID

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addProduct(): void {
    if (!this.testProductId) return; // Guard clause to prevent adding undefined or empty ID
    const testProduct = { id: this.testProductId, productName: 'Test Product', productDetails: 'Details', unitPrice: 100, qty: 0 }; // Use testProductId directly
    this.store.dispatch(addChosenProduct({ chosenProduct: testProduct }));
  }

  removeProduct(): void {
    if (!this.testProductId) return; // Guard clause to prevent removing undefined or empty ID
    this.store.dispatch(removeChosenProduct({ productId: this.testProductId })); // Use testProductId directly
  }
}