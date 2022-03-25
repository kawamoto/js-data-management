import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const setTodo = createAction(
  '[Todo] Set Todo',
  props<{ todo: Todo }>()
);

export const getTodo = createAction(
  '[Todo] Get Todo'
)

export const getTodoFromMemory = createAction(
  '[Todo] Get Todo from Memory'
)

export const getTodoFromLocal = createAction(
  '[Todo] Get Todo from Local'
)

export const getTodoFromRemote = createAction(
  '[Todo] Get Todo from Remote'
)
