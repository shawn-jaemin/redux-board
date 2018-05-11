import { ActionReducer } from '@ngrx/store';

import { BoardModel } from "./board/board.type";
import { UserModel } from "./user/user.type";

export interface AppState {
    readonly board: ActionReducer<BoardModel[]>;
    readonly user: ActionReducer<UserModel[]>;
}