import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.sass']
})
export class ScoreCardComponent implements OnInit {
  @Input()
  gameData;
  constructor() { }

  ngOnInit(): void {
  }

}
