import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
import {appRoute} from './app-routing';
//firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';




// component
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// extra
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    CarouselModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
   MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    AngularFireAuthModule,
    // CalendarModule.forRoot({
    //   provide: DateAdapter,
    //   useFactory: adapterFactory
    // }),
    // NgbModalModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
