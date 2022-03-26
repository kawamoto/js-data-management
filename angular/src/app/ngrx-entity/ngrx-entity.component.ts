import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './state/todo.reducer';
import { getTodo, getTodoFromLocal, getTodoFromMemory, getTodoFromRemote } from './state/todo.actions';

@Component({
  selector: 'app-ngrx-entity',
  templateUrl: './ngrx-entity.component.html',
  styleUrls: []
})
export class NgrxEntityComponent {
  todos$ = this.store.select(selectAllTodos)
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
