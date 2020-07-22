import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { ProductsComponent } from './page/products/products.component';
import { ProductsDetailsComponent } from './page/products-details/products-details.component';
import { CartComponent } from './page/cart/cart.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/main',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path:'productdetails',
        component:ProductsDetailsComponent
      },
      
      {
        path:'cart',
        component:CartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
