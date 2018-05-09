import { ActionReducer } from '@ngrx/store';

import { BoardModel } from "./board/board.type";

export interface AppState {
    readonly board: ActionReducer<BoardModel[]>
}