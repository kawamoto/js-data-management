import { Component } from '@angular/core';
import { DataService, Todo } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Todo;

  constructor(private dataService: DataService) {}

  getData() {
    this.dataService.getData().subscribe((data: Todo) => {
      this.data = data;
    });
  }

  getDataFromLocal() {
    this.data = this.dataService.getDataFromLocal();
  }
}
