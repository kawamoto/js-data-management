import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlainComponent } from './plain.component';

const routes: Routes = [
  {
    path: '',
    component: PlainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlainRoutingModule { }
