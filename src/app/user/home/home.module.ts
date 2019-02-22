import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

// router
import {mainRoute} from './main-routing';
// component
import {MainComponent} from './main/main.component';
// extra
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap';
import { HeaderComponent } from './header/header.component';
import { TabsModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoute),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [HomeComponent,
    MainComponent,
    HeaderComponent]
})
export class HomeModule { }
