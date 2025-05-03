import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTodo, getTodoFromLocal, getTodoFromMemory, getTodoFromRemote } from './state/todo-page.actions';
import { selectTodo } from './state/todo.reducer';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-plain',
  templateUrl: './ngrx-plain.component.html',
  styleUrls: [],
  imports: [CommonModule, AsyncPipe, JsonPipe]
})
export class NgrxPlainComponent {
  private store = inject(Store);

  todo = this.store.selectSignal(selectTodo)

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
