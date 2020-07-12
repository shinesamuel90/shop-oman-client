import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './page/main/main.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    
    HomeRoutingModule,
    CarouselModule 
  ]
})
export class HomeModule { }
