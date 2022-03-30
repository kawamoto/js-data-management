import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgrxComponentStoreRoutingModule } from './ngrx-component-routing.module';
import { NgrxComponentStoreComponent } from './ngrx-component-store.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    NgrxComponentStoreRoutingModule,
    HttpClientModule,
  ],
  providers: [TodoService],
  declarations: [NgrxComponentStoreComponent]
})
export class NgrxComponentStoreModule { }
