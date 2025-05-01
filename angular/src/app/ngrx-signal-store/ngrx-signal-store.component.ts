import { JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { TodoService } from "./todo.service";
import { TodoStore } from "./todo.store";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ngrx-signal-store',
  template: `
    <button (click)='getData()'>Get Data</button>
    <button (click)='getDataFromMemory()'>Get Data from memory</button>
    <button (click)='getDataFromLocal()'>Get Data from local</button>
    <button (click)='getDataFromRemote()'>Get Data from remote</button>
    <ul>
      <li>
        {{ store.todo() | json }}
      </li>
    </ul>
  `,
  imports: [JsonPipe],
  providers: [TodoStore, TodoService]
})
export class NgrxSignalStoreComponent {
  store = inject(TodoStore)

  getData() {
    this.store.getTodo()
  }

  getDataFromMemory() {
    this.store.getTodoFromMemory()
  }

  getDataFromLocal() {
    this.store.getTodoFromLocal()
  }

  getDataFromRemote() {
    this.store.getTodoFromRemote()
  }
}
