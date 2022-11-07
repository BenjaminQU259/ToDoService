import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ToDoItem } from '../model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  private url: string = 'https://localhost:5001/todos';
  private items: ToDoItem[] = [];

  constructor(private http: HttpClient) {}

  create(toDoItem: ToDoItem): Observable<void> {
    return this.http.post<void>(`${this.url}/`, toDoItem);
  }

  findById(id: number): Observable<ToDoItem> {
    return this.http.get<ToDoItem>(`${this.url}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}?id=${id}`);
  }
}
