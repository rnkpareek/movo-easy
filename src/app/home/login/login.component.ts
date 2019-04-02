import { Component, OnInit } from '@angular/core';
import {LoginInterface} from './login.interface';
import {LoginService} from './login.service';
import { Router, Params } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginCredentials: LoginInterface;
  constructor(public loginService:LoginService ,private _router: Router,private firestore: AngularFirestore,) {
    this.loginCredentials = {
      email: '',
      password: ''
    };
   }

  ngOnInit() {

  }

  

  login(){
  	 this.firestore.collection('User').add(this.loginCredentials);
  
    // this.loginService.doLogin(this.loginCredentials)
    // .then(res => {
    //   console.log("getting true");
    //   this._router.navigate(['/dashboard']);
    // }, err => {
    //   console.log(err);
    //  console.log("false data ")
    // })
  }

}
