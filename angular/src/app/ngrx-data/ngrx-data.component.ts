import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { NgFor, AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-ngrx-data',
    templateUrl: './ngrx-data.component.html',
    styleUrls: [],
    imports: [NgFor, AsyncPipe, JsonPipe]
})
export class NgrxDataComponent {
  todos$: Observable<Todo[]>
  constructor(
    private todoService: TodoService
  ) {
    this.todos$ = this.todoService.entities$
  }

  getData() {
    this.todoService.getAll()
  }
}
