import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';


@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() todo: Todo = { id: 0, title: 'No TODO to display', complete: false };

  constructor() {
  }

}
