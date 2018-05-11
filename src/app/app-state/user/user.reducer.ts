import { ActionReducer } from "@ngrx/store";

import { UserModel } from "./user.type";
import * as ActionType from '../app-state.constants';

const initialState = {
    id: 'shawn',
    pwd: '1234',
    name: 'jamein'
}

export const userReducer: ActionReducer<UserModel[]> = (state: UserModel[] = [initialState], action: any) => {
    switch (action.type) {
        case ActionType.CREATE_USER:
            return [...state, action.payload];
        case ActionType.DELETE_USER:
            state.splice(action.payload, 1);
            return [...state];
        case ActionType.UPDATE_USER:
            state.splice(action.payload.idx, 1, action.payload);
            return [...state];
        default:
            return state;
    }
}