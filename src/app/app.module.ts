import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BoardComponent } from './board/board.component';
import { DetailBoardComponent } from './board/detail-board/detail-board.component';

import { boardReducer } from "./app-state/board/board.reducer";
import { userReducer} from "./app-state/user/user.reducer";
import { BoardActions } from "./app-state/board/board.action";
import { UserActions } from "./app-state/user/user.action";
import { StateManager } from "./app-state/app-state-manager.service";


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DetailBoardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      board: boardReducer, user: userReducer
    })
  ],
  providers: [    
    BoardActions,
    UserActions,
    StateManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
