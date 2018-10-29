import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class DataService {
  storage = localStorage || window.localStorage;
  source = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.source).pipe(
      tap((data: any) => {
        this.storage.setItem(this.source, JSON.stringify(data));
      })
    );
  }
}
