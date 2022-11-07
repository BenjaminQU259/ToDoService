import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TodoApiService } from './todo.api.service';

describe('TodoApiService', () => {
  let service: TodoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TodoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
