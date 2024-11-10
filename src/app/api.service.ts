import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllTodos(): Observable<Todo[]> {
    return this.http.get(API_URL + '/todos').pipe(
      map((response: any) => {
        const todos = response
        return todos;
      }, catchError(this.handleError))
    );
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }
}
