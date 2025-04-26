import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgrxPlainRoutingModule } from './ngrx-plain-routing.module';
import { NgrxPlainComponent } from './ngrx-plain.component';
import { StoreModule } from '@ngrx/store';
import { todoFeature } from './state/todo.reducer';
import { TodoService } from './state/todo.service';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';

@NgModule({ declarations: [NgrxPlainComponent], imports: [CommonModule,
        NgrxPlainRoutingModule,
        StoreModule.forFeature(todoFeature),
        EffectsModule.forFeature([TodoEffects])], providers: [TodoService, provideHttpClient(withInterceptorsFromDi())] })
export class NgrxPlainModule { }
