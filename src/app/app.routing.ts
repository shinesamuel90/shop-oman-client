import { Routes, RouterModule } from '@angular/router';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { NgModule } from '@angular/core';

 const AppRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full',
    // },
    // {
    //     path: '',
    //     component: CommonLayoutComponent,
    //     children: [
    //         {
    //             path: 'dashboard',
    //             loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    //         }
    //     ]
    // },
    // {
    //     path: '',
    //     component: AuthenticationLayoutComponent,
    //     children: [
    //         {
    //             path: 'authentication',
    //             loadChildren: () => import('./extras/authentication.modules').then(m => m.AuthenticationModule)
    //         }
    //     ]
    // }
   {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      { 
        path: 'home',
        component: HomeLayoutComponent,
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      // Fallback when no prior routes is matched
      { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes,{ useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
