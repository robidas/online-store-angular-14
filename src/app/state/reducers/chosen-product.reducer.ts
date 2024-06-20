/**
 * Chosen Product Reducer
 * 
 * This file defines the NGRX reducer for chosen products. The reducer's on() functions
 * return a new state object that represents the updated state of the chosen products
 * based on the dispatched action and its payload.
 */
import { createReducer, on } from '@ngrx/store';
import { addChosenProduct, removeChosenProduct } from '../actions/chosen-product.actions';
import { ChosenProduct } from '../../models/chosen-product.interface';

// Initial state for the chosen products.
export const initialState: ChosenProduct[] = [];

// Reducer for handling actions related to chosen products. 
export const chosenProductReducer = createReducer(
  initialState,

  // Handles the addChosenProduct action.
  on(addChosenProduct, (state, { chosenProduct }) => {
    console.debug("message 1 - state: ", state); // Logs the current state.
    const foundProduct = state.find(p => p.id === chosenProduct.id);
    if (!foundProduct) {
      // Product does not exist in the cart, add it with quantity 1.
      return [...state, { ...chosenProduct, qty: 1 }];
    } else {
      // Product already exists in the cart, increment the quantity.
      return state.map(p => p.id === chosenProduct.id ? { ...p, qty: p.qty + 1 } : p);
    }
  }),

  // Handles the removeChosenProduct action.
  on(removeChosenProduct, (state, { productId }) => {
    const foundProduct = state.find(p => p.id === productId);
    if (!foundProduct) {
      return state;
    } else {
      // Product exists in the cart, decrement the quantity or remove the product.
      return state
        .map(p => p.id === productId ? { ...p, qty: p.qty - 1 } : p)
        .filter(p => p.qty > 0);
    }
  }),
);