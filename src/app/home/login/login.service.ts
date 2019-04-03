import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(value) {
  	console.log("---->ser",value);
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {

        resolve(res);
      }, err => reject(err));
    });
  }
}
