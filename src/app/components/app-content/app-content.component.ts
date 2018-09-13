import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
  }

  getCurrentItemComments(){
    return this.todoListService.getActiveTodoItem() ? this.todoListService.getActiveTodoItem().comments : null;
  }

}
