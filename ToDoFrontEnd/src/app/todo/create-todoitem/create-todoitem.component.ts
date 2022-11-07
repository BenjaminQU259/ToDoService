import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../model/ToDoItem';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-create-todoitem',
  templateUrl: './create-todoitem.component.html',
  styleUrls: ['./create-todoitem.component.scss'],
})
export class CreateTodoitemComponent implements OnInit {
  public toDoItem: ToDoItem;

  constructor(private todoService: TodoService) {
    this.toDoItem = new ToDoItem(0, '1', '2', false);
  }

  ngOnInit(): void {}

  public createToDoItem(): void {
    this.todoService.create(this.toDoItem);
  }
}
