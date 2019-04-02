import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {dashRoute} from './dash-routing';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NavbarComponent} from './navbar/navbar.component';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(dashRoute),
     FormsModule,
     SidebarModule.forRoot(),
  ],
  declarations: [DashboardComponent,NavbarComponent]
})
export class DashboardModule { }
