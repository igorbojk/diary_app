import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppAsideComponent } from './components/app-aside/app-aside.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import {TodoListService} from './services/todo-list.service';
import { CommentsComponent } from './components/comments/comments.component';
import {FormsModule} from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    AppAsideComponent,
    AppContentComponent,
    ItemsListComponent,
    ListItemComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'diary-app',
      storageType: 'localStorage'
    })
  ],
  providers: [
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
