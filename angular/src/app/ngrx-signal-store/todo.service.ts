import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, Subject, switchMap } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from './todo.store';

@Injectable()
export class TodoService {
  private http = inject(HttpClient);

  storage = localStorage || window.localStorage;
  source = 'https://jsonplaceholder.typicode.com/todos/1';
  data?: Todo;
  lastDuration$ = new Subject<number>();

  getData(): Observable<Todo> {
    if (this.data) {
      return of(this.data);
    }
    return this.getDataFromLocal().pipe(
      switchMap((todo) => todo ? of(todo) : this.getDataFromRemote())
    );
  }

  getDataFromMemory() {
    const start = performance.now()
    const res = of(this.data);
    const end = performance.now()
    const diff = end - start;
    this.lastDuration$.next(diff);
    return res;
  }

  getDataFromLocal(): Observable<Todo | undefined> {
    const start = performance.now()
    const res = this.fetchDataFromLocal() ?? of(undefined)
    const end = performance.now()
    const diff = end - start;
    this.lastDuration$.next(diff);
    return res;
  }

  private fetchDataFromLocal() {
    const source = this.storage.getItem(this.source)
    if (!source) { return }

    const data = JSON.parse(source);
    if (data) {
      this.data = data;
      return of(data);
    } else {
      return null;
    }
  }

  getDataFromRemote(): Observable<Todo> {
    const start = performance.now()
    return this.fetchDataFromRemote().pipe(
      tap(() => {
        const end = performance.now()
        const diff = end - start;
        this.lastDuration$.next(diff);
      })
    )
  }

  private fetchDataFromRemote() {
    return this.http.get<Todo>(this.source).pipe(
      tap((data: Todo) => {
        this.storage.setItem(this.source, JSON.stringify(data));
        this.data = data;
      })
    );
  }
}
