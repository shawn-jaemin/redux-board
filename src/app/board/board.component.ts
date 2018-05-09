import { Component, ViewChild } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { ActionReducer } from "@ngrx/store";
import { BoardModel } from "../app-state/board/board.type";

import { StateManager } from '../app-state/app-state-manager.service';
import { BoardActions } from "../app-state/board/board.action";
import { DetailBoardComponent } from "./detail-board/detail-board.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

    @ViewChild('detail') detail: DetailBoardComponent;

    boards$: Observable<ActionReducer<BoardModel[]>>;
    isShowDetail: boolean = false;
    
    constructor(private boardActions: BoardActions,
                private stateManager: StateManager) {
        this.boards$ = stateManager.getBoard();
    }

    createBoard(user, title, content) {
        this.boardActions.createBoard({user: user, title: title, content: content});
    }
    
    deleteBoard(index) {
        this.boardActions.deleteBoard(index);
    }

    updateBoard(params) {
        this.boardActions.updateBoard(params)
    }

    showContent(board, index) {
        this.isShowDetail = true;
        setTimeout(() => {
            this.detail.refresh(board, index);
        });
    }
}
