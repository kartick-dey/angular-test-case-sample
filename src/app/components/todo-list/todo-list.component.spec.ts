import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoListComponent } from './todo-list.component';
import { ApiService } from 'src/app/api.service';
import { Todo } from 'src/app/todo';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj('ApiService', ['getAllTodos']);
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [{ provide: ApiService, useValue: mockApiService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize todos on ngOnInit', () => {
    const mockTodos: Array<Todo> = [
      { id: 1, title: 'Test Todo 1', complete: false },
      { id: 2, title: 'Test Todo 2', complete: true },
    ];
    mockApiService.getAllTodos.and.returnValue(of(mockTodos));

    component.ngOnInit();

    expect(component.todos).toEqual(mockTodos);
  });
});
