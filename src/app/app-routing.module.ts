import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: 'start', component: StartPageComponent },
  { path: 'stuff', component: ProductListComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
