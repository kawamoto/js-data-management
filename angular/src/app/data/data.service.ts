import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  source = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.source);
  }
}
