import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class DataService {
  storage = localStorage || window.localStorage;
  source = 'https://jsonplaceholder.typicode.com/todos/1';
  data;
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    if (this.data) {
      return of(this.data);
    }
    const localData = this.getDataFromLocal();
    if (localData) {
      return of(localData);
    }
    return this.getDataFromRemote();
  }

  getDataFromLocal() {
    const data = JSON.parse(this.storage.getItem(this.source));
    this.data = data;
    return data;
  }

  getDataFromRemote(): Observable<any> {
    return this.http.get(this.source).pipe(
      tap((data: any) => {
        this.storage.setItem(this.source, JSON.stringify(data));
        this.data = data;
      })
    );
  }
}
