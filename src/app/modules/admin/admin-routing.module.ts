import { ProfileComponent } from './page/profile/profile.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AdminAuthGuard } from 'src/app/shared/guards/admin-auth.guard';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AdminAuthGuard],
    data: {permittedRoles: ['Admin']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
