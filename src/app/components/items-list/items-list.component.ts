import {Component, OnInit} from '@angular/core';
import {Iitem} from '../../interfaces/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  public listItems: Array<Iitem> = [
    {
      _id: '_555',
      title: 'First item with custom name',
      comments: [
        'aaa',
        'bbb'
      ]
    },
    {
      _id: '_666',
      title: 'Second item is active',
      comments: [
        'aaa'
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
