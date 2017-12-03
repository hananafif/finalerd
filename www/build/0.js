webpackJsonp([0],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorePageModule", function() { return ScorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__score__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScorePageModule = (function () {
    function ScorePageModule() {
    }
    return ScorePageModule;
}());
ScorePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__score__["a" /* ScorePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__score__["a" /* ScorePage */]),
        ],
    })
], ScorePageModule);

//# sourceMappingURL=score.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(193);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScorePage; });
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
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScorePage = (function () {
    function ScorePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    ScorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ScorePage');
        this.quizTitle = this.navParams.get('quizTitle');
        this.quizId = this.navParams.get('quizId');
        var quiz = this.navParams.get('quiz');
        var username = this.navParams.get('username');
        var id = this.quizId;
        var link = 'https://www.luky.duniaarloji.com/quiz/result.php';
        var data = JSON.stringify({ username: username, id: id, quiz: quiz });
        this.http.post(link, data)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data.username);
            _this.username = data.username;
            _this.score = data.score;
            _this.correct = data.correct;
            _this.incorrect = data.incorrect;
        }, function (error) {
            console.log("Oooops!");
        });
    };
    ScorePage.prototype.back = function () {
        this.navCtrl.remove(3, 1);
        this.navCtrl.pop();
    };
    ScorePage.prototype.quizAnswer = function () {
        var data = {
            quizTitle: this.quizTitle,
            quizId: this.quizId
        };
        this.navCtrl.push('QuizanswerPage', data);
    };
    ScorePage.prototype.quizResult = function () {
    };
    return ScorePage;
}());
ScorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-score',template:/*ion-inline-start:"D:\Sekolah\kelasxii\PK7\erd\src\pages\score\score.html"*/'<!--\n\n  Generated template for the ScorePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  hideBackButton="true">\n\n    <ion-title>Score Quiz {{ quizTitle }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="body home">\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n          <p class="score-kamu">Score {{ username }}</p>\n\n        </ion-card-header>\n\n        <div>\n\n          \n\n        </div>\n\n        <ion-card-content class="quiz-content">\n\n\n\n          <div class="score-round">\n\n            <div class="score-num">\n\n                <h2>{{ score }}</h2>\n\n            </div>\n\n          </div>\n\n\n\n          <table>\n\n            <tr>\n\n              <td>Benar</td>\n\n              <td>:</td>\n\n              <td>{{ correct }}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Salah</td>\n\n              <td>:</td>\n\n              <td>{{ incorrect }}</td>\n\n            </tr>\n\n          </table>\n\n\n\n          <button class="button-quiz" ion-button full color="primary" round (click)="quizAnswer()"  >Pembahasan</button>              \n\n          <button class="button-quiz" ion-button full color="primary" round (click)="back()"  >Kembali</button>    \n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sekolah\kelasxii\PK7\erd\src\pages\score\score.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ScorePage);

//# sourceMappingURL=score.js.map

/***/ })

});
//# sourceMappingURL=0.js.map