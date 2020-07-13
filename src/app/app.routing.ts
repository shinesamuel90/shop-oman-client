import { Routes, RouterModule } from '@angular/router';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AdminModule } from './modules/admin/admin.module';

const AppRoutes: Routes = [

   {
        path: '',
        redirectTo: '/home/main',
        pathMatch: 'full'
      },
    //   {
    // /   path:'admin',
    // //    redirectTo:'/admin/dashboard',
    // //    pathMatch:'full'
    // //  },
      {
        path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: ( ) => import('./modules/admin/admin.module').then( m => AdminModule)
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
    imports: [RouterModule.forRoot(AppRoutes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
