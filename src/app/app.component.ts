import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { WaitingPage } from '../pages/waiting-page/waiting-page';
import { LoginPage } from '../pages/login-page/login-page';

import { Auth } from '../providers/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  authenticated: boolean;
  rootPage:any = WaitingPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public authService: Auth) {
    this.authenticated = false;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.authService.getAuth().subscribe(state => {
        this.authenticated = this.authService.authenticated;

        if(this.authenticated) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
        }
      });
    });
  }
}
