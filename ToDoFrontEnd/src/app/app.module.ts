import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTodoitemComponent } from './todo/create-todoitem/create-todoitem.component';
import { ListTodoitemComponent } from './todo/list-todoitem/list-todoitem.component';
import { TodoitemDetailComponent } from './todo/todoitem-detail/todoitem-detail.component';
import { FormsModule } from '@angular/forms';
import { UpdateTodoItemComponent } from './todo/update-todo-item/update-todo-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoitemComponent,
    ListTodoitemComponent,
    TodoitemDetailComponent,
    UpdateTodoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
