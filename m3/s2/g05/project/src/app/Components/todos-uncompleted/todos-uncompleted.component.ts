import { Component } from '@angular/core';
import {TodosService} from '../../Service/todos.service'
import {Todo} from '../../Moduls/todo'

@Component({
  selector: 'app-todos-uncompleted',
  templateUrl: './todos-uncompleted.component.html',
  styleUrl: './todos-uncompleted.component.scss'
})
export class TodosUncompletedComponent {
  constructor(private todosService: TodosService) { }
  unactiveTodos: Todo[] = [];
  ngOnInit(): void {
    this.unactiveTodos = this.todosService.todosNonCompletati();
  }
  getUserName(userId: number): string {
    return this.todosService.findUserName(userId);
  }
  toggleCompleted(todo: Todo) {
    this.todosService.toggleCompleted(todo);
    this.unactiveTodos = this.todosService.todosNonCompletati()
  }
}
