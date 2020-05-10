import { Component, OnInit } from '@angular/core';
import AppService from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit{
  gamesData;
  constructor(public appService: AppService) { }

  ngOnInit(): void {
    this.appService.gamesDataSubscriber$.subscribe(data => {
      this.gamesData = data;
    })
  }
  searchTitle(value) {
    this.appService.getFilterData(value);
  }
  closeDB() {
    this.appService.closeIDB();
    this.gamesData = [];
  }
}
