import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { DefaultDataServiceConfig, EntityDataModule } from "@ngrx/data";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { entityConfig } from "./entity-metadata";
import { DataService } from "./plain/data/data.service";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://jsonplaceholder.typicode.com'
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([]), EntityDataModule.forRoot(entityConfig)),
    DataService, { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }, provideHttpClient(withInterceptorsFromDi())
  ]
}