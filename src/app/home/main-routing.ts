import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';
import { VendorsComponent } from './vendors/vendors.component';
import {HomeComponent} from './home.component';

export const mainRoute: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
        
        { path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' },
         
        {
        path: 'about',
        component: AboutComponent
        },
        {path:'home',
        component:MainComponent},

        {
          path: 'vendors',
          component: PlanComponent
        },
        {
          path: 'vendorsplan',
          component: VendorsComponent
        }
          ]
        }
      // ,
      // {
      //   path: 'about',
      //   component: AboutComponent
      // },
      // {
      //   path: 'vendors',
      //   component: PlanComponent
      // },
      // {
      //   path: 'vendorsplan',
      //   component: VendorsComponent
      // }
];
