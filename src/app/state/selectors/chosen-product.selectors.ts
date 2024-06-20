// Import createFeatureSelector from @ngrx/store to create a selector
import { createFeatureSelector } from '@ngrx/store';
// Import the ChosenProduct interface
import { ChosenProduct } from 'src/app/models/chosen-product.interface';    

// Use createFeatureSelector to create a selector for the 'chosenProducts' feature state
// This selector will return the entire chosenProducts array from the AppState
export const selectChosenProductsState = createFeatureSelector<ChosenProduct[]>('chosenProducts');