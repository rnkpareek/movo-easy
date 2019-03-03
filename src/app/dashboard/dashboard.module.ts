import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [VendorDashboardComponent]
})
export class DashboardModule { }
