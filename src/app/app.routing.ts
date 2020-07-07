import { Routes } from '@angular/router';

// Layouts
import { CommonLayoutComponent } from './common/common-layout.component';
import { AuthenticationLayoutComponent } from './common/authentication-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: CommonLayoutComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            }
        ]
    },
    {
        path: '',
        component: AuthenticationLayoutComponent,
        children: [
            {
                path: 'authentication',
                loadChildren: () => import('./extras/authentication.modules').then(m => m.AuthenticationModule)
            }
        ]
    }
];

