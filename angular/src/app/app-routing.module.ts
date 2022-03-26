import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'plain', loadChildren: () => import('./plain/plain.module').then(m => m.PlainModule)},
  { path: 'ngrx-plain', loadChildren: () => import('./ngrx-plain/ngrx-plain.module').then(m => m.NgrxPlainModule)},
  { path: 'ngrx-entity', loadChildren: () => import('./ngrx-entity/ngrx-entity.module').then(m => m.NgrxEntityModule)},
  { path: 'ngrx-component-store', loadChildren: () => import('./ngrx-component-store/ngrx-component-store.module').then(m => m.NgrxComponentStoreModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
