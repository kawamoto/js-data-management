import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgrxPlainRoutingModule } from './ngrx-plain-routing.module';
import { NgrxPlainComponent } from './ngrx-plain.component';

@NgModule({
  imports: [
    CommonModule,
    NgrxPlainRoutingModule,
    HttpClientModule
  ],
  declarations: [NgrxPlainComponent]
})
export class NgrxPlainModule { }
