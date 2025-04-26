import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgrxComponentStoreRoutingModule } from './ngrx-component-routing.module';
import { NgrxComponentStoreComponent } from './ngrx-component-store.component';
import { TodoService } from './todo.service';

@NgModule({ declarations: [NgrxComponentStoreComponent], imports: [CommonModule,
        NgrxComponentStoreRoutingModule], providers: [TodoService, provideHttpClient(withInterceptorsFromDi())] })
export class NgrxComponentStoreModule { }
