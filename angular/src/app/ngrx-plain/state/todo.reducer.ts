import { createFeature, createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';

import * as TodoPageActions from './todo-page.actions';

interface State {
  todo: Todo;
  loading: boolean;
}

const initialState: State = {
  todo: null,
  loading: false,
};

export const todoFeature = createFeature({
  name: 'todo',
  reducer: createReducer(
    initialState,
    on(TodoPageActions.setTodo, (state, { todo }): State => ({
      ...state,
      todo: todo,
    })),
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectTodoState, // feature selector
  selectTodo,
  selectLoading, // selector for `loading` property
} = todoFeature;
