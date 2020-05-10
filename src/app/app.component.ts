import { Component } from '@angular/core';
import AppService from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'myapp';
  constructor(private appService: AppService) {
    this.appService.connectIndexedDb()
  }
}
