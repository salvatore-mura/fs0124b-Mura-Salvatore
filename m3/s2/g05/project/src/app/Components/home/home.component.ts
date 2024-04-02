import { Component } from '@angular/core';
import {TodosService} from '../../Service/todos.service'
import { Todo } from '../../Moduls/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private todosService: TodosService) { }
  toggleCompleted(todo: Todo): void {
    this.todosService.toggleCompleted(todo);
  }
  getUserName(userId: number): string {
    return this.todosService.findUserName(userId);
  }
  get todos(): Todo[] {
    return this.todosService.getTodos();
  }
}
