import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NvD3Module } from 'ng2-nvd3';
import { ThemeConstants } from 'src/app/shared/config/theme-constant';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    NvD3Module,
    PerfectScrollbarModule
  ],
  providers: [
    ThemeConstants
]
})
export class AdminModule { }
