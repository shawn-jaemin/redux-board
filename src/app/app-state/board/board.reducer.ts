import { ActionReducer } from "@ngrx/store";

import { BoardModel, Actions } from "./board.type";
import * as ActionType from '../app-state.constants';

const initialState = {
    user: 'shawn',
    title: 'AJ Rental Car',
    content: 'GO GO GO GO GO !!!!!'
}

export const reducer: ActionReducer<BoardModel[]> = (state: BoardModel[] = [initialState], action: any) => {
    console.log(action, state);
    switch (action.type) {
        case ActionType.CREATE_BOARD:
            return [...state, action.payload];
        case ActionType.DELETE_BOARD:
            state.splice(action.payload, 1);
            return state;
        case ActionType.UPDATE_BOARD:
            state.splice(action.payload.idx, 1, action.payload);
            return state;
        default:
            return state;
    }
}