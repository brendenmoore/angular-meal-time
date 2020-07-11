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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div *ngIf=\"user.uid | async\">\r\n    <mat-tab-group dynamicHeight mat-align-tabs=\"center\">\r\n        <mat-tab label=\"Recipes\"><app-recipe-list></app-recipe-list></mat-tab>\r\n        <mat-tab label=\"Menu\"><app-menu></app-menu></mat-tab>\r\n        <mat-tab label=\"Shopping\"><app-shopping-list></app-shopping-list></mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/day-menu/day-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day-menu/day-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-list class=\"animationContainer\" cdkDropList [cdkDropListData]=\"menuItems\" (cdkDropListDropped)=\"onDrop($event)\">\r\n    <div class=\"animationItem\" cdkDrag class=\"listItem\" *ngFor=\"let menuItem of menuItems\">\r\n        <mat-list-item><p>{{menuItem.recipeName}}</p>\r\n            <button (click)=\"removeMenuItem(menuItem)\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n    </div>\r\n</mat-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\">\r\n  <img src=\"assets/Meal-Time.png\">\r\n  <div>\r\n    \r\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n\r\n    <mat-menu #menu=\"matMenu\" >\r\n      <button *ngIf=\"user.uid | async as uid; else login\" mat-menu-item (click)=\"user.logout()\">\r\n        <mat-icon>logout</mat-icon>\r\n        <span>logout</span>\r\n      </button>\r\n\r\n      <ng-template #login>\r\n        <button #login mat-menu-item (click)=\"user.login()\">\r\n          <mat-icon>login</mat-icon>\r\n          <span>login</span>\r\n        </button>\r\n      </ng-template>\r\n    </mat-menu>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\">\r\n\r\n  <div id=\"arrows\">\r\n    <button (click)=\"goToPrevWeek()\">\r\n      <mat-icon>keyboard_arrow_left</mat-icon>\r\n    </button>\r\n    <button (click)=\"goToNextWeek()\">\r\n      <mat-icon>keyboard_arrow_right</mat-icon>\r\n    </button>\r\n    <span>Days to Display: </span>\r\n    <input [(ngModel)]=\"daysToDisplay\" type=\"number\">\r\n  </div>\r\n\r\n  <mat-table [dataSource]=\"dayStringArr\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"Date\" class=\"w100\">\r\n      <mat-header-cell *matHeaderCellDef>Date</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let day\"> {{day}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Food\">\r\n      <mat-header-cell *matHeaderCellDef>Food</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let day\">\r\n        <app-day-menu [menu]=\"observableArr[dayStringArr.indexOf(day)]\"></app-day-menu>\r\n        <div>\r\n          <button (click)=\"openRecipeSelect(timestampArr[dayStringArr.indexOf(day)])\">\r\n            <mat-icon>plus_one</mat-icon>\r\n          </button>\r\n        </div>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n  </mat-table>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-detail/recipe-detail.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-detail/recipe-detail.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"recipeObs | async as recipe\" class=\"details\">\r\n  \r\n  <div *ngIf=\"!isEdit; else edit\" class=\"table\">\r\n    <p *ngIf=\"recipe.name\">Name: </p><p *ngIf=\"recipe.name\">{{recipe.name}}</p>\r\n    <p *ngIf=\"recipe.prepTime\">Prep Time: </p><p *ngIf=\"recipe.prepTime\">{{recipe.prepTime}}</p>\r\n    <p *ngIf=\"recipe.cookTime\">Cook Time: </p><p *ngIf=\"recipe.cookTime\">{{recipe.cookTime}}</p>\r\n    <p *ngIf=\"recipe.servings\">Servings: </p><p *ngIf=\"recipe.servings\">{{recipe.servings}}</p>\r\n    <p *ngIf=\"recipe.directions\">Directions: </p><p *ngIf=\"recipe.directions\">{{recipe.directions}}</p>\r\n    <p *ngIf=\"recipe.notes\">Notes: </p><p *ngIf=\"recipe.notes\">{{recipe.notes}}</p>\r\n    <p *ngIf=\"recipe.ingredients\">Ingredients: </p> \r\n    <ol *ngIf=\"recipe.ingredients\">\r\n      <li *ngFor=\"let ingredient of recipe.ingredients; let i=index\">&emsp;{{i+1}}. {{ingredient}}</li>\r\n    </ol>\r\n    <div id=\"editBtns\">\r\n      <input [(ngModel)]='dateSelectedForMenu' matInput (dateInput)=\"addToMenu($event.value.getTime())\" [matDatepicker]=\"picker\" style=\"width:0;margin:0;padding:0;border:0;\">\r\n      <mat-datepicker #picker></mat-datepicker>\r\n      <button (click)=\"isEdit = true\" type=\"button\">Edit</button>\r\n      <button  (click)=\"onDateSelected()\">Add To Menu</button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #edit>\r\n    <form #editRecipeForm=\"ngForm\" class=\"table\" (ngSubmit)=\"processForm(editRecipeForm)\" novalidate>\r\n      <p>name: </p><input name=\"name\" ngModel type=\"text\" [(ngModel)]=\"recipe.name\">\r\n      <p>prep time: </p><input name=\"prepTime\" ngModel type=\"text\" [(ngModel)]=\"recipe.prepTime\">\r\n      <p>cook time: </p><input name=\"cookTime\" ngModel type=\"text\" [(ngModel)]=\"recipe.cookTime\">\r\n      <p>servings: </p><input name=\"servings\" ngModel type=\"text\" [(ngModel)]=\"recipe.servings\">\r\n      <p>directions: </p><input name=\"directions\" ngModel type=\"text\" [(ngModel)]=\"recipe.directions\">\r\n      <p>notes: </p><input name=\"notes\" ngModel type=\"text\" [(ngModel)]=\"recipe.notes\">\r\n      <div><p>ingredients: </p></div>\r\n      <ol *ngIf=\"ingredientList\">\r\n        <li *ngFor=\"let ingredient of ingredientList; let i=index; trackBy:trackByFn\">\r\n          <input type=\"text\" name=\"{{ingredientList.indexOf(ingredient)}}\" [(ngModel)]=\"ingredientList[i]\">\r\n          <button (click)=\"removeIngredient(ingredientList.indexOf(ingredient))\" type=\"button\">X</button>\r\n        </li>\r\n        <button (click)=\"addIngredientInput()\" type=\"button\">Add Ingredient</button>\r\n      </ol>\r\n      <div id=\"editBtns\">\r\n        <button *ngIf=\"isEdit\" type=\"submit\">Save</button>\r\n        <button (click)=\"deleteRecipe()\">Delete Recipe</button>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n    \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-list/recipe-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-list/recipe-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\">\r\n  <div class=\"list\">\r\n\r\n    <div id=\"searchDiv\">\r\n      <input type=\"text\" placeholder=\"search\" #searchInput (keyup)=\"search(searchInput.value)\">\r\n      <button id=\"addBtn\" (click)=\"newRecipe()\">New Recipe</button>\r\n    </div>\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel multi=\"false\" *ngFor=\"let recipe of recipeListToDisplay\" [expanded]=\"recipe.name === newRecipeString\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            {{ recipe.name }}\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <app-recipe-detail [recipeObj]=\"{recipe: recipe, timestamp: selectedTimestamp}\"></app-recipe-detail>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"wrapper\">\r\n    <mat-selection-list>\r\n        <div *ngFor=\"let ingredient of shoppingListMap | keyvalue\">\r\n            <mat-list-option (click)=\"onChecked(ingredient.key)\" [selected]=\"ingredientRefMap.get(ingredient.key).val[0].ingredient.isChecked\">\r\n                {{ingredient.key}} x{{ingredient.value.val}}\r\n            </mat-list-option>\r\n        </div>\r\n    </mat-selection-list>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-tab-group {\r\n    margin-bottom: 48px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFiLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgfSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");



let AppComponent = class AppComponent {
    constructor(user) {
        this.user = user;
    }
    ngOnInit() { }
};
AppComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipe-list/recipe-list.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shopping-list/shopping-list.component */ "./src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./click-stop-propagation.directive */ "./src/app/click-stop-propagation.directive.ts");
/* harmony import */ var _day_menu_day_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./day-menu/day-menu.component */ "./src/app/day-menu/day-menu.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");





























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__["RecipeListComponent"], _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__["RecipeDetailComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingListComponent"], _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_13__["ClickStopPropagationDirective"], _day_menu_day_menu_component__WEBPACK_IMPORTED_MODULE_14__["DayMenuComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp({
                apiKey: "AIzaSyBAnjddDgi69in-aGJ5Yi1W4h5qobTr2rE",
                authDomain: "angular-meal-time.firebaseapp.com",
                databaseURL: "https://angular-meal-time.firebaseio.com",
                projectId: "angular-meal-time",
                storageBucket: "angular-meal-time.appspot.com",
                messagingSenderId: "493166147925",
                appId: "1:493166147925:web:0a87ad55ab264c22e5d7dc"
            }),
            angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__["RecipeListComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/click-stop-propagation.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/click-stop-propagation.directive.ts ***!
  \*****************************************************/
/*! exports provided: ClickStopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickStopPropagationDirective", function() { return ClickStopPropagationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClickStopPropagationDirective = class ClickStopPropagationDirective {
    onClick(event) {
        event.stopPropagation();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"])
], ClickStopPropagationDirective.prototype, "onClick", null);
ClickStopPropagationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[click-stop-propagation]'
    })
], ClickStopPropagationDirective);



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _export_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./export-functions */ "./src/app/export-functions.ts");






let DatabaseService = class DatabaseService {
    constructor(db, user) {
        this.db = db;
        this.user = user;
        this.userId = null;
        this.users = null;
        this.recipes = null;
        this.menu = null;
        this.user.uid.subscribe(uid => {
            this.userId = uid;
            this.recipes = this.db.list(`recipes/${this.userId}`);
            this.menu = this.db.list(`menu/${this.userId}`);
        });
    }
    //
    //User Data
    //
    createUser(uid) {
        this.users.update(uid, { uid: uid });
    }
    //
    //Recipe Data
    //  
    addRecipe(recipe) {
        this.recipes.update(recipe.name, recipe);
    }
    getRecipeList() {
        return this.recipes;
    }
    getRecipe(recipe) {
        return this.db.object(`recipes/${this.userId}/${recipe.name}`);
    }
    deleteRecipe(recipe) {
        this.recipes.remove(recipe.name);
    }
    setRecipeIngredients(recipe, newIngredients) {
        this.db.object(`recipes/${this.userId}/${recipe.name}`).update({ ingredients: newIngredients });
    }
    //
    //Menu data
    //
    addMenuItem(menuItem) {
        //currentIndex is used to name the next menuItem and gets incremented
        let currentIndex = null;
        let pushAtIndex = this.db.object(`menu/${this.userId}/${menuItem.date}/currentIndex`).snapshotChanges().subscribe(result => {
            currentIndex = result.payload.val();
            if (currentIndex) {
                menuItem.index = currentIndex;
                this.menu.update(`${menuItem.date}/${currentIndex}`, menuItem);
            }
            else {
                menuItem.index = 0;
                this.menu.update(`${menuItem.date}/0`, menuItem);
            }
            this.db.object(`menu/${this.userId}/${menuItem.date}`).update({ currentIndex: currentIndex + 1 });
            pushAtIndex.unsubscribe();
        });
    }
    getMenuDay(day) {
        return this.db.list(`menu/${this.userId}/${day}`);
    }
    setEntireMenuDay(menuItems) {
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].index = i;
        }
        this.db.object(`menu/${this.userId}/${menuItems[0].date}`).set(menuItems);
        this.getMenuDay(menuItems[0].date).set(`currentIndex`, menuItems.length);
    }
    removeMenuItem(menuItem) {
        this.db.list(`menu/${this.userId}/${menuItem.date}`).remove(`${menuItem.index}`);
    }
    buildMenuItem(recipe, timestamp) {
        let menuItem = new _interfaces__WEBPACK_IMPORTED_MODULE_4__["MenuItem"](1, recipe.name, Object(_export_functions__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(timestamp), timestamp);
        if (recipe.ingredients) {
            for (let ingredient of recipe.ingredients) {
                menuItem.ingredients.push({
                    name: ingredient,
                    isChecked: false
                });
            }
        }
        return menuItem;
    }
    //
    //ShoppingList data
    //
    changeIngredientChecked(ingredientIndex, menuItem) {
        let ob = this.db.object(`menu/${this.userId}/${menuItem.date}/${menuItem.index}/ingredients/${ingredientIndex}/isChecked`).valueChanges().subscribe(val => {
            let bool = !(val);
            this.db.object(`menu/${this.userId}/${menuItem.date}/${menuItem.index}/ingredients/${ingredientIndex}`).update({ isChecked: bool });
            ob.unsubscribe();
        });
    }
};
DatabaseService.ctorParameters = () => [
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ "./src/app/day-menu/day-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/day-menu/day-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  .cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n  \r\n  .cdk-drag-animating {\r\n    transition: transform 200ms cubic-bezier(1, 0, 0, 0);\r\n  }\r\n  \r\n  .animationContainer.cdk-drop-list-dragging .animationItem:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n  .cdk-drag-preview button{\r\n    display: none;\r\n  }\r\n  \r\n  p {\r\n    width: 90%;\r\n    text-align: left;\r\n  }\r\n  \r\n  button {\r\n    background-color: white;\r\n    border: 0;\r\n    border-radius: 20px;\r\n    padding: 6px 6px 6px 6px;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: rgba(0, 0, 0, 0.08);;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5LW1lbnUvZGF5LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG9EQUFvRDtFQUN0RDs7RUFFQTtJQUNFLHNEQUFzRDtFQUN4RDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkMiLCJmaWxlIjoic3JjL2FwcC9kYXktbWVudS9kYXktbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAuYW5pbWF0aW9uQ29udGFpbmVyLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmFuaW1hdGlvbkl0ZW06bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmNkay1kcmFnLXByZXZpZXcgYnV0dG9ue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDZweCA2cHggNnB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCk7O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/day-menu/day-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/day-menu/day-menu.component.ts ***!
  \************************************************/
/*! exports provided: DayMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayMenuComponent", function() { return DayMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");





let DayMenuComponent = class DayMenuComponent {
    constructor(dbService, menuComp) {
        this.dbService = dbService;
        this.menuComp = menuComp;
        this.menuItems = [];
        this.displayedColumns = ['Name'];
    }
    ngOnChanges() {
        this.organizeMenu();
        this.menuComp.dialog.closeAll();
    }
    organizeMenu() {
        if (this.menu && this.menuItems.length === 0) {
            this.menu.subscribe(results => {
                this.menuItems = results;
                this.menuItems.pop();
                this.menuComp.dialog.closeAll();
            });
        }
    }
    removeMenuItem(menuItem) {
        this.dbService.removeMenuItem(menuItem);
    }
    onDrop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        this.dbService.setEntireMenuDay(this.menuItems);
    }
};
DayMenuComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
    { type: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayMenuComponent.prototype, "menu", void 0);
DayMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./day-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/day-menu/day-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./day-menu.component.css */ "./src/app/day-menu/day-menu.component.css")).default]
    })
], DayMenuComponent);



/***/ }),

/***/ "./src/app/enums.ts":
/*!**************************!*\
  !*** ./src/app/enums.ts ***!
  \**************************/
/*! exports provided: Page, Days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Days", function() { return Days; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Page;
(function (Page) {
    Page[Page["RecipeList"] = 0] = "RecipeList";
    Page[Page["Menu"] = 1] = "Menu";
    Page[Page["ShoppingList"] = 2] = "ShoppingList";
})(Page || (Page = {}));
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thur"] = 4] = "Thur";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));


/***/ }),

/***/ "./src/app/export-functions.ts":
/*!*************************************!*\
  !*** ./src/app/export-functions.ts ***!
  \*************************************/
/*! exports provided: formatDate, getNextNumberOfDays, getWeek, getDayStrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextNumberOfDays", function() { return getNextNumberOfDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeek", function() { return getWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayStrings", function() { return getDayStrings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/app/enums.ts");


function formatDate(timestamp) {
    let d = new Date(timestamp);
    return `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;
}
// For showing a certain number of days starting with today
function getNextNumberOfDays(calendarPage = 0, daysPerPage = 7) {
    let days = [];
    // if it's default seven days, the week starts on sunday
    if (daysPerPage === 7) {
        return getWeek(calendarPage);
    }
    // otherwise it shows current day first
    else {
        for (let i = calendarPage * daysPerPage; i < (calendarPage * daysPerPage) + daysPerPage; i++) {
            let currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i);
            days.push(currentDate.getTime());
        }
        return days;
    }
}
// for showing a standard week starting on sunday or monday
function getWeek(weeksFromNow = 0) {
    let startOnSunday = true;
    let days = [];
    let currentDate = new Date();
    // go to desired week
    currentDate.setDate(weeksFromNow * 7);
    // gets start of current week
    let diff = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1);
    currentDate.setDate(diff - (startOnSunday ? 1 : 0));
    // add first day
    days.push(currentDate.getTime());
    for (let i = 0; i < 7 - 1; i++) {
        currentDate.setDate(currentDate.getDate() + 1);
        days.push(currentDate.getTime());
    }
    console.log(days);
    return days;
}
function getDayStrings(timestampArr) {
    let dayStrings = [];
    for (let timestamp of timestampArr) {
        let d = new Date(timestamp);
        dayStrings.push(`${_enums__WEBPACK_IMPORTED_MODULE_1__["Days"][d.getDay()]} ${d.getMonth() + 1}/${d.getDate()}`);
    }
    return dayStrings;
}


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\r\n    height: 50px;\r\n    background-color: #3f51b5;\r\n}\r\n\r\nimg {\r\n    max-height: 100%;\r\n}\r\n\r\nbutton {\r\n    background-color: transparent;\r\n    color: white;\r\n    border: 0;\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 13px;\r\n    text-align: right;\r\n}\r\n\r\nspan {\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogMTNweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(user) {
        this.user = user;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/interfaces.ts":
/*!*******************************!*\
  !*** ./src/app/interfaces.ts ***!
  \*******************************/
/*! exports provided: Recipe, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Recipe {
    constructor(name, prepTime = '', cookTime = '', servings = '', directions = '', notes = '', image = '', ingredients = []) {
        this.name = name;
        this.prepTime = prepTime;
        this.cookTime = cookTime;
        this.servings = servings;
        this.directions = directions;
        this.notes = notes;
        this.image = image;
        this.ingredients = ingredients;
    }
}
class MenuItem {
    constructor(index, recipeName, date, timestamp, label = null, ingredients = []) {
        this.ingredients = [];
        this.index = index;
        this.recipeName = recipeName;
        this.date = date;
        this.timestamp = timestamp;
        this.label = label;
        this.ingredients = ingredients;
    }
}


/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 25px;\r\n}\r\n\r\n#menuGrid {\r\n    display: inline-grid;\r\n    grid-template-columns: auto auto auto auto auto auto auto;\r\n    border-top: 1px solid black;\r\n    border-left: 1px solid black;\r\n    width: 80%;\r\n}\r\n\r\nh2 { \r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.item {\r\n    border-bottom: 1px solid black;\r\n    border-right: 1px solid black;  \r\n    width: 100%;\r\n}\r\n\r\n.arrowBtn {\r\n    display: inline-block;\r\n}\r\n\r\nh1 {\r\n    display: inline-block;\r\n}\r\n\r\n#arrows {\r\n    width: 70%;\r\n    display: inline-block;    \r\n}\r\n\r\n.mat-table {\r\n    display: inline-block;\r\n    width: 70%;\r\n    min-width: 350px;\r\n  }\r\n\r\n.mat-column-Date {\r\n    flex: 0 0 10% !important;\r\n    min-width: 70px;\r\n    white-space: unset !important;\r\n}\r\n\r\napp-day-menu {\r\n    width: 100%;\r\n    min-width: 200px;\r\n    margin: 20px;\r\n}\r\n\r\nbutton {\r\n    border: 0;\r\n    background-color: white;\r\n    padding: 5px;\r\n    margin-bottom: 5px;\r\n    border-radius: 20px;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgba(0, 0, 0, 0.08);;\r\n}\r\n\r\ndiv {\r\n    text-align: left;\r\n}\r\n\r\nmat-cell {\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix5REFBeUQ7SUFDekQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbiNtZW51R3JpZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5oMiB7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrOyAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFycm93QnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jYXJyb3dzIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICAgIFxyXG59XHJcblxyXG4ubWF0LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xyXG4gIH1cclxuXHJcbi5tYXQtY29sdW1uLURhdGUge1xyXG4gICAgZmxleDogMCAwIDEwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmFwcC1kYXktbWVudSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDgpOztcclxufVxyXG5cclxuZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxubWF0LWNlbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _export_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../export-functions */ "./src/app/export-functions.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../recipe-list/recipe-list.component */ "./src/app/recipe-list/recipe-list.component.ts");






let MenuComponent = class MenuComponent {
    constructor(dbService, dialog) {
        this.dbService = dbService;
        this.dialog = dialog;
        this.dayStringArr = [];
        this.timestampArr = [];
        this.observableArr = [];
        this.numOfWeeksFromNow = 0;
        this.displayedColumns = ['Date', 'Food'];
        this.daysToDisplay = 7;
    }
    ngOnInit() {
        this.initiateDays();
        //NEED FIXED
        setTimeout(() => this.initiateObservables(), 100);
    }
    initiateDays(weeksFromNow = 0) {
        this.timestampArr = Object(_export_functions__WEBPACK_IMPORTED_MODULE_2__["getNextNumberOfDays"])(weeksFromNow, this.daysToDisplay);
        this.dayStringArr = Object(_export_functions__WEBPACK_IMPORTED_MODULE_2__["getDayStrings"])(this.timestampArr);
    }
    initiateObservables() {
        this.timestampArr.forEach(timestamp => {
            this.observableArr.push(this.dbService.getMenuDay(Object(_export_functions__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(timestamp)).valueChanges());
        });
    }
    openRecipeSelect(timestamp) {
        const dialogRef = this.dialog.open(_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"]);
        let instance = dialogRef.componentInstance;
        instance.selectedTimestamp = timestamp;
    }
    goToNextWeek() {
        this.numOfWeeksFromNow++;
        this.initiateDays(this.numOfWeeksFromNow);
        this.observableArr = [];
        this.initiateObservables();
    }
    goToPrevWeek() {
        this.numOfWeeksFromNow--;
        this.initiateDays(this.numOfWeeksFromNow);
        this.observableArr = [];
        this.initiateObservables();
    }
};
MenuComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".details {\r\n  text-align: left;\r\n}\r\n\r\n.table {\r\n  width: 30%;\r\n  display: inline-grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  min-width: 280px;\r\n}\r\n\r\nbutton {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 3px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  font-size: 11pt;\r\n  border: 0;\r\n  background-color: white;\r\n}\r\n\r\nbutton:hover {\r\n  border: 1px solid rgba(0, 0, 0, 0.445);\r\n  border-radius: 3px;\r\n}\r\n\r\n#editBtns {\r\n  margin: 10px;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.445);\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n}\r\n\r\n#editBtns button {\r\n  margin-top: 10px;\r\n  width: 50%;\r\n}\r\n\r\ninput {\r\n  padding: 3px;\r\n  margin: 3px;\r\n}\r\n\r\np {\r\n  line-height: 23px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xyXG4gIG1pbi13aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogMTFwdDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4jZWRpdEJ0bnMge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQ0NSk7XHJcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG59XHJcblxyXG4jZWRpdEJ0bnMgYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");




let RecipeDetailComponent = class RecipeDetailComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.isEdit = false;
        this.ingredientList = [];
    }
    ngOnChanges() {
        this.updateVariables();
    }
    addIngredientInput() {
        this.ingredientList.push("");
    }
    removeIngredient(index) {
        this.ingredientList.splice(index, 1);
    }
    processForm(form) {
        let j = form.value;
        this.dbService.deleteRecipe(this.recipe);
        this.recipe = new _interfaces__WEBPACK_IMPORTED_MODULE_2__["Recipe"](j.name, j.prepTime, j.cookTime, j.servings, j.directions, j.notes);
        this.dbService.addRecipe(this.recipe);
        this.dbService.setRecipeIngredients(this.recipe, this.ingredientList);
    }
    onDateSelected() {
        this.dateSelectedForMenu ? this.addToMenu(this.dateSelectedForMenu) : this.datePicker.open();
    }
    addToMenu(timestamp) {
        let menuItem = this.dbService.buildMenuItem(this.recipe, timestamp);
        this.dbService.addMenuItem(menuItem);
        this.dateSelectedForMenu = null;
    }
    deleteRecipe() {
        this.dbService.deleteRecipe(this.recipe);
        this.isEdit = false;
    }
    trackByFn(index, item) {
        return index;
    }
    updateVariables() {
        this.dateSelectedForMenu = this.recipeObj.timestamp;
        this.recipe = this.recipeObj.recipe;
        this.recipeObs = this.dbService.getRecipe(this.recipe).valueChanges();
        if (this.recipe.ingredients) {
            this.ingredientList = this.recipe.ingredients;
        }
        else {
            this.ingredientList = [];
        }
        if (this.recipe.name === 'New Recipe') {
            this.isEdit = true;
        }
    }
};
RecipeDetailComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecipeDetailComponent.prototype, "recipeObj", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', { read: undefined, static: false })
], RecipeDetailComponent.prototype, "datePicker", void 0);
RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-recipe-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-detail/recipe-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipe-detail/recipe-detail.component.css")).default]
    })
], RecipeDetailComponent);



/***/ }),

/***/ "./src/app/recipe-list/recipe-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recipe-list/recipe-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-align: left;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #3f51b5;\r\n  color: black;\r\n  margin-bottom: 5px;\r\n  list-style-type: none;\r\n  height: 50px;\r\n  \r\n}\r\n\r\np {\r\n  line-height: 50px;\r\n  font-size: 11pt;\r\n}\r\n\r\n#searchDiv {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #3f51b5;\r\n}\r\n\r\n.list {\r\n  padding: 20px;\r\n  display: inline-grid;\r\n  width: 90%;\r\n  max-width: 1000px;\r\n  \r\n}\r\n\r\n.details {\r\n  padding: 20px;\r\n  background-color: aliceblue;\r\n}\r\n\r\nbutton {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n  padding: 0px 0px 0px 0px;\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  font-size: 11pt;\r\n  justify-self: end;\r\n  border: 0;\r\n  background-color: white;\r\n  line-height: 30px;\r\n}\r\n\r\nbutton:hover {\r\n  border: 1px solid rgba(0, 0, 0, 0.445);\r\n  border-radius: 3px;\r\n}\r\n\r\ninput {\r\n  width: 30%;\r\n  min-width: 150px;\r\n  padding: 5px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7O0FBRWQ7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGdDQUFnQztBQUNsQzs7QUFJQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUlBO0VBQ0UsMkJBQW1CO0VBQW5CLHdCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmNTFiNTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgXHJcbn1cclxucCB7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxMXB0O1xyXG59XHJcblxyXG4jc2VhcmNoRGl2IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNmNTFiNTtcclxufVxyXG5cclxuXHJcblxyXG4ubGlzdCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIFxyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcblxyXG5cclxuYnV0dG9uIHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAxMXB0O1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/recipe-list/recipe-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recipe-list/recipe-list.component.ts ***!
  \******************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces */ "./src/app/interfaces.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");




let RecipeListComponent = class RecipeListComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.addedMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedTimestamp = null;
        this.newRecipeString = 'New Recipe';
        //NEED FIXED LOOK INTO SUBSCRIPTION PROMISES
        setTimeout(() => {
            this.recipeList = this.dbService.getRecipeList().valueChanges();
            this.recipeList.subscribe(recipes => this.recipeListToDisplay = recipes);
        }, 100);
    }
    newRecipe() {
        let recipe = new _interfaces__WEBPACK_IMPORTED_MODULE_2__["Recipe"](this.newRecipeString);
        this.dbService.addRecipe(recipe);
    }
    search(searchTerm) {
        this.recipeListToDisplay = [];
        this.recipeList.subscribe(list => {
            for (let recipe of list) {
                searchTerm = searchTerm.toLowerCase();
                if (recipe.name.toLowerCase().indexOf(searchTerm) >= 0) {
                    this.recipeListToDisplay.push(recipe);
                }
            }
        });
    }
};
RecipeListComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], RecipeListComponent.prototype, "addedMenuItem", void 0);
RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-recipe-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-list/recipe-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/recipe-list/recipe-list.component.css")).default]
    })
], RecipeListComponent);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\r\n    width: 100vw;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.dayContainer {\r\n    border: 1px solid black;\r\n    width: 300px;\r\n    padding: 10px;\r\n    margin: 10px auto 10px auto;\r\n}\r\n\r\nli {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    text-align: left;\r\n    padding: 10px;\r\n    background-color: #789;\r\n    color: white;\r\n    margin-bottom: 5px;\r\n    list-style-type: none;\r\n  }\r\n\r\n.list {\r\n    display: inline-block;\r\n    padding: 20px;\r\n    width: 200px;\r\n  }\r\n\r\nmat-selection-list {\r\n    display: inline-block;\r\n    width: 30%;\r\n    text-align: left;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7RUFDZDs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmRheUNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byAxMHB4IGF1dG87XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ODk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubGlzdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgbWF0LXNlbGVjdGlvbi1saXN0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/shopping-list/shopping-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _export_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../export-functions */ "./src/app/export-functions.ts");




let ShoppingListComponent = class ShoppingListComponent {
    constructor(dbService) {
        this.dbService = dbService;
        this.ingredientRefMap = new Map();
        this.shoppingListMap = new Map();
        this.timestampArr = [];
        this.observableArr = [];
        this.initiateDays();
        setTimeout(() => {
            this.initiateObservables();
            this.constructShoppingList();
        }, 100);
    }
    initiateDays(weeksFromNow = 0) {
        this.timestampArr = Object(_export_functions__WEBPACK_IMPORTED_MODULE_3__["getNextNumberOfDays"])(weeksFromNow);
    }
    initiateObservables() {
        for (let i = 0; i < this.timestampArr.length; i++) {
            let day = Object(_export_functions__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.timestampArr[i]);
            this.observableArr.push(this.dbService.getMenuDay(day).valueChanges());
        }
    }
    onChecked(ingredientRefKey) {
        this.ingredientRefMap.get(ingredientRefKey).val.forEach(ref => {
            let ingredients = ref.menuItem.ingredients;
            this.dbService.changeIngredientChecked(ingredients.indexOf(ref.ingredient), ref.menuItem);
        });
    }
    constructShoppingList() {
        for (let observable of this.observableArr) {
            let ob = observable.subscribe(menuItems => {
                menuItems.forEach(menuItem => {
                    if (menuItem.ingredients) {
                        menuItem.ingredients.forEach(ing => {
                            this.incrementIngredientCount(ing);
                            this.constructReferenceMap(menuItem, ing);
                        });
                    }
                });
                ob.unsubscribe();
            });
        }
    }
    incrementIngredientCount(ingredient) {
        this.shoppingListMap.has(ingredient.name) ? this.shoppingListMap.get(ingredient.name).val++ : this.shoppingListMap.set(ingredient.name, { val: 1 });
    }
    constructReferenceMap(menuItem, ingredient) {
        let ingredientRef = { menuItem: menuItem, ingredient: ingredient };
        if (this.ingredientRefMap.has(ingredient.name)) {
            this.ingredientRefMap.get(ingredient.name).val.push(ingredientRef);
        }
        else {
            this.ingredientRefMap.set(ingredient.name, { val: [ingredientRef] });
        }
    }
};
ShoppingListComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-list.component.css */ "./src/app/shopping-list/shopping-list.component.css")).default]
    })
], ShoppingListComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UserService = class UserService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.uid = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(authState => {
            if (!authState) {
                return null;
            }
            else {
                return authState.uid;
            }
        }));
    }
    login() {
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
    }
    logout() {
        this.afAuth.auth.signOut();
    }
};
UserService.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBAnjddDgi69in-aGJ5Yi1W4h5qobTr2rE",
        authDomain: "angular-meal-time.firebaseapp.com",
        databaseURL: "https://angular-meal-time.firebaseio.com",
        projectId: "angular-meal-time",
        storageBucket: "angular-meal-time.appspot.com",
        messagingSenderId: "493166147925",
        appId: "1:493166147925:web:0a87ad55ab264c22e5d7dc"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Brenden\OneDrive\Angular\meal-time\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map