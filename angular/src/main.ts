import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { DataService } from './app/plain/data/data.service';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { entityConfig } from './app/entity-metadata';
import { AppComponent } from './app/app.component';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com'
}



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([]), EntityDataModule.forRoot(entityConfig)),
    DataService, { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }, provideHttpClient(withInterceptorsFromDi())
  ]
})
  .catch(err => console.error(err));
