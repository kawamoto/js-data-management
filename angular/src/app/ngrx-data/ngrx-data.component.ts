import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-ngrx-data',
  templateUrl: './ngrx-data.component.html',
  styleUrls: []
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
