import { Injectable } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  private readonly _todoItems: Array<ToDoItem>;

  constructor() {
    this._todoItems = new Array<ToDoItem>();
    this._todoItems.push(new ToDoItem(0, 'Task1', 'Task1 description', false));
    this._todoItems.push(new ToDoItem(1, 'Task2', 'Task2 description', false));
    this._todoItems.push(new ToDoItem(2, 'Task3', 'Task3 description', false));
    this._todoItems.push(new ToDoItem(3, 'Task4', 'Task4 description', false));
    this._todoItems.push(new ToDoItem(4, 'Task5', 'Task5 description', false));
  }

  public getAll(): Array<ToDoItem> {
    return this._todoItems;
  }

  public findById(id: number): ToDoItem {
    let foundTodoItem = this._todoItems.find((todoItem) => todoItem.id === id);
    if (foundTodoItem === undefined) {
      foundTodoItem = new ToDoItem(-1, '', '', false);
    }
    return foundTodoItem;
  }

  public create(todoItem: ToDoItem): void {
    this._todoItems.push(
      new ToDoItem(
        this.generateId(),
        todoItem.title,
        todoItem.description,
        todoItem.isDone
      )
    );
  }

  public update(updateTodoItem: ToDoItem): void {
    const foundTodoItem = this._todoItems.find(
      (item) => item.id === updateTodoItem.id
    );
    if (foundTodoItem) {
      foundTodoItem.description = updateTodoItem.description;
      foundTodoItem.isDone = updateTodoItem.isDone;
      foundTodoItem.title = updateTodoItem.title;
    }
  }

  public delete(id: number): void {
    const index = this._todoItems.findIndex((item) => item.id === id);
    if (index >= 0) {
      this._todoItems.splice(index, 1);
    }
  }

  private generateId() {
    return Date.now();
  }
}
