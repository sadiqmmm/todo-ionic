import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoServiceProvider } from './../../providers/todo-service/todo-service';

@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {
  public archivedTodos = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private todoServiceProvider: TodoServiceProvider) {
  }

  ionViewDidLoad() {
    this.archivedTodos = this.todoServiceProvider.getArchivedTodos();
  }

}
