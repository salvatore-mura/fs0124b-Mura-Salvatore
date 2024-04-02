import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TodosComponent } from './Components/todos/todos.component';
import { UsersComponent } from './Components/users/users.component';
import { TodosUncompletedComponent } from './Components/todos-uncompleted/todos-uncompleted.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Todo',
    component: TodosComponent
  },
  {
    path: 'Todo-uncompleted',
    component: TodosUncompletedComponent
  },
  {
    path: 'Users',
    component: UsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
