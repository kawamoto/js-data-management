import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlainRoutingModule } from './plain-routing.module';
import { PlainComponent } from './plain.component';
import { DataService } from './data/data.service';

@NgModule({
  imports: [
    CommonModule,
    PlainRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  declarations: [PlainComponent]
})
export class PlainModule { }
