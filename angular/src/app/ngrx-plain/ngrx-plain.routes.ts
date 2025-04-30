import { Routes } from "@angular/router";
import { NgrxPlainComponent } from "./ngrx-plain.component";
import { provideState } from "@ngrx/store";
import { todoFeature } from "./state/todo.reducer";
import { provideEffects } from "@ngrx/effects";
import { TodoEffects } from "./state/todo.effects";
import { TodoService } from "./state/todo.service";

export const routes: Routes = [
  {
    path: '',
    component: NgrxPlainComponent,
    providers: [provideState(todoFeature), provideEffects([TodoEffects]), TodoService]
  }
]