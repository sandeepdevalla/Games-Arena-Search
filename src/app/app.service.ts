import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class AppService implements OnDestroy {
  dbInstance;
  gamesData;
  gamesDataSubscriber$ =  new BehaviorSubject([]);
  constructor(private http: HttpClient) { 

  }
  getDataFromStarlord() {
    const url = 'http://starlord.hackerearth.com/gamesarena';
    return this.http.get(url);
  }
  storeGameDataInDb(db) {
    this.getDataFromStarlord().subscribe((data: any[]) => { 
        var scoresObjectStore = db.transaction("scores", "readwrite").objectStore("scores");
        data.splice(1).forEach(gameData => {
          scoresObjectStore.add(gameData);
        });
        var res = scoresObjectStore.getAll();
        res.onsuccess = data => {
          console.log('inside data getAll', data);
          this.gamesDataSubscriber$.next(data.target.result);
        }
      })
  }
  connectIndexedDb() {
    this.dbInstance = window.indexedDB.open("GamesScoreData");
    this.dbInstance.onupgradeneeded = async event => {
      var db = event.target['result'];
      var objectStore = db.createObjectStore("scores", {createIndex: 'title', autoIncrement:true})
      objectStore.createIndex("title", "title");
      this.storeGameDataInDb(db);
    }
    this.dbInstance.onsuccess = event => {
      var db = event.target['result'];
      var res = db.transaction("scores", "readwrite").objectStore("scores").getAll();
      res.onsuccess = data => {
        this.gamesDataSubscriber$.next(data.target.result);
      }
    }
  }
  getFilterData(title) {
    this.dbInstance = window.indexedDB.open("GamesScoreData");
    this.dbInstance.onsuccess = async event => {
      var db = event.target['result'];
      var scoresObjectStore = db.transaction("scores", "readwrite").objectStore("scores");
      var index = scoresObjectStore.index('title');
      if (title) {
        var res = index.get(title);
      } else {
        var res = index.getAll();
      }
      res.onsuccess = data => {
        console.log('inside  geet filter value +++', data.target.result);
        this.gamesDataSubscriber$.next(title ? [data.target.result] : data.target.result);
      }
  }
  }
  closeIDB() {
    console.log('inside close')
    window.indexedDB.deleteDatabase("GamesScoreData");
    this.connectIndexedDb();
  }
  ngOnDestroy() {
    this.gamesDataSubscriber$.unsubscribe();
  }
}
