import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './app-state.type';

@Injectable()
export class StateManager {
    constructor(private store: Store<AppState>) {}

    getBoard() {
        return this.store.select('board');
    }
}