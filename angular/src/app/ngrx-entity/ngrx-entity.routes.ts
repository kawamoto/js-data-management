import { Routes } from "@angular/router";
import { NgrxEntityComponent } from "./ngrx-entity.component";
import { provideState } from "@ngrx/store";
import { todoFeature } from "./state/todo.reducer";
import { provideEffects } from "@ngrx/effects";
import { TodoEffects } from "./state/todo.effects";
import { TodoService } from "./state/todo.service";

export const routes: Routes = [
  {
    path: '',
    component: NgrxEntityComponent,
    providers: [provideState(todoFeature), provideEffects([TodoEffects]), TodoService]
  }
];
