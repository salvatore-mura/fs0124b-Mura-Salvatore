import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosUncompletedComponent } from './todos-uncompleted.component';

describe('TodosUncompletedComponent', () => {
  let component: TodosUncompletedComponent;
  let fixture: ComponentFixture<TodosUncompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosUncompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodosUncompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
