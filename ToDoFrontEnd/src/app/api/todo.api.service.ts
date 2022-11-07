import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient) { }

  create(todoItem: ToDoItem): Observable<void> {
    return this.http.post<void>('https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos', todoItem);
  }

  // getAll(): Observable<ToDoItem[]> {
  //   return this.http.get<ToDoItem[]>('https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos');
  // }
}
