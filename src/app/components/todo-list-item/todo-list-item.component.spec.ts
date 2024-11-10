import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListItemComponent } from './todo-list-item.component';
import { Todo } from 'src/app/todo';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default todo value', () => {
    expect(component.todo).toEqual({
      id: 0,
      title: 'No TODO to display',
      complete: false,
    });
  });

  it('should accept custom todo input', () => {
    const customTodo: Todo = { id: 1, title: 'Test TODO', complete: true };
    component.todo = customTodo;
    fixture.detectChanges();
    expect(component.todo).toEqual(customTodo);
  });
});
