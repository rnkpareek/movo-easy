import { Routes } from '@angular/router';

// Auth Guard Service
// import {AuthGuard} from './auth/auth.guard'
// //components
 
 import { DashboardComponent } from './dashboard.component';

export const dashRoute: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:
    [

   
    ]
  }
];
