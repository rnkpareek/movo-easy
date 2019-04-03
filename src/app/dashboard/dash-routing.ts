import { Routes } from '@angular/router';
import {HomeComponent1} from './home/home.component';
import{SettingComponent} from './setting/setting.component';

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
     { path: '', 
       redirectTo: 'calander', 
       pathMatch: 'full' },
    {path:'calander',
    component:SettingComponent},

    {path:'setting',
    component:HomeComponent1}

   
    ]
  }
];
