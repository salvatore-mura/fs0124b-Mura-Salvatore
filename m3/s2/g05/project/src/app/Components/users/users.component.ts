import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../Service/todos.service';
import { Todo } from '../../Moduls/todo';
import { User } from '../../Moduls/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  postsByUser: { [userId: number]: Todo[] } = {};

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
    this.users = this.todosService.getUsers();
    this.users.forEach(user => {
      const userPosts = this.todosService.getUserPosts(user.id);
      this.postsByUser[user.id] = userPosts;
    });
  }

  getUserPosts(userId: number): Todo[] {
    return this.postsByUser[userId] || [];
  }
}


