import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { ArchivedTodosPage } from './../archived-todos/archived-todos';
import { TodoServiceProvider } from './../../providers/todo-service/todo-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = true;
  public archivedTodosPage = ArchivedTodosPage;

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private todoServiceProvider: TodoServiceProvider,
    private toastController: ToastController) {
    this.todos = this.todoServiceProvider.getTodo();
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
          this.todoServiceProvider.addTodo(todoText);
          addTodoAlert.onDidDismiss(() => {
            let addTodoToast = this.toastController.create({
              message: "Todo is added",
              duration: 2000
            });
            addTodoToast.present();
          });
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
  goToArchivePage() {
    this.navCtrl.push(ArchivedTodosPage);
  }
  archiveTodo(todoIndex) {
    this.todoServiceProvider.archivedTodo(todoIndex);
  }
}
