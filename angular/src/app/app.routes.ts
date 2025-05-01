import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: 'plain', loadComponent: () => import('./plain/plain.component').then(m => m.PlainComponent) },
  { path: 'ngrx-plain', loadChildren: () => import('./ngrx-plain/ngrx-plain.routes').then(m => m.routes) },
  { path: 'ngrx-entity', loadChildren: () => import('./ngrx-entity/ngrx-entity.routes').then(m => m.routes) },
  { path: 'ngrx-component-store', loadComponent: () => import('./ngrx-component-store/ngrx-component-store.component').then(m => m.NgrxComponentStoreComponent) },
  { path: 'ngrx-signal-store', loadComponent: () => import('./ngrx-signal-store/ngrx-signal-store.component').then(m => m.NgrxSignalStoreComponent) },
  { path: 'ngrx-data', loadComponent: () => import('./ngrx-data/ngrx-data.component').then(m => m.NgrxDataComponent) },
];
