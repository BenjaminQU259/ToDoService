import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoStoreService } from './todo-store.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  errorMessage: string = '';

  constructor(
    private todoStore: TodoStoreService,
    private todoApi: TodoApiService
  ) {}

  public get todoItems(): Array<ToDoItem> {
    return this.todoStore.getAll();
  }

  public findById(id: number): Observable<ToDoItem> {
    return this.todoApi.findById(id);
  }

  public create(todoItem: ToDoItem): void {
    this.todoApi.create(todoItem).subscribe({
      next: (res) => {},
      error: (err) => {
        this.errorMessage = err.errorMessage;
      },
    });
  }

  public update(updateTodoItem: ToDoItem): void {
    this.todoStore.update(updateTodoItem);
  }

  public delete(id: number): void {
    this.todoApi.delete(id).subscribe({
      next: (res) => {},
      error: (err) => {
        this.errorMessage = err.errorMessage;
      },
    });
  }
}
