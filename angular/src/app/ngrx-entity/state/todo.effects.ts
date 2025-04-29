import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, filter } from 'rxjs/operators';
import { getTodo, getTodoFromLocal, getTodoFromMemory, getTodoFromRemote, setTodo } from './todo.actions';
import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {
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
          filter((v) => !!v),
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

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }
}
