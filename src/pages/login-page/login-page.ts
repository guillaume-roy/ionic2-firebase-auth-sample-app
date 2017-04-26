import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Auth } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  credentials = {
  	  email: '',
  	  password: ''
  };

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private authService: Auth) {
  }

  login() {
    this.authService.login(this.credentials);
  }

  signup(){
    this.authService.register(this.credentials);
  }
}
