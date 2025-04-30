import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService, Todo } from './data/data.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-plain',
  templateUrl: './plain.component.html',
  styleUrls: [],
  imports: [CommonModule, AsyncPipe, JsonPipe],
  providers: [DataService],
})
export class PlainComponent {
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
