import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Todo } from './todo.store';

@Injectable()
export class TodoService {
  storage = localStorage || window.localStorage;
  source = 'https://jsonplaceholder.typicode.com/todos/1';
  data: Todo;
  lastDuration$ = new Subject<number>();
  constructor(private http: HttpClient) { }

  getData(): Observable<Todo> {
    if (this.data) {
      return of(this.data);
    }
    const localData = this.getDataFromLocal();
    if (localData) {
      return localData;
    }
    return this.getDataFromRemote();
  }

  getDataFromMemory() {
    const start = performance.now()
    const res = of(this.data);
    const end = performance.now()
    const diff = end - start;
    this.lastDuration$.next(diff);
    return res;
  }

  getDataFromLocal() {
    const start = performance.now()
    const res = this.fetchDataFromLocal()
    const end = performance.now()
    const diff = end - start;
    this.lastDuration$.next(diff);
    return res;
  }

  private fetchDataFromLocal() {
    const data = JSON.parse(this.storage.getItem(this.source));
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
    return this.http.get(this.source).pipe(
      tap((data: Todo) => {
        this.storage.setItem(this.source, JSON.stringify(data));
        this.data = data;
      })
    );
  }
}
