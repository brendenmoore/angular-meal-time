function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div *ngIf=\"user.uidObs | async\">\r\n    <mat-tab-group dynamicHeight mat-align-tabs=\"center\">\r\n        <mat-tab label=\"Recipes\"><app-recipe-list></app-recipe-list></mat-tab>\r\n        <mat-tab label=\"Menu\"><app-menu></app-menu></mat-tab>\r\n        <mat-tab label=\"Shopping\"><app-shopping-list></app-shopping-list></mat-tab>\r\n    </mat-tab-group>\r\n</div>\r\n\r\n<div class=\"login-container\" *ngIf=\"!(user.uidObs | async)\">\r\n    <button class=\"login-btn\" mat-stroked-button (click)=\"user.login()\">\r\n        <mat-icon>login</mat-icon>\r\n        <span>login</span>\r\n    </button>\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/day-menu/day-menu.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day-menu/day-menu.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDayMenuDayMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-list class=\"animationContainer\" cdkDropList [cdkDropListData]=\"menuItems\" (cdkDropListDropped)=\"onDrop($event)\">\r\n    <div class=\"animationItem\" cdkDrag class=\"listItem\" *ngFor=\"let menuItem of menuItems\">\r\n        <mat-list-item><p>{{menuItem.recipeName}}</p>\r\n            <button (click)=\"removeMenuItem(menuItem)\">\r\n                <mat-icon>delete</mat-icon>\r\n              </button>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n    </div>\r\n</mat-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/generate-shopping-list/generate-shopping-list.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generate-shopping-list/generate-shopping-list.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGenerateShoppingListGenerateShoppingListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <mat-form-field class=\"flex-item\" appearance=\"fill\">\n        <mat-label>Start Date</mat-label>\n        <input [(ngModel)]='startDate' matInput [matDatepicker]=\"startPicker\">\n        <mat-datepicker-toggle matSuffix [for]=\"startPicker\"></mat-datepicker-toggle>\n        <mat-datepicker #startPicker></mat-datepicker>\n    </mat-form-field>\n    \n    <mat-form-field class=\"flex-item\" appearance=\"fill\">\n        <mat-label>End Date</mat-label>\n        <input [(ngModel)]='endDate' matInput [matDatepicker]=\"endPicker\">\n        <mat-datepicker-toggle matSuffix [for]=\"endPicker\"></mat-datepicker-toggle>\n        <mat-datepicker #endPicker></mat-datepicker>\n    </mat-form-field>\n    \n    <button (click)=\"generateList()\" class=\"flex-item\" mat-stroked-button mat-dialog-close>Generate Shopping List</button>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\r\n  <div class=\"logo-container\">\r\n    <img class=\"logo\" src=\"../../assets/MealTimeLogo.svg\">\r\n    <h1 class=\"logo-text\">Meal Time</h1>\r\n  </div>\r\n  <div>\r\n    \r\n  <button class=\"white-btn\" mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n    <mat-icon>more_vert</mat-icon>\r\n  </button>\r\n\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button *ngIf=\"user.uidObs | async as uid; else login\" mat-menu-item (click)=\"user.logout()\">\r\n      <mat-icon>logout</mat-icon>\r\n      <span>logout</span>\r\n    </button>\r\n    <ng-template #login>\r\n      <button #login mat-menu-item (click)=\"user.login()\">\r\n        <mat-icon>login</mat-icon>\r\n        <span>login</span>\r\n      </button>\r\n    </ng-template>\r\n  </mat-menu>\r\n\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\r\n\r\n  <div id=\"arrows\">\r\n    <button (click)=\"goToPrevWeek()\">\r\n      <mat-icon>keyboard_arrow_left</mat-icon>\r\n    </button>\r\n    <button (click)=\"goToNextWeek()\">\r\n      <mat-icon>keyboard_arrow_right</mat-icon>\r\n    </button>\r\n    <mat-form-field class=\"small-input\" appearance=\"outline\">\r\n      <mat-label>Days to Display</mat-label>\r\n      <input [(ngModel)]=\"daysToDisplay\" (keyup.enter)=\"initiateDays()\" type=\"number\" matInput>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <mat-table [dataSource]=\"dayStringArr\" class=\"mat-elevation-z8\">\r\n\r\n    <ng-container matColumnDef=\"Date\" class=\"w100\">\r\n      <mat-header-cell *matHeaderCellDef>Date</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let day\"> {{day}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"Food\">\r\n      <mat-header-cell *matHeaderCellDef>Food</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let day\">\r\n        <app-day-menu [menu]=\"observableArr[dayStringArr.indexOf(day)]\"></app-day-menu>\r\n        <div>\r\n          <button (click)=\"openRecipeSelect(timestampArr[dayStringArr.indexOf(day)])\">\r\n            <mat-icon>plus_one</mat-icon>\r\n          </button>\r\n        </div>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n  </mat-table>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/new-recipe/new-recipe.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-recipe/new-recipe.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewRecipeNewRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"newRecipe\">\r\n  <form #editRecipeForm=\"ngForm\" class=\"table\" (ngSubmit)=\"processForm(editRecipeForm)\" novalidate>\r\n    <p>name: </p><input name=\"name\" ngModel type=\"text\" [(ngModel)]=\"newRecipe.name\">\r\n    <p>prep time: </p><input name=\"prepTime\" ngModel type=\"text\" [(ngModel)]=\"newRecipe.prepTime\">\r\n    <p>cook time: </p><input name=\"cookTime\" ngModel type=\"text\" [(ngModel)]=\"newRecipe.cookTime\">\r\n    <p>servings: </p><input name=\"servings\" ngModel type=\"text\" [(ngModel)]=\"newRecipe.servings\">\r\n    <p>directions: </p><input name=\"directions\" ngModel type=\"text\" [(ngModel)]=\"newRecipe.directions\">\r\n    <p>notes: </p><input name=\"notes\" ngModel type=\"text\" [(ngModel)]=\"newRecipe.notes\">\r\n    <div><p>ingredients: </p></div>\r\n    <ol>\r\n      <li *ngFor=\"let ingredient of newRecipe.ingredients; let i=index; trackBy:trackByFn\">\r\n        <input type=\"text\" name=\"{{i}}\" [(ngModel)]=\"newRecipe.ingredients[i]\">\r\n        <button (click)=\"logging(i)\" type=\"button\">X</button>\r\n      </li>\r\n      <button (click)=\"newRecipe.ingredients.push('')\" type=\"button\">Add Ingredient</button>\r\n    </ol>\r\n    <div id=\"editBtns\">\r\n      <button type=\"submit\" mat-dialog-close>Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-detail/recipe-detail.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-detail/recipe-detail.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeDetailRecipeDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"recipeObs | async as recipe\" class=\"details\">\r\n  \r\n  <div *ngIf=\"!isEdit; else edit\" class=\"table\">\r\n    <div class=\"recipe-prop\"><p *ngIf=\"recipe.name\">Name: </p><p class=\"property\" *ngIf=\"recipe.name\">{{recipe.name}}</p></div>\r\n    <div class=\"recipe-prop\"><p *ngIf=\"recipe.prepTime\">Prep Time: </p><p class=\"property\" *ngIf=\"recipe.prepTime\">{{recipe.prepTime}}</p></div>\r\n    <div class=\"recipe-prop\"><p *ngIf=\"recipe.cookTime\">Cook Time: </p><p class=\"property\" *ngIf=\"recipe.cookTime\">{{recipe.cookTime}}</p></div>\r\n    <div class=\"recipe-prop\"><p *ngIf=\"recipe.servings\">Servings: </p><p class=\"property\" *ngIf=\"recipe.servings\">{{recipe.servings}}</p></div>\r\n    <div class=\"recipe-prop\"><p *ngIf=\"recipe.directions\">Directions: </p><p class=\"property\" *ngIf=\"recipe.directions\">{{recipe.directions}}</p></div>\r\n    <div class=\"recipe-prop\"><p *ngIf=\"recipe.notes\">Notes: </p><p class=\"property\" *ngIf=\"recipe.notes\">{{recipe.notes}}</p></div>\r\n    <p *ngIf=\"recipe.ingredients\">Ingredients: </p>\r\n    <ol *ngIf=\"recipe.ingredients\">\r\n      <li *ngFor=\"let ingredient of recipe.ingredients; let i=index\">&emsp;{{i+1}}. {{ingredient}}</li>\r\n    </ol>\r\n    <div id=\"editBtns\">\r\n      <input [(ngModel)]='dateSelectedForMenu' matInput (dateInput)=\"addToMenu($event.value.getTime())\" [matDatepicker]=\"picker\" style=\"width:0;margin:0;padding:0;border:0;\">\r\n      <mat-datepicker #picker></mat-datepicker>\r\n      <button (click)=\"isEdit = true\" type=\"button\" mat-stroked-button>Edit</button>\r\n      <button  (click)=\"onDateSelected()\" mat-stroked-button>Add To Menu</button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #edit>\r\n    <form #editRecipeForm=\"ngForm\" class=\"table\" (ngSubmit)=\"processForm(editRecipeForm)\" novalidate>\r\n      <div class=\"recipe-prop\"><p>name: </p><input name=\"name\" ngModel type=\"text\" [(ngModel)]=\"recipe.name\"></div>\r\n      <div class=\"recipe-prop\"><p>prep time: </p><input name=\"prepTime\" ngModel type=\"text\" [(ngModel)]=\"recipe.prepTime\"></div>\r\n      <div class=\"recipe-prop\"><p>cook time: </p><input name=\"cookTime\" ngModel type=\"text\" [(ngModel)]=\"recipe.cookTime\"></div>\r\n      <div class=\"recipe-prop\"><p>servings: </p><input name=\"servings\" ngModel type=\"text\" [(ngModel)]=\"recipe.servings\"></div>\r\n      <div class=\"recipe-prop\"><p>directions: </p><input name=\"directions\" ngModel type=\"text\" [(ngModel)]=\"recipe.directions\"></div>\r\n      <div class=\"recipe-prop\"><p>notes: </p><input name=\"notes\" ngModel type=\"text\" [(ngModel)]=\"recipe.notes\"></div>\r\n      <div><p>ingredients: </p></div>\r\n      <ol *ngIf=\"ingredientList\">\r\n        <li *ngFor=\"let ingredient of ingredientList; let i=index; trackBy:trackByFn\">\r\n          <input type=\"text\" name=\"{{ingredientList.indexOf(ingredient)}}\" [(ngModel)]=\"ingredientList[i]\">\r\n          <button (click)=\"removeIngredient(ingredientList.indexOf(ingredient))\" type=\"button\" mat-stroked-button>X</button>\r\n        </li>\r\n        <button (click)=\"addIngredientInput()\" type=\"button\" mat-stroked-button>Add Ingredient</button>\r\n      </ol>\r\n      <div id=\"editBtns\">\r\n        <button *ngIf=\"isEdit\" type=\"submit\" mat-stroked-button>Save</button>\r\n        <button (click)=\"deleteRecipe()\" mat-stroked-button>Delete Recipe</button>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-list/recipe-list.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-list/recipe-list.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeListRecipeListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\r\n  <div class=\"list\">\r\n\r\n    <div id=\"searchDiv\">\r\n        <mat-form-field class=\"small-input\" appearance=\"outline\">\r\n          <mat-label>Search</mat-label>\r\n          <input type=\"text\" (keyup)=\"search(searchInput.value)\" matInput>\r\n        </mat-form-field>\r\n      <div class=\"new-recpie-container\">\r\n        <button (click)=\"newRecipe()\" mat-stroked-button>New Recipe</button>\r\n      </div>\r\n    </div>\r\n\r\n    <mat-accordion>\r\n      <mat-expansion-panel multi=\"false\" *ngFor=\"let recipe of recipeListToDisplay\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            {{ recipe.name }}\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <app-recipe-detail [recipeObj]=\"{recipe: recipe, timestamp: selectedTimestamp}\"></app-recipe-detail>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingListShoppingListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <button class=\"generate-btn\" (click)=\"openGenerateShoppingList()\" mat-stroked-button>Generate Shopping List</button>\r\n    <div class=\"shopping-list-container\" *ngIf=\"shoppingListToDisplay\">\r\n        <p>{{shoppingListToDisplay.startDate}} - {{shoppingListToDisplay.endDate}}</p>\r\n        <p>Created On: {{shoppingListToDisplay.createdOn}}</p>\r\n        <mat-card class=\"ingredient-container\" *ngFor=\"let ingredient of shoppingListToDisplay.ingredients\">\r\n            <mat-checkbox [checked]=\"ingredient.isChecked\" \r\n                (change)=\"showOptions($event, shoppingListToDisplay.ingredients.indexOf(ingredient))\">\r\n                {{ingredient.name}}\r\n            </mat-checkbox>\r\n        </mat-card>\r\n    </div>\r\n    \r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-tab-group {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.login-container {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: 20vh auto;\r\n}\r\n\r\n.login-btn {\r\n  padding: 20px 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFiLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAyMHZoIGF1dG87XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(user) {
        _classCallCheck(this, AppComponent);

        this.user = user;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./recipe-list/recipe-list.component */
    "./src/app/recipe-list/recipe-list.component.ts");
    /* harmony import */


    var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./recipe-detail/recipe-detail.component */
    "./src/app/recipe-detail/recipe-detail.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shopping-list/shopping-list.component */
    "./src/app/shopping-list/shopping-list.component.ts");
    /* harmony import */


    var _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./click-stop-propagation.directive */
    "./src/app/click-stop-propagation.directive.ts");
    /* harmony import */


    var _day_menu_day_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./day-menu/day-menu.component */
    "./src/app/day-menu/day-menu.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./new-recipe/new-recipe.component */
    "./src/app/new-recipe/new-recipe.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _generate_shopping_list_generate_shopping_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./generate-shopping-list/generate-shopping-list.component */
    "./src/app/generate-shopping-list/generate-shopping-list.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__["RecipeListComponent"], _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_10__["RecipeDetailComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_12__["ShoppingListComponent"], _click_stop_propagation_directive__WEBPACK_IMPORTED_MODULE_13__["ClickStopPropagationDirective"], _day_menu_day_menu_component__WEBPACK_IMPORTED_MODULE_14__["DayMenuComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_19__["HeaderComponent"], _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_30__["NewRecipeComponent"], _generate_shopping_list_generate_shopping_list_component__WEBPACK_IMPORTED_MODULE_33__["GenerateShoppingListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp({
        apiKey: "AIzaSyBAnjddDgi69in-aGJ5Yi1W4h5qobTr2rE",
        authDomain: "angular-meal-time.firebaseapp.com",
        databaseURL: "https://angular-meal-time.firebaseio.com",
        projectId: "angular-meal-time",
        storageBucket: "angular-meal-time.appspot.com",
        messagingSenderId: "493166147925",
        appId: "1:493166147925:web:0a87ad55ab264c22e5d7dc"
      }), angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatNativeDateModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_34__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_35__["MatCheckboxModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_9__["RecipeListComponent"], _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_30__["NewRecipeComponent"], _generate_shopping_list_generate_shopping_list_component__WEBPACK_IMPORTED_MODULE_33__["GenerateShoppingListComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/click-stop-propagation.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/click-stop-propagation.directive.ts ***!
    \*****************************************************/

  /*! exports provided: ClickStopPropagationDirective */

  /***/
  function srcAppClickStopPropagationDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickStopPropagationDirective", function () {
      return ClickStopPropagationDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClickStopPropagationDirective = /*#__PURE__*/function () {
      function ClickStopPropagationDirective() {
        _classCallCheck(this, ClickStopPropagationDirective);
      }

      _createClass(ClickStopPropagationDirective, [{
        key: "onClick",
        value: function onClick(event) {
          event.stopPropagation();
        }
      }]);

      return ClickStopPropagationDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"])], ClickStopPropagationDirective.prototype, "onClick", null);
    ClickStopPropagationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[click-stop-propagation]'
    })], ClickStopPropagationDirective);
    /***/
  },

  /***/
  "./src/app/database.service.ts":
  /*!*************************************!*\
    !*** ./src/app/database.service.ts ***!
    \*************************************/

  /*! exports provided: DatabaseService */

  /***/
  function srcAppDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
      return DatabaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/database */
    "./node_modules/angularfire2/database/index.js");
    /* harmony import */


    var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./interfaces */
    "./src/app/interfaces.ts");
    /* harmony import */


    var _export_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./export-functions */
    "./src/app/export-functions.ts");

    var DatabaseService = /*#__PURE__*/function () {
      function DatabaseService(db, user) {
        _classCallCheck(this, DatabaseService);

        this.db = db;
        this.user = user;
        this.userId = null;
        this.users = null;
        this.recipes = null;
        this.menu = null;
        this.shoppingList = null;
        this.userId = this.user.uid;
        this.recipes = this.db.list("recipes/".concat(this.userId));
        this.menu = this.db.list("menu/".concat(this.userId));
        this.shoppingList = this.db.object("shoppingList/".concat(this.userId));
      } //
      //User Data
      //


      _createClass(DatabaseService, [{
        key: "createUser",
        value: function createUser(uid) {
          this.users.update(uid, {
            uid: uid
          });
        } //
        //Recipe Data
        //  

      }, {
        key: "addRecipe",
        value: function addRecipe(recipe) {
          this.recipes.update(recipe.name, recipe);
        }
      }, {
        key: "getRecipeList",
        value: function getRecipeList() {
          return this.recipes;
        }
      }, {
        key: "getRecipe",
        value: function getRecipe(recipe) {
          return this.db.object("recipes/".concat(this.userId, "/").concat(recipe.name));
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe(recipe) {
          this.recipes.remove(recipe.name);
        }
      }, {
        key: "setRecipeIngredients",
        value: function setRecipeIngredients(recipe, newIngredients) {
          this.db.object("recipes/".concat(this.userId, "/").concat(recipe.name)).update({
            ingredients: newIngredients
          });
        } //
        //Menu data
        //

      }, {
        key: "addMenuItem",
        value: function addMenuItem(menuItem) {
          var _this = this;

          //currentIndex is used to name the next menuItem and gets incremented
          var currentIndex = null;
          var pushAtIndex = this.db.object("menu/".concat(this.userId, "/").concat(menuItem.date, "/currentIndex")).snapshotChanges().subscribe(function (result) {
            currentIndex = result.payload.val();

            if (currentIndex) {
              menuItem.index = currentIndex;

              _this.menu.update("".concat(menuItem.date, "/").concat(currentIndex), menuItem);
            } else {
              menuItem.index = 0;

              _this.menu.update("".concat(menuItem.date, "/0"), menuItem);
            }

            _this.db.object("menu/".concat(_this.userId, "/").concat(menuItem.date)).update({
              currentIndex: currentIndex + 1
            });

            pushAtIndex.unsubscribe();
          });
        }
      }, {
        key: "getMenuDay",
        value: function getMenuDay(day) {
          return this.db.list("menu/".concat(this.userId, "/").concat(day));
        }
      }, {
        key: "setEntireMenuDay",
        value: function setEntireMenuDay(menuItems) {
          for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].index = i;
          }

          this.db.object("menu/".concat(this.userId, "/").concat(menuItems[0].date)).set(menuItems);
          this.getMenuDay(menuItems[0].date).set("currentIndex", menuItems.length);
        }
      }, {
        key: "removeMenuItem",
        value: function removeMenuItem(menuItem) {
          this.db.list("menu/".concat(this.userId, "/").concat(menuItem.date)).remove("".concat(menuItem.index));
        }
      }, {
        key: "buildMenuItem",
        value: function buildMenuItem(recipe, timestamp) {
          var menuItem = new _interfaces__WEBPACK_IMPORTED_MODULE_4__["MenuItem"](1, recipe.name, Object(_export_functions__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(timestamp), timestamp);

          if (recipe.ingredients) {
            var _iterator = _createForOfIteratorHelper(recipe.ingredients),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var ingredient = _step.value;
                menuItem.ingredients.push({
                  name: ingredient,
                  isChecked: false
                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          return menuItem;
        } //
        //ShoppingList data
        //

      }, {
        key: "getShoppingList",
        value: function getShoppingList() {
          return this.shoppingList;
        }
      }, {
        key: "setShoppingList",
        value: function setShoppingList(shoppingList) {
          this.db.object("shoppingList/".concat(this.userId)).set(shoppingList);
        }
      }, {
        key: "toggleIngredient",
        value: function toggleIngredient(ingredientIndex, checked) {
          this.db.object("shoppingList/".concat(this.userId, "/ingredients/").concat(ingredientIndex)).update({
            isChecked: checked
          });
        }
      }]);

      return DatabaseService;
    }();

    DatabaseService.ctorParameters = function () {
      return [{
        type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DatabaseService);
    /***/
  },

  /***/
  "./src/app/day-menu/day-menu.component.css":
  /*!*************************************************!*\
    !*** ./src/app/day-menu/day-menu.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDayMenuDayMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  .cdk-drag-placeholder {\r\n    opacity: 0;\r\n  }\r\n  \r\n  .cdk-drag-animating {\r\n    transition: transform 200ms cubic-bezier(1, 0, 0, 0);\r\n  }\r\n  \r\n  .animationContainer.cdk-drop-list-dragging .animationItem:not(.cdk-drag-placeholder) {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  }\r\n  \r\n  .cdk-drag-preview button{\r\n    display: none;\r\n  }\r\n  \r\n  p {\r\n    width: 90%;\r\n    text-align: left;\r\n  }\r\n  \r\n  button {\r\n    background-color: white;\r\n    border: 0;\r\n    border-radius: 20px;\r\n    padding: 6px 6px 6px 6px;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: rgba(0, 0, 0, 0.08);;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5LW1lbnUvZGF5LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLG9EQUFvRDtFQUN0RDs7RUFFQTtJQUNFLHNEQUFzRDtFQUN4RDs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxxQ0FBcUM7RUFDdkMiLCJmaWxlIjoic3JjL2FwcC9kYXktbWVudS9kYXktbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAuYW5pbWF0aW9uQ29udGFpbmVyLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmFuaW1hdGlvbkl0ZW06bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmNkay1kcmFnLXByZXZpZXcgYnV0dG9ue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDZweCA2cHggNnB4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCk7O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/day-menu/day-menu.component.ts":
  /*!************************************************!*\
    !*** ./src/app/day-menu/day-menu.component.ts ***!
    \************************************************/

  /*! exports provided: DayMenuComponent */

  /***/
  function srcAppDayMenuDayMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayMenuComponent", function () {
      return DayMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../database.service */
    "./src/app/database.service.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/menu/menu.component.ts");

    var DayMenuComponent = /*#__PURE__*/function () {
      function DayMenuComponent(dbService, menuComp) {
        _classCallCheck(this, DayMenuComponent);

        this.dbService = dbService;
        this.menuComp = menuComp;
        this.menuItems = [];
        this.displayedColumns = ['Name'];
      }

      _createClass(DayMenuComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.organizeMenu();
          this.menuComp.dialog.closeAll();
        }
      }, {
        key: "organizeMenu",
        value: function organizeMenu() {
          var _this2 = this;

          if (this.menu && this.menuItems.length === 0) {
            this.menu.subscribe(function (results) {
              _this2.menuItems = results;

              _this2.menuItems.pop();

              _this2.menuComp.dialog.closeAll();
            });
          }
        }
      }, {
        key: "removeMenuItem",
        value: function removeMenuItem(menuItem) {
          this.dbService.removeMenuItem(menuItem);
        }
      }, {
        key: "onDrop",
        value: function onDrop(event) {
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          this.dbService.setEntireMenuDay(this.menuItems);
        }
      }]);

      return DayMenuComponent;
    }();

    DayMenuComponent.ctorParameters = function () {
      return [{
        type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }, {
        type: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DayMenuComponent.prototype, "menu", void 0);
    DayMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-day-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./day-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/day-menu/day-menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./day-menu.component.css */
      "./src/app/day-menu/day-menu.component.css"))["default"]]
    })], DayMenuComponent);
    /***/
  },

  /***/
  "./src/app/enums.ts":
  /*!**************************!*\
    !*** ./src/app/enums.ts ***!
    \**************************/

  /*! exports provided: Page, Days */

  /***/
  function srcAppEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return Page;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Days", function () {
      return Days;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

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
    /***/

  },

  /***/
  "./src/app/export-functions.ts":
  /*!*************************************!*\
    !*** ./src/app/export-functions.ts ***!
    \*************************************/

  /*! exports provided: formatDate, getNextNumberOfDays, getWeek, getDayStrings */

  /***/
  function srcAppExportFunctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatDate", function () {
      return formatDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNextNumberOfDays", function () {
      return getNextNumberOfDays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWeek", function () {
      return getWeek;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDayStrings", function () {
      return getDayStrings;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./enums */
    "./src/app/enums.ts");

    function formatDate(timestamp) {
      var d = new Date(timestamp);
      return "".concat(d.getMonth() + 1, "-").concat(d.getDate(), "-").concat(d.getFullYear());
    } // For showing a certain number of days starting with today


    function getNextNumberOfDays() {
      var calendarPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var daysPerPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
      var days = []; // if it's default seven days, the week starts on sunday

      if (daysPerPage === 7) {
        return getWeek(calendarPage);
      } // otherwise it shows current day first
      else {
          for (var i = calendarPage * daysPerPage; i < calendarPage * daysPerPage + daysPerPage; i++) {
            var currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i);
            days.push(currentDate.getTime());
          }

          return days;
        }
    } // for showing a standard week starting on sunday or monday


    function getWeek() {
      var weeksFromNow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var startOnSunday = true;
      var days = [];
      var currentDate = new Date(); // go to desired week

      currentDate.setDate(currentDate.getDate() + weeksFromNow * 7); // gets start of current week

      var diff = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1);
      currentDate.setDate(diff - (startOnSunday ? 1 : 0)); // add first day

      days.push(currentDate.getTime());

      for (var i = 0; i < 7 - 1; i++) {
        currentDate.setDate(currentDate.getDate() + 1);
        days.push(currentDate.getTime());
      }

      return days;
    }

    function getDayStrings(timestampArr) {
      var dayStrings = [];

      var _iterator2 = _createForOfIteratorHelper(timestampArr),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var timestamp = _step2.value;
          var d = new Date(timestamp);
          dayStrings.push("".concat(_enums__WEBPACK_IMPORTED_MODULE_1__["Days"][d.getDay()], " ").concat(d.getMonth() + 1, "/").concat(d.getDate()));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return dayStrings;
    }
    /***/

  },

  /***/
  "./src/app/generate-shopping-list/generate-shopping-list.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/generate-shopping-list/generate-shopping-list.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGenerateShoppingListGenerateShoppingListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhdGUtc2hvcHBpbmctbGlzdC9nZW5lcmF0ZS1zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhdGUtc2hvcHBpbmctbGlzdC9nZW5lcmF0ZS1zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/generate-shopping-list/generate-shopping-list.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/generate-shopping-list/generate-shopping-list.component.ts ***!
    \****************************************************************************/

  /*! exports provided: GenerateShoppingListComponent */

  /***/
  function srcAppGenerateShoppingListGenerateShoppingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GenerateShoppingListComponent", function () {
      return GenerateShoppingListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../database.service */
    "./src/app/database.service.ts");
    /* harmony import */


    var _export_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../export-functions */
    "./src/app/export-functions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GenerateShoppingListComponent = /*#__PURE__*/function () {
      function GenerateShoppingListComponent(dbService) {
        _classCallCheck(this, GenerateShoppingListComponent);

        this.dbService = dbService;
      }

      _createClass(GenerateShoppingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "generateList",
        value: function generateList() {
          var _this3 = this;

          var end = new Date(this.endDate);
          var dateIterator = new Date(this.startDate);
          var obs = [];

          while (dateIterator.getTime() <= end.getTime()) {
            obs.push(this.dbService.getMenuDay(Object(_export_functions__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(dateIterator.getTime())).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)));
            dateIterator.setDate(dateIterator.getDate() + 1);
          }

          var ingredients = [];
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(obs).subscribe(function (dataArr) {
            dataArr.forEach(function (recArr) {
              recArr.forEach(function (rec) {
                if (rec.ingredients) ingredients.push.apply(ingredients, _toConsumableArray(rec.ingredients));
              });
            });

            _this3.dbService.setShoppingList({
              createdOn: new Date(Date.now()).toLocaleString(),
              startDate: _this3.startDate.toLocaleDateString(),
              endDate: _this3.endDate.toLocaleDateString(),
              ingredients: _this3.groupIngredients(ingredients)
            });
          });
        }
      }, {
        key: "groupIngredients",
        value: function groupIngredients(ingredients) {
          var counter = {};
          ingredients.forEach(function (ing) {
            counter[ing.name] = counter[ing.name] ? counter[ing.name] + 1 : 1;
          });
          var groupedIngredients = [];

          for (var _i = 0, _Object$entries = Object.entries(counter); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            groupedIngredients.push({
              name: "".concat(key, " x").concat(value),
              isChecked: false
            });
          }

          return groupedIngredients;
        }
      }]);

      return GenerateShoppingListComponent;
    }();

    GenerateShoppingListComponent.ctorParameters = function () {
      return [{
        type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }];
    };

    GenerateShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-generate-shopping-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./generate-shopping-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/generate-shopping-list/generate-shopping-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./generate-shopping-list.component.css */
      "./src/app/generate-shopping-list/generate-shopping-list.component.css"))["default"]]
    })], GenerateShoppingListComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#wrapper {\r\n    background-color: #3f51b5;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.logo {\r\n    height: 60px;\r\n}\r\n\r\n.white-btn {\r\n    color: white;\r\n}\r\n\r\n.logo-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo-text {\r\n    color: white;\r\n    font-size: 20px;\r\n    font-weight: 500;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLndoaXRlLWJ0biB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var HeaderComponent = function HeaderComponent(user) {
      _classCallCheck(this, HeaderComponent);

      this.user = user;
    };

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/interfaces.ts":
  /*!*******************************!*\
    !*** ./src/app/interfaces.ts ***!
    \*******************************/

  /*! exports provided: Recipe, MenuItem */

  /***/
  function srcAppInterfacesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Recipe", function () {
      return Recipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItem", function () {
      return MenuItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Recipe = function Recipe(name) {
      var prepTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var cookTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var servings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var directions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var notes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
      var image = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
      var ingredients = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];

      _classCallCheck(this, Recipe);

      this.name = name;
      this.prepTime = prepTime;
      this.cookTime = cookTime;
      this.servings = servings;
      this.directions = directions;
      this.notes = notes;
      this.image = image;
      this.ingredients = ingredients;
    };

    var MenuItem = function MenuItem(index, recipeName, date, timestamp) {
      var label = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var ingredients = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

      _classCallCheck(this, MenuItem);

      this.ingredients = [];
      this.index = index;
      this.recipeName = recipeName;
      this.date = date;
      this.timestamp = timestamp;
      this.label = label;
      this.ingredients = ingredients;
    };
    /***/

  },

  /***/
  "./src/app/menu/menu.component.css":
  /*!*****************************************!*\
    !*** ./src/app/menu/menu.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#wrapper {\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 5px;\r\n}\r\n\r\n#menuGrid {\r\n    display: inline-grid;\r\n    grid-template-columns: auto auto auto auto auto auto auto;\r\n    border-top: 1px solid black;\r\n    border-left: 1px solid black;\r\n    width: 80%;\r\n}\r\n\r\nh2 { \r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.item {\r\n    border-bottom: 1px solid black;\r\n    border-right: 1px solid black;  \r\n    width: 100%;\r\n}\r\n\r\n.arrowBtn {\r\n    display: inline-block;\r\n}\r\n\r\nh1 {\r\n    display: inline-block;\r\n}\r\n\r\n#arrows {\r\n    width: 70%;\r\n    min-width: 350px;\r\n    display: inline-block;\r\n    margin-bottom: 5px;   \r\n}\r\n\r\n.mat-table {\r\n    display: inline-block;\r\n    width: 70%;\r\n    min-width: 350px;\r\n  }\r\n\r\n.mat-column-Date {\r\n    flex: 0 0 10% !important;\r\n    min-width: 70px;\r\n    white-space: unset !important;\r\n}\r\n\r\napp-day-menu {\r\n    width: 100%;\r\n    min-width: 200px;\r\n    margin: 20px;\r\n}\r\n\r\nbutton {\r\n    border: 0;\r\n    background-color: white;\r\n    padding: 5px;\r\n    margin-bottom: 5px;\r\n    border-radius: 20px;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: rgba(0, 0, 0, 0.08);;\r\n}\r\n\r\ndiv {\r\n    text-align: left;\r\n}\r\n\r\nmat-cell {\r\n    display: block;\r\n}\r\n\r\n::ng-deep .custom-dialog-container > .mat-dialog-container {\r\n    padding: 0 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseURBQXlEO0lBQ3pELDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuI21lbnVHcmlkIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbmgyIHsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7ICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYXJyb3dCdG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiNhcnJvd3Mge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7ICAgXHJcbn1cclxuXHJcbi5tYXQtdGFibGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbiAgfVxyXG5cclxuLm1hdC1jb2x1bW4tRGF0ZSB7XHJcbiAgICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuYXBwLWRheS1tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCk7O1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5tYXQtY2VsbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXN0b20tZGlhbG9nLWNvbnRhaW5lciA+IC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _export_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../export-functions */
    "./src/app/export-functions.ts");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../database.service */
    "./src/app/database.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../recipe-list/recipe-list.component */
    "./src/app/recipe-list/recipe-list.component.ts");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(dbService, dialog) {
        _classCallCheck(this, MenuComponent);

        this.dbService = dbService;
        this.dialog = dialog;
        this.dayStringArr = [];
        this.timestampArr = [];
        this.observableArr = [];
        this.numOfWeeksFromNow = 0;
        this.displayedColumns = ['Date', 'Food'];
        this.daysToDisplay = 7;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.initiateDays(); //NEED FIXED

          setTimeout(function () {
            return _this4.initiateObservables();
          }, 100);
        }
      }, {
        key: "initiateDays",
        value: function initiateDays() {
          var weeksFromNow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          this.timestampArr = Object(_export_functions__WEBPACK_IMPORTED_MODULE_2__["getNextNumberOfDays"])(weeksFromNow, this.daysToDisplay);
          this.dayStringArr = Object(_export_functions__WEBPACK_IMPORTED_MODULE_2__["getDayStrings"])(this.timestampArr);
        }
      }, {
        key: "initiateObservables",
        value: function initiateObservables() {
          var _this5 = this;

          this.timestampArr.forEach(function (timestamp) {
            _this5.observableArr.push(_this5.dbService.getMenuDay(Object(_export_functions__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(timestamp)).valueChanges());
          });
        }
      }, {
        key: "openRecipeSelect",
        value: function openRecipeSelect(timestamp) {
          var dialogSettings = {
            padding: 'auto 0',
            minWidth: '350px',
            panelClass: 'custom-dialog-container'
          };
          var dialogRef = this.dialog.open(_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["RecipeListComponent"], dialogSettings);
          var instance = dialogRef.componentInstance;
          instance.selectedTimestamp = timestamp;
        }
      }, {
        key: "goToNextWeek",
        value: function goToNextWeek() {
          this.numOfWeeksFromNow++;
          this.initiateDays(this.numOfWeeksFromNow);
          this.observableArr = [];
          this.initiateObservables();
        }
      }, {
        key: "goToPrevWeek",
        value: function goToPrevWeek() {
          this.numOfWeeksFromNow--;
          this.initiateDays(this.numOfWeeksFromNow);
          this.observableArr = [];
          this.initiateObservables();
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/menu/menu.component.css"))["default"]]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/new-recipe/new-recipe.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/new-recipe/new-recipe.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewRecipeNewRecipeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1yZWNpcGUvbmV3LXJlY2lwZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/new-recipe/new-recipe.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/new-recipe/new-recipe.component.ts ***!
    \****************************************************/

  /*! exports provided: NewRecipeComponent */

  /***/
  function srcAppNewRecipeNewRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewRecipeComponent", function () {
      return NewRecipeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../database.service */
    "./src/app/database.service.ts");

    var NewRecipeComponent = /*#__PURE__*/function () {
      function NewRecipeComponent(dbService) {
        _classCallCheck(this, NewRecipeComponent);

        this.dbService = dbService;
        this.newRecipe = {
          name: "New Recipe",
          prepTime: "",
          cookTime: "",
          servings: "",
          directions: "",
          notes: "",
          image: "",
          ingredients: []
        };
      }

      _createClass(NewRecipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "processForm",
        value: function processForm() {
          this.dbService.addRecipe(this.newRecipe);
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return index;
        }
      }]);

      return NewRecipeComponent;
    }();

    NewRecipeComponent.ctorParameters = function () {
      return [{
        type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }];
    };

    NewRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-recipe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-recipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/new-recipe/new-recipe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-recipe.component.css */
      "./src/app/new-recipe/new-recipe.component.css"))["default"]]
    })], NewRecipeComponent);
    /***/
  },

  /***/
  "./src/app/recipe-detail/recipe-detail.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/recipe-detail/recipe-detail.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeDetailRecipeDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".details {\r\n  text-align: left;\r\n}\r\n\r\n.table {\r\n  width: 30%;\r\n  /* display: inline-grid; */\r\n  /* grid-template-columns: 1fr 3fr; */\r\n  min-width: 280px;\r\n}\r\n\r\n.recipe-prop {\r\n  display: flex;\r\n}\r\n\r\n.property {\r\n  margin-left: 10px;\r\n}\r\n\r\n#editBtns {\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n  margin-top: 10px;\r\n  display: flex;\r\n}\r\n\r\nbutton {\r\n  margin: 3px;  \r\n}\r\n\r\n/* \r\nbutton {\r\n  height: fit-content;\r\n  padding: 3px;\r\n  width: fit-content;\r\n  font-size: 11pt;\r\n  border: 0;\r\n  background-color: white;\r\n} */\r\n\r\n/* #editBtns {\r\n  margin: 10px;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.445);\r\n  grid-column-start: 1;\r\n  grid-column-end: 3;\r\n} */\r\n\r\n/* #editBtns button {\r\n  margin-top: 10px;\r\n  width: 50%;\r\n} */\r\n\r\ninput {\r\n  padding: 3px;\r\n  margin: 3px;\r\n}\r\n\r\np {\r\n  line-height: 23px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7Ozs7O0dBS0c7O0FBRUg7OztHQUdHOztBQUVIO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS1kZXRhaWwvcmVjaXBlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICAvKiBkaXNwbGF5OiBpbmxpbmUtZ3JpZDsgKi9cclxuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7ICovXHJcbiAgbWluLXdpZHRoOiAyODBweDtcclxufVxyXG5cclxuLnJlY2lwZS1wcm9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucHJvcGVydHkge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4jZWRpdEJ0bnMge1xyXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gIGdyaWQtY29sdW1uLWVuZDogMztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAzcHg7ICBcclxufVxyXG5cclxuLyogXHJcbmJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogMTFwdDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcbi8qICNlZGl0QnRucyB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDQ1KTtcclxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbn0gKi9cclxuXHJcbi8qICNlZGl0QnRucyBidXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufSAqL1xyXG5cclxuaW5wdXQge1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBtYXJnaW46IDNweDtcclxufVxyXG5cclxucCB7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/recipe-detail/recipe-detail.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/recipe-detail/recipe-detail.component.ts ***!
    \**********************************************************/

  /*! exports provided: RecipeDetailComponent */

  /***/
  function srcAppRecipeDetailRecipeDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function () {
      return RecipeDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../interfaces */
    "./src/app/interfaces.ts");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../database.service */
    "./src/app/database.service.ts");

    var RecipeDetailComponent = /*#__PURE__*/function () {
      function RecipeDetailComponent(dbService) {
        _classCallCheck(this, RecipeDetailComponent);

        this.dbService = dbService;
        this.isEdit = false;
        this.ingredientList = [];
      }

      _createClass(RecipeDetailComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.updateVariables();
        }
      }, {
        key: "addIngredientInput",
        value: function addIngredientInput() {
          this.ingredientList.push("");
        }
      }, {
        key: "removeIngredient",
        value: function removeIngredient(index) {
          this.ingredientList.splice(index, 1);
        }
      }, {
        key: "processForm",
        value: function processForm(form) {
          var j = form.value;
          this.dbService.deleteRecipe(this.recipe);
          this.recipe = new _interfaces__WEBPACK_IMPORTED_MODULE_2__["Recipe"](j.name, j.prepTime, j.cookTime, j.servings, j.directions, j.notes);
          this.dbService.addRecipe(this.recipe);
          this.dbService.setRecipeIngredients(this.recipe, this.ingredientList);
        }
      }, {
        key: "onDateSelected",
        value: function onDateSelected() {
          this.dateSelectedForMenu ? this.addToMenu(this.dateSelectedForMenu) : this.datePicker.open();
        }
      }, {
        key: "addToMenu",
        value: function addToMenu(timestamp) {
          var menuItem = this.dbService.buildMenuItem(this.recipe, timestamp);
          this.dbService.addMenuItem(menuItem);
          this.dateSelectedForMenu = null;
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe() {
          this.dbService.deleteRecipe(this.recipe);
          this.isEdit = false;
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return index;
        }
      }, {
        key: "updateVariables",
        value: function updateVariables() {
          this.dateSelectedForMenu = this.recipeObj.timestamp;
          this.recipe = this.recipeObj.recipe;
          this.recipeObs = this.dbService.getRecipe(this.recipe).valueChanges();

          if (this.recipe.ingredients) {
            this.ingredientList = this.recipe.ingredients;
          } else {
            this.ingredientList = [];
          }
        }
      }]);

      return RecipeDetailComponent;
    }();

    RecipeDetailComponent.ctorParameters = function () {
      return [{
        type: _database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RecipeDetailComponent.prototype, "recipeObj", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('picker', {
      read: undefined,
      "static": false
    })], RecipeDetailComponent.prototype, "datePicker", void 0);
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-recipe-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-detail/recipe-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-detail.component.css */
      "./src/app/recipe-detail/recipe-detail.component.css"))["default"]]
    })], RecipeDetailComponent);
    /***/
  },

  /***/
  "./src/app/recipe-list/recipe-list.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/recipe-list/recipe-list.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeListRecipeListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#wrapper {\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  text-align: left;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #3f51b5;\r\n  color: black;\r\n  margin-bottom: 5px;\r\n  list-style-type: none;\r\n  height: 50px;\r\n\r\n}\r\n\r\np {\r\n  line-height: 50px;\r\n  font-size: 11pt;\r\n}\r\n\r\n#searchDiv {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  text-align: left;\r\n  padding: 5px;\r\n  border-bottom: 1px solid #3f51b5;\r\n}\r\n\r\n.new-recpie-container {\r\n  height: -webkit-fit-content;\r\n  height: -moz-fit-content;\r\n  height: fit-content;\r\n}\r\n\r\n.list {\r\n  margin: auto;\r\n  display: inline-grid;\r\n  width: 100%;\r\n  max-width: 1000px;\r\n\r\n}\r\n\r\n.details {\r\n  padding: 20px;\r\n  background-color: aliceblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQkFBbUI7RUFBbkIsd0JBQW1CO0VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZjUxYjU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5cclxufVxyXG5cclxucCB7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAxMXB0O1xyXG59XHJcblxyXG4jc2VhcmNoRGl2IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzZjUxYjU7XHJcbn1cclxuXHJcbi5uZXctcmVjcGllLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuXHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/recipe-list/recipe-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/recipe-list/recipe-list.component.ts ***!
    \******************************************************/

  /*! exports provided: RecipeListComponent */

  /***/
  function srcAppRecipeListRecipeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function () {
      return RecipeListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../database.service */
    "./src/app/database.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../new-recipe/new-recipe.component */
    "./src/app/new-recipe/new-recipe.component.ts");

    var RecipeListComponent = /*#__PURE__*/function () {
      function RecipeListComponent(dbService, dialog) {
        var _this6 = this;

        _classCallCheck(this, RecipeListComponent);

        this.dbService = dbService;
        this.dialog = dialog;
        this.addedMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedTimestamp = null;
        this.recipeList = this.dbService.getRecipeList().valueChanges();
        this.recipeList.subscribe(function (recipes) {
          return _this6.recipeListToDisplay = recipes;
        });
      }

      _createClass(RecipeListComponent, [{
        key: "newRecipe",
        value: function newRecipe() {
          var dialogRef = this.dialog.open(_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_4__["NewRecipeComponent"]);
        }
      }, {
        key: "search",
        value: function search(searchTerm) {
          var _this7 = this;

          this.recipeListToDisplay = [];
          this.recipeList.subscribe(function (list) {
            var _iterator3 = _createForOfIteratorHelper(list),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var recipe = _step3.value;
                searchTerm = searchTerm.toLowerCase();

                if (recipe.name.toLowerCase().indexOf(searchTerm) >= 0) {
                  _this7.recipeListToDisplay.push(recipe);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
      }]);

      return RecipeListComponent;
    }();

    RecipeListComponent.ctorParameters = function () {
      return [{
        type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RecipeListComponent.prototype, "addedMenuItem", void 0);
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-recipe-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-list/recipe-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-list.component.css */
      "./src/app/recipe-list/recipe-list.component.css"))["default"]]
    })], RecipeListComponent);
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingListShoppingListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  width: 90%;\r\n  max-width: 500px;\r\n  margin: 20px auto;\r\n}\r\n\r\n.shopping-list-container {\r\n  margin-top: 20px;\r\n}\r\n\r\n.ingredient-container {\r\n  margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG59XHJcblxyXG4uc2hvcHBpbmctbGlzdC1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: ShoppingListComponent */

  /***/
  function srcAppShoppingListShoppingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function () {
      return ShoppingListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../database.service */
    "./src/app/database.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _generate_shopping_list_generate_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../generate-shopping-list/generate-shopping-list.component */
    "./src/app/generate-shopping-list/generate-shopping-list.component.ts");

    var ShoppingListComponent = /*#__PURE__*/function () {
      function ShoppingListComponent(dbService, dialog) {
        var _this8 = this;

        _classCallCheck(this, ShoppingListComponent);

        this.dbService = dbService;
        this.dialog = dialog;
        this.shoppingList = this.dbService.shoppingList.valueChanges();
        this.shoppingList.subscribe(function (list) {
          _this8.shoppingListToDisplay = list;
        });
      }

      _createClass(ShoppingListComponent, [{
        key: "openGenerateShoppingList",
        value: function openGenerateShoppingList() {
          this.dialog.open(_generate_shopping_list_generate_shopping_list_component__WEBPACK_IMPORTED_MODULE_4__["GenerateShoppingListComponent"]);
        }
      }, {
        key: "showOptions",
        value: function showOptions(event, ingIndex) {
          this.dbService.toggleIngredient(ingIndex, event.checked);
        }
      }]);

      return ShoppingListComponent;
    }();

    ShoppingListComponent.ctorParameters = function () {
      return [{
        type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-list.component.css */
      "./src/app/shopping-list/shopping-list.component.css"))["default"]]
    })], ShoppingListComponent);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(afAuth) {
        var _this9 = this;

        _classCallCheck(this, UserService);

        this.afAuth = afAuth;
        this.uidObs = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (authState) {
          console.log(!authState);

          if (!authState) {
            return null;
          } else {
            return authState.uid;
          }
        }));
        this.uidObs.subscribe(function (uidString) {
          return _this9.uid = uidString;
        });
      }

      _createClass(UserService, [{
        key: "login",
        value: function login() {
          this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider());
        }
      }, {
        key: "logout",
        value: function logout() {
          this.afAuth.auth.signOut();
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\code\angular-meal-time\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map