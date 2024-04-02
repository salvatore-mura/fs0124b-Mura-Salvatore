import { Injectable } from '@angular/core';
import { todos } from '../Arrays/todos';
import { users } from '../Arrays/users';
import { Todo } from '../Moduls/todo';
import { User } from '../Moduls/user';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  todos = todos
  users = users

  constructor() {
  }
  setTodos(todos: Todo[]): void {
    this.todos = todos;
  }

  getTodos(): Todo[] {
    return this.todos;
  }
  todosCompletati() {
    return this.todos.filter(todo => todo.completed === true);
  }
  todosNonCompletati() {
    return this.todos.filter(todo => todo.completed === false);
  }
  findUserName(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? `${user.firstName} ${user.lastName}` : 'nontrovato'
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }
  getUsers(): User[] {
    return this.users;
  }

  getUserPosts(userId: number): Todo[] {
    return this.todos.filter(todo => todo.userId === userId);
  }
}
