webpackJsonp([5],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Materi1PageModule", function() { return Materi1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__materi1__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Materi1PageModule = (function () {
    function Materi1PageModule() {
    }
    return Materi1PageModule;
}());
Materi1PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__materi1__["a" /* Materi1Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__materi1__["a" /* Materi1Page */]),
        ],
    })
], Materi1PageModule);

//# sourceMappingURL=materi1.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(193);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Materi1Page; });
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




var Materi1Page = (function () {
    function Materi1Page(navCtrl, navParams, http) {
        //this.data = {};
        //this.data.username = '';
        //this.data.response = '';
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        //this.http = http;
    }
    Materi1Page.prototype.ionViewDidLoad = function () {
        this.idbab = this.navParams.get('id');
        this.babTitle = this.navParams.get('title');
        this.babContentLoad();
    };
    Materi1Page.prototype.babContentLoad = function () {
        var _this = this;
        this.http.get('https://www.luky.duniaarloji.com/bab/content.php?id=' + this.navParams.get('id'))
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.babContents = data;
            // console.log(data);
        });
    };
    return Materi1Page;
}());
Materi1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-materi1',template:/*ion-inline-start:"D:\Sekolah\kelasxii\PK7\erd\src\pages\materi1\materi1.html"*/'<ion-header>\n\n  <ion-navbar>\n\n        <div class="judul">{{ babTitle }}</div>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home" padding>\n\n  <ion-card class="label" *ngFor="let babContent of babContents">\n\n  <ion-card-header>\n\n  </ion-card-header>\n\n  <ion-card-content ng-bind-html>\n\n  <b>{{ babContent.title }}</b>\n\n        \n\n  <div [innerHtml] = "babContent.content"></div>\n\n  </ion-card-content>\n\n </ion-card>\n\n </ion-content>'/*ion-inline-end:"D:\Sekolah\kelasxii\PK7\erd\src\pages\materi1\materi1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], Materi1Page);

//# sourceMappingURL=materi1.js.map

/***/ })

});
//# sourceMappingURL=5.js.map