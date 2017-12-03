webpackJsonp([4],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPageModule", function() { return QuizPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizPageModule = (function () {
    function QuizPageModule() {
    }
    return QuizPageModule;
}());
QuizPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__quiz__["a" /* QuizPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quiz__["a" /* QuizPage */]),
        ],
    })
], QuizPageModule);

//# sourceMappingURL=quiz.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(193);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizPage = (function () {
    function QuizPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.username = '';
    }
    QuizPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuizPage');
        this.quizTitle = this.navParams.get('quizTitle');
        this.quizId = this.navParams.get('quizId');
    };
    QuizPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.http.get('https://www.luky.duniaarloji.com/quiz/score.php?id=' + this.quizId)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.scores = data;
            // console.log(data);
        });
    };
    QuizPage.prototype.quizContent = function () {
        var data = {
            username: this.username,
            quizTitle: this.quizTitle,
            quizId: this.quizId
        };
        this.navCtrl.push('QuizcontentPage', data);
    };
    return QuizPage;
}());
QuizPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quiz',template:/*ion-inline-start:"D:\Sekolah\kelasxii\PK7\erd\src\pages\quiz\quiz.html"*/'<!--\n\n  Generated template for the QuizPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Quiz {{ quizTitle }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="home">\n\n    <ion-item class="namakamu">\n\n        <ion-label stacked>Nama Kamu</ion-label>\n\n        <ion-input [(ngModel)]="username" name="username" type="text"></ion-input>\n\n    </ion-item>\n\n    <br>\n\n    <button class="button-quiz" ion-button full (click)="quizContent()" round color="primary">Mulai Quiz</button>  \n\n    \n\n    <div class="score">\n\n      <h4>Score</h4>\n\n      <table>\n\n        <tr *ngFor="let score of scores let i=index">\n\n          <td>{{ i + 1 }}.</td>\n\n          <td>{{ score.username }}</td>\n\n          <td>:</td>\n\n          <td>{{ score.score }}</td>\n\n        </tr>\n\n      </table>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sekolah\kelasxii\PK7\erd\src\pages\quiz\quiz.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], QuizPage);

//# sourceMappingURL=quiz.js.map

/***/ })

});
//# sourceMappingURL=4.js.map