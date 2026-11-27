import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTodos } from './state/todo.reducer';
import { getTodo, getTodoFromLocal, getTodoFromMemory, getTodoFromRemote } from './state/todo.actions';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ngrx-entity',
  templateUrl: './ngrx-entity.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [JsonPipe]
})
export class NgrxEntityComponent {
  private store = inject(Store);

  todos = this.store.selectSignal(selectAllTodos)

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
