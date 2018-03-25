import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
 
@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivedTodosPage');
  }

}
