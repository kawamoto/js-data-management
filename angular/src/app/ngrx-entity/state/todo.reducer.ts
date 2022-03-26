import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Todo } from './todo.model';

import * as TodoActions from './todo.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

interface State extends EntityState<Todo>{}
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const initialState: State = adapter.getInitialState();

export const todoFeature = createFeature({
  name: 'todo',
  reducer: createReducer(
    initialState,
    on(TodoActions.setTodo, (state, { todo }): State => {
      return adapter.addOne(todo, state);
    }),
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTodoState, // feature selector
} = todoFeature;

const {
  selectAll
} = adapter.getSelectors();

export const selectAllTodos = createSelector(selectTodoState, selectAll);
