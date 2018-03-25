import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = true;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }
  openTodoAlert() {
    let addTodoAlert = this.alertCtrl.create({
      title: "Add a todo",
      message: "Enter your todo",
      inputs: [{
        type: "text",
        name: "addTodoInput"
      }],
      buttons: [{
        text: "Cancel"
      },
      {
        text: "Add Todo",
        handler: (inputData) => {
          let todoText;
          todoText = inputData.addTodoInput;
          this.todos.push(todoText);
        }
      }]
    });
    addTodoAlert.present();
  }
  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }
  itemReordered($event) {
    reorderArray(this.todos, $event);
  }
}
