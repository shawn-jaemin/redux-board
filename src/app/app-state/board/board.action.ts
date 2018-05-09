import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../app-state.type";
import { BoardModel } from "./board.type";

import * as ActionType from "../app-state.constants";

@Injectable()
export class BoardActions {
    constructor(private store: Store<AppState>) {}

    createBoard(params: BoardModel) {
        let action = {
            type: ActionType.CREATE_BOARD,
            payload: params
        }
        this.store.dispatch(action);
    }

    deleteBoard(index: number) {
        let action = {
            type: ActionType.DELETE_BOARD,
            payload: index
        }
        this.store.dispatch(action);
    }

    updateBoard(params: BoardModel) {
        let action = {
            type: ActionType.UPDATE_BOARD,
            payload:params
        }
        this.store.dispatch(action);
    }
}