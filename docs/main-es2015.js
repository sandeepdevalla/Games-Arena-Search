(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.title = 'myapp';
        this.appService.connectIndexedDb();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard");
    } }, directives: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["default"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./score-board/score-board.component */ "./src/app/score-board/score-board.component.ts");
/* harmony import */ var _score_card_score_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./score-card/score-card.component */ "./src/app/score-card/score-card.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
        _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_8__["ScoreBoardComponent"],
        _score_card_score_card_component__WEBPACK_IMPORTED_MODULE_9__["ScoreCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                    _score_board_score_board_component__WEBPACK_IMPORTED_MODULE_8__["ScoreBoardComponent"],
                    _score_card_score_card_component__WEBPACK_IMPORTED_MODULE_9__["ScoreCardComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]
                ],
                providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_games_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/games.json */ "./src/assets/games.json");
var _assets_games_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/games.json */ "./src/assets/games.json", 1);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class AppService {
    constructor(http) {
        this.http = http;
        this.gamesDataSubscriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    getDataFromStarlord() {
        const url = 'https://starlord.hackerearth.com/gamesarena';
        return this.http.get(url);
    }
    storeUsingTransaction(db, data) {
        var scoresObjectStore = db.transaction("scores", "readwrite").objectStore("scores");
        data.forEach(gameData => {
            scoresObjectStore.add(gameData);
        });
        var res = scoresObjectStore.getAll();
        res.onsuccess = data => {
            this.gamesDataSubscriber$.next(data.target.result);
        };
    }
    storeGameDataInDb(db) {
        this.getDataFromStarlord().subscribe((data) => {
            this.storeUsingTransaction(db, data.splice(1));
        }, error => {
            console.log('inside error', error);
            this.storeUsingTransaction(db, _assets_games_json__WEBPACK_IMPORTED_MODULE_3__);
        });
    }
    connectIndexedDb() {
        this.dbInstance = window.indexedDB.open("GamesScoreData");
        this.dbInstance.onupgradeneeded = (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var db = event.target['result'];
            var objectStore = db.createObjectStore("scores", { createIndex: 'title', autoIncrement: true });
            objectStore.createIndex("title", "title");
            this.storeGameDataInDb(db);
        });
        this.dbInstance.onsuccess = event => {
            var db = event.target['result'];
            var res = db.transaction("scores", "readwrite").objectStore("scores").getAll();
            res.onsuccess = data => {
                this.gamesDataSubscriber$.next(data.target.result);
            };
        };
    }
    getFilterData(title) {
        this.dbInstance = window.indexedDB.open("GamesScoreData");
        this.dbInstance.onsuccess = (event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var db = event.target['result'];
            var scoresObjectStore = db.transaction("scores", "readwrite").objectStore("scores");
            var index = scoresObjectStore.index('title');
            if (title) {
                var res = index.get(title);
            }
            else {
                var res = index.getAll();
            }
            res.onsuccess = data => {
                console.log('inside  geet filter value +++', data.target.result);
                this.gamesDataSubscriber$.next(title ? [data.target.result] : data.target.result);
            };
        });
    }
    closeIDB() {
        console.log('inside close');
        window.indexedDB.deleteDatabase("GamesScoreData");
        this.connectIndexedDb();
    }
    ngOnDestroy() {
        this.gamesDataSubscriber$.unsubscribe();
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");



class DashboardComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.appService.gamesDataSubscriber$.subscribe(data => {
            this.gamesData = data;
        });
    }
    searchTitle(value) {
        this.appService.getFilterData(value);
    }
    closeDB() {
        this.appService.closeIDB();
        this.gamesData = [];
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[2, "text-align", "center"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to San\u2764\uFE0FThara");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".refresh-db[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 20px;\n  cursor: pointer;\n  margin-left: 10px;\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcc2RldmFsbGFcXEdhbWVzLUFyZW5hLVNlYXJjaC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmcmVzaC1kYlxyXG4gICAgcGFkZGluZzogMTBweFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweFxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICBtYXJnaW4tbGVmdDogMTBweFxyXG4gICAgYmFja2dyb3VuZDogYmxhY2tcclxuICAgIGNvbG9yOiB3aGl0ZSIsIi5yZWZyZXNoLWRiIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.sass']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["default"] }]; }, null); })();


/***/ }),

/***/ "./src/app/score-board/score-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/score-board/score-board.component.ts ***!
  \******************************************************/
/*! exports provided: ScoreBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreBoardComponent", function() { return ScoreBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _score_card_score_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../score-card/score-card.component */ "./src/app/score-card/score-card.component.ts");





function ScoreBoardComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-score-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const gameData_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gameData", gameData_r2);
} }
function ScoreBoardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Games are loading please wait or you can refresh the list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ScoreBoardComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.gamesArenaScores.currentValue) {
            this.gamesArenaScores = changes.gamesArenaScores.currentValue;
        }
    }
}
ScoreBoardComponent.ɵfac = function ScoreBoardComponent_Factory(t) { return new (t || ScoreBoardComponent)(); };
ScoreBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreBoardComponent, selectors: [["app-score-board"]], inputs: { gamesArenaScores: "gamesArenaScores" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 4, consts: [[1, "score-board-panel"], ["itemSize", "200", "minBufferPx", "50", "maxBufferPx", "50"], [4, "cdkVirtualFor", "cdkVirtualForOf"], ["class", "no-data", 4, "ngIf"], [1, "score-card-layout", 3, "gameData"], [1, "no-data"], [1, "loading-layout"], [1, "bounce-ball"]], template: function ScoreBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScoreBoardComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScoreBoardComponent_div_3_Template, 7, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.gamesArenaScores);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gamesArenaScores && ctx.gamesArenaScores.length == 0);
    } }, directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _score_card_score_card_component__WEBPACK_IMPORTED_MODULE_3__["ScoreCardComponent"]], styles: [".score-board-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: black;\n  height: 500px;\n  overflow: auto;\n}\n\n.score-card-layout[_ngcontent-%COMP%] {\n  width: 47%;\n  display: inline-block;\n  margin: 20px;\n}\n\n@media (min-width: 375px) and (max-width: 1023px) {\n  .score-card-layout[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n\n.no-data[_ngcontent-%COMP%] {\n  height: 150px;\n  color: white;\n  width: 100%;\n  text-align: center;\n}\n\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 50px;\n  font-size: 25px;\n}\n\n.bounce-ball[_ngcontent-%COMP%] {\n  -webkit-animation: bounce 1.8s infinite;\n          animation: bounce 1.8s infinite;\n  width: 20px;\n  height: 20px;\n  background: white;\n  border-radius: 20px;\n  margin: 30px;\n}\n\n@-webkit-keyframes bounce {\n  0% {\n    background: white;\n    margin-left: 0%;\n  }\n  25% {\n    background: orange;\n    margin-top: 10px;\n    margin-left: 20%;\n  }\n  50% {\n    margin-top: 10px;\n    background: red;\n    margin-left: 40%;\n  }\n  75% {\n    margin-top: 10px;\n    background: blue;\n    margin-left: 60%;\n  }\n  100% {\n    margin-top: 10px;\n    background: white;\n    margin-left: 80%;\n  }\n}\n\n@keyframes bounce {\n  0% {\n    background: white;\n    margin-left: 0%;\n  }\n  25% {\n    background: orange;\n    margin-top: 10px;\n    margin-left: 20%;\n  }\n  50% {\n    margin-top: 10px;\n    background: red;\n    margin-left: 40%;\n  }\n  75% {\n    margin-top: 10px;\n    background: blue;\n    margin-left: 60%;\n  }\n  100% {\n    margin-top: 10px;\n    background: white;\n    margin-left: 80%;\n  }\n}\n\n.loading-layout[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtYm9hcmQvQzpcXFVzZXJzXFxzZGV2YWxsYVxcR2FtZXMtQXJlbmEtU2VhcmNoL3NyY1xcYXBwXFxzY29yZS1ib2FyZFxcc2NvcmUtYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3Njb3JlLWJvYXJkL3Njb3JlLWJvYXJkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURBQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNHSjs7QURGQTtFQUNJO0lBQ0kscUJBQUE7RUNLTjtBQUNGOztBREpBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURMSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDT1I7O0FETkE7RUFDSSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1NKOztBRFBBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RUNVTjtFRFRFO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDV047RURWRTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDWU47RURWRTtJQUNJLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ1lOO0VEVkU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNZTjtBQUNGOztBRGxDQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0VDVU47RURURTtJQUNJLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ1dOO0VEVkU7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ1lOO0VEVkU7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNZTjtFRFZFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VDWU47QUFDRjs7QURWQTtFQUNJLGFBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlLWJvYXJkL3Njb3JlLWJvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlLWJvYXJkLXBhbmVsXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBmbGV4LXdyYXA6IHdyYXBcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgYmFja2dyb3VuZDogYmxhY2tcclxuICAgIGhlaWdodDogNTAwcHhcclxuICAgIG92ZXJmbG93OiBhdXRvXHJcbi5zY29yZS1jYXJkLWxheW91dFxyXG4gICAgd2lkdGg6NDclXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIG1hcmdpbjoyMHB4XHJcbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweClcclxuICAgIC5zY29yZS1jYXJkLWxheW91dFxyXG4gICAgICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudFxyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lXHJcbi5uby1kYXRhXHJcbiAgICBoZWlnaHQ6IDE1MHB4XHJcbiAgICBjb2xvcjogd2hpdGVcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIHBcclxuICAgICAgICBtYXJnaW46IDUwcHhcclxuICAgICAgICBmb250LXNpemU6IDI1cHhcclxuLmJvdW5jZS1iYWxsXHJcbiAgICBhbmltYXRpb246IGJvdW5jZSAxLjhzIGluZmluaXRlXHJcbiAgICB3aWR0aDogMjBweFxyXG4gICAgaGVpZ2h0OiAyMHB4XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweFxyXG4gICAgbWFyZ2luOiAzMHB4XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZSBcclxuICAgIDAlXHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCVcclxuICAgIDI1JVxyXG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjAlXHJcbiAgICA1MCVcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVkXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJVxyXG5cclxuICAgIDc1JVxyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibHVlXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwJVxyXG5cclxuICAgIDEwMCVcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVcclxuICAgICAgICBtYXJnaW4tbGVmdDogODAlXHJcblxyXG5cclxuLmxvYWRpbmctbGF5b3V0XHJcbiAgICBoZWlnaHQ6IDIwMHB4XHJcblxyXG4iLCIuc2NvcmUtYm9hcmQtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2NvcmUtY2FyZC1sYXlvdXQge1xuICB3aWR0aDogNDclO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5zY29yZS1jYXJkLWxheW91dCB7XG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICB9XG59XG4ubm8tZGF0YSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5uby1kYXRhIHAge1xuICBtYXJnaW46IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmJvdW5jZS1iYWxsIHtcbiAgYW5pbWF0aW9uOiBib3VuY2UgMS44cyBpbmZpbml0ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xuICB9XG4gIDI1JSB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgfVxuICA1MCUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gIH1cbiAgNzUlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA4MCU7XG4gIH1cbn1cbi5sb2FkaW5nLWxheW91dCB7XG4gIGhlaWdodDogMjAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-score-board',
                templateUrl: './score-board.component.html',
                styleUrls: ['./score-board.component.sass']
            }]
    }], function () { return []; }, { gamesArenaScores: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/score-card/score-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/score-card/score-card.component.ts ***!
  \****************************************************/
/*! exports provided: ScoreCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreCardComponent", function() { return ScoreCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ScoreCardComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} }
class ScoreCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
ScoreCardComponent.ɵfac = function ScoreCardComponent_Factory(t) { return new (t || ScoreCardComponent)(); };
ScoreCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreCardComponent, selectors: [["app-score-card"]], inputs: { gameData: "gameData" }, decls: 14, vars: 5, consts: [[1, "score-card"], [1, "image-div"], ["src", "assets/avtar.jpeg", "alt", "", 1, "image-frame"], [1, "title-div"], ["style", "float: right;", "src", "assets/editor-choice.png", 4, "ngIf"], [1, "score-div"], ["src", "assets/editor-choice.png", 2, "float", "right"]], template: function ScoreCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ScoreCardComponent_img_8_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gameData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.gameData.platform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameData["editors_choice"] == "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Genre: ", ctx.gameData.genre, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.gameData.score, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".score-card[_ngcontent-%COMP%]:hover {\n  -webkit-animation: hilight 0.5s;\n          animation: hilight 0.5s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@media (min-width: 375px) and (max-width: 1023px) {\n  .score-card[_ngcontent-%COMP%]   .image-div[_ngcontent-%COMP%] {\n    width: 20% !important;\n  }\n  .score-card[_ngcontent-%COMP%]   .image-div[_ngcontent-%COMP%]   .image-frame[_ngcontent-%COMP%] {\n    width: 80px !important;\n    height: 100px !important;\n  }\n}\n\n.score-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  height: 200px;\n  border: 2px solid green;\n  display: flex;\n  flex-wrap: wrap;\n  color: white;\n}\n\n.score-card[_ngcontent-%COMP%]   .image-div[_ngcontent-%COMP%] {\n  width: 25%;\n  margin: 10px;\n}\n\n.score-card[_ngcontent-%COMP%]   .image-div[_ngcontent-%COMP%]   .image-frame[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 120px;\n}\n\n.score-card[_ngcontent-%COMP%]   .title-div[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.score-card[_ngcontent-%COMP%]   .score-div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.score-card[_ngcontent-%COMP%]   .score-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.score-card[_ngcontent-%COMP%]   .score-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right;\n  color: orange;\n}\n\n@-webkit-keyframes hilight {\n  from {\n    backgroud-color: black;\n  }\n  to {\n    transform: translate(0, -5%);\n    box-shadow: 5px 5px gray;\n  }\n}\n\n@keyframes hilight {\n  from {\n    backgroud-color: black;\n  }\n  to {\n    transform: translate(0, -5%);\n    box-shadow: 5px 5px gray;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtY2FyZC9DOlxcVXNlcnNcXHNkZXZhbGxhXFxHYW1lcy1BcmVuYS1TZWFyY2gvc3JjXFxhcHBcXHNjb3JlLWNhcmRcXHNjb3JlLWNhcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3Njb3JlLWNhcmQvc2NvcmUtY2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDQVI7O0FEQ0E7RUFFUTtJQUNJLHFCQUFBO0VDQ1Y7RURBVTtJQUNJLHNCQUFBO0lBQ0Esd0JBQUE7RUNFZDtBQUNGOztBREZBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNJSjs7QURISTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDS1I7O0FESlE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ01aOztBREpJO0VBQ0ksVUFBQTtBQ01SOztBREpJO0VBQ0ksV0FBQTtBQ01SOztBRExRO0VBQ0ksWUFBQTtBQ09aOztBRE5ZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNRaEI7O0FEUEE7RUFDSTtJQUNJLHNCQUFBO0VDVU47RURURTtJQUNJLDRCQUFBO0lBQ0Esd0JBQUE7RUNXTjtBQUNGOztBRGpCQTtFQUNJO0lBQ0ksc0JBQUE7RUNVTjtFRFRFO0lBQ0ksNEJBQUE7SUFDQSx3QkFBQTtFQ1dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zY29yZS1jYXJkL3Njb3JlLWNhcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmUtY2FyZFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGFuaW1hdGlvbjogaGlsaWdodCAwLjVzXHJcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHNcclxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KVxyXG4gICAgLnNjb3JlLWNhcmRcclxuICAgICAgICAuaW1hZ2UtZGl2XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudFxyXG4gICAgICAgICAgICAuaW1hZ2UtZnJhbWVcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnRcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudFxyXG4uc2NvcmUtY2FyZFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgaGVpZ2h0OiAyMDBweFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW5cclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGZsZXgtd3JhcDogd3JhcFxyXG4gICAgY29sb3I6IHdoaXRlXHJcbiAgICAuaW1hZ2UtZGl2XHJcbiAgICAgICAgd2lkdGg6IDI1JVxyXG4gICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgICAgIC5pbWFnZS1mcmFtZVxyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHhcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweFxyXG5cclxuICAgIC50aXRsZS1kaXZcclxuICAgICAgICB3aWR0aDogNzAlXHJcblxyXG4gICAgLnNjb3JlLWRpdlxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgcFxyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHhcclxuICAgICAgICAgICAgc3BhblxyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogb3JhbmdlXHJcbkBrZXlmcmFtZXMgaGlsaWdodCBcclxuICAgIGZyb21cclxuICAgICAgICBiYWNrZ3JvdWQtY29sb3I6IGJsYWNrXHJcbiAgICB0b1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01JSlcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IGdyYXlcclxuXHJcblxyXG5cclxuICAgICIsIi5zY29yZS1jYXJkOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBoaWxpZ2h0IDAuNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLnNjb3JlLWNhcmQgLmltYWdlLWRpdiB7XG4gICAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zY29yZS1jYXJkIC5pbWFnZS1kaXYgLmltYWdlLWZyYW1lIHtcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLnNjb3JlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2NvcmUtY2FyZCAuaW1hZ2UtZGl2IHtcbiAgd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnNjb3JlLWNhcmQgLmltYWdlLWRpdiAuaW1hZ2UtZnJhbWUge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG4uc2NvcmUtY2FyZCAudGl0bGUtZGl2IHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5zY29yZS1jYXJkIC5zY29yZS1kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zY29yZS1jYXJkIC5zY29yZS1kaXYgcCB7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5zY29yZS1jYXJkIC5zY29yZS1kaXYgcCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG5Aa2V5ZnJhbWVzIGhpbGlnaHQge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdWQtY29sb3I6IGJsYWNrO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNSUpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggZ3JheTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-score-card',
                templateUrl: './score-card.component.html',
                styleUrls: ['./score-card.component.sass']
            }]
    }], function () { return []; }, { gameData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SearchComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 3);
} if (rf & 2) {
    const game_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", game_r1.title);
} }
class SearchComponent {
    constructor(appService) {
        this.appService = appService;
        this.searchTitle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.appService.gamesDataSubscriber$.subscribe(data => {
            this.games = data;
        });
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
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["default"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], outputs: { searchTitle: "searchTitle" }, decls: 3, vars: 1, consts: [["type", "search", "list", "gamesList", "placeholder", "Search by (Title)", 1, "game-search", 3, "input", "change"], ["id", "gamesList"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_0_listener($event) { return ctx.getRefreshList($event); })("change", function SearchComponent_Template_input_change_0_listener($event) { return ctx.searchGames($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "datalist", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_option_2_Template, 1, 1, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.games);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".game-search[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  background: black;\n  width: 98%;\n  border: 2px solid white;\n  margin: 10px;\n  color: white;\n  padding-left: 15px;\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcc2RldmFsbGFcXEdhbWVzLUFyZW5hLVNlYXJjaC9zcmNcXGFwcFxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtc2VhcmNoXHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFja1xyXG4gICAgd2lkdGg6IDk4JVxyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGVcclxuICAgIG1hcmdpbjogMTBweFxyXG4gICAgY29sb3I6IHdoaXRlXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHhcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4IiwiLmdhbWUtc2VhcmNoIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHdpZHRoOiA5OCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW46IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.sass']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["default"] }]; }, { searchTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/assets/games.json":
/*!*******************************!*\
  !*** ./src/assets/games.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"LittleBigPlanet PS Vita\",\"platform\":\"PlayStation Vita\",\"score\":9,\"genre\":\"Platformer\",\"editors_choice\":\"Y\"},{\"title\":\"LittleBigPlanet PS Vita -- Marvel Super Hero Edition\",\"platform\":\"PlayStation Vita\",\"score\":9,\"genre\":\"Platformer\",\"editors_choice\":\"Y\"},{\"title\":\"Splice: Tree of Life\",\"platform\":\"iPad\",\"score\":8.5,\"genre\":\"Puzzle\",\"editors_choice\":\"N\"},{\"title\":\"NHL 13\",\"platform\":\"Xbox 360\",\"score\":8.5,\"genre\":\"Sports\",\"editors_choice\":\"N\"},{\"title\":\"NHL 13\",\"platform\":\"PlayStation 3\",\"score\":8.5,\"genre\":\"Sports\",\"editors_choice\":\"N\"},{\"title\":\"Total War Battles: Shogun\",\"platform\":\"Macintosh\",\"score\":7,\"genre\":\"Strategy\",\"editors_choice\":\"N\"},{\"title\":\"Double Dragon: Neon\",\"platform\":\"Xbox 360\",\"score\":3,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Guild Wars 2\",\"platform\":\"PC\",\"score\":9,\"genre\":\"RPG\",\"editors_choice\":\"Y\"},{\"title\":\"Double Dragon: Neon\",\"platform\":\"PlayStation 3\",\"score\":3,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Total War Battles: Shogun\",\"platform\":\"PC\",\"score\":7,\"genre\":\"Strategy\",\"editors_choice\":\"N\"},{\"title\":\"Tekken Tag Tournament 2\",\"platform\":\"PlayStation 3\",\"score\":7.5,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Tekken Tag Tournament 2\",\"platform\":\"Xbox 360\",\"score\":7.5,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Wild Blood\",\"platform\":\"iPhone\",\"score\":7,\"genre\":\"\",\"editors_choice\":\"N\"},{\"title\":\"Mark of the Ninja\",\"platform\":\"Xbox 360\",\"score\":9,\"genre\":\"Action, Adventure\",\"editors_choice\":\"Y\"},{\"title\":\"Mark of the Ninja\",\"platform\":\"PC\",\"score\":9,\"genre\":\"Action, Adventure\",\"editors_choice\":\"Y\"},{\"title\":\"Home: A Unique Horror Adventure\",\"platform\":\"Macintosh\",\"score\":6.5,\"genre\":\"Adventure\",\"editors_choice\":\"N\"},{\"title\":\"Home: A Unique Horror Adventure\",\"platform\":\"PC\",\"score\":6.5,\"genre\":\"Adventure\",\"editors_choice\":\"N\"},{\"title\":\"Avengers Initiative\",\"platform\":\"iPhone\",\"score\":8,\"genre\":\"Action\",\"editors_choice\":\"N\"},{\"title\":\"Way of the Samurai 4\",\"platform\":\"PlayStation 3\",\"score\":5.5,\"genre\":\"Action, Adventure\",\"editors_choice\":\"N\"},{\"title\":\"JoJo's Bizarre Adventure HD\",\"platform\":\"Xbox 360\",\"score\":7,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"JoJo's Bizarre Adventure HD\",\"platform\":\"PlayStation 3\",\"score\":7,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Mass Effect 3: Leviathan\",\"platform\":\"Xbox 360\",\"score\":7.5,\"genre\":\"RPG\",\"editors_choice\":\"N\"},{\"title\":\"Mass Effect 3: Leviathan\",\"platform\":\"PlayStation 3\",\"score\":7.5,\"genre\":\"RPG\",\"editors_choice\":\"N\"},{\"title\":\"Mass Effect 3: Leviathan\",\"platform\":\"PC\",\"score\":7.5,\"genre\":\"RPG\",\"editors_choice\":\"N\"},{\"title\":\"Dark Souls (Prepare to Die Edition)\",\"platform\":\"PC\",\"score\":9,\"genre\":\"Action, RPG\",\"editors_choice\":\"Y\"},{\"title\":\"Symphony\",\"platform\":\"PC\",\"score\":7,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Bastion\",\"platform\":\"iPad\",\"score\":9,\"genre\":\"Action, RPG\",\"editors_choice\":\"Y\"},{\"title\":\"Tom Clancy's Ghost Recon Phantoms\",\"platform\":\"PC\",\"score\":7.5,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Thirty Flights of Loving\",\"platform\":\"PC\",\"score\":8,\"genre\":\"Adventure\",\"editors_choice\":\"N\"},{\"title\":\"Legasista\",\"platform\":\"PlayStation 3\",\"score\":6.5,\"genre\":\"Action, RPG\",\"editors_choice\":\"N\"},{\"title\":\"The Walking Dead: The Game -- Episode 3: Long Road Ahead\",\"platform\":\"Macintosh\",\"score\":9,\"genre\":\"Adventure\",\"editors_choice\":\"Y\"},{\"title\":\"World of Warcraft: Mists of Pandaria\",\"platform\":\"PC\",\"score\":8.7,\"genre\":\"RPG\",\"editors_choice\":\"Y\"},{\"title\":\"Hell Yeah! Wrath of the Dead Rabbit\",\"platform\":\"PlayStation 3\",\"score\":4.9,\"genre\":\"Platformer\",\"editors_choice\":\"N\"},{\"title\":\"Pokemon White Version 2\",\"platform\":\"Nintendo DS\",\"score\":9.6,\"genre\":\"RPG\",\"editors_choice\":\"Y\"},{\"title\":\"War of the Roses\",\"platform\":\"PC\",\"score\":7.3,\"genre\":\"Action\",\"editors_choice\":\"N\"},{\"title\":\"Pokemon Black Version 2\",\"platform\":\"Nintendo DS\",\"score\":9.6,\"genre\":\"RPG\",\"editors_choice\":\"Y\"},{\"title\":\"Drakerider\",\"platform\":\"iPhone\",\"score\":6.5,\"genre\":\"RPG\",\"editors_choice\":\"N\"},{\"title\":\"The Walking Dead: The Game -- Episode 3: Long Road Ahead\",\"platform\":\"Xbox 360\",\"score\":9,\"genre\":\"Adventure\",\"editors_choice\":\"Y\"},{\"title\":\"The Walking Dead: The Game -- Episode 3: Long Road Ahead\",\"platform\":\"PC\",\"score\":9,\"genre\":\"Adventure\",\"editors_choice\":\"Y\"},{\"title\":\"The Walking Dead: The Game -- Episode 3: Long Road Ahead\",\"platform\":\"PlayStation 3\",\"score\":9,\"genre\":\"Adventure\",\"editors_choice\":\"Y\"},{\"title\":\"Rock Band Blitz\",\"platform\":\"Xbox 360\",\"score\":8.5,\"genre\":\"Music\",\"editors_choice\":\"Y\"},{\"title\":\"Counter-Strike: Global Offensive\",\"platform\":\"Macintosh\",\"score\":8,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Worms Revolution\",\"platform\":\"PlayStation 3\",\"score\":8.5,\"genre\":\"Strategy\",\"editors_choice\":\"N\"},{\"title\":\"Worms Revolution\",\"platform\":\"PC\",\"score\":8.5,\"genre\":\"Strategy\",\"editors_choice\":\"N\"},{\"title\":\"Worms Revolution\",\"platform\":\"Xbox 360\",\"score\":8.5,\"genre\":\"Strategy\",\"editors_choice\":\"N\"},{\"title\":\"Bad Piggies\",\"platform\":\"iPhone\",\"score\":9.2,\"genre\":\"Action\",\"editors_choice\":\"Y\"},{\"title\":\"Resident Evil 6\",\"platform\":\"PlayStation 3\",\"score\":7.9,\"genre\":\"Action, Adventure\",\"editors_choice\":\"N\"},{\"title\":\"Resident Evil 6\",\"platform\":\"Xbox 360\",\"score\":7.9,\"genre\":\"Action, Adventure\",\"editors_choice\":\"N\"},{\"title\":\"Shad'O\",\"platform\":\"PC\",\"score\":7,\"genre\":\"Adventure\",\"editors_choice\":\"N\"},{\"title\":\"Demon's Score\",\"platform\":\"iPhone\",\"score\":6.9,\"genre\":\"Action\",\"editors_choice\":\"N\"},{\"title\":\"NBA 2K13\",\"platform\":\"Xbox 360\",\"score\":9.1,\"genre\":\"Sports\",\"editors_choice\":\"Y\"},{\"title\":\"Counter-Strike: Global Offensive\",\"platform\":\"PC\",\"score\":8,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"The World Ends with You: Solo Remix\",\"platform\":\"iPad\",\"score\":9.5,\"genre\":\"RPG\",\"editors_choice\":\"Y\"},{\"title\":\"Counter-Strike: Global Offensive\",\"platform\":\"PlayStation 3\",\"score\":8,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"The World Ends with You: Solo Remix\",\"platform\":\"iPhone\",\"score\":9.5,\"genre\":\"RPG\",\"editors_choice\":\"Y\"},{\"title\":\"Counter-Strike: Global Offensive\",\"platform\":\"Xbox 360\",\"score\":8,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Madden NFL 13\",\"platform\":\"PlayStation Vita\",\"score\":6,\"genre\":\"Sports\",\"editors_choice\":\"N\"},{\"title\":\"Madden NFL 13\",\"platform\":\"PlayStation 3\",\"score\":9,\"genre\":\"Sports\",\"editors_choice\":\"Y\"},{\"title\":\"Madden NFL 13\",\"platform\":\"Xbox 360\",\"score\":9,\"genre\":\"Sports\",\"editors_choice\":\"Y\"},{\"title\":\"Hoodwink\",\"platform\":\"PC\",\"score\":2.5,\"genre\":\"Adventure\",\"editors_choice\":\"N\"},{\"title\":\"NBA 2K13\",\"platform\":\"PlayStation 3\",\"score\":9.1,\"genre\":\"Sports\",\"editors_choice\":\"Y\"},{\"title\":\"NBA 2K13\",\"platform\":\"PC\",\"score\":9.1,\"genre\":\"Sports\",\"editors_choice\":\"Y\"},{\"title\":\"Lili: Child of Geos\",\"platform\":\"iPhone\",\"score\":7,\"genre\":\"Adventure\",\"editors_choice\":\"N\"},{\"title\":\"Marvel vs. Capcom Origins\",\"platform\":\"Xbox 360\",\"score\":8.2,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Marvel vs. Capcom Origins\",\"platform\":\"PlayStation 3\",\"score\":8.2,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Dead or Alive 5\",\"platform\":\"PlayStation 3\",\"score\":8.8,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Dead or Alive 5\",\"platform\":\"Xbox 360\",\"score\":8.8,\"genre\":\"Fighting\",\"editors_choice\":\"N\"},{\"title\":\"Medal of Honor Warfighter\",\"platform\":\"PC\",\"score\":4,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Professor Layton and the Miracle Mask\",\"platform\":\"Nintendo 3DS\",\"score\":8.7,\"genre\":\"Adventure\",\"editors_choice\":\"Y\"},{\"title\":\"Hotline Miami\",\"platform\":\"PC\",\"score\":8.8,\"genre\":\"Action\",\"editors_choice\":\"Y\"},{\"title\":\"Edna & Harvey: Harvey's New Eyes\",\"platform\":\"PC\",\"score\":6,\"genre\":\"Adventure\",\"editors_choice\":\"N\"},{\"title\":\"Medal of Honor Warfighter\",\"platform\":\"PlayStation 3\",\"score\":4,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Medal of Honor Warfighter\",\"platform\":\"Xbox 360\",\"score\":4,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Transformers: Fall of Cybertron\",\"platform\":\"Xbox 360\",\"score\":8.5,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Transformers: Fall of Cybertron\",\"platform\":\"PlayStation 3\",\"score\":8.5,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Hero Academy\",\"platform\":\"PC\",\"score\":9,\"genre\":\"Board\",\"editors_choice\":\"Y\"},{\"title\":\"Hero Academy\",\"platform\":\"iPhone\",\"score\":9,\"genre\":\"Strategy\",\"editors_choice\":\"Y\"},{\"title\":\"Puzzle Craft\",\"platform\":\"iPhone\",\"score\":9,\"genre\":\"Puzzle\",\"editors_choice\":\"Y\"},{\"title\":\"Realms Of Ancient War\",\"platform\":\"Xbox 360\",\"score\":5.5,\"genre\":\"Action\",\"editors_choice\":\"N\"},{\"title\":\"Realms Of Ancient War\",\"platform\":\"PlayStation 3\",\"score\":5.5,\"genre\":\"Action\",\"editors_choice\":\"N\"},{\"title\":\"Anomaly: Warzone Earth\",\"platform\":\"PlayStation 3\",\"score\":8.2,\"genre\":\"Action\",\"editors_choice\":\"N\"},{\"title\":\"Darksiders II\",\"platform\":\"PC\",\"score\":7.5,\"genre\":\"Action\",\"editors_choice\":\"N\"},{\"title\":\"Left 4 Dead 2: Cold Stream\",\"platform\":\"Macintosh\",\"score\":7,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Left 4 Dead 2: Cold Stream\",\"platform\":\"PC\",\"score\":7,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Puzzle Craft\",\"platform\":\"Android\",\"score\":9,\"genre\":\"Puzzle\",\"editors_choice\":\"Y\"},{\"title\":\"Left 4 Dead 2: Cold Stream\",\"platform\":\"Xbox 360\",\"score\":7,\"genre\":\"Shooter\",\"editors_choice\":\"N\"},{\"title\":\"Horn\",\"platform\":\"iPhone\",\"score\":9,\"genre\":\"Action, Adventure\",\"editors_choice\":\"Y\"},{\"title\":\"Forza Horizon\",\"platform\":\"Xbox 360\",\"score\":9,\"genre\":\"Racing\",\"editors_choice\":\"Y\"},{\"title\":\"FIFA Soccer 13\",\"platform\":\"PlayStation Vita\",\"score\":4,\"genre\":\"Sports\",\"editors_choice\":\"N\"},{\"title\":\"Mugen Souls\",\"platform\":\"PlayStation 3\",\"score\":3.9,\"genre\":\"Strategy, RPG\",\"editors_choice\":\"N\"},{\"title\":\"Crazy Taxi\",\"platform\":\"iPhone\",\"score\":7.1,\"genre\":\"Racing, Action\",\"editors_choice\":\"N\"},{\"title\":\"New Little King's Story\",\"platform\":\"PlayStation Vita\",\"score\":5.8,\"genre\":\"RPG\",\"editors_choice\":\"N\"},{\"title\":\"Fable: The Journey\",\"platform\":\"Xbox 360\",\"score\":7.2,\"genre\":\"Action, RPG\",\"editors_choice\":\"N\"},{\"title\":\"The Lord of the Rings Online: Riders of Rohan\",\"platform\":\"PC\",\"score\":8.3,\"genre\":\"RPG\",\"editors_choice\":\"N\"},{\"title\":\"Doom 3: BFG Edition\",\"platform\":\"Xbox 360\",\"score\":7.6,\"genre\":\"RPG\",\"editors_choice\":\"N\"},{\"title\":\"Rugby League Live 2\",\"platform\":\"Xbox 360\",\"score\":6,\"genre\":\"Sports\",\"editors_choice\":\"N\"},{\"title\":\"Rugby League Live 2\",\"platform\":\"PlayStation 3\",\"score\":6,\"genre\":\"Sports\",\"editors_choice\":\"N\"},{\"title\":\"Doom 3: BFG Edition\",\"platform\":\"PlayStation 3\",\"score\":7.6,\"genre\":\"RPG\",\"editors_choice\":\"N\"},{\"title\":\"Punch Quest\",\"platform\":\"iPhone\",\"score\":9.3,\"genre\":\"Action\",\"editors_choice\":\"Y\"}]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sdevalla\Games-Arena-Search\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map