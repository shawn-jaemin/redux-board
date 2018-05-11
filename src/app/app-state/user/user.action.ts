import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppState } from "../app-state.type";
import { UserModel } from "./user.type";

import * as ActionType from "../app-state.constants";

@Injectable()
export class UserActions {
    constructor(private store: Store<AppState>) {}

    createUser(params: UserModel) {
        let action = {
            type: ActionType.CREATE_USER,
            payload: params
        }
        this.store.dispatch(action);
    }

    deleteUser(index: number) {
        let action = {
            type: ActionType.DELETE_USER,
            payload: index
        }
        this.store.dispatch(action);
    }

    updateUser(params: UserModel) {
        let action = {
            type: ActionType.UPDATE_USER,
            payload:params
        }
        this.store.dispatch(action);
    }
}