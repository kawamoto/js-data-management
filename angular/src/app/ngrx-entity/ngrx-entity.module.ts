import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxEntityRoutingModule } from './ngrx-entity-routing.module';
import { NgrxEntityComponent } from './ngrx-entity.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoFeature } from './state/todo.reducer';
import { TodoEffects } from './state/todo.effects';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TodoService } from './state/todo.service';

@NgModule({ declarations: [NgrxEntityComponent], imports: [CommonModule,
        NgrxEntityRoutingModule,
        StoreModule.forFeature(todoFeature),
        EffectsModule.forFeature([TodoEffects])], providers: [TodoService, provideHttpClient(withInterceptorsFromDi())] })
export class NgrxEntityModule { }
