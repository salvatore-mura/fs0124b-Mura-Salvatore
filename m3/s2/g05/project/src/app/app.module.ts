import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TodosComponent } from './Components/todos/todos.component';
import { UsersComponent } from './Components/users/users.component';
import { HomeComponent } from './Components/home/home.component';
import { TodosUncompletedComponent } from './Components/todos-uncompleted/todos-uncompleted.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    UsersComponent,
    HomeComponent,
    TodosUncompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
