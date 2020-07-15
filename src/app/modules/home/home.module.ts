import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './page/main/main.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsComponent } from './page/products/products.component';
import { ProductsDetailsComponent } from './page/products-details/products-details.component';


@NgModule({
  declarations: [MainComponent, ProductsComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    
    HomeRoutingModule,
    CarouselModule 
  ]
})
export class HomeModule { }
