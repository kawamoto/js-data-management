import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  storage = localStorage || window.localStorage;
  source = 'https://jsonplaceholder.typicode.com/todos/1';

  data = signal<Todo | undefined>(undefined);
  lastDuration = signal<number>(0);

  private _http = inject(HttpClient);

  getData() {
    if (this.data()) {
      return;
    }

    const localData = this.fetchDataFromLocal();
    if (localData) {
      return;
    }

    this.fetchDataFromRemote();
  }

  getDataFromLocal() {
    const start = performance.now();
    const res = this.fetchDataFromLocal();
    const end = performance.now();
    const diff = end - start;
    this.lastDuration.set(diff);

    return res;
  }

  private fetchDataFromLocal() {
    const data = JSON.parse(this.storage.getItem(this.source));
    if (data) {
      this.data.set(data);
      return true;
    }
    return null;
  }

  getDataFromRemote() {
    this.fetchDataFromRemote();
  }

  private fetchDataFromRemote() {
    const start = performance.now();

    this._http.get(this.source).subscribe((data: Todo) => {
      this.storage.setItem(this.source, JSON.stringify(data));
      this.data.set(data);

      const end = performance.now();
      const diff = end - start;
      this.lastDuration.set(diff);
    });
    return true;
  }
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
