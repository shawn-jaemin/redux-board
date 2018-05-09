import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardModel } from "../../app-state/board/board.type";

@Component({
  selector: 'app-detail-board',
  templateUrl: './detail-board.component.html',
  styleUrls: ['./detail-board.component.css']
})
export class DetailBoardComponent implements OnInit {

    @Output() update = new EventEmitter();
    @Output() delete = new EventEmitter();
     
    board: BoardModel = {
        user: null,
        title: null,
        content: null
    };
    index: number = 0;
    isDetailShow: boolean = false;
    isUpdateMode: boolean = false;

    constructor() {}

    ngOnInit() {}

    refresh(board, index) {
        this.board = board;
        this.index = index;
        this.isDetailShow = true;
    }

    updateMode() {
        this.isUpdateMode = true;
    }

    updateBoard() {
        this.isUpdateMode = false;
        this.update.emit({idx: this.index, user: this.board.user, title: this.board.title, content: this.board.content});
    }

    deleteBoard() {
        this.isDetailShow = false;
        this.delete.emit(this.index);
    }
}
