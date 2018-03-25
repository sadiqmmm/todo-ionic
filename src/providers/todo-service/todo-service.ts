import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoServiceProvider {
  private todos = [];
  private archivedTodos = [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }
  addTodo(todoText) {
    this.todos.push(todoText);
  }
  getTodo() {
    return this.todos;
  }
  archivedTodo(todoIndex) {
    let todoToBeArchived = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.archivedTodos.push(todoToBeArchived);
  }
  getArchivedTodos() {
    return this.archivedTodos;
  }
  editTodo(todo, todoIndex) {
    this.todos[todoIndex] = todo;
  }

}
