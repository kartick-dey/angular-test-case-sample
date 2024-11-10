import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiMockService {
  constructor() {}

  public getAllTodos(): Observable<Todo[]> {
    return of([
      { id: 1, title: 'Read article', complete: false },
      { id: 2, title: 'Write article', complete: false },
    ]);
  }
}
