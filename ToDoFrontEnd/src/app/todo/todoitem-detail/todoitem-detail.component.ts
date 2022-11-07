import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from '../../service/todo.service';
import { ToDoItem } from '../../model/ToDoItem';

@Component({
  selector: 'app-todoitem-detail',
  templateUrl: './todoitem-detail.component.html',
  styleUrls: ['./todoitem-detail.component.scss'],
})
export class TodoitemDetailComponent implements OnInit {
  toDoItem: ToDoItem = new ToDoItem(0, '', '', false);

  constructor(
    public todoService: TodoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoService.findById(Number(id)).subscribe((res: ToDoItem) => {
      this.toDoItem = res;
    });
  }
}
