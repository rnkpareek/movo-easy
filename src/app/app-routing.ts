import { Routes } from '@angular/router';

// Auth Guard Service
// import {AuthGuard} from './auth/auth.guard'
// //components
// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoute: Routes = [
  {
    path: '',
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    redirectTo: '/movoeasy',
    pathMatch: 'full'
  },
];
