import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgrxPlainComponent } from './ngrx-plain.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxPlainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxPlainRoutingModule { }
