import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService, Todo } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data$: Observable<Todo>;
  lastDuration$: Subject<number>;

  constructor(private dataService: DataService) {
    this.lastDuration$ = this.dataService.lastDuration$;
  }

  getData() {
    this.data$ = this.dataService.getData()
  }

  getDataFromMemory() {
    this.data$ = this.dataService.getDataFromMemory();
  }

  getDataFromLocal() {
    this.data$ = this.dataService.getDataFromLocal();
  }

  getDataFromRemote() {
    this.data$ = this.dataService.getDataFromRemote();
  }
}
