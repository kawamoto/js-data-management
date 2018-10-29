import { Component } from '@angular/core';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = null;

  constructor(private dataService: DataService) {}

  getData() {
    this.dataService.getData().subscribe((data: any) => {
      this.data = data;
    });
  }

  getDataFromLocal() {
    this.data = this.dataService.getDataFromLocal();
  }
}
