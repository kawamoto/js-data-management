import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { DefaultDataServiceConfig, provideEntityData, withEffects } from "@ngrx/data";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { entityConfig } from "./entity-metadata";
import { DataService } from "./plain/data/data.service";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com'
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideEffects(),
    provideEntityData(entityConfig, withEffects()),
    importProvidersFrom(BrowserModule),
    DataService, { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }, provideHttpClient(withInterceptorsFromDi())
  ]
}