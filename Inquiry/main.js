(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n  width: 100%;\r\n}\r\n\r\n.lbl {\r\n  color: rgba(0,0,0,.54);\r\n  /* -webkit-transform: translateY(-1.34375em) scale(.75);\r\n  transform: translateY(-1.34375em) scale(.75); */\r\n  /* transform: scale(.75); */\r\n  font-size: 12px;\r\n}\r\n\r\n.nav-link img {\r\n  height: 1.5rem;\r\n  margin-right: 9px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkI7a0RBQ2dEO0VBQ2hELDRCQUE0QjtFQUM1QixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sYmwge1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLC41NCk7XHJcbiAgLyogLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMzQzNzVlbSkgc2NhbGUoLjc1KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMzQzNzVlbSkgc2NhbGUoLjc1KTsgKi9cclxuICAvKiB0cmFuc2Zvcm06IHNjYWxlKC43NSk7ICovXHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubmF2LWxpbmsgaW1nIHtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDlweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <header class=\"header-6\">\r\n    <div class=\"branding\">\r\n        <a href=\"javascript:;\" class=\"nav-link\">\r\n            <img src=\"./assets/img/logo.png\" />\r\n            <span class=\"title\">Voyager Inquiry</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"header-nav\">\r\n        <a routerLink=\"/view\" routerLinkActive=\"active\" class=\"nav-link\"><span class=\"nav-text\">View</span></a>\r\n        <a routerLink=\"/create\" routerLinkActive=\"active\" class=\"nav-link\"><span class=\"nav-text\">Create</span></a>\r\n        <a routerLink=\"/flow\" routerLinkActive=\"active\" class=\"nav-link\"><span class=\"nav-text\">Flow</span></a>\r\n        <!-- <a routerLink=\"/trending\" routerLinkActive=\"active\" class=\"nav-link\"><span class=\"nav-text\">Trending</span></a> -->\r\n    </div>\r\n    <div class=\"header-actions\">\r\n      <a (click)=\"settings.show = true\" href=\"javascript:;\" class=\"nav-link nav-icon\">\r\n          <clr-icon shape=\"cog\"></clr-icon>\r\n      </a>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"content-container\">\r\n    <div class=\"content-area\">\r\n      <router-outlet class=\"clearfix\"></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n<clr-modal [(clrModalOpen)]=\"settings.show\">\r\n  <h3 class=\"modal-title\">Settings</h3>\r\n  <div class=\"modal-body\">\r\n    <div class=\"lbl\">\r\n      Voyager URL\r\n    </div>\r\n    <input autocomplete=\"off\" [(ngModel)]=\"settings.host\" type=\"text\" name=\"server\" placeholder=\"Voyager Server Url\">\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"settings.show = false\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"updateSettings()\">Ok</button>\r\n  </div>\r\n</clr-modal>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_solr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/solr.service */ "./src/app/services/solr.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(solr) {
        this.solr = solr;
        this.title = 'Voyager Inquiry';
    }
    AppComponent.prototype.ngOnInit = function () {
        var settings = this.fromStore('vi-settings');
        if (settings !== undefined) {
            this.settings = settings;
            this.solr.settings = settings;
        }
        else {
            this.settings = this.solr.settings;
        }
    };
    AppComponent.prototype.updateSettings = function () {
        this.settings.show = false;
        this.solr.settings = this.settings;
        this.store('vi-settings', this.settings);
    };
    AppComponent.prototype.store = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    AppComponent.prototype.fromStore = function (key) {
        var value = window.localStorage.getItem(key);
        if (value !== null && value !== undefined) {
            return JSON.parse(value);
        }
        else {
            return undefined;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vi-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_solr_service__WEBPACK_IMPORTED_MODULE_2__["SolrService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _flow_flow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./flow/flow.component */ "./src/app/flow/flow.component.ts");
/* harmony import */ var _services_solr_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/solr.service */ "./src/app/services/solr.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _services_transformer_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/transformer.service */ "./src/app/services/transformer.service.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_8__["CreateComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"],
                _flow_flow_component__WEBPACK_IMPORTED_MODULE_13__["FlowComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_17__["ChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_11__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_16__["ResizableModule"]
            ],
            providers: [_services_solr_service__WEBPACK_IMPORTED_MODULE_14__["SolrService"], _services_transformer_service__WEBPACK_IMPORTED_MODULE_18__["Transformer"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _flow_flow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flow/flow.component */ "./src/app/flow/flow.component.ts");



var appRoutes = [
    {
        path: 'view',
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_0__["ViewComponent"]
    },
    {
        path: 'create',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"],
    },
    {
        path: 'flow',
        component: _flow_flow_component__WEBPACK_IMPORTED_MODULE_2__["FlowComponent"],
    },
    {
        path: '',
        redirectTo: '/view',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-charts-bar-vertical *ngIf=\"kind === 'bar'\"\r\n  [view]=\"view\"\r\n  [scheme]=\"colorScheme\"\r\n  [results]=\"data\"\r\n  [gradient]=\"gradient\"\r\n  [xAxis]=\"showXAxis\"\r\n  [yAxis]=\"showYAxis\"\r\n  [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\"\r\n  [showYAxisLabel]=\"showYAxisLabel\"\r\n  [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\"\r\n  (select)=\"onSelect($event)\">\r\n</ngx-charts-bar-vertical>\r\n\r\n<ngx-charts-line-chart *ngIf=\"kind === 'line'\"\r\n  [view]=\"view\"\r\n  [scheme]=\"'ocean'\"\r\n  [results]=\"data\"\r\n  [gradient]=\"gradient\"\r\n  [xAxis]=\"showXAxis\"\r\n  [yAxis]=\"showYAxis\"\r\n  [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\"\r\n  [showYAxisLabel]=\"showYAxisLabel\"\r\n  [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\"\r\n  [autoScale]=\"autoScale\"\r\n  (select)=\"onSelect($event)\">\r\n</ngx-charts-line-chart>\r\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.showYAxisLabel = false;
        this.yAxisLabel = '';
        this.kind = 'bar';
        this.selected = {};
        this.colorScheme = 'air';
    }
    ChartComponent.prototype.ngOnInit = function () {
        if (this.data.length > 0) {
            if (this.data[0].series !== undefined) {
                this.kind = 'line';
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartComponent.prototype, "xAxisLabel", void 0);
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vi-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-block {\r\n  margin: unset;\r\n}\r\n.form-group {\r\n  align-items: center;\r\n  /* justify-content: center; */\r\n  font-size: 18px;\r\n  padding-left: 0;\r\n  display: inline-block;\r\n  padding-right: 20px;\r\n}\r\n.form-group>label:first-child {\r\n  width: unset;\r\n}\r\n.action {\r\n  float: right;\r\n  padding-right: 0;\r\n}\r\nlabel {\r\n  position: unset !important;  \r\n  padding-right: 20px;\r\n}\r\nselect {\r\n  text-transform: capitalize;\r\n}\r\n.select {\r\n  display: inline-block;\r\n}\r\n.card-header {\r\n  text-transform: capitalize;\r\n}\r\n.card-text > div {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.chart {\r\n  width: 100%;\r\n  display: grid;\r\n  /* height: 400px; */\r\n  height: calc(100vh - 180px);\r\n}\r\n.form-group .btn-link {\r\n  padding-right: 0;\r\n  text-align: right;\r\n  margin-top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSwyQkFBMkI7Q0FDNUI7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsd0JBQXdCO0NBQ3pCO0FBRUQ7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw0QkFBNEI7Q0FDN0I7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYmxvY2sge1xyXG4gIG1hcmdpbjogdW5zZXQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uZm9ybS1ncm91cD5sYWJlbDpmaXJzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IHVuc2V0O1xyXG59XHJcbi5hY3Rpb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7ICBcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnNlbGVjdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0ID4gZGl2IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uY2hhcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLyogaGVpZ2h0OiA0MDBweDsgKi9cclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIC5idG4tbGluayB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<clr-tabs>\r\n  <clr-tab>\r\n      <button clrTabLink>Events</button>\r\n      <clr-tab-content *clrIfActive>\r\n        <form>\r\n          <section class=\"form-block\">\r\n              <div class=\"form-group\">\r\n                  <label for=\"selects_1\">Choose an Event</label>\r\n                  <div class=\"select\" (change)=\"onBehaviorSelect($event)\">\r\n                      <select id=\"selects_1\">\r\n                          <option></option>\r\n                          <option *ngFor=\"let item of list\">{{item.name}}</option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group\" *ngIf=\"canGroup\">\r\n                  <label for=\"selects_1\">Group By</label>\r\n                  <div class=\"select\" (change)=\"onGroupSelect($event)\">\r\n                      <select id=\"selects_1\">\r\n                          <option></option>\r\n                          <option value=\"filters\">Filters</option>\r\n                          <option value=\"keywords\">Keywords</option>\r\n                          <option value=\"user\">User</option>\r\n                      </select>\r\n                  </div>\r\n              </div>\r\n              <div class=\"form-group action\">\r\n                <a href=\"javascript:;\" class=\"btn btn-link\">\r\n                    <clr-icon shape=\"floppy\" size=\"36\"></clr-icon>\r\n                </a>\r\n              </div>\r\n          </section>\r\n        </form>\r\n        <div>\r\n            <div *ngIf=\"data.length > 0\" class=\"chart\">\r\n                <ngx-charts-bar-vertical\r\n                [view]=\"view\"\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"data\"\r\n                [gradient]=\"gradient\"\r\n                [xAxis]=\"showXAxis\"\r\n                [yAxis]=\"showYAxis\"\r\n                [legend]=\"showLegend\"\r\n                [showXAxisLabel]=\"showXAxisLabel\"\r\n                [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\"\r\n                [yAxisLabel]=\"yAxisLabel\"\r\n                (select)=\"onSelect($event)\">\r\n              </ngx-charts-bar-vertical>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let event of events\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                          Event: <strong>{{event.action}}</strong>\r\n                      </div>\r\n                      <div class=\"card-block\">\r\n                          <!-- <div class=\"card-title\">\r\n                              Block\r\n                          </div> -->\r\n                          <div class=\"card-text\">\r\n                            <div *ngIf=\"event.action === 'saved-search'\">\r\n                              <div>\r\n                                <strong>Name:</strong> {{event.subject}}\r\n                              </div>\r\n                              <div>\r\n                                <strong>Action:</strong> {{event.metric}}\r\n                              </div>\r\n                            </div>\r\n                            <div><strong>User:</strong> {{event.user}}</div> \r\n                            <div *ngIf=\"event.filters\">\r\n                              <strong>Filters:</strong> {{event.filters}}\r\n                            </div>\r\n                            <div *ngIf=\"event.keywords\">\r\n                              <strong>Keywords:</strong> {{event.keywords}}\r\n                            </div>\r\n                            <div *ngIf=\"event.time\">\r\n                              <strong>Performance:</strong> {{event.time}} milliseconds\r\n                            </div>\r\n                            <div *ngIf=\"event.size\">\r\n                              <strong>Records found:</strong> {{event.size}}\r\n                            </div>\r\n                            <div><strong>Timestamp:</strong> {{event.timestamp | date:'short'}}</div>\r\n                            <div><strong>Session:</strong> {{event.session}}</div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"card-footer\">\r\n                          <button class=\"btn btn-sm btn-link\">Details</button>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </clr-tab-content>\r\n  </clr-tab>\r\n\r\n  <clr-tab>\r\n      <button clrTabLink>Engagement</button>\r\n      <clr-tab-content *clrIfActive>\r\n          ...\r\n      </clr-tab-content>\r\n  </clr-tab>\r\n\r\n</clr-tabs>\r\n  "

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CreateComponent = /** @class */ (function () {
    function CreateComponent(http) {
        this.http = http;
        this.title = 'behavior-ui';
        this.list = [];
        this.solr = 'http://voyagerdemo.com/daily/solr/analytics/select?q=*:*&wt=json&';
        this.events = [];
        this.data = [];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Population';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.canGroup = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = this.solr + 'facet=true&facet.field=action&rows=0';
        this.http.get(url).subscribe(function (res) {
            var behaviors = res.facet_counts.facet_fields.action;
            var facet = false;
            var obj = { name: '', count: 0 };
            for (var _i = 0, behaviors_1 = behaviors; _i < behaviors_1.length; _i++) {
                var b = behaviors_1[_i];
                facet = !facet;
                if (facet) {
                    obj.name = b;
                }
                else {
                    obj.count = b;
                    _this.list.push(obj);
                    obj = { name: '', count: 0 };
                }
            }
        });
    };
    CreateComponent.prototype.onBehaviorSelect = function ($event) {
        var _this = this;
        this.group = undefined;
        this.behavior = $event.target.value;
        this.canGroup = this.behavior === 'search';
        var url = this.solr + 'fq=action:' + this.behavior + '&rows=100&sort=timestamp%20desc';
        this.events = [];
        this.data = [];
        if (this.behavior === 'search') {
            this.http.get(url).subscribe(function (res) {
                var events = res.response.docs;
                // search events are duplicated
                if (_this.behavior === 'search') {
                    var e = void 0;
                    for (var i = 0; i < events.length; i++) {
                        if (!_this.isEven(i)) {
                            var event_1 = events[i];
                            e[event_1.metric] = event_1.body;
                            _this.events.push(e);
                        }
                        else {
                            // e = JSON.parse(JSON.stringify(event));
                            e = events[i];
                            e[e.metric] = e.body;
                            if (e.filters) {
                                e.filters = decodeURIComponent(e.filters);
                            }
                        }
                    }
                }
                else {
                    _this.events = events;
                }
            });
        }
        else if (this.behavior === 'saved-search') {
            this.onGroupSelect({ target: { value: 'subject' } });
        }
        else {
            this.onGroupSelect({ target: { value: 'subject' } });
        }
    };
    CreateComponent.prototype.onGroupSelect = function ($event) {
        var _this = this;
        this.group = $event.target.value;
        this.xAxisLabel = this.group;
        var url = this.solr + 'fq=action:' + this.behavior + '&rows=0&facet=true&facet.mincount=1&facet.limit=10&facet.field=' + this.group;
        this.events = [];
        this.data = [];
        this.http.get(url).subscribe(function (res) {
            var facets = res.facet_counts.facet_fields[_this.group];
            // console.log(facets);
            var facet = { name: '', value: '' };
            for (var i = 0; i < facets.length; i++) {
                if (_this.isEven(i)) {
                    facet.name = decodeURIComponent(facets[i]);
                }
                else {
                    facet.value = facets[i];
                    if (facet.name !== '{! place.op' && facet.name !== '*:*') {
                        if (facet.name.includes('}')) {
                            facet.name = facet.name.substring(facet.name.indexOf('}') + 1, facet.name.length);
                        }
                        _this.data.push(JSON.parse(JSON.stringify(facet)));
                    }
                }
                if (i > 9) {
                    break;
                }
            }
        });
    };
    CreateComponent.prototype.isEven = function (n) {
        return n % 2 === 0;
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/flow/flow.component.css":
/*!*****************************************!*\
  !*** ./src/app/flow/flow.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-block {\r\n  margin: unset;\r\n}\r\n.form-group {\r\n  align-items: center;\r\n  /* justify-content: center; */\r\n  font-size: 18px;\r\n  padding-left: 0;\r\n  display: inline-block;\r\n  padding-right: 20px;\r\n}\r\n.form-group>label:first-child {\r\n  width: unset;\r\n}\r\n.action {\r\n  text-transform: uppercase;\r\n}\r\nlabel {\r\n  position: unset !important;  \r\n  padding-right: 20px;\r\n}\r\nselect {\r\n  text-transform: capitalize;\r\n}\r\n.select {\r\n  display: inline-block;\r\n}\r\nul {\r\n  padding-bottom: 10px;\r\n}\r\nli {\r\n  list-style: none;\r\n}\r\nli > span {\r\n  padding-left: 5px;\r\n  max-width: 500px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  height: 25px;\r\n  line-height: 40px;\r\n}\r\nstrong {\r\n  text-transform: capitalize;\r\n}\r\nclr-icon[shape=child-arrow] {\r\n  margin-right: 5px;\r\n  margin-top: -5px;\r\n}\r\n.group {\r\n  background-color: lightgray;\r\n  padding-left: 5px;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n}\r\n.group > a {\r\n  float: right;\r\n  margin-right: 5px;\r\n}\r\n.group:hover {\r\n  background-color: darkgray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxvdy9mbG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUVEO0VBQ0UsMkJBQTJCO0VBQzNCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxzQkFBc0I7Q0FDdkI7QUFFRDtFQUNFLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtDQUNuQjtBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7RUFDYixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLDJCQUEyQjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2Zsb3cvZmxvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYmxvY2sge1xyXG4gIG1hcmdpbjogdW5zZXQ7XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uZm9ybS1ncm91cD5sYWJlbDpmaXJzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IHVuc2V0O1xyXG59XHJcbi5hY3Rpb24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDsgIFxyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuc2VsZWN0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uc2VsZWN0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5saSA+IHNwYW4ge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuc3Ryb25nIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuY2xyLWljb25bc2hhcGU9Y2hpbGQtYXJyb3ddIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmdyb3VwID4gYSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5ncm91cDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flow/flow.component.html":
/*!******************************************!*\
  !*** ./src/app/flow/flow.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <section class=\"form-block\">\r\n      <div class=\"form-group\">\r\n          <label for=\"selects_1\">Choose a User</label>\r\n          <div class=\"select\" (change)=\"onUserSelect($event)\">\r\n              <select id=\"selects_1\">\r\n                  <option></option>\r\n                  <option *ngFor=\"let item of list\">{{item.name}}</option>\r\n              </select>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"selects_1\">Date Range</label>\r\n          <input type=\"date\" [(clrDate)]=\"start\">\r\n          <input type=\"date\" [(clrDate)]=\"end\">\r\n      </div>\r\n  </section>\r\n  <section>\r\n    <div *ngFor=\"let g of events;\">\r\n      <div class=\"group\" (click)=\"g.show = !g.show\">\r\n          Date: {{g.date}}\r\n          <a href=\"javascript:;\"><clr-icon shape=\"caret down\"></clr-icon></a>\r\n      </div>\r\n      <ul *ngIf=\"g.show\">\r\n        <li *ngFor=\"let e of g.events; let i = index\" [ngStyle]=\"{'padding-left.px': e.padding}\">\r\n            <clr-icon shape=\"child-arrow\" [hidden]=\"i == 0\"></clr-icon>\r\n            <strong>Action:</strong> <span class=\"action\">{{e.action}}</span>\r\n            <span *ngIf=\"e.filters && e.filters.length > 0\">| <strong>Filters:</strong> {{e.filters}}</span>\r\n            <span *ngIf=\"e.keywords\">| <strong>Keywords:</strong> {{e.keywords}}</span>\r\n            <span *ngIf=\"e.place\">| <strong>Place:</strong> {{e.place}}</span>\r\n            <span *ngIf=\"e.sort\">| <strong>Sort:</strong> {{e.sort}}</span>\r\n            <span *ngIf=\"e.action === 'saved-search'\">| <strong>Name:</strong> {{e.subject}}</span>\r\n            <span *ngIf=\"e.action === 'saved-search'\">| <strong>Action:</strong> {{e.metric}}</span>\r\n            <span *ngIf=\"e.action !== 'saved-search' && e.action !== 'search'\">| <strong>Type:</strong> {{e.subject}}</span>\r\n            <span *ngIf=\"e.action !== 'saved-search' && e.action !== 'search'\">| Document: {{e.id}}</span>\r\n            <span> | <strong>Time:</strong> {{e.timestamp | date:'medium'}}</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/flow/flow.component.ts":
/*!****************************************!*\
  !*** ./src/app/flow/flow.component.ts ***!
  \****************************************/
/*! exports provided: FlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowComponent", function() { return FlowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlowComponent = /** @class */ (function () {
    function FlowComponent(http) {
        this.http = http;
        this.list = [{ name: 'admin' }];
        this.solr = 'http://voyagerdemo.com/daily/solr/analytics/select?q=*:*&wt=json&';
        this.events = [];
    }
    FlowComponent.prototype.ngOnInit = function () {
        this.start = new Date();
        this.start.setDate(this.start.getDate() - 30);
        this.end = new Date();
    };
    FlowComponent.prototype.onUserSelect = function ($event) {
        var _this = this;
        var user = $event.target.value;
        var dateRangeFilter = '&fq=timestamp:[' + this.start.toISOString() + ' TO ' + this.end.toISOString() + ']';
        var url = this.solr + 'fq=user:' + user + '&rows=100&sort=timestamp%20asc' + dateRangeFilter;
        this.http.get(url).subscribe(function (res) {
            var events = [];
            var padding = 0;
            var index = 0;
            var lastEvent = {};
            for (var _i = 0, _a = res.response.docs; _i < _a.length; _i++) {
                var e = _a[_i];
                if (e.action === 'search-group' && events.length > 0) {
                    var lastSearchEvent = events[events.length - 1];
                    lastSearchEvent.group = e.metric;
                }
                else if (e.action === 'search' && lastEvent.action === 'search') {
                    if (e.metric === 'size' && lastEvent.metric === 'time') {
                        var query = e.subject;
                        var json = _this.queryStringToJSON(query);
                        e.place = json.place;
                        e.sort = json.sort;
                        padding += 5;
                        e.padding = padding;
                        if (e.filters) {
                            var filters = e.filters;
                            var idx = filters.findIndex(function (f) { return f === '{! place.op'; });
                            if (idx !== -1) {
                                e.filters.splice(idx, 1);
                            }
                            e.filters = decodeURIComponent(e.filters);
                            if (e.filters.includes('}')) {
                                e.filters = e.filters.substring(e.filters.indexOf('}') + 1, e.filters.length);
                            }
                        }
                        if (e.keywords) {
                            var keywords = e.keywords;
                            e.keywords = decodeURIComponent(e.keywords);
                        }
                        events.push(e);
                    }
                }
                else if (e.action === 'saved-search') {
                    padding += 5;
                    e.padding = padding;
                    events.push(e);
                }
                else if (e.action !== 'search' && e.action !== 'search-group' && e.action !== 'saved-search') {
                    padding += 5;
                    e.padding = padding;
                    events.push(e);
                }
                index++;
                lastEvent = e;
            }
            _this.events = events;
            _this.events = _this.groupByDate(events);
            console.log(events);
            // search events are duplicated
            // if (this.behavior === 'search') {
            //   let e;
            //   for (let i = 0; i < events.length; i++) {
            //     if (!this.isEven(i)) {
            //       const event = events[i];
            //       e[event.metric] = event.body;
            //       this.events.push(e);
            //     } else {
            //       // e = JSON.parse(JSON.stringify(event));
            //       e = events[i];
            //       e[e.metric] = e.body;
            //       if (e.filters) {
            //         e.filters = decodeURIComponent(e.filters);
            //       }
            //     }
            //   }
            // }
        });
    };
    FlowComponent.prototype.groupByDate = function (events) {
        var grouped = [];
        var group = { date: '', events: [], show: true };
        var padding = -5;
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var e = events_1[_i];
            var date = e.timestamp.split('T')[0];
            if (group.date !== date) {
                group = { date: date, events: [], show: true };
                grouped.push(group);
                padding = -5;
            }
            e.padding = padding += 5;
            group.events.push(e);
        }
        return grouped;
    };
    FlowComponent.prototype.queryStringToJSON = function (qs) {
        if (qs.indexOf('?') > -1) {
            qs = qs.split('?')[1];
        }
        var pairs = qs.split('&');
        var result = {};
        pairs.forEach(function (p) {
            var pair = p.split('=');
            var key = pair[0];
            var value = decodeURIComponent(pair[1] || '');
            if (p.includes('place:')) {
                key = 'place';
                value = decodeURIComponent(pair[2] || '');
                value = value.replace('}', ' ');
            }
            if (result[key]) {
                if (Object.prototype.toString.call(result[key]) === '[object Array]') {
                    result[key].push(value);
                }
                else {
                    result[key] = [result[key], value];
                }
            }
            else {
                result[key] = value;
            }
        });
        return JSON.parse(JSON.stringify(result));
    };
    FlowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flow',
            template: __webpack_require__(/*! ./flow.component.html */ "./src/app/flow/flow.component.html"),
            styles: [__webpack_require__(/*! ./flow.component.css */ "./src/app/flow/flow.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlowComponent);
    return FlowComponent;
}());



/***/ }),

/***/ "./src/app/services/solr.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/solr.service.ts ***!
  \******************************************/
/*! exports provided: SolrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolrService", function() { return SolrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SolrService = /** @class */ (function () {
    function SolrService(http) {
        this.http = http;
        this._settings = { host: 'http://voyagerdemo.com/daily', show: false };
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    SolrService.prototype.fetchUnique = function (field, filters) {
        var jsonFacet = {
            query: '*:*',
            facet: {
                value: 'unique(' + field + ')'
            }
        };
        if (filters !== undefined) {
            jsonFacet.filter = filters;
        }
        var solr = this.analyticsEndpoint;
        return this.http.post(solr, jsonFacet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.facets.value; }));
    };
    SolrService.prototype.facet = function (field, mincount, limit, days) {
        var jsonFacet = {
            query: '*:*',
            facet: { items: {
                    type: 'terms',
                    field: field,
                    mincount: mincount,
                    limit: limit
                }
            }
        };
        if (days !== undefined) {
            jsonFacet.filter = ['timestamp:[NOW-' + days + 'DAY/DAY TO NOW]'];
        }
        return this.http.post(this.analyticsEndpoint, jsonFacet).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.facets.items.buckets; }));
    };
    SolrService.prototype.fetchTimeSeries = function (mincount, start, unit, gap, filters) {
        var units = unit + 'S';
        var request = {
            facet: {
                items: {
                    type: 'range',
                    field: 'timestamp',
                    mincount: mincount,
                    start: 'NOW-' + start + units,
                    end: 'NOW',
                    gap: '+' + gap + unit,
                }
            },
            filter: filters,
            query: '*:*'
        };
        return this.http.post(this.analyticsEndpoint, request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.facets.items.buckets; }));
    };
    Object.defineProperty(SolrService.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        set: function (settings) {
            this._settings = settings;
            this.change.next(settings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolrService.prototype, "endpoint", {
        get: function () {
            var solr = this.settings.host;
            if (!solr.endsWith('/')) {
                solr += '/';
            }
            solr += 'solr/$index/select?q=*:*&wt=json&';
            return solr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SolrService.prototype, "analyticsEndpoint", {
        get: function () {
            return this.endpoint.replace('$index', 'analytics');
        },
        enumerable: true,
        configurable: true
    });
    SolrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SolrService);
    return SolrService;
}());



/***/ }),

/***/ "./src/app/services/transformer.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/transformer.service.ts ***!
  \*************************************************/
/*! exports provided: Transformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transformer", function() { return Transformer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Transformer = /** @class */ (function () {
    function Transformer() {
    }
    Transformer.prototype.facetsToD3 = function (results, formatter) {
        var converted = [];
        var formatted, value;
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var item = results_1[_i];
            formatted = formatter(item.val);
            value = item.count;
            converted.push({ name: formatted, value: value, raw: item.val });
        }
        return converted;
    };
    Transformer.prototype.facetsToD3Series = function (results, field, options) {
        var converted = [];
        if (options.cumulative) {
            var series = this.accumulateResults(results, options);
            converted.push({ name: field.toUpperCase(), series: series });
            return converted;
        }
        converted.push({ name: field.toUpperCase(), series: this.facetsToD3(results, this.formatDate) });
        return converted;
    };
    Transformer.prototype.facetsToD3SeriesBySubfield = function (results, field, options, formatter, categoryFormatter) {
        var converted = [], itemSeries = {};
        var allCategories = this.populateSeries(itemSeries, results, options, formatter, categoryFormatter);
        var series;
        for (var key in itemSeries) {
            if (true) {
                series = itemSeries[key];
                if (series && series.items.length < allCategories.length) {
                    this.fillMissingSeries(series.items, options, allCategories);
                }
                else {
                    if (options.cumulative) {
                        this.accumulateSeries(series.items);
                    }
                }
                converted.push({ name: formatter(key), series: series.items, count: series.total, raw: series.raw });
            }
        }
        return converted;
    };
    Transformer.prototype.accumulateSeries = function (item) {
        var count = 0;
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var series = item_1[_i];
            count += series.value;
            series.value = count;
        }
    };
    // the chart doesn't look right if all series don't have the same categories
    Transformer.prototype.fillMissingSeries = function (series, options, allCategories) {
        var seriesLookup = this.arrayToMap(series, 'name');
        var index = 0, accumulatedValue = 0;
        for (var _i = 0, allCategories_1 = allCategories; _i < allCategories_1.length; _i++) {
            var cat = allCategories_1[_i];
            if (seriesLookup[cat.name] === undefined) { // insert the missing category in the correct position
                series.splice(index, 0, { name: cat.name, value: accumulatedValue });
            }
            else {
                if (options.cumulative) {
                    accumulatedValue += seriesLookup[cat.name].value;
                    seriesLookup[cat.name].value = accumulatedValue;
                }
            }
            index++;
        }
    };
    Transformer.prototype.populateSeries = function (itemMap, results, options, formatter, categoryFormatter) {
        var seriesCategories = {}, allCategories = [];
        var collection = results;
        if (results.fields) {
            collection = results.fields;
        }
        var _loop_1 = function (item) {
            var parent_1 = item.val;
            if (typeof (item.val) !== 'number') {
                var date = new Date(item.val);
                if (date instanceof Date && !isNaN(date.valueOf())) {
                    parent_1 = this_1.formatDate(item.val, options);
                }
                else {
                    parent_1 = categoryFormatter(item.val);
                }
            }
            else {
                parent_1 = categoryFormatter(item.val);
            }
            if (item.fields) {
                for (var _i = 0, _a = item.fields.buckets; _i < _a.length; _i++) {
                    var child = _a[_i];
                    var formattedVal = formatter(child.val);
                    var series = itemMap[formattedVal];
                    if (series === undefined) {
                        series = { items: [], total: 0, raw: child.val };
                    }
                    if (child.count > 0) {
                        var existing = series.items.findIndex(function (itm) {
                            return itm.name === parent_1;
                        });
                        if (existing === -1) {
                            series.total += child.count;
                            series.items.push({ name: parent_1, value: child.count });
                        }
                    }
                    else if (options.ignoreEmpty !== true) {
                        series.items.push({ name: parent_1, value: child.count });
                    }
                    itemMap[formattedVal] = series;
                }
            }
            seriesCategories[item.val] = parent_1;
        };
        var this_1 = this;
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var item = collection_1[_i];
            _loop_1(item);
        }
        for (var cat in seriesCategories) {
            if (true) {
                allCategories.push({ val: cat, name: seriesCategories[cat] });
            }
        }
        this.sort(allCategories, 'val');
        return allCategories;
    };
    Transformer.prototype.accumulateResults = function (results, options) {
        var count = results.count;
        var formatted, value, total = 0;
        for (var _i = 0, _a = results.fields; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.count;
        }
        count = count - total;
        var series = [];
        for (var _b = 0, _c = results.fields; _b < _c.length; _b++) {
            var item = _c[_b];
            value = item.count + count;
            count = count + item.count;
            formatted = this.formatDate(item.val, options);
            series.push({ name: formatted, value: value });
        }
        return series;
    };
    Transformer.prototype.formatDate = function (val, options) {
        var d = val.split('T')[0];
        d = d.split('-');
        if (options && options.type === 'HOUR') {
            var time = val.split('T')[1];
            time = time.split('.')[0];
            time = time.split(':');
            time = time[0] + ':' + time[1];
            return d[1] + '/' + d[2] + ' ' + time;
        }
        else {
            return d[1] + '/' + d[2] + '/' + d[0];
        }
    };
    Transformer.prototype.sort = function (array, field) {
        array.sort(function (a, b) {
            if (a[field] > b[field]) {
                return 1;
            }
            if (a[field] < b[field]) {
                return -1;
            }
            return 0;
        });
    };
    Transformer.prototype.arrayToMap = function (array, key) {
        var map = {};
        var index = 0;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            item.index = index;
            map[item[key]] = item;
            index++;
        }
        return map;
    };
    Transformer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Transformer);
    return Transformer;
}());



/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"dashboard-select\">\r\n  <clr-dropdown>\r\n    <button type=\"button\" class=\"btn btn-sm btn-link\" clrDropdownTrigger>\r\n      {{activeDashboard.name}}\r\n      <clr-icon shape=\"caret down\"></clr-icon>\r\n    </button>\r\n    <clr-dropdown-menu clrPosition=\"bottom-right\" *clrIfOpen>\r\n      <label class=\"dropdown-header\">Dashboards</label>\r\n      <button (click)=\"newDashboard()\" type=\"button\" clrDropdownItem>\r\n        <clr-icon shape=\"new\"></clr-icon>\r\n      </button>\r\n      <button (click)=\"selectDashboard(d)\" *ngFor=\"let d of dashboards\" type=\"button\" clrDropdownItem>\r\n        {{d.name}}\r\n        <clr-icon class=\"is-error\" *ngIf=\"d.name !== 'Default'\" (click)=\"removeDashboard(d)\" shape=\"times-circle\"></clr-icon>\r\n      </button>\r\n    </clr-dropdown-menu>\r\n  </clr-dropdown>\r\n</section>\r\n\r\n<form>\r\n\r\n  <!-- <div>\r\n      Return users : {{returnUsers}}\r\n  </div> -->\r\n\r\n  <section class=\"form-block\">\r\n      <div class=\"form-group\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"search-input\">\r\n                <input [(ngModel)]=\"choice\" type=\"text\" autocomplete=\"off\" placeholder=\"What do you want to see?\" (input)=\"onInput($event)\" name=\"input\" (focus)=\"focus($event)\">\r\n                <div class=\"choices\" *ngIf=\"showChoices\">\r\n                  <ul>\r\n                    <li *ngFor=\"let q of filtered\">\r\n                      <a href=\"javascript:;\" class=\"btn btn-link choice\" (click)=\"onSelect(q)\">{{q.name}}</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n  </section>\r\n</form>\r\n\r\n<!-- dashboard items -->\r\n<div>\r\n  <!-- active chart -->\r\n  <div [ngStyle]=\"active.style\" (cdkDragReleased)=\"stop($event, active)\" class=\"chart-container active\" *ngIf=\"data.length > 0 && selectedQuery.aggregate === undefined\" cdkDrag>\r\n    <div class=\"actions\">\r\n      <span class=\"pin\">\r\n        <a href=\"javascript:;\" (click)=\"togglePin(active, $event)\">\r\n          <clr-icon shape=\"pin\" [class]=\"active.pin.class\"></clr-icon>\r\n        </a>\r\n      </span>\r\n      <span class=\"item-title\">\r\n        {{active.query.name}}\r\n      </span>\r\n      <div class=\"example-handle\" cdkDragHandle>\r\n        <clr-icon shape=\"drag-handle-corner\" dir=\"left\"></clr-icon>\r\n      </div>\r\n    </div>\r\n    <div class=\"chart\" mwlResizable [enableGhostResize]=\"false\" [validateResize]=\"validate\" (resizeEnd)=\"onResizeEnd($event, active)\">\r\n      <vi-chart [data]=\"data\" [ngStyle]=\"{ 'width' : active.width, 'height' : active.height }\"></vi-chart>\r\n      <div class=\"resize-handle\" mwlResizeHandle [resizeEdges]=\"{bottom: true, right: true}\">\r\n        <clr-icon shape=\"resize right\"></clr-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- active card -->\r\n  <div [ngStyle]=\"active.style\" (cdkDragReleased)=\"stop($event, active)\" *ngIf=\"data.length > 0 && (selectedQuery.aggregate === 'count' || selectedQuery.aggregate === 'unique')\" class=\"card-container active\" cdkDrag>\r\n    <div class=\"actions\">\r\n      <span class=\"pin\">\r\n        <a href=\"javascript:;\" (click)=\"togglePin(active, $event)\">\r\n          <clr-icon shape=\"pin\" [class]=\"active.pin.class\"></clr-icon>\r\n        </a>\r\n      </span>\r\n      <span class=\"item-title\">\r\n        {{active.query.name}}\r\n      </span>\r\n      <div class=\"example-handle\" cdkDragHandle>\r\n        <clr-icon shape=\"drag-handle-corner\" dir=\"left\"></clr-icon>\r\n      </div>\r\n    </div>\r\n    <div class=\"dashboard-card\" mwlResizable [enableGhostResize]=\"false\" [validateResize]=\"validate\" (resizeEnd)=\"onResizeEnd($event, active)\">\r\n      <div class=\"card-block\">\r\n        <div class=\"card-text\">\r\n          <span class=\"card-value\">\r\n            {{data[0].value}}\r\n          </span>\r\n          <span class=\"card-label\">\r\n            {{data[0].name}}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"resize-handle\" mwlResizeHandle [resizeEdges]=\"{bottom: true, right: true}\">\r\n        <clr-icon shape=\"resize right\"></clr-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Pinned Items -->\r\n  <div (click)=\"activate(item)\" *ngFor=\"let item of items\" [ngStyle]=\"item.style\" (cdkDragReleased)=\"stop($event, item)\" class=\"chart-container\" [ngClass]=\"item.active\" cdkDrag>\r\n      <div class=\"actions\">\r\n        <span class=\"pin\">\r\n          <a href=\"javascript:;\" (click)=\"togglePin(item)\">\r\n            <clr-icon shape=\"pin\" [class]=\"item.pin.class\"></clr-icon>\r\n          </a>\r\n        </span>\r\n        <span class=\"item-title\">\r\n          {{item.query.name}}\r\n        </span>\r\n        <div class=\"example-handle\" cdkDragHandle>\r\n          <clr-icon shape=\"drag-handle-corner\" dir=\"left\"></clr-icon>\r\n        </div>\r\n      </div>\r\n      <!-- chart -->\r\n      <div *ngIf=\"item.query.aggregate === undefined && item.loaded\" class=\"chart\" mwlResizable [enableGhostResize]=\"false\" [validateResize]=\"validate\" (resizeEnd)=\"onResizeEnd($event, item)\">\r\n        <vi-chart [data]=\"item.data\" [ngStyle]=\"{ 'width' : item.width, 'height' : item.height }\"></vi-chart>\r\n        <div class=\"resize-handle\" mwlResizeHandle [resizeEdges]=\"{bottom: true, right: true}\">\r\n          <clr-icon shape=\"resize right\"></clr-icon>\r\n        </div>\r\n      </div>\r\n      <!-- card -->\r\n      <div [ngStyle]=\"{ 'width' : item.width, 'height' : item.height }\" *ngIf=\"(item.query.aggregate === 'count' || item.query.aggregate === 'unique') && item.loaded\" class=\"dashboard-card\" mwlResizable [enableGhostResize]=\"false\" [validateResize]=\"validate\" (resizeEnd)=\"onResizeEnd($event, item)\">\r\n        <div class=\"card-block\">\r\n          <div class=\"card-text\">\r\n            <span class=\"card-value\">\r\n              {{item.data[0].value}}\r\n            </span>\r\n            <span class=\"card-label\">\r\n              {{item.data[0].name}}\r\n            </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"resize-handle\" mwlResizeHandle [resizeEdges]=\"{bottom: true, right: true}\">\r\n          <clr-icon shape=\"resize right\"></clr-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n<clr-modal [(clrModalOpen)]=\"newModal.show\">\r\n  <h3 class=\"modal-title\">New Dashboard</h3>\r\n  <div class=\"modal-body\">\r\n    <input autocomplete=\"off\" [(ngModel)]=\"newModal.name\" type=\"text\" name=\"dashboard\" placeholder=\"Dashboard Name\">\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"newModal.show = false\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addDashboard()\">Ok</button>\r\n  </div>\r\n</clr-modal>"

/***/ }),

/***/ "./src/app/view/view.component.scss":
/*!******************************************!*\
  !*** ./src/app/view/view.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-select {\n  text-align: right; }\n\n:host ::ng-deep clr-dropdown .btn {\n  margin-top: -2px; }\n\nclr-dropdown button {\n  z-index: 998; }\n\nclr-dropdown-menu {\n  min-width: 150px; }\n\nclr-icon[shape=new] {\n  height: 26px;\n  width: 26px;\n  color: green; }\n\nclr-icon[shape=times-circle] {\n  float: right;\n  margin-top: 4px;\n  margin-right: -10px; }\n\nform {\n  margin-top: -40px; }\n\n.form-block {\n  /* margin: unset; */ }\n\n.search-input {\n  position: relative;\n  display: inline-block; }\n\n.choices {\n  position: absolute;\n  font-size: 20px;\n  text-align: left;\n  width: 450px;\n  background-color: white;\n  z-index: 100;\n  max-height: 400px;\n  overflow: auto;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.btn {\n  font-size: 14px;\n  max-width: unset; }\n\nli {\n  list-style: none; }\n\ninput {\n  width: 450px;\n  /* text-align: center; */\n  /* padding-left: 22px; */\n  padding-bottom: 5px;\n  border: 1px solid #ced4da;\n  border-radius: 5px;\n  padding-top: 5px;\n  background-color: white !important;\n  height: 40px;\n  font-size: 20px;\n  /* padding-left: 45px; */ }\n\ninput::-webkit-input-placeholder {\n  text-align: center; }\n\ninput:-ms-input-placeholder {\n  text-align: center; }\n\ninput::-ms-input-placeholder {\n  text-align: center; }\n\ninput::placeholder {\n  text-align: center; }\n\n.form-group {\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  padding-left: 0;\n  /* display: inline-block; */\n  /* padding-right: 20px; */\n  text-align: center; }\n\n.form-group > div:first-child {\n  font-size: 24px;\n  padding-bottom: 40px; }\n\n.form-group > label:first-child {\n  width: unset; }\n\nlabel {\n  position: unset !important;\n  padding-right: 20px; }\n\nselect {\n  text-transform: capitalize; }\n\n.select {\n  /* display: inline-block; */ }\n\nvi-chart {\n  overflow: hidden; }\n\n.card-header {\n  text-transform: capitalize; }\n\n.card-text > div {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.chart-container, .card-container {\n  /* position: relative; */\n  /* position: fixed; */\n  position: absolute;\n  height: 400px;\n  padding-bottom: 25px;\n  background-color: white;\n  /* transform: none !important; */\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(1, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  margin-bottom: 40px;\n  width: 50%;\n  left: 25%; }\n\n.chart-container:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.chart-container.active {\n  z-index: 1000;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.card-container:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.card-container.active {\n  z-index: 1000;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.chart {\n  position: relative;\n  width: 100%;\n  display: grid;\n  height: 100%;\n  background-color: white;\n  /* box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12); */ }\n\ng[ngx-charts-axis-label] {\n  text-transform: capitalize; }\n\n.dashboard-card {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%; }\n\n.card-value {\n  display: block;\n  font-size: 100px;\n  text-align: center; }\n\n.card-label {\n  display: block;\n  font-size: 30px;\n  margin-top: 40px;\n  text-transform: capitalize;\n  text-align: center; }\n\n.item-title {\n  font-weight: 500; }\n\n.actions {\n  text-align: center; }\n\n.pin {\n  float: left; }\n\n.is-solid {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n\n.actions > span {\n  /* display: block; */\n  /* background-color: white; */\n  /* width: 40px; */\n  /* height: 20px; */\n  /* display: inline-block; */\n  /* box-shadow: 0 0px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 1px 0 rgba(0,0,0,.12); */\n  /* padding-bottom: 5px; */\n  /* border: 1px solid lightgray; */\n  /* border-bottom: none; */\n  /* margin-right: -1px; */\n  padding-left: 5px; }\n\nclr-icon[shape=pin] {\n  /* padding-bottom: 5px; */\n  margin-bottom: 5px;\n  margin-right: 10px; }\n\nclr-icon[shape=drag-handle-corner] {\n  margin-right: 4px;\n  height: 24px;\n  width: 24px;\n  padding-bottom: 1px;\n  color: gray; }\n\n.example-handle {\n  /* position: absolute; */\n  /* top: 10px; */\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n  z-index: 1000;\n  top: 30px;\n  /* display: inline-block; */\n  /* border: solid 1px lightgray; */\n  border-bottom: none;\n  background-color: white;\n  /* width: 40px; */\n  /* border-right: none; */\n  /* margin-right: -1px; */\n  float: right; }\n\n.chart:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\nmwlResizable {\n  box-sizing: border-box; }\n\n.resize-handle {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  cursor: se-resize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9DOlxcdm95YWdlclxcaW5zaWdodHMtdWkvc3JjXFxhcHBcXHZpZXdcXHZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFHTSxpQkFBZ0IsRUFDakI7O0FBSUw7RUFFSSxhQUFZLEVBQ2I7O0FBR0g7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLG9CQUFvQixFQUNyQjs7QUFDRDtFQUNFLG1CQUFrQjtFQUNsQixzQkFBcUIsRUFDdEI7O0FBQ0Q7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxzSEFFb0MsRUFDckM7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFDRDtFQUNFLGFBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG9CQUFtQjtFQUNuQiwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixtQ0FBa0M7RUFDbEMsYUFBWTtFQUNaLGdCQUFlO0VBQ2YseUJBQXlCLEVBQzFCOztBQUNEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUZEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUZEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUZEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0Usb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLGdCQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixtQkFBa0IsRUFDbkI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLHFCQUFvQixFQUNyQjs7QUFDRDtFQUNFLGFBQVksRUFDYjs7QUFDRDtFQUNFLDJCQUEwQjtFQUMxQixvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSwyQkFBMEIsRUFDM0I7O0FBQ0Q7RUFDRSw0QkFBNEIsRUFDN0I7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsd0JBQXVCLEVBQ3hCOztBQUVEO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLHFCQUFvQjtFQUNwQix3QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLGdIQUFtRztFQUNuRyxvQkFBbUI7RUFFbkIsV0FBVTtFQUNWLFVBQVMsRUFDVjs7QUFFRDtFQUNFLHNIQUU0QyxFQUM3Qzs7QUFFRDtFQUNFLGNBQWE7RUFDYixzSEFFa0MsRUFDbkM7O0FBRUQ7RUFDRSxzSEFFNEMsRUFDN0M7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isc0hBRWtDLEVBQ25DOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxjQUFhO0VBQ2IsYUFBWTtFQUNaLHdCQUF1QjtFQUN2QiwwR0FBMEcsRUFDM0c7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0I7O0FBUUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQiwyQkFBMEI7RUFDMUIsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0Usa0NBQXlCO1VBQXpCLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNNLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsMEdBQTBHO0VBQzFHLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixrQkFBaUIsRUFDdEI7O0FBRUQ7RUFDTSwwQkFBMEI7RUFDMUIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUN2Qjs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osWUFBVztFQUNYLG9CQUFtQjtFQUNuQixZQUFXLEVBQ1o7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVc7RUFDWCxZQUFXO0VBQ1gsYUFBWTtFQUNaLFlBQVc7RUFDWCxhQUFZO0VBQ1osY0FBYTtFQUNiLFVBQVM7RUFDVCw0QkFBNEI7RUFFNUIsa0NBQWtDO0VBQ2xDLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsYUFBWSxFQUNiOztBQUVEO0VBQ0Usc0hBRThDLEVBQy9DOztBQUVEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVO0VBQ1Ysa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1zZWxlY3Qge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgOjpuZy1kZWVwIGNsci1kcm9wZG93biB7XHJcbiAgICAuYnRuIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNsci1kcm9wZG93biB7XHJcbiAgYnV0dG9uIHtcclxuICAgIHotaW5kZXg6IDk5ODtcclxuICB9XHJcbn1cclxuXHJcbmNsci1kcm9wZG93bi1tZW51IHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG5jbHItaWNvbltzaGFwZT1uZXddIHtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5jbHItaWNvbltzaGFwZT10aW1lcy1jaXJjbGVdIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcblxyXG4uZm9ybS1ibG9jayB7XHJcbiAgLyogbWFyZ2luOiB1bnNldDsgKi9cclxufVxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jaG9pY2VzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4uYnRuIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWF4LXdpZHRoOiB1bnNldDtcclxufVxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAvKiBwYWRkaW5nLWxlZnQ6IDIycHg7ICovXHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAvKiBwYWRkaW5nLWxlZnQ6IDQ1cHg7ICovXHJcbn1cclxuaW5wdXQ6OnBsYWNlaG9sZGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1ncm91cCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAvKiBwYWRkaW5nLXJpZ2h0OiAyMHB4OyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1ncm91cCA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcbi5mb3JtLWdyb3VwPmxhYmVsOmZpcnN0LWNoaWxkIHtcclxuICB3aWR0aDogdW5zZXQ7XHJcbn1cclxubGFiZWwge1xyXG4gIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50OyAgXHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5zZWxlY3Qge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5zZWxlY3Qge1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxufVxyXG5cclxudmktY2hhcnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jYXJkLXRleHQgPiBkaXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jaGFydC1jb250YWluZXIsIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG4gIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAvKiB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgxLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMik7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDsgIFxyXG5cclxuICB3aWR0aDogNTAlO1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lcjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lci5hY3RpdmUge1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIuYWN0aXZlIHtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5jaGFydCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjEyKTsgKi9cclxufVxyXG5cclxuZ1tuZ3gtY2hhcnRzLWF4aXMtbGFiZWxdIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLy8gLmNhcmQtY29udGFpbmVyIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtdmFsdWUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBpbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pcy1zb2xpZCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLmFjdGlvbnMgPiBzcGFuIHtcclxuICAgICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xyXG4gICAgICAvKiB3aWR0aDogNDBweDsgKi9cclxuICAgICAgLyogaGVpZ2h0OiAyMHB4OyAqL1xyXG4gICAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcbiAgICAgIC8qIGJveC1zaGFkb3c6IDAgMHB4IDFweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjEyKTsgKi9cclxuICAgICAgLyogcGFkZGluZy1ib3R0b206IDVweDsgKi9cclxuICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5OyAqL1xyXG4gICAgICAvKiBib3JkZXItYm90dG9tOiBub25lOyAqL1xyXG4gICAgICAvKiBtYXJnaW4tcmlnaHQ6IC0xcHg7ICovXHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG5jbHItaWNvbltzaGFwZT1waW5dIHtcclxuICAgICAgLyogcGFkZGluZy1ib3R0b206IDVweDsgKi9cclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmNsci1pY29uW3NoYXBlPWRyYWctaGFuZGxlLWNvcm5lcl0ge1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oYW5kbGUge1xyXG4gIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAvKiB0b3A6IDEwcHg7ICovXHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBtb3ZlO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHRvcDogMzBweDtcclxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXHJcblxyXG4gIC8qIGJvcmRlcjogc29saWQgMXB4IGxpZ2h0Z3JheTsgKi9cclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8qIHdpZHRoOiA0MHB4OyAqL1xyXG4gIC8qIGJvcmRlci1yaWdodDogbm9uZTsgKi9cclxuICAvKiBtYXJnaW4tcmlnaHQ6IC0xcHg7ICovXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2hhcnQ6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG5td2xSZXNpemFibGUge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5yZXNpemUtaGFuZGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.service */ "./src/app/view/view.service.ts");




var ViewComponent = /** @class */ (function () {
    function ViewComponent(viewService, ref) {
        this.viewService = viewService;
        this.ref = ref;
        this.data = [];
        this.queries = [];
        this.filtered = [];
        this.choice = '';
        this.selectedQuery = {};
        this.showChoices = false;
        this.style = {};
        this.items = [];
        this.active = { pin: { on: false, style: '', class: '' }, query: {} };
        this.dashboards = [{ name: 'Default', items: [], selected: true }];
        this.newModal = { show: false, name: '' };
        this.resizing = false;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeDashboard = this.dashboards[0];
        this.viewService.fetchQueries().subscribe(function (queries) {
            _this.queries = queries;
            _this.filtered = queries;
        });
        var dashboards = this.fromStore('vi-dashboards');
        if (dashboards !== undefined) {
            this.dashboards = dashboards;
            this.activeDashboard = dashboards.find(function (d) { return d.selected; });
            this.items = this.activeDashboard.items;
            this.loadDashboard(this.activeDashboard);
        }
        this.viewService.change().subscribe(function (c) {
            _this.loadDashboard(_this.activeDashboard);
        });
        // this.user.fetchUsers(4, -1, 30).subscribe(users => {
        //   // console.log(users);
        //   this.returnUsers = users.length;
        // });
    };
    ViewComponent.prototype.loadDashboard = function (dashboard) {
        var _loop_1 = function (item) {
            this_1.viewService.fetch(item.query).subscribe(function (data) {
                item.active = false;
                item.data = data;
                item.loaded = true;
                item.error = false;
            }, function (err) {
                item.loaded = false;
                item.error = true;
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = dashboard.items; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
    };
    ViewComponent.prototype.activate = function (item) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var i = _a[_i];
            i.active = '';
        }
        setTimeout(function () {
            item.active = 'active';
        }, 0);
    };
    ViewComponent.prototype.togglePin = function (item, $event) {
        item.pin.on = !item.pin.on;
        item.pin.class = item.pin.on ? 'is-solid' : '';
        if (item.pin.on) {
            this.items.push(item);
            var style = $event.target.parentElement.parentElement.parentElement.parentElement.style;
            // console.log(style.transform);
            if (item.style !== undefined) {
                item.style.transform = style.transform;
            }
            this.clearActive();
            this.choice = '';
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.style !== undefined) {
                    delete i.style.opacity;
                }
            }
        }
        else {
            this.items = this.items.filter(function (i) { return i.query.name !== item.query.name; });
        }
        var activeDashboard = this.dashboards.find(function (d) { return d.selected; });
        activeDashboard.items = this.items;
        this.store('vi-dashboards', this.dashboards);
    };
    ViewComponent.prototype.selectDashboard = function (dashboard) {
        this.loadDashboard(dashboard);
        this.activeDashboard = dashboard;
        this.items = dashboard.items;
        for (var _i = 0, _a = this.dashboards; _i < _a.length; _i++) {
            var d = _a[_i];
            d.selected = false;
        }
        dashboard.selected = true;
        this.store('vi-dashboards', this.dashboards);
    };
    ViewComponent.prototype.newDashboard = function () {
        this.newModal.show = true;
    };
    ViewComponent.prototype.addDashboard = function () {
        for (var _i = 0, _a = this.dashboards; _i < _a.length; _i++) {
            var d = _a[_i];
            d.selected = false;
        }
        var dashboard = { name: this.newModal.name, selected: true, items: [] };
        this.items = dashboard.items;
        this.dashboards.push(dashboard);
        this.activeDashboard = dashboard;
        this.newModal.show = false;
    };
    ViewComponent.prototype.removeDashboard = function (dashboard) {
        if (this.activeDashboard.name === dashboard.name) {
            this.activeDashboard = this.dashboards[0];
            this.dashboards[0].selected = true;
            this.items = this.activeDashboard.items;
        }
        this.dashboards = this.dashboards.filter(function (d) { return d.name !== dashboard.name; });
        this.store('vi-dashboards', this.dashboards);
    };
    ViewComponent.prototype.validate = function (event) {
        var MIN_DIMENSIONS_PX = 50;
        if (event.rectangle.width &&
            event.rectangle.height &&
            (event.rectangle.width < MIN_DIMENSIONS_PX ||
                event.rectangle.height < MIN_DIMENSIONS_PX)) {
            return false;
        }
        return true;
    };
    ViewComponent.prototype.onResizeEnd = function (event, item) {
        var style = {
            width: event.rectangle.width + "px",
            height: event.rectangle.height + "px"
        };
        item.style = item.style || {};
        item.style = Object.assign(item.style, style);
        window.setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 0);
        this.store('vi-dashboards', this.dashboards);
    };
    ViewComponent.prototype.stop = function (event, item) {
        var e = event.source.element.nativeElement;
        var rect = e.getBoundingClientRect();
        // console.log(e.style.transform);
        item.style = {
            width: rect.width + "px",
            height: rect.height + "px",
            transform: e.style.transform
        };
        this.store('vi-dashboards', this.dashboards);
    };
    ViewComponent.prototype.clickout = function (event) {
        var tag = event.target.tagName;
        // console.log(tag);
        if (!['INPUT', 'A'].includes(tag)) {
            this.showChoices = false;
        }
        // check if clicked on the active item
        var activeItem = event.target.closest('.chart-container.active');
        if (activeItem === null) {
            activeItem = event.target.closest('.card-container.active');
        }
        if (activeItem === null) {
            // console.log('clearing');
            var classes = event.target.className;
            if (classes.includes === undefined || !classes.includes('choice')) {
                this.clearActive();
                this.choice = '';
                for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                    var i = _a[_i];
                    i.active = '';
                    if (i.style !== undefined) {
                        delete i.style.opacity;
                    }
                }
            }
        }
    };
    ViewComponent.prototype.onInput = function ($event) {
        this.clearActive();
        var val = $event.target.value;
        this.showChoices = val !== '';
        if (this.showChoices) {
            if (val === '*') {
                this.filtered = this.queries;
                return;
            }
            this.filtered = this.queries.filter(function (q) { return q.name.toLowerCase().includes(val); });
        }
        else {
            this.filtered = this.queries;
        }
    };
    ViewComponent.prototype.focus = function ($event) {
        $event.target.select();
        this.onInput($event);
    };
    ViewComponent.prototype.onSelect = function (query) {
        var _this = this;
        this.active.query = query;
        this.selectedQuery = query;
        this.showChoices = false;
        this.choice = query.name;
        this.data = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.style !== undefined) {
                i.style.opacity = '0.2';
            }
        }
        this.viewService.fetch(query).subscribe(function (data) {
            _this.data = data;
            _this.active.data = data;
            _this.active.loaded = true;
        });
        // this.xAxisLabel = query.alias || query.group;
    };
    ViewComponent.prototype.clearActive = function () {
        this.data = [];
        this.active = { pin: { on: false, style: '', class: '' }, query: {} };
        this.selectedQuery = {};
    };
    ViewComponent.prototype.store = function (key, value) {
        var clone = JSON.parse(JSON.stringify(value));
        for (var _i = 0, clone_1 = clone; _i < clone_1.length; _i++) {
            var dashboard = clone_1[_i];
            for (var _a = 0, _b = dashboard.items; _a < _b.length; _a++) {
                var item = _b[_a];
                item.data = [{}];
                item.loaded = false;
            }
        }
        window.localStorage.setItem(key, JSON.stringify(clone));
    };
    ViewComponent.prototype.fromStore = function (key) {
        var value = window.localStorage.getItem(key);
        if (value !== null && value !== undefined) {
            return JSON.parse(value);
        }
        else {
            return undefined;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ViewComponent.prototype, "clickout", null);
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'vi-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/view/view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_view_service__WEBPACK_IMPORTED_MODULE_2__["ViewService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/view/view.service.ts":
/*!**************************************!*\
  !*** ./src/app/view/view.service.ts ***!
  \**************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_solr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/solr.service */ "./src/app/services/solr.service.ts");
/* harmony import */ var _services_transformer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/transformer.service */ "./src/app/services/transformer.service.ts");






var ViewService = /** @class */ (function () {
    function ViewService(http, solr, transformer) {
        this.http = http;
        this.solr = solr;
        this.transformer = transformer;
    }
    ViewService.prototype.change = function () {
        return this.solr.change;
    };
    ViewService.prototype.fetch = function (query) {
        var _this = this;
        if (query.aggregate !== undefined && query.aggregate === 'unique') {
            return this.solr.fetchUnique(query.group, query.filters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) { return [{ name: query.group + 's', value: r }]; }));
        }
        else if (query.type === 'series') {
            return this.fetchRange(query.action, query.filters, query.unit, query.size, query.gap, query.minCount);
        }
        else if (query.count) {
            return this.fetchCount(query);
        }
        else if (query.group === 'id') {
            return this.fetchAndJoin(query);
        }
        else {
            var url = this.getSolrCall(query);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                var limit = query.aggregate === undefined ? 9 : 9999999999;
                var data = _this.getFacets(res, query, limit);
                if (query.aggregate !== undefined) {
                    if (query.aggregate === 'count') {
                        var count = data.length;
                        data = [{ name: query.group + 's', value: count }];
                    }
                }
                return data;
            }));
        }
    };
    ViewService.prototype.fetchCount = function (query) {
        var url = this.getSolrCall(query);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return [{ name: '', value: res.response.numFound }]; }));
    };
    ViewService.prototype.fetchAndJoin = function (query) {
        var _this = this;
        var url = this.getSolrCall(query);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (res) {
            var limit = query.aggregate === undefined ? 9 : 9999999999;
            var data = _this.getFacets(res, query, limit);
            return _this.join(data);
        }));
    };
    ViewService.prototype.fetchQueries = function () {
        var url = './assets/queries.json';
        return this.http.get(url);
    };
    ViewService.prototype.fetchRange = function (field, filters, unit, size, gap, mincount) {
        var _this = this;
        var noop = (function (item) { return item; });
        return this.solr.fetchTimeSeries(mincount, size, unit, gap, filters).pipe(
        // map(r => this.transformer.facetsToD3SeriesBySubfield(r, field, {}, noop, noop))
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) { return _this.transformer.facetsToD3Series(r, field, {}); }));
    };
    ViewService.prototype.getSolrCall = function (query) {
        var url = this.solr.analyticsEndpoint + 'rows=0';
        if (query.group !== undefined) {
            url += '&facet=true&facet.field=' + query.group;
        }
        if (query.action !== undefined) {
            url += '&fq=action:' + query.action;
        }
        if (query.minCount) {
            url += '&facet.mincount=' + query.minCount;
        }
        if (query.limit) {
            url += '&facet.limit=' + query.limit;
        }
        if (query.filters !== undefined) {
            for (var _i = 0, _a = query.filters; _i < _a.length; _i++) {
                var f = _a[_i];
                url += '&fq=' + f;
            }
        }
        return url;
    };
    // join analytics index to v0
    ViewService.prototype.join = function (data) {
        var ids = data.map(function (d) { return d.name; });
        var fq = 'fq=id:(' + ids.join(' ') + ')';
        var url = this.solr.endpoint;
        var api = url.replace('$index', 'v0') + fq;
        return this.http.get(api).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) {
            var _loop_1 = function (item) {
                item.doc = r.response.docs.find(function (d) { return d.id === item.name; });
                if (item.doc !== undefined) {
                    item.name = item.doc.title;
                }
                else {
                    // item.name = 'Removed';
                    item.removed = true;
                }
            };
            // console.log(r.response.docs);
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var item = data_1[_i];
                _loop_1(item);
            }
            data = data.filter(function (d) { return !d.removed; });
            // this.data = data;
            return data;
        }));
    };
    ViewService.prototype.getFacets = function (response, query, limit) {
        var facets = response.facet_counts.facet_fields[query.group];
        // console.log(facets);
        var facet = { name: '', value: '' };
        var data = [];
        for (var i = 0; i < facets.length; i++) {
            if (this.isEven(i)) {
                facet.name = decodeURIComponent(facets[i]);
            }
            else {
                facet.value = facets[i];
                if (facet.name !== '{! place.op' && facet.name !== '*:*') {
                    if (facet.name.includes('}')) {
                        facet.name = facet.name.substring(facet.name.indexOf('}') + 1, facet.name.length);
                    }
                    data.push(JSON.parse(JSON.stringify(facet)));
                }
            }
            if (i > limit) {
                break;
            }
        }
        return data;
    };
    ViewService.prototype.isEven = function (n) {
        return n % 2 === 0;
    };
    ViewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_solr_service__WEBPACK_IMPORTED_MODULE_4__["SolrService"], _services_transformer_service__WEBPACK_IMPORTED_MODULE_5__["Transformer"]])
    ], ViewService);
    return ViewService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\voyager\insights-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map