import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PlainRoutingModule } from './plain-routing.module';
import { PlainComponent } from './plain.component';
import { DataService } from './data/data.service';

@NgModule({ imports: [CommonModule,
        PlainRoutingModule, PlainComponent], providers: [DataService, provideHttpClient(withInterceptorsFromDi())] })
export class PlainModule { }
