import {Injectable} from '@angular/core';
import {Iitem} from '../interfaces/item';
import {LocalStorageService} from 'angular-2-local-storage';



const DEFAULT_LIST = [

  {
    _id: '8midu3iv9rc',
    title: 'First item with custom name',
    comments: [
      'A variation of the ordinary lorem ipsum text has been used\n' +
      '          in typesetting since the 1960s or earlier, when it was popu-\n' +
      '          larized by advertisements for Letraset transfer sheets. It was\n' +
      '          introduced to the Information Age in the mid-1980s',
      ' A variation of the ordinary lorem ipsum text has been used\n' +
      '          in typesetting since the 1960s or earlier, when it was popu-\n' +
      '          larized by advertisements for Letraset transfer sheets. It was\n' +
      '          introduced to the Information Age in the mid-1980s',
      'A variation of the ordinary lorem ipsum text has been used\n' +
      '          in typesetting since the 1960s or earlier, when it was popu-\n' +
      '          larized by advertisements for Letraset transfer sheets. It was\n' +
      '          introduced to the Information Age in the mid-1980sA varia-\n' +
      '          tion of the ordinary lorem ipsum text has been used in\n' +
      '          typesetting since the 1960s or earlier, when it was popular-\n' +
      '          ized by advertisements for Letraset transfer sheets. It was\n' +
      '          introduced to the Information Age in the mid-1980sA varia-\n' +
      '          tion of the ordinary lorem ipsum text has been used in\n' +
      '          typesetting since the 1960s or earlier, when it was popular-\n' +
      '          ized by advertisements for Letraset transfer sheets. It was\n' +
      '          introduced to the Information Age in the mid-1980s'
    ]
  },
  {
    _id: 'osnw6buxryo',
    title: 'Second item is active',
    comments: [
      'A variation of the ordinary lorem ipsum text has been used\n' +
      '          in typesetting since the 1960s or earlier, when it was popu-\n' +
      '          larized by advertisements for Letraset transfer sheets. It was\n' +
      '          introduced to the Information Age in the mid-1980s',
      ' A variation of the ordinary lorem ipsum text has been used\n' +
      '          in typesetting since the 1960s or earlier, when it was popu-\n' +
      '          larized by advertisements for Letraset transfer sheets. It was\n' +
      '          introduced to the Information Age in the mid-1980s',
    ]
  }
]
@Injectable()
export class TodoListService {

  private activeTodoItem: Iitem;

  private listItems: Array<Iitem> = [];

  constructor(private localStorageService: LocalStorageService) {
    this.setInitialList();
  }

  setInitialList() {
    this.listItems = this.localStorageService.get('list') ? this.localStorageService.get('list') : DEFAULT_LIST;
  }

  saveList() {
    this.localStorageService.set('list', this.listItems);
  }

  setActiveTodoItem(item) {
    this.activeTodoItem = item;
  }

  getActiveTodoItem() {
    return this.activeTodoItem;
  }

  getTodoList() {
    return this.listItems;
  }

  createTodoItem(title) {
    const item = {
      _id: Math.random().toString(36).substr(2, 16),
      title: title,
      comments: []
    };
    this.listItems.push(item);
    this.saveList();
  }

  addComment(text) {
    this.activeTodoItem.comments.push(text);
    this.saveList();
  }

  deleteItem(id) {
    this.listItems = this.listItems.filter(i => i._id !== id);
    this.activeTodoItem = null;
    this.saveList();
  }


}
