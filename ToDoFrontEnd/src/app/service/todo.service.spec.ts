import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoService } from './todo.service';

describe('TodoService', () => {

  let service: TodoService;
  let httpClient: any;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [
        TodoApiService,
        {provide: HttpClient, useValue: httpClient}
      ]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create todoItem via mockHttp post', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    // when
    service.create(todoItem);
    // then
    expect(httpClient.post).toHaveBeenCalledWith('https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos', todoItem);
  })
  it('should get todoItems via mockHttp get', () => {
    // given
    // when
    service.getAll();
    // then
    expect(httpClient.get).toHaveBeenCalledWith('https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos');
  })
});
