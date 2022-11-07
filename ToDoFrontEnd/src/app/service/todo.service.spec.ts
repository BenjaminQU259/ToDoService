import { TestBed } from '@angular/core/testing';
import { ToDoItem } from '../model/ToDoItem';

import { TodoStoreService } from './todo-store.service';
import { TodoService } from './todo.service';

describe('TodoService', () => {

  let service: TodoService;
  let todoStoreService: TodoStoreService;
  let httpClient: any;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['post']);
    todoStoreService = new TodoStoreService();
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create todoItem via mockhttp post', () => {
    // given
    const todoItem = new ToDoItem(9, 'title', 'description', true);
    // when
    service.create(todoItem);
    // then
    expect(httpClient.post).toHaveBeenCalledWith('https://635fc244ca0fe3c21aa3d012.mockapi.io/api/todos', todoItem)

  })
});
