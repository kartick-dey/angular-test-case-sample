import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Array<Todo> = []

  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
    this.apiSvc.getAllTodos().subscribe((todos: Array<Todo>) => {
      this.todos = todos;
    });
  }
}
