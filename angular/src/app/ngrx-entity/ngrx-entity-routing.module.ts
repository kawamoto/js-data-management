import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgrxEntityComponent } from './ngrx-entity.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxEntityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxEntityRoutingModule { }
