import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
import {appRoute} from './app-routing';

// component
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// extra
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
