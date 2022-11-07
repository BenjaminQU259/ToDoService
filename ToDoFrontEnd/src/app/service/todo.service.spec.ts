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
    const id = 1;
    // when
    service.findById(id);
    // then
    expect(httpClientSpy.get).toHaveBeenCalledWith(`${url}/${id}`);
  });

  it('should respond error when get by id fails', () => {
    // given
    const id = 1;
    httpClientSpy.get.and.returnValue(
      throwError(() => ({ errorMessage: 'get failed' }))
    );
    // when
    service.findById(id);
    // then
    expect(service.errorMessage).toEqual('');
  });

  it('should remove todoItem when delete by id', () => {
    // given
    const id = 1;
    httpClientSpy.delete.and.returnValue(of({}));
    // when
    service.delete(id);
    // then
    expect(httpClientSpy.delete).toHaveBeenCalledWith(`${url}?id=${id}`);
  });

  it('should respond error when delete fails', () => {
    // given
    const id = 1;
    httpClientSpy.delete.and.returnValue(
      throwError(() => ({ errorMessage: 'delete failed' }))
    );
    // when
    service.delete(id);
    // then
    expect(service.errorMessage).toEqual('delete failed');
  });
});
