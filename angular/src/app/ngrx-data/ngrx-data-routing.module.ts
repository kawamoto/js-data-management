import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgrxDataComponent } from './ngrx-data.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxDataRoutingModule { }
