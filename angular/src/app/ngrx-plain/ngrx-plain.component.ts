import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTodo, getTodoFromLocal, getTodoFromMemory, getTodoFromRemote } from './state/todo-page.actions';
import { selectTodo } from './state/todo.reducer';

@Component({
  selector: 'app-ngrx-plain',
  templateUrl: './ngrx-plain.component.html',
  styleUrls: []
})
export class NgrxPlainComponent {
  todo$ = this.store.select(selectTodo)
  constructor(
    private store: Store
  ) {}

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
