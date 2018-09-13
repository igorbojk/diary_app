import {Component, OnInit, Input} from '@angular/core';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public text: String;

  @Input() commentsArray: Array<String>;

  constructor(
    private todoListService: TodoListService
  ) {
  }

  ngOnInit() {
  }

  addComment(){
    this.todoListService.addComment(this.text);
    this.text = null;
  }

}
