import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoServiceProvider {
  private todos =[];

  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }
  addTodo(todoText) {
    this.todos.push(todoText);
  }
  getTodo() {
    return this.todos;
  }
}
