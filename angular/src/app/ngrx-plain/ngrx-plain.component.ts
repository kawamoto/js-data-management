import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTodo, getTodoFromLocal, getTodoFromMemory, getTodoFromRemote } from './state/todo-page.actions';
import { selectTodo } from './state/todo.reducer';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-plain',
  templateUrl: './ngrx-plain.component.html',
  styleUrls: [],
  imports: [AsyncPipe, JsonPipe]
})
export class NgrxPlainComponent {
  todo$ = this.store.select(selectTodo)
  constructor(
    private store: Store
  ) { }

  getData() {
    this.store.dispatch(getTodo())
  }

  getDataFromMemory() {
    this.store.dispatch(getTodoFromMemory())
  }

  getDataFromLocal() {
    this.store.dispatch(getTodoFromLocal())
  }

  getDataFromRemote() {
    this.store.dispatch(getTodoFromRemote())
  }
}
