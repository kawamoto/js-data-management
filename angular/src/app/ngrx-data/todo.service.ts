import { Injectable, inject } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService extends EntityCollectionServiceBase<Todo> {

  constructor() {
    const serviceElementsFactory = inject(EntityCollectionServiceElementsFactory);

    super('Todo', serviceElementsFactory);
  }
}
