import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";
import { TodoService } from "./todo.service";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todo: Todo;
}

@Injectable()
export class TodoStore extends ComponentStore<TodoState> {

  constructor(private readonly todoService: TodoService) {
    super({todo:null});
  }

  readonly getTodo = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      switchMap(() => this.todoService.getData().pipe(
        tap({
          next: (todo) => this.setTodo(todo)
        })
      ))
    )
  })
  readonly getTodoFromMemory = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      switchMap(() => this.todoService.getDataFromMemory().pipe(
        tap({
          next: (todo) => this.setTodo(todo)
        })
      ))
    )
  });
  readonly getTodoFromLocal = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      switchMap(() => this.todoService.getDataFromLocal().pipe(
        tap({
          next: (todo) => this.setTodo(todo)
        })
      ))
    )
  });
  readonly getTodoFromRemote = this.effect((id$: Observable<number>) => {
    return id$.pipe(
      switchMap(() => this.todoService.getDataFromRemote().pipe(
        tap({
          next: (todo) => this.setTodo(todo)
        })
      ))
    )
  });
  readonly setTodo = this.updater((_state, todo: Todo) => ({
    todo: todo
  }))
  readonly todo$: Observable<Todo> = this.select(state => state.todo);
}
