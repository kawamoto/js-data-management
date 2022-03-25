import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'plain', loadChildren: () => import('./plain/plain.module').then(m => m.PlainModule)},
  { path: 'ngrx-plain', loadChildren: () => import('./ngrx-plain/ngrx-plain.module').then(m => m.NgrxPlainModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
