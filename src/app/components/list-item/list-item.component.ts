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

  selectItem() {
    this.todoListService.setActiveTodoItem(this.item);
  }

  getActiveTodoItemId() {
    return this.todoListService.getActiveTodoItem() ? this.todoListService.getActiveTodoItem()._id : null;
  }

  deleteItem() {
    this.todoListService.deleteItem(this.item._id);
  }

}
