import { inject } from "@angular/core";
import { patchState, signalStore, withMethods, withProps, withState } from "@ngrx/signals";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from "rxjs";
import { TodoService } from "./todo.service";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type TodoState = {
  todo: Todo | undefined;
};

const initialState: TodoState = {
  todo: undefined,
};

export const TodoStore = signalStore(
  withState(initialState),
  withProps(() => ({
    todoService: inject(TodoService)
  })),
  withMethods(({ todoService, ...store }) => ({
    getTodo: rxMethod<void>(
      pipe(
        switchMap(() => todoService.getData().pipe(
          tap({
            next: (todo) => patchState(store, { todo })
          })
        )),
      )
    ),
    getTodoFromMemory: rxMethod<void>(
      pipe(
        switchMap(() => todoService.getDataFromMemory().pipe(
          tap({
            next: (todo) => patchState(store, { todo })
          })
        )),
      )
    ),
    getTodoFromLocal: rxMethod<void>(
      pipe(
        switchMap(() => todoService.getDataFromLocal().pipe(
          tap({
            next: (todo) => patchState(store, { todo })
          })
        )),
      )
    ),
    getTodoFromRemote: rxMethod<void>(
      pipe(
        switchMap(() => todoService.getDataFromRemote().pipe(
          tap({
            next: (todo) => patchState(store, { todo })
          })
        )),
      )
    ),
  })),
);
