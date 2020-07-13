import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './page/main/main.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [MainComponent, ProductsComponent],
  imports: [
    CommonModule,
    
    HomeRoutingModule,
    CarouselModule 
  ]
})
export class HomeModule { }
