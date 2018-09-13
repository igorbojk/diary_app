import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppAsideComponent } from './components/app-aside/app-aside.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import {TodoListService} from './services/todo-list.service';


@NgModule({
  declarations: [
    AppComponent,
    AppAsideComponent,
    AppContentComponent,
    ItemsListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
