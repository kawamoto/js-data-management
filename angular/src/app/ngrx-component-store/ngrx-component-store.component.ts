import { Component } from '@angular/core';
import { TodoStore } from './todo.store';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-ngrx-component-store',
    templateUrl: './ngrx-component-store.component.html',
    styleUrls: [],
    providers: [TodoStore],
    imports: [AsyncPipe, JsonPipe]
})
export class NgrxComponentStoreComponent {
  todo$ = this.store.todo$;
  constructor(
    private store: TodoStore
  ) {}

  getData() {
    this.store.getTodo(1)
  }

  getDataFromMemory() {
    this.store.getTodoFromMemory(1)
  }

  getDataFromLocal() {
    this.store.getTodoFromLocal(1)
  }

  getDataFromRemote() {
    this.store.getTodoFromRemote(1)
  }
}
