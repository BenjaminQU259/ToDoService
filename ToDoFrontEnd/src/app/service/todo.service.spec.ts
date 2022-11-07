import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';

import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoService } from './todo.service';

describe('TodoService', () => {

  let service: TodoService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [
        TodoApiService,
        {provide: HttpClient, useValue: httpClientSpy}
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
    expect(httpClientSpy.post).toHaveBeenCalledWith('https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos', todoItem);
  })

  it('should respond error when create fails', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    httpClientSpy.post.and.returnValue(throwError(() => ({errorMessage: 'create failed'})));
    // when
    service.create(todoItem);
    // then
    expect(service.errorMessage).toEqual('create failed');
  })
});
