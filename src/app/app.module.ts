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
    AngularFireAuthModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
