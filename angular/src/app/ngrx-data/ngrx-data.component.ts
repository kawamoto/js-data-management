import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoService } from './todo.service';
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ngrx-data',
  templateUrl: './ngrx-data.component.html',
  styleUrls: [],
  imports: [JsonPipe],
  providers: [TodoService],
})
export class NgrxDataComponent {
  private _todoService = inject(TodoService)

  todos = toSignal(this._todoService.entities$)

  getData() {
    this._todoService.getAll()
  }
}
