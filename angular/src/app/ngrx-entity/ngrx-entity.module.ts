import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxEntityRoutingModule } from './ngrx-entity-routing.module';
import { NgrxEntityComponent } from './ngrx-entity.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoFeature } from './state/todo.reducer';
import { TodoEffects } from './state/todo.effects';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './state/todo.service';

@NgModule({
  imports: [
    CommonModule,
    NgrxEntityRoutingModule,
    HttpClientModule,
    StoreModule.forFeature(todoFeature),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [TodoService],
  declarations: [NgrxEntityComponent]
})
export class NgrxEntityModule { }
