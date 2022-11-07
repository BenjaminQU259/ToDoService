import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { TodoApiService } from '../api/todo.api.service';
import { ToDoItem } from '../model/ToDoItem';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpClientSpy: any;
  const url = 'https://localhost:5001/todos';

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'post',
      'get',
      'delete',
    ]);
    TestBed.configureTestingModule({
      providers: [
        TodoApiService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create todoItem via mockHttp post', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    httpClientSpy.post.and.returnValue(of({}));
    // when
    service.create(todoItem);
    // then
    expect(httpClientSpy.post).toHaveBeenCalledWith(`${url}/`, todoItem);
  });

  it('should respond error when create fails', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    httpClientSpy.post.and.returnValue(
      throwError(() => ({ errorMessage: 'create failed' }))
    );
    // when
    service.create(todoItem);
    // then
    expect(service.errorMessage).toEqual('create failed');
  });

  it('should get todoItem when get by id', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    httpClientSpy.post.and.returnValue(of({}));
    service.create(todoItem);
    // when
    service.findById(9);
    // then
    expect(httpClientSpy.get).toHaveBeenCalledWith(`${url}/9`);
  });

  it('should remove todoItem when delete by id', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    httpClientSpy.post.and.returnValue(of({}));
    service.create(todoItem);
    // when
    service.delete(9);
    // then
    expect(httpClientSpy.delete).toHaveBeenCalledWith(`${url}?id=9`);
  });
});
