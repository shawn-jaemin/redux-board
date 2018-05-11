import { Action } from "@ngrx/store";

import * as ActionType from "../app-state.constants"; 

export interface BoardModel {
    user: string;
    title: string;
    content: string;
    idx?: number;
}

// class CreateBoard implements Action {
//     readonly type: string = ActionType.CREATE_BOARD
//     constructor(public payload: BoardModel) {}
// }

// class DeleteBoard implements Action {
//     readonly type: string = ActionType.DELETE_BOARD
//     constructor(public payload: number) {}
// }

// class UpdateBoard implements Action {
//     readonly type: string = ActionType.UPDATE_BOARD
//     constructor(public payload: BoardModel) {}
// }

// export type Actions = CreateBoard | DeleteBoard | UpdateBoard;