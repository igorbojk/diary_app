import {Component, OnInit, Input} from '@angular/core';
import {Iitem} from '../../interfaces/item';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() item: Iitem;

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit() {
  }

  selectItem(id) {
    this.todoListService.setActiveTodoItemId(id);
  }

  getActiveTodoItemId() {
    return this.todoListService.getActiveTodoItemId();
  }

}
