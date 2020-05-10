import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.sass']
})
export class ScoreBoardComponent implements OnInit, OnChanges {
  @Input()
  gamesArenaScores;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.gamesArenaScores.currentValue) {
      this.gamesArenaScores = changes.gamesArenaScores.currentValue;
    }

  }
}
