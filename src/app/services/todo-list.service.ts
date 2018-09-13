import {Injectable} from '@angular/core';

@Injectable()
export class TodoListService {

  private activeTodoItemId: String;

  constructor() {
  }

  setActiveTodoItemId(id) {
    this.activeTodoItemId = id;
  }

  getActiveTodoItemId() {
    return this.activeTodoItemId;
  }

}
