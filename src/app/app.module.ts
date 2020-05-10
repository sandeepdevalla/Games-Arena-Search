import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { ScoreCardComponent } from './score-card/score-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    ScoreBoardComponent,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
