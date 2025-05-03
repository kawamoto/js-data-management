import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { getTodo, getTodoFromLocal, getTodoFromMemory, getTodoFromRemote, setTodo } from './todo-page.actions';
import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {
  private actions$ = inject(Actions);
  private todoService = inject(TodoService);

  loadTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTodo),
      mergeMap(() => this.todoService.getData()
        .pipe(
          map(todo => (setTodo({ todo }))),
          catchError(() => EMPTY)
        ))
    )
  });

  loadTodoFromMemory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTodoFromMemory),
      mergeMap(() => this.todoService.getDataFromMemory()
        .pipe(
          map(todo => (setTodo({ todo }))),
          catchError(() => EMPTY)
        ))
    )
  });

  loadTodoFromLocal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTodoFromLocal),
      mergeMap(() => this.todoService.getDataFromLocal()
        .pipe(
          map(todo => (setTodo({ todo }))),
          catchError(() => EMPTY)
        ))
    )
  });

  loadTodoFromRemote$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTodoFromRemote),
      mergeMap(() => this.todoService.getDataFromRemote()
        .pipe(
          map(todo => (setTodo({ todo }))),
          catchError(() => EMPTY)
        ))
    )
  });
}
