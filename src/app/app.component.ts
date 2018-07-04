import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { DisplayPage } from '../pages/display/display';
import { AuthService } from '../services/auth';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = DisplayPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyAKqeEYU_WlI9HQuXNiLXZpIMwEi7ftTAw",
      authDomain: "p5dnguyen.firebaseapp.com",
    })
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

