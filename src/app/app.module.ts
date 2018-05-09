import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { DetailBoardComponent } from './board/detail-board/detail-board.component';

import { reducer } from "./app-state/board/board.reducer";
import { BoardActions } from "./app-state/board/board.action";
import { StateManager } from "./app-state/app-state-manager.service";


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    DetailBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({board: reducer})
  ],
  providers: [    
    BoardActions,
    StateManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
