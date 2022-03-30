import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgrxDataRoutingModule } from './ngrx-data-routing.module';
import { NgrxDataComponent } from './ngrx-data.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    NgrxDataRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  declarations: [NgrxDataComponent]
})
export class NgrxDataModule { }
