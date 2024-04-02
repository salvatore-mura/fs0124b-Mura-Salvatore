import { Component } from '@angular/core';
import {TodosService} from '../../Service/todos.service'
import {Todo} from '../../Moduls/todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class
 TodosComponent {
  constructor(private todosService: TodosService) { }
  activeTodos: Todo[] = [];
  ngOnInit(): void {
    this.activeTodos = this.todosService.todosCompletati();
  }
  getUserName(userId: number): string {
    return this.todosService.findUserName(userId);
  }
  toggleCompleted(todo: Todo) {
    this.todosService.toggleCompleted(todo);
    this.activeTodos = this.todosService.todosCompletati();
  }

}
