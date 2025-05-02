import { Component, inject } from '@angular/core';
import { DataService } from './data/data.service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-plain',
  templateUrl: './plain.component.html',
  styleUrls: [],
  imports: [CommonModule, JsonPipe],
  providers: [DataService],
})
export class PlainComponent {
  dataService = inject(DataService)
}
