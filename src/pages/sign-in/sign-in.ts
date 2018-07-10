import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onOrder(form: NgForm, username) {
        username = username || ""
        this.navCtrl.push(OrderPage, {data: username})
  }
}
