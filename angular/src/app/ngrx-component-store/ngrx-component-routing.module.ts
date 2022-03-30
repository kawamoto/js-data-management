import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgrxComponentStoreComponent } from './ngrx-component-store.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxComponentStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxComponentStoreRoutingModule { }
