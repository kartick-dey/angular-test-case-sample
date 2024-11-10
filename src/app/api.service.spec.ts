import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../environments/environment';
import { Todo } from './todo';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make a GET request to the correct URL', () => {
    service.getAllTodos().subscribe();

    const req = httpMock.expectOne(`${environment.apiUrl}/todos`);
    expect(req.request.method).toBe('GET');
  });

  it('should return the expected data', () => {
    const mockTodos: Todo[] = [
      { id: 1, title: 'Read article', complete: false },
      { id: 2, title: 'Write article', complete: false },
    ];

    service.getAllTodos().subscribe((todos) => {
      expect(todos.length).toBe(2);
      expect(todos).toEqual(mockTodos);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/todos`);
    req.flush(mockTodos);
  });

  it('should handle errors correctly', () => {
    const mockError = new ErrorEvent('Network error', {
      message: 'Failed to connect to the server',
    });

    service.getAllTodos().subscribe(
      () => fail('Expected an error, not todos'),
      (error) => {
        expect(error.error.message).toContain(
          'Failed to connect to the server'
        );
      }
    );

    const req = httpMock.expectOne(`${environment.apiUrl}/todos`);
    req.error(mockError);
  });
});
