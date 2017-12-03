webpackJsonp([2],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizcontentPageModule", function() { return QuizcontentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quizcontent__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuizcontentPageModule = (function () {
    function QuizcontentPageModule() {
    }
    return QuizcontentPageModule;
}());
QuizcontentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__quizcontent__["a" /* QuizcontentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quizcontent__["a" /* QuizcontentPage */]),
        ],
    })
], QuizcontentPageModule);

//# sourceMappingURL=quizcontent.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(193);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizcontentPage; });
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
 * Generated class for the QuizcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizcontentPage = (function () {
    function QuizcontentPage(navCtrl, navParams, alertCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.no = 1;
        this.quiz = {};
        this.data = {};
    }
    QuizcontentPage.prototype.ionViewDidLoad = function () {
        this.quizTitle = this.navParams.get('quizTitle');
        this.quizId = this.navParams.get('quizId');
        this.username = this.navParams.get('username');
        this.quizLoad();
        console.log(this.quizData);
    };
    QuizcontentPage.prototype.quizLoad = function () {
        var _this = this;
        this.http.get('https://www.luky.duniaarloji.com/quiz/getquiz.php?id=' + this.quizId)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.quizData = data;
        });
    };
    QuizcontentPage.prototype.prepareData = function () {
        this.dataQuiz = {
            username: this.username,
            quiz: this.quiz,
            quizTitle: this.quizTitle,
            quizId: this.quizId
        };
    };
    QuizcontentPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Kirim Quiz?',
            message: 'Sudah yakin dengan jawaban?',
            buttons: [
                {
                    text: 'Cek Kembali',
                    handler: function () {
                        console.log('rasida');
                    }
                },
                {
                    text: 'Kirim',
                    handler: function () {
                        _this.prepareData();
                        _this.navCtrl.push('ScorePage', _this.dataQuiz);
                    }
                }
            ]
        });
        confirm.present();
    };
    return QuizcontentPage;
}());
QuizcontentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quizcontent',template:/*ion-inline-start:"D:\Sekolah\kelasxii\PK7\erd\src\pages\quizcontent\quizcontent.html"*/'<!--\n\n  Generated template for the QuizcontentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mulai Quiz {{ quizTitle }} </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="body home">\n\n  <p style="text-align:center">Username kamu : {{ username }}</p>\n\n\n\n    <ion-card *ngFor="let quizs of quizData let i=index">\n\n        <ion-card-header>\n\n          <p class="quiz-no">Soal No {{ i + 1 }}</p>\n\n        </ion-card-header>\n\n        <div>\n\n          \n\n        </div>\n\n        <ion-card-content class="quiz-content" radio-group [(ngModel)]="quiz[quizs.id]">\n\n          <div [innerHtml] = "quizs.quiz"></div>\n\n\n\n          <label for=""><ion-radio value="a">a</ion-radio> {{ quizs.a }}</label>\n\n          <label for=""><ion-radio value="b">b</ion-radio> {{ quizs.b }}</label>\n\n          <label for=""><ion-radio value="c">c</ion-radio> {{ quizs.c }}</label>\n\n          <label for=""><ion-radio value="d">d</ion-radio> {{ quizs.d }}</label>\n\n          <label for=""><ion-radio value="e">e</ion-radio> {{ quizs.e }}</label>\n\n\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n      <button ion-button full color="primary" round (click)="showConfirm()" >Kirim Quiz</button>    \n\n    <!-- <div *ngFor="let quiz of quizData">\n\n        <p>{{ quiz.id }}</p>\n\n    </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Sekolah\kelasxii\PK7\erd\src\pages\quizcontent\quizcontent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], QuizcontentPage);

//# sourceMappingURL=quizcontent.js.map

/***/ })

});
//# sourceMappingURL=2.js.map