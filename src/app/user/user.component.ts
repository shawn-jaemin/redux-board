import { Component } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { ActionReducer } from "@ngrx/store";
import { UserModel } from "../app-state/user/user.type";

import { StateManager } from '../app-state/app-state-manager.service';
import { UserActions } from "../app-state/user/user.action";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    users$: Observable<ActionReducer<UserModel[]>>;
    
    constructor(private userActions: UserActions,
                private stateManager: StateManager) {
        this.users$ = stateManager.getUser();
    }

    createUser(user, title, content) {
        this.userActions.createUser({id: user, pwd: title, name: content});
    }
    
    deleteUser(index) {
        this.userActions.deleteUser(index);
    }
}
