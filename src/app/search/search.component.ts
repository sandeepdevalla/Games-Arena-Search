import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import AppService from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})

export class SearchComponent implements OnInit {
  constructor(private appService: AppService) { }
  games;
  @Output()
  searchTitle = new EventEmitter();
  ngOnInit(): void {
    this.appService.gamesDataSubscriber$.subscribe(data => {
      this.games = data;
    })
  }
  getRefreshList(event) {
    if (event.target.value == "") {
      this.searchTitle.emit(event.target.value);
    }
  }
  searchGames(event) {
    this.searchTitle.emit(event.target.value);
  }
}
