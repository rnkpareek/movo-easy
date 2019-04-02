import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
//import {AuthGuard} from '../../auth/auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }
 
  rolevalues;
  public _opened: boolean = false;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  ngOnInit() {
  

  }
  logout(){
    console.log("click")
   this._router.navigate(['/']);

    
    //this.authGuard.logout();
  }
 
}
