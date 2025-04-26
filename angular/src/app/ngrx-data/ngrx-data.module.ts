import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgrxDataRoutingModule } from './ngrx-data-routing.module';
import { NgrxDataComponent } from './ngrx-data.component';
import { TodoService } from './todo.service';

@NgModule({ declarations: [NgrxDataComponent], imports: [CommonModule,
        NgrxDataRoutingModule], providers: [TodoService, provideHttpClient(withInterceptorsFromDi())] })
export class NgrxDataModule { }
