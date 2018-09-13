import {Component, OnInit} from '@angular/core';
import {Iitem} from '../../interfaces/item';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {


  public title: String;

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
  }

  get items() {
    return this.todoListService.getTodoList();
  }

  createTodoItem() {
    this.todoListService.createTodoItem(this.title);
    this.title = null;
  }

}
