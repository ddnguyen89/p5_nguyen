import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ThankyouPage } from '../thankyou/thankyou';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onRegister(form: NgForm, name) {
      name = name || ""
      this.navCtrl.push(ThankyouPage, {data: name})
  }
}
