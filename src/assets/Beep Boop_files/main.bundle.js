webpackJsonp([1,5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.resolveSuffix = '?resolve=true';
        this.actionUrl = '/api/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    DataService.prototype.getAll = function (ns) {
        console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns);
        return this.http.get("" + this.actionUrl + ns)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getSingle = function (ns, id) {
        console.log('GetSingle ' + ns);
        return this.http.get(this.actionUrl + ns + '/' + id + this.resolveSuffix)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.add = function (ns, asset) {
        console.log('Entered DataService add');
        console.log('Add ' + ns);
        console.log('asset', asset);
        return this.http.post(this.actionUrl + ns, asset)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.update = function (ns, id, itemToUpdate) {
        console.log('Update ' + ns);
        console.log('what is the id?', id);
        console.log('what is the updated item?', itemToUpdate);
        console.log('what is the updated item?', JSON.stringify(itemToUpdate));
        return this.http.put("" + this.actionUrl + ns + "/" + id, itemToUpdate)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (ns, id) {
        console.log('Delete ' + ns);
        return this.http.delete(this.actionUrl + ns + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    DataService.prototype.extractData = function (res) {
        return res.json();
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BeepBoopAccount_service__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeepBoopAccountComponent; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeepBoopAccountComponent = (function () {
    function BeepBoopAccountComponent(serviceBeepBoopAccount, fb) {
        this.serviceBeepBoopAccount = serviceBeepBoopAccount;
        this.accountId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.creditBalance = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.cashBalance = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.myForm = fb.group({
            accountId: this.accountId,
            creditBalance: this.creditBalance,
            cashBalance: this.cashBalance
        });
    }
    ;
    BeepBoopAccountComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    BeepBoopAccountComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceBeepBoopAccount.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    BeepBoopAccountComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    BeepBoopAccountComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    BeepBoopAccountComponent.prototype.addAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: 'org.acme.vehicle.auction.BeepBoopAccount',
            'accountId': this.accountId.value,
            'creditBalance': this.creditBalance.value,
            'cashBalance': this.cashBalance.value
        };
        this.myForm.setValue({
            'accountId': null,
            'creditBalance': null,
            'cashBalance': null
        });
        return this.serviceBeepBoopAccount.addAsset(this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                'accountId': null,
                'creditBalance': null,
                'cashBalance': null
            });
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BeepBoopAccountComponent.prototype.updateAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: 'org.acme.vehicle.auction.BeepBoopAccount',
            'creditBalance': this.creditBalance.value,
            'cashBalance': this.cashBalance.value
        };
        return this.serviceBeepBoopAccount.updateAsset(form.get('accountId').value, this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BeepBoopAccountComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.serviceBeepBoopAccount.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BeepBoopAccountComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    BeepBoopAccountComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceBeepBoopAccount.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                'accountId': null,
                'creditBalance': null,
                'cashBalance': null
            };
            if (result.accountId) {
                formObject.accountId = result.accountId;
            }
            else {
                formObject.accountId = null;
            }
            if (result.creditBalance) {
                formObject.creditBalance = result.creditBalance;
            }
            else {
                formObject.creditBalance = null;
            }
            if (result.cashBalance) {
                formObject.cashBalance = result.cashBalance;
            }
            else {
                formObject.cashBalance = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BeepBoopAccountComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            'accountId': null,
            'creditBalance': null,
            'cashBalance': null
        });
    };
    return BeepBoopAccountComponent;
}());
BeepBoopAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-beepboopaccount',
        template: __webpack_require__(537),
        styles: [__webpack_require__(517)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__BeepBoopAccount_service__["a" /* BeepBoopAccountService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__BeepBoopAccount_service__["a" /* BeepBoopAccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__BeepBoopAccount_service__["a" /* BeepBoopAccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object])
], BeepBoopAccountComponent);

var _a, _b;
//# sourceMappingURL=BeepBoopAccount.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Buy_service__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyComponent; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyComponent = (function () {
    function BuyComponent(serviceBuy, fb) {
        this.serviceBuy = serviceBuy;
        this.buyerAccount = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.listing = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.transactionId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.timestamp = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.myForm = fb.group({
            buyerAccount: this.buyerAccount,
            listing: this.listing,
            transactionId: this.transactionId,
            timestamp: this.timestamp
        });
    }
    ;
    BuyComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    BuyComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceBuy.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (transaction) {
                tempList.push(transaction);
            });
            _this.allTransactions = tempList;
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    BuyComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
    BuyComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    BuyComponent.prototype.addTransaction = function (form) {
        var _this = this;
        this.Transaction = {
            $class: 'org.acme.vehicle.auction.Buy',
            'buyerAccount': this.buyerAccount.value,
            'listing': this.listing.value,
            'transactionId': this.transactionId.value,
            'timestamp': this.timestamp.value
        };
        this.myForm.setValue({
            'buyerAccount': null,
            'listing': null,
            'transactionId': null,
            'timestamp': null
        });
        return this.serviceBuy.addTransaction(this.Transaction)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                'buyerAccount': null,
                'listing': null,
                'transactionId': null,
                'timestamp': null
            });
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BuyComponent.prototype.updateTransaction = function (form) {
        var _this = this;
        this.Transaction = {
            $class: 'org.acme.vehicle.auction.Buy',
            'buyerAccount': this.buyerAccount.value,
            'listing': this.listing.value,
            'timestamp': this.timestamp.value
        };
        return this.serviceBuy.updateTransaction(form.get('transactionId').value, this.Transaction)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BuyComponent.prototype.deleteTransaction = function () {
        var _this = this;
        return this.serviceBuy.deleteTransaction(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BuyComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    BuyComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceBuy.getTransaction(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                'buyerAccount': null,
                'listing': null,
                'transactionId': null,
                'timestamp': null
            };
            if (result.buyerAccount) {
                formObject.buyerAccount = result.buyerAccount;
            }
            else {
                formObject.buyerAccount = null;
            }
            if (result.listing) {
                formObject.listing = result.listing;
            }
            else {
                formObject.listing = null;
            }
            if (result.transactionId) {
                formObject.transactionId = result.transactionId;
            }
            else {
                formObject.transactionId = null;
            }
            if (result.timestamp) {
                formObject.timestamp = result.timestamp;
            }
            else {
                formObject.timestamp = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    BuyComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            'buyerAccount': null,
            'listing': null,
            'transactionId': null,
            'timestamp': null
        });
    };
    return BuyComponent;
}());
BuyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-buy',
        template: __webpack_require__(538),
        styles: [__webpack_require__(518)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__Buy_service__["a" /* BuyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Buy_service__["a" /* BuyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Buy_service__["a" /* BuyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object])
], BuyComponent);

var _a, _b;
//# sourceMappingURL=Buy.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CreditListing_service__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditListingComponent; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreditListingComponent = (function () {
    function CreditListingComponent(serviceCreditListing, fb) {
        this.serviceCreditListing = serviceCreditListing;
        this.listingId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.sellerAccount = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.price = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.numCredits = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.state = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.myForm = fb.group({
            listingId: this.listingId,
            sellerAccount: this.sellerAccount,
            price: this.price,
            numCredits: this.numCredits,
            state: this.state
        });
    }
    ;
    CreditListingComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    CreditListingComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceCreditListing.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (asset) {
                tempList.push(asset);
            });
            _this.allAssets = tempList;
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    CreditListingComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
    CreditListingComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    CreditListingComponent.prototype.addAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: 'org.acme.vehicle.auction.CreditListing',
            'listingId': this.listingId.value,
            'sellerAccount': this.sellerAccount.value,
            'price': this.price.value,
            'numCredits': this.numCredits.value,
            'state': this.state.value
        };
        this.myForm.setValue({
            'listingId': null,
            'sellerAccount': null,
            'price': null,
            'numCredits': null,
            'state': null
        });
        return this.serviceCreditListing.addAsset(this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                'listingId': null,
                'sellerAccount': null,
                'price': null,
                'numCredits': null,
                'state': null
            });
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    CreditListingComponent.prototype.updateAsset = function (form) {
        var _this = this;
        this.asset = {
            $class: 'org.acme.vehicle.auction.CreditListing',
            'sellerAccount': this.sellerAccount.value,
            'price': this.price.value,
            'numCredits': this.numCredits.value,
            'state': this.state.value
        };
        return this.serviceCreditListing.updateAsset(form.get('listingId').value, this.asset)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    CreditListingComponent.prototype.deleteAsset = function () {
        var _this = this;
        return this.serviceCreditListing.deleteAsset(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    CreditListingComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    CreditListingComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceCreditListing.getAsset(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                'listingId': null,
                'sellerAccount': null,
                'price': null,
                'numCredits': null,
                'state': null
            };
            if (result.listingId) {
                formObject.listingId = result.listingId;
            }
            else {
                formObject.listingId = null;
            }
            if (result.sellerAccount) {
                formObject.sellerAccount = result.sellerAccount;
            }
            else {
                formObject.sellerAccount = null;
            }
            if (result.price) {
                formObject.price = result.price;
            }
            else {
                formObject.price = null;
            }
            if (result.numCredits) {
                formObject.numCredits = result.numCredits;
            }
            else {
                formObject.numCredits = null;
            }
            if (result.state) {
                formObject.state = result.state;
            }
            else {
                formObject.state = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    CreditListingComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            'listingId': null,
            'sellerAccount': null,
            'price': null,
            'numCredits': null,
            'state': null
        });
    };
    return CreditListingComponent;
}());
CreditListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-creditlisting',
        template: __webpack_require__(539),
        styles: [__webpack_require__(519)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__CreditListing_service__["a" /* CreditListingService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__CreditListing_service__["a" /* CreditListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__CreditListing_service__["a" /* CreditListingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object])
], CreditListingComponent);

var _a, _b;
//# sourceMappingURL=CreditListing.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Traveller_service__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravellerComponent; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TravellerComponent = (function () {
    function TravellerComponent(serviceTraveller, fb) {
        this.serviceTraveller = serviceTraveller;
        this.travellerId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required);
        this.myForm = fb.group({
            travellerId: this.travellerId
        });
    }
    ;
    TravellerComponent.prototype.ngOnInit = function () {
        this.loadAll();
    };
    TravellerComponent.prototype.loadAll = function () {
        var _this = this;
        var tempList = [];
        return this.serviceTraveller.getAll()
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            result.forEach(function (participant) {
                tempList.push(participant);
            });
            _this.allParticipants = tempList;
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
                _this.errorMessage = error;
            }
        });
    };
    /**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
    TravellerComponent.prototype.changeArrayValue = function (name, value) {
        var index = this[name].value.indexOf(value);
        if (index === -1) {
            this[name].value.push(value);
        }
        else {
            this[name].value.splice(index, 1);
        }
    };
    /**
     * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
    TravellerComponent.prototype.hasArrayValue = function (name, value) {
        return this[name].value.indexOf(value) !== -1;
    };
    TravellerComponent.prototype.addParticipant = function (form) {
        var _this = this;
        this.participant = {
            $class: 'org.acme.vehicle.auction.Traveller',
            'travellerId': this.travellerId.value
        };
        this.myForm.setValue({
            'travellerId': null
        });
        return this.serviceTraveller.addParticipant(this.participant)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.myForm.setValue({
                'travellerId': null
            });
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    TravellerComponent.prototype.updateParticipant = function (form) {
        var _this = this;
        this.participant = {
            $class: 'org.acme.vehicle.auction.Traveller',
        };
        return this.serviceTraveller.updateParticipant(form.get('travellerId').value, this.participant)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    TravellerComponent.prototype.deleteParticipant = function () {
        var _this = this;
        return this.serviceTraveller.deleteParticipant(this.currentId)
            .toPromise()
            .then(function () {
            _this.errorMessage = null;
            _this.loadAll();
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    TravellerComponent.prototype.setId = function (id) {
        this.currentId = id;
    };
    TravellerComponent.prototype.getForm = function (id) {
        var _this = this;
        return this.serviceTraveller.getparticipant(id)
            .toPromise()
            .then(function (result) {
            _this.errorMessage = null;
            var formObject = {
                'travellerId': null
            };
            if (result.travellerId) {
                formObject.travellerId = result.travellerId;
            }
            else {
                formObject.travellerId = null;
            }
            _this.myForm.setValue(formObject);
        })
            .catch(function (error) {
            if (error === 'Server error') {
                _this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
            }
            else if (error === '404 - Not Found') {
                _this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
            }
            else {
                _this.errorMessage = error;
            }
        });
    };
    TravellerComponent.prototype.resetForm = function () {
        this.myForm.setValue({
            'travellerId': null
        });
    };
    return TravellerComponent;
}());
TravellerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-traveller',
        template: __webpack_require__(540),
        styles: [__webpack_require__(520)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__Traveller_service__["a" /* TravellerService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Traveller_service__["a" /* TravellerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Traveller_service__["a" /* TravellerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object])
], TravellerComponent);

var _a, _b;
//# sourceMappingURL=Traveller.component.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(542),
        styles: [__webpack_require__(522)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 492;


/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(510);
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeepBoopAccountService; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var BeepBoopAccountService = (function () {
    function BeepBoopAccountService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'BeepBoopAccount';
    }
    ;
    BeepBoopAccountService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    BeepBoopAccountService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    BeepBoopAccountService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    BeepBoopAccountService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    BeepBoopAccountService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    return BeepBoopAccountService;
}());
BeepBoopAccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], BeepBoopAccountService);

var _a;
//# sourceMappingURL=BeepBoopAccount.service.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyService; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var BuyService = (function () {
    function BuyService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'Buy';
    }
    ;
    BuyService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    BuyService.prototype.getTransaction = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    BuyService.prototype.addTransaction = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    BuyService.prototype.updateTransaction = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    BuyService.prototype.deleteTransaction = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    return BuyService;
}());
BuyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], BuyService);

var _a;
//# sourceMappingURL=Buy.service.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditListingService; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var CreditListingService = (function () {
    function CreditListingService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'CreditListing';
    }
    ;
    CreditListingService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    CreditListingService.prototype.getAsset = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    CreditListingService.prototype.addAsset = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    CreditListingService.prototype.updateAsset = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    CreditListingService.prototype.deleteAsset = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    return CreditListingService;
}());
CreditListingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], CreditListingService);

var _a;
//# sourceMappingURL=CreditListing.service.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravellerService; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Can be injected into a constructor
var TravellerService = (function () {
    function TravellerService(dataService) {
        this.dataService = dataService;
        this.NAMESPACE = 'Traveller';
    }
    ;
    TravellerService.prototype.getAll = function () {
        return this.dataService.getAll(this.NAMESPACE);
    };
    TravellerService.prototype.getparticipant = function (id) {
        return this.dataService.getSingle(this.NAMESPACE, id);
    };
    TravellerService.prototype.addParticipant = function (itemToAdd) {
        return this.dataService.add(this.NAMESPACE, itemToAdd);
    };
    TravellerService.prototype.updateParticipant = function (id, itemToUpdate) {
        return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    };
    TravellerService.prototype.deleteParticipant = function (id) {
        return this.dataService.delete(this.NAMESPACE, id);
    };
    return TravellerService;
}());
TravellerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], TravellerService);

var _a;
//# sourceMappingURL=Traveller.service.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BeepBoopAccount_BeepBoopAccount_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CreditListing_CreditListing_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Traveller_Traveller_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Buy_Buy_component__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'BeepBoopAccount', component: __WEBPACK_IMPORTED_MODULE_3__BeepBoopAccount_BeepBoopAccount_component__["a" /* BeepBoopAccountComponent */] },
    { path: 'CreditListing', component: __WEBPACK_IMPORTED_MODULE_4__CreditListing_CreditListing_component__["a" /* CreditListingComponent */] },
    { path: 'Traveller', component: __WEBPACK_IMPORTED_MODULE_5__Traveller_Traveller_component__["a" /* TravellerComponent */] },
    { path: 'Buy', component: __WEBPACK_IMPORTED_MODULE_6__Buy_Buy_component__["a" /* BuyComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.nav a').on('click', function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.nav').find('.active').removeClass('active');
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).parent().addClass('active');
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.dropdown').on('show.bs.dropdown', function (e) {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.dropdown').on('hide.bs.dropdown', function (e) {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()('.dropdown-menu li').on('click', function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery___default()(this).parent().parent().addClass('active');
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(541),
        styles: [__webpack_require__(521)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__BeepBoopAccount_BeepBoopAccount_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CreditListing_CreditListing_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Traveller_Traveller_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Buy_Buy_component__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__BeepBoopAccount_BeepBoopAccount_component__["a" /* BeepBoopAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_9__CreditListing_CreditListing_component__["a" /* CreditListingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Traveller_Traveller_component__["a" /* TravellerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Buy_Buy_component__["a" /* BuyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "/*\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.container {\n    width: 100%;\n    padding-left: 72px;\n    padding-right: 72px;\n}\n\n.btn-primary {\n    background: #844AE4;\n    border-radius: 4px;\n    border: 0px;\n    font-size: 14px;\n    color: #FFFFFF;\n    letter-spacing: 0;\n    line-height: 10px;\n    height: 40px;\n    width: 153px;\n    float: right;\n    margin-top: 5%;\n}\n\n.table > thead > tr > th {\n    border-bottom: 1px solid #EAEAEA;\n}\n\n.table > thead > tr > th.info {\n    background: transparent;\n    color: #e2e2e2;\n}\n.modal-title {\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n    padding-top: 15px;\n}\n.modal-intro {\n    font-family: inherit;\n    font-size: 14px;\n    color: #545454;\n    line-height: 20px;\n    padding-top: 15px;\n\n}\n.modal-header{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-bottom: 1px solid #F4F4F4;\n}\n.modal-body{\n    background: #F4F4F4;\n    border-radius: 5px;\n}\n.modal-footer{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-top: 1px solid #f4f4f4\n}\n.form-control{\n    color: #393939;\n    height: 42px;\n    border: 1px solid #ffffff;\n    box-shadow: inset 0 0px 0px rgba(0,0,0,.075);\n    border-radius: 4px;\n    resize: none;\n\n}\nlabel {\n    color: #545454;\n}\n.modal-content{\n    margin-top: 15%;\n    margin-bottom: 15%;\n    box-shadow: 0 0px 0px;\n    border: 0px;\n\n}\n.btn-default {\n    color: #844EF4;\n    background-color: #ffffff;\n    border-color: #844EF4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger{\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-success {\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-success:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-default:focus{\n    background-color: #fff;\n    border-color: #4d21a8;\n    color: #4d21a8;\n}\n.asset-title{\n    font-family: inherit;\n    font-size: 24px;\n    color: #e2e2e2;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n}\n.info{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n}\n.info-actions{\n    font-family: inherit;\n    font-size: 14px;\n    color: #e2e2e2;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n    padding-left: 24px;\n}\n.asset-properties{\n    font-family: inherit;\n    font-size: 14px;\n    color: #e2e2e2;\n    line-height: 42px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 250px;\n}\n.plus-svg{\n    color: #fff;\n    fill: currentColor;\n}\n\n/***.asset-properties:hover, .asset-properties:hover span{\noverflow: visible;\nposition: relative;\n make readable design\nbackground-color: #FFFFFF;\nborder: 1px solid #FFFFFF;\nborder-radius: 4px;\npadding: 3px;\n/* compensate padding and border size to avoid jerking\nmargin-left: -4px;\n}\n***/\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "/*\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n * \n * http://www.apache.org/licenses/LICENSE-2.0\n * \n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.container {\n    margin-left: 72px;\n    margin-right: 32px;\n    background-color: #F4F4F4;\n    border-radius: 5px;\n}\n\n.btn-primary {\n    background: #844AE4;\n    border-radius: 4px;\n    border: 0px;\n    font-size: 14px;\n    color: #FFFFFF;\n    letter-spacing: 0;\n    line-height: 10px;\n    height: 40px;\n    width: 153px;\n    float: right;\n    margin-top: 5%;\n}\n\n.table > thead > tr > th {\n    border-bottom: 1px solid #EAEAEA;\n}\n\n.table > thead > tr > th.info {\n    background: #FFF;\n}\n.modal-title {\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n    padding-top: 15px;\n}\n.modal-intro {\n    font-family: inherit;\n    font-size: 14px;\n    color: #545454;\n    line-height: 20px;\n    padding-top: 15px;\n\n}\n.modal-header{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-bottom: 1px solid #F4F4F4;\n}\n.modal-body{\n    background: #F4F4F4;\n    border-radius: 5px;\n}\n.modal-footer{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-top: 1px solid #f4f4f4\n}\n.form-control{\n    color: #393939;\n    height: 42px;\n    border: 1px solid #ffffff;\n    box-shadow: inset 0 0px 0px rgba(0,0,0,.075); \n    border-radius: 4px;\n    resize: none;\n\n}\nlabel {\n    color: #545454;\n}\n.modal-content{\n    margin-top: 15%;\n    margin-bottom: 15%;\n    box-shadow: 0 0px 0px;\n    border: 0px;\n\n}\n.btn-default {\n    color: #844EF4;\n    background-color: #ffffff;\n    border-color: #844EF4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger{\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-success {\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-success:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-default:focus{\n    background-color: #fff;\n    border-color: #4d21a8;  \n    color: #4d21a8;      \n}\n.transaction-title{\n    font-family: inherit;\n    font-size: 18px;\n    color: #4E4E4E;\n    letter-spacing: 0.21px;\n    line-height: 28px;\n    display: inline-block;\n    margin-top: 30px;\n    margin-left: 20px;\n}\n.info{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n}\n.info-actions{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n    padding-left: 24px;\n}\n.transaction-properties{\n    font-family: inherit;\n    font-size: 14px;\n    color: #848484;\n    line-height: 42px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 250px;\n}\n.plus-svg{\n    color: #fff;\n    fill: currentColor;\n}\n\n.invoke_cancel {\n    font-size: 14px;\n    color: #6C4CC4;\n    letter-spacing: 0.2px;\n    float: right;\n    margin-top: 30px;\n    font-weight: bold;\n    display: inline-block;\n    margin-right: 32px;\n}\n\n.invokeTransactionBtn {\n    float: right;\n    margin: 32px;\n}\n\n/***.transaction-properties:hover, .transaction-properties:hover span{  \noverflow: visible;\nposition: relative;\n make readable design \nbackground-color: #FFFFFF;\nborder: 1px solid #FFFFFF;\nborder-radius: 4px;\npadding: 3px;\n/* compensate padding and border size to avoid jerking \nmargin-left: -4px;\n}\n***/\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "/*\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.container {\n    width: 100%;\n    padding-left: 72px;\n    padding-right: 72px;\n}\n\n.btn-primary {\n    background: #844AE4;\n    border-radius: 4px;\n    border: 0px;\n    font-size: 14px;\n    color: #FFFFFF;\n    letter-spacing: 0;\n    line-height: 10px;\n    height: 40px;\n    width: 153px;\n    float: right;\n    margin-top: 5%;\n}\n\n.table > thead > tr > th {\n    border-bottom: 1px solid #EAEAEA;\n}\n\n.table > thead > tr > th.info {\n    background-color: transparent;\n}\n.modal-title {\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n    padding-top: 15px;\n}\n.modal-intro {\n    font-family: inherit;\n    font-size: 14px;\n    color: #545454;\n    line-height: 20px;\n    padding-top: 15px;\n\n}\n.modal-header{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-bottom: 1px solid #F4F4F4;\n}\n.modal-body{\n    background: #F4F4F4;\n    border-radius: 5px;\n}\n.modal-footer{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-top: 1px solid #f4f4f4\n}\n.form-control{\n    color: #393939;\n    height: 42px;\n    border: 1px solid #ffffff;\n    box-shadow: inset 0 0px 0px rgba(0,0,0,.075);\n    border-radius: 4px;\n    resize: none;\n\n}\nlabel {\n    color: #545454;\n}\n.modal-content{\n    margin-top: 15%;\n    margin-bottom: 15%;\n    box-shadow: 0 0px 0px;\n    border: 0px;\n\n}\n.btn-default {\n    color: #844EF4;\n    background-color: #ffffff;\n    border-color: #844EF4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger{\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-success {\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-success:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-default:focus{\n    background-color: #fff;\n    border-color: #4d21a8;\n    color: #4d21a8;\n}\n.asset-title{\n    font-family: inherit;\n    font-size: 24px;\n    color: #e2e2e2;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n}\n.info{\n    font-family: inherit;\n    font-size: 14px;\n    color: #e2e2e2;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n}\n.info-actions{\n    font-family: inherit;\n    font-size: 14px;\n    color: #e2e2e2;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n    padding-left: 24px;\n}\n.asset-properties{\n    font-family: inherit;\n    font-size: 14px;\n    color: #e2e2e2;\n    line-height: 42px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 250px;\n}\n.plus-svg{\n    color: #fff;\n    fill: currentColor;\n}\n\n/***.asset-properties:hover, .asset-properties:hover span{\noverflow: visible;\nposition: relative;\n make readable design\nbackground-color: #FFFFFF;\nborder: 1px solid #FFFFFF;\nborder-radius: 4px;\npadding: 3px;\n/* compensate padding and border size to avoid jerking\nmargin-left: -4px;\n}\n***/\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "/*\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n * \n * http://www.apache.org/licenses/LICENSE-2.0\n * \n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.container {\n    width: 100%;\n    padding-left: 72px;\n    padding-right: 72px;\n}\n\n.btn-primary {\n    background: #844AE4;\n    border-radius: 4px;\n    border: 0px;\n    font-size: 14px;\n    color: #FFFFFF;\n    letter-spacing: 0;\n    line-height: 10px;\n    height: 40px;\n    width: 163px;\n    float: right;\n    margin-top: 5%;\n}\n\n.table > thead > tr > th {\n    border-bottom: 1px solid #EAEAEA;\n}\n\n.table > thead > tr > th.info {\n    background: #FFF;\n}\n.modal-title {\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n    padding-top: 15px;\n}\n.modal-intro {\n    font-family: inherit;\n    font-size: 14px;\n    color: #545454;\n    line-height: 20px;\n    padding-top: 15px;\n\n}\n.modal-header{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-bottom: 1px solid #F4F4F4;\n}\n.modal-body{\n    background: #F4F4F4;\n    border-radius: 5px;\n}\n.modal-footer{\n    background: #F4F4F4;\n    border-radius: 5px;\n    border-top: 1px solid #f4f4f4\n}\n.form-control{\n    color: #393939;\n    height: 42px;\n    border: 1px solid #ffffff;\n    box-shadow: inset 0 0px 0px rgba(0,0,0,.075); \n    border-radius: 4px;\n    resize: none;\n\n}\nlabel {\n    color: #545454;\n}\n.modal-content{\n    margin-top: 15%;\n    margin-bottom: 15%;\n    box-shadow: 0 0px 0px;\n    border: 0px;\n\n}\n.btn-default {\n    color: #844EF4;\n    background-color: #ffffff;\n    border-color: #844EF4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger{\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-danger:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-success {\n    color: #ffffff;\n    background-color: #844AE4;\n    border-color: #844AE4;\n    border-radius: 4px;\n    width: 76px;\n    height: 40px;\n}\n.btn-success:focus{\n    background-color: #4D21A8;\n    border-color: #4D21A8;\n}\n.btn-default:focus{\n    background-color: #fff;\n    border-color: #4d21a8;  \n    color: #4d21a8;      \n}\n.participant-title{\n    font-family: inherit;\n    font-size: 24px;\n    color: #4E4E4E;\n    letter-spacing: 0.28px;\n    line-height: 28px;\n}\n.info{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n}\n.info-actions{\n    font-family: inherit;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 24px;\n    padding-left: 24px;\n}\n.participant-properties{\n    font-family: inherit;\n    font-size: 14px;\n    color: #848484;\n    line-height: 42px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 250px;\n}\n.plus-svg{\n    color: #fff;\n    fill: currentColor;\n}\n\n/***.participant-properties:hover, .participant-properties:hover span{  \noverflow: visible;\nposition: relative;\n make readable design \nbackground-color: #FFFFFF;\nborder: 1px solid #FFFFFF;\nborder-radius: 4px;\npadding: 3px;\n/* compensate padding and border size to avoid jerking \nmargin-left: -4px;\n}\n***/\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "/*\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\nhtml, body {\n    height: 100vh !important;\n}\n\n#backg {\n    background-color: #636363;\n    min-height: 100%;\n}\n\n.container-fluid {\n    display: -ms-grid;\n    display: grid;\n    margin-left: 72px;\n    padding-left: 0px;\n}\n\n.navbar {\n    border-radius: 0px;\n    background: #212121;\n    border: none;\n}\n\n.navbar-header {\n    margin-top: 40px;\n    margin-bottom: 30px;\n}\n\n.navbar-brand {\n    height: 100%;\n    font-size: 32px;\n    letter-spacing: 0.28px;\n    padding: 0px;\n    margin-left: 0px !important;\n    color: #fff;\n}\n\n.network-name {\n    font-size: 12px;\n    letter-spacing: 0.28px;\n    color: #5D636A;\n}\n\n.navbar-nav > li {\n    margin-right: 12px;\n    cursor: pointer;\n    border-bottom: 3px;\n}\n\n.navbar-nav > a {\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n}\n\n\n.navbar-nav > li > a {\n\t\tfont-size: 16px;\n    color: #fff;\n    padding: 10px;\n    font-weight: bold;\n}\n\n.navbar-nav > li:hover {\n  border-bottom: 3px solid white;\n}\n\n.navbar-nav > li.active {\n  border-bottom: 3px solid white;\n}\n\n.dropdown-menu {\n    border-radius: 0px;\n    border: none;\n    padding: 0px;\n    box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.10);\n    max-height: 0;\n    display: block;\n    overflow: hidden;\n    visibility: hidden;\n    transition: all 0.3s;\n}\n\n.dropdown-menu:hover {\n    visibility: visible;\n}\n\n.dropdown-menu > li > a {\n    padding: 6px 12px;\n    font-size: 14px;\n    color: #343C41;\n    letter-spacing: 0.2px;\n    line-height: 30px;\n}\n\n.dropdown-menu > li:hover > a {\n    background-color: rgb(230, 214, 255);\n}\n\n.dropdown-menu > li:focus > a {\n    background-color: #F3ECFE;\n}\n\n.dropdown-menu > li > a:visited {\n    background-color: #F3ECFE;\n}\n\n.dropdown-menu > li > a:active {\n    background-color: #F3ECFE;\n}\n.dropdown-menu > li > a:focus {\n    background-color: #F3ECFE;\n}\n.dropdown-menu > li > a:visited {\n    background-color: #F3ECFE;\n}\n\n.dropdown:hover .dropdown-menu {\n    visibility: visible;\n}\n\n.scrollable-menu {\n    height: auto;\n    max-height: 200px;\n    overflow-x: hidden;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)(false);
// imports


// module
exports.push([module.i, "/*\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nbody {\n    height: 100% !important;\n    background-color: transparent;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/* Float four columns side by side */\n.column {\n  float: left;\n  width: 50%;\n  padding: 0 10px;\n}\n\n/* Remove extra left and right margins, due to padding */\n.row {margin: 0 0px; padding: 0 10%;}\n\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n/* Responsive columns */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    display: block;\n    margin-bottom: 20px;\n  }\n}\n\n/* Style the counter cards */\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  padding: 32px;\n  text-align: center;\n  background-color: #4f4f4f;\n  width: 70%;\n  margin-top: 15%;\n  border-radius: 25px;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 48px 0 rgba(0,0,0,0.2);\n}\n\n.card > a > h2 {\n\tcolor: #e2e2e2;\n}\n\n.card > a > img {\n\twidth: 80%;\n\tmargin-bottom: 5%\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<!--\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Create asset</h4>\n          <p class=\"modal-intro\">Enter the required values below.</p>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n\n\n\n              <div class=\"form-group text-left\">\n                <label for=\"accountId\">Account ID</label>\n\n                  <input formControlName=\"accountId\" type=\"text\" class=\"form-control\">\n\n              </div>\n\n\n\n\n              <div class=\"form-group text-left\">\n                <label for=\"creditBalance\">Credit Balance</label>\n\n                  <input formControlName=\"creditBalance\" type=\"number\" step='any' class=\"form-control\">\n\n              </div>\n\n\n\n\n              <div class=\"form-group text-left\">\n                <label for=\"cashBalance\">Cash Balance</label>\n\n                  <input formControlName=\"cashBalance\" type=\"number\" step='any' class=\"form-control\">\n\n              </div>\n\n\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Confirm</button>\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n\n            <div class=\"form-group text-left\">\n              <label for=\"accountId\">Account ID</label>\n\n\n                <input [ngModel]=\"accountId\" formControlName=\"accountId\" class=\"form-control\" disabled=\"disabled\">\n\n\n            </div>\n\n            <div class=\"form-group text-left\">\n              <label for=\"creditBalance\">Credit Balance</label>\n\n\n                <input [ngModel]=\"creditBalance\" formControlName=\"creditBalance\" type=\"number\" step='any' class=\"form-control\">\n\n\n            </div>\n\n            <div class=\"form-group text-left\">\n              <label for=\"cashBalance\">Cash Balance</label>\n\n\n                <input [ngModel]=\"cashBalance\" formControlName=\"cashBalance\" type=\"number\" step='any' class=\"form-control\">\n\n\n            </div>\n\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<strong>Error:</strong> {{errorMessage}}\n\t</div>\n\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n        <h1 class=\"asset-title\" id='assetName'>Commuters</h1>\n    </div>\n    <div class=\"col-md-3\">\n      <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addAssetModal\">\n          <span style=\"font-size: 14px;font-family: inherit;border-right:1px solid rgba(255,255,255,0.5);padding-right:0.6em;margin-right:0.5em;vertical-align:middle;\">\n              <svg class=\"plus-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\">\n                <path fill-rule=\"evenodd\" d=\"M5.5,4.5 L9.5,4.5 L10,4.5 L10,5.5 L9.5,5.5 L5.5,5.5 L5.5,9.5 L5.5,10 L4.5,10 L4.5,9.5 L4.5,5.5 L0.5,5.5 L0,5.5 L0,4.5 L0.5,4.5 L4.5,4.5 L4.5,0.5 L4.5,0 L5.5,0 L5.5,0.5 L5.5,4.5 Z\"/>\n              </svg>\n          </span>\n        Create Asset\n      </button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-responsive\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n\n                <th class=\"info\">Account ID</th>\n\n                <th class=\"info\">Credit Balance</th>\n\n                <th class=\"info\">Cash Balance</th>\n\n              <th class=\"info-actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n\n                <td class=\"asset-properties\">{{asset.accountId}}</td>\n\n                <td class=\"asset-properties\">{{asset.creditBalance}}</td>\n\n                <td class=\"asset-properties\">{{asset.cashBalance}}</td>\n\n            <td>\n              <button (click)=\"getForm(asset.accountId);\" type=\"button\" class=\"btn btn-update\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">\n                  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"12.8px\" height=\"12.8px\" viewBox=\"0 0 30.7 30.7\" style=\"enable-background:new 0 0 30.7 30.7;\" xml:space=\"preserve\">\n               <g>\n                 <path d=\"M1.5,30.7c0.1,0,0.2,0,0.4,0l5.9-1.5c0.8-0.2,1.3-1,1.1-1.8c-0.2-0.8-1-1.3-1.8-1.1l-3.6,0.9l0.8-3.8\n                   c0.2-0.8-0.4-1.6-1.2-1.8c-0.8-0.2-1.6,0.4-1.8,1.2L0,28.9c-0.1,0.5,0.1,1,0.4,1.4C0.7,30.6,1.1,30.7,1.5,30.7z\"/>\n                 <path d=\"M10.4,25.2c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4L30.3,7.5c0.6-0.6,0.6-1.5,0-2.1l-4.9-4.9\n                   C25.1,0.2,24.7,0,24.3,0c-0.4,0-0.8,0.2-1.1,0.4L5.5,18.2c-0.3,0.3-0.4,0.7-0.4,1.1s0.2,0.8,0.4,1.1L10.4,25.2z M24.3,3.6l2.8,2.8\n                   L11.5,22l-2.8-2.8L24.3,3.6z\"/>\n               </g>\n               </svg>\n              </button>\n\n              <button (click)=\"setId(asset.accountId);\" type=\"button\" class=\"btn btn-delete\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">\n                  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"13.8px\" height=\"16px\" viewBox=\"0 0 65.9 76.2\" style=\"enable-background:new 0 0 65.9 76.2;\" xml:space=\"preserve\">\n               <path d=\"M42.8,60.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S42.8,61.9,42.8,60.2z M29.1,60.2V22.6c0-1.7-1.3-3-3-3\n                 s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S29.1,61.9,29.1,60.2z M56.2,19.6c-1.7,0-3,1.3-3,3V68c0,1.2-1,2.2-2.2,2.2H14.9\n                 c-1.2,0-2.2-1-2.2-2.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3V68c0,4.5,3.7,8.2,8.2,8.2H51c4.5,0,8.2-3.7,8.2-8.2V22.6\n                 C59.2,21,57.9,19.6,56.2,19.6z M62.9,10.3H49.3V3c0-1.7-1.3-3-3-3H19.6c-1.7,0-3,1.3-3,3v7.3H3c-1.7,0-3,1.3-3,3s1.3,3,3,3h59.9\n                 c1.7,0,3-1.3,3-3S64.5,10.3,62.9,10.3z M43.3,10.3H22.6V6h20.7L43.3,10.3L43.3,10.3z\"/>\n               </svg>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<!--\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n<div class=\"modal fade\" id=\"addTransactionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addTransactionModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addTransactionModalLabel\">Create Transaction</h4>\n        <p class=\"modal-intro\">Enter the required values below.</p>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"buyerAccount\">Buyer</label>\n                \n                    <textarea formControlName=\"buyerAccount\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n            \n              <div class=\"form-group text-left\">\n                <label for=\"listing\">Listing</label>\n                \n                    <textarea formControlName=\"listing\" class=\"form-control\" rows=\"3\"></textarea>\n                \n              </div>\n            \n          \n\n            \n          \n\n            \n          \n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            <button (click)=\"addTransaction(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Confirm</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"container col-md-6\">\n    <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n        <strong>Error:</strong> {{errorMessage}}\n    </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <h1 class=\"transaction-title\" id='transactionName'>Buy</h1>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          When invoked, this transaction will have the following attributes:\n          <br>\n          <ul>\n            \n              \n                <li><span class=\"attribute\"><b>Buyer</b></span></li>\n              \n            \n              \n                <li><span class=\"attribute\"><b>Listing</b></span></li>\n              \n            \n              \n            \n              \n            \n          </ul>\n        </div>\n      </div>\n      <button (click)=\"resetForm();\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addTransactionModal\">Invoke</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<!--\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n<div class=\"modal fade\" id=\"addAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"addAssetModalLabel\">Create asset</h4>\n          <p class=\"modal-intro\">Enter the required values below.</p>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n\n\n\n              <div class=\"form-group text-left\">\n                <label for=\"listingId\">Listing ID</label>\n\n                  <input formControlName=\"listingId\" type=\"text\" class=\"form-control\">\n\n              </div>\n\n\n\n\n              <div class=\"form-group text-left\">\n                <label for=\"sellerAccount\">Seller</label>\n\n                    <textarea formControlName=\"sellerAccount\" class=\"form-control\" rows=\"3\"></textarea>\n\n              </div>\n\n\n\n\n              <div class=\"form-group text-left\">\n                <label for=\"price\">Price</label>\n\n                  <input formControlName=\"price\" type=\"number\" step='any' class=\"form-control\">\n\n              </div>\n\n\n\n\n              <div class=\"form-group text-left\">\n                <label for=\"numCredits\">Number of Credits</label>\n\n                  <input formControlName=\"numCredits\" type=\"number\" step='any' class=\"form-control\">\n\n              </div>\n\n\n\n\n              <label for=\"state\">State</label>\n              <div class=\"checkbox\">\n\n                  <label>\n                    <input\n\n                        formControlName=\"state\"\n\n                      name=\"state\"\n                      value=\"FOR_SALE\"\n                      type=\"radio\"\n\n                    />\n                    FOR_SALE\n                  </label>\n\n                  <label>\n                    <input\n\n                        formControlName=\"state\"\n\n                      name=\"state\"\n                      value=\"SOLD\"\n                      type=\"radio\"\n\n                    />\n                    SOLD\n                  </label>\n\n              </div>\n\n\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n          <button (click)=\"addAsset(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Confirm</button>\n\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n<div class=\"modal fade\" id=\"updateAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"updateAssetModalLabel\">Update Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n\n\n\n            <div class=\"form-group text-left\">\n              <label for=\"listingId\">Listing ID</label>\n\n\n                <input [ngModel]=\"listingId\" formControlName=\"listingId\" class=\"form-control\" disabled=\"disabled\">\n\n\n            </div>\n\n            <div class=\"form-group text-left\">\n              <label for=\"sellerAccount\">Seller</label>\n\n\n\n                  <textarea [ngModel]=\"sellerAccount\" formControlName=\"sellerAccount\" class=\"form-control\" rows=\"3\"></textarea>\n\n\n\n            </div>\n\n            <div class=\"form-group text-left\">\n              <label for=\"price\">Price</label>\n\n\n                <input [ngModel]=\"price\" formControlName=\"price\" type=\"number\" step='any' class=\"form-control\">\n\n\n            </div>\n\n            <div class=\"form-group text-left\">\n              <label for=\"numCredits\">Number of Credits</label>\n\n\n                <input [ngModel]=\"numCredits\" formControlName=\"numCredits\" type=\"number\" step='any' class=\"form-control\">\n\n\n            </div>\n\n            <div class=\"form-group text-left\">\n              <label for=\"state\">State</label>\n\n\n\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 checkbox\">\n\n                      <label>\n                        <input\n\n                            formControlName=\"state\"\n                            [ngModel]=\"state\"\n\n                          name=\"state\"\n                          value=\"FOR_SALE\"\n                          type=\"radio\"\n\n                        />\n                        FOR_SALE\n                      </label>\n\n                      <label>\n                        <input\n\n                            formControlName=\"state\"\n                            [ngModel]=\"state\"\n\n                          name=\"state\"\n                          value=\"SOLD\"\n                          type=\"radio\"\n\n                        />\n                        SOLD\n                      </label>\n\n                    </div>\n                  </div>\n\n\n\n            </div>\n\n\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button (click)=\"updateAsset(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"modal fade\" id=\"deleteAssetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteAssetModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"deleteAssetModalLabel\">Delete Asset</h4>\n      </div>\n      <form [formGroup]=\"myForm\">\n        <div class=\"modal-body\">\n          Are you sure you want to delete this asset?\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n          <button (click)=\"deleteAsset()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"container\">\n\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n\t\t<strong>Error:</strong> {{errorMessage}}\n\t</div>\n\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n        <h1 class=\"asset-title\" id='assetName'>Credit Listings</h1>\n    </div>\n    <div class=\"col-md-3\">\n      <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addAssetModal\">\n          <span style=\"font-size: 14px;font-family: inherit;border-right:1px solid rgba(255,255,255,0.5);padding-right:0.6em;margin-right:0.5em;vertical-align:middle;\">\n              <svg class=\"plus-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\">\n                <path fill-rule=\"evenodd\" d=\"M5.5,4.5 L9.5,4.5 L10,4.5 L10,5.5 L9.5,5.5 L5.5,5.5 L5.5,9.5 L5.5,10 L4.5,10 L4.5,9.5 L4.5,5.5 L0.5,5.5 L0,5.5 L0,4.5 L0.5,4.5 L4.5,4.5 L4.5,0.5 L4.5,0 L5.5,0 L5.5,0.5 L5.5,4.5 Z\"/>\n              </svg>\n          </span>\n        Create Asset\n      </button>\n    </div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-responsive\">\n        <thead class=\"thead\">\n          <tr class=\"thead-cols\">\n\n                <th class=\"info\">Listing ID</th>\n\n                <th class=\"info\">Seller</th>\n\n                <th class=\"info\">Price</th>\n\n                <th class=\"info\">Number of Credits</th>\n\n                <th class=\"info\">State</th>\n\n              <th class=\"info-actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let asset of allAssets\">\n\n\n                <td class=\"asset-properties\">{{asset.listingId}}</td>\n\n                <td class=\"asset-properties\">{{asset.sellerAccount}}</td>\n\n                <td class=\"asset-properties\">{{asset.price}}</td>\n\n                <td class=\"asset-properties\">{{asset.numCredits}}</td>\n\n                <td class=\"asset-properties\">{{asset.state}}</td>\n\n            <td>\n              <button (click)=\"getForm(asset.listingId);\" type=\"button\" class=\"btn btn-update\" data-toggle=\"modal\" data-target=\"#updateAssetModal\">\n                  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"12.8px\" height=\"12.8px\" viewBox=\"0 0 30.7 30.7\" style=\"enable-background:new 0 0 30.7 30.7;\" xml:space=\"preserve\">\n               <g>\n                 <path d=\"M1.5,30.7c0.1,0,0.2,0,0.4,0l5.9-1.5c0.8-0.2,1.3-1,1.1-1.8c-0.2-0.8-1-1.3-1.8-1.1l-3.6,0.9l0.8-3.8\n                   c0.2-0.8-0.4-1.6-1.2-1.8c-0.8-0.2-1.6,0.4-1.8,1.2L0,28.9c-0.1,0.5,0.1,1,0.4,1.4C0.7,30.6,1.1,30.7,1.5,30.7z\"/>\n                 <path d=\"M10.4,25.2c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4L30.3,7.5c0.6-0.6,0.6-1.5,0-2.1l-4.9-4.9\n                   C25.1,0.2,24.7,0,24.3,0c-0.4,0-0.8,0.2-1.1,0.4L5.5,18.2c-0.3,0.3-0.4,0.7-0.4,1.1s0.2,0.8,0.4,1.1L10.4,25.2z M24.3,3.6l2.8,2.8\n                   L11.5,22l-2.8-2.8L24.3,3.6z\"/>\n               </g>\n               </svg>\n              </button>\n\n              <button (click)=\"setId(asset.listingId);\" type=\"button\" class=\"btn btn-delete\" data-toggle=\"modal\" data-target=\"#deleteAssetModal\">\n                  <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                  width=\"13.8px\" height=\"16px\" viewBox=\"0 0 65.9 76.2\" style=\"enable-background:new 0 0 65.9 76.2;\" xml:space=\"preserve\">\n               <path d=\"M42.8,60.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S42.8,61.9,42.8,60.2z M29.1,60.2V22.6c0-1.7-1.3-3-3-3\n                 s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S29.1,61.9,29.1,60.2z M56.2,19.6c-1.7,0-3,1.3-3,3V68c0,1.2-1,2.2-2.2,2.2H14.9\n                 c-1.2,0-2.2-1-2.2-2.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3V68c0,4.5,3.7,8.2,8.2,8.2H51c4.5,0,8.2-3.7,8.2-8.2V22.6\n                 C59.2,21,57.9,19.6,56.2,19.6z M62.9,10.3H49.3V3c0-1.7-1.3-3-3-3H19.6c-1.7,0-3,1.3-3,3v7.3H3c-1.7,0-3,1.3-3,3s1.3,3,3,3h59.9\n                 c1.7,0,3-1.3,3-3S64.5,10.3,62.9,10.3z M43.3,10.3H22.6V6h20.7L43.3,10.3L43.3,10.3z\"/>\n               </svg>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<!--\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n<div class=\"modal fade\" id=\"addParticipantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addParticipantModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\" id=\"addParticipantModalLabel\">Create participant</h4>\n            <p class=\"modal-intro\">Enter the required values below.</p>\n        </div>\n        <form [formGroup]=\"myForm\">\n          <div class=\"modal-body\">\n  \n  \n            \n  \n              \n                <div class=\"form-group text-left\">\n                  <label for=\"travellerId\">Traveller ID</label>\n                  \n                    <input formControlName=\"travellerId\" type=\"text\" class=\"form-control\">\n                  \n                </div>\n              \n            \n  \n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            <button (click)=\"addParticipant(myForm);\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Confirm</button>\n  \n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  \n  <div class=\"modal fade\" id=\"updateParticipantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateParticipantModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\" id=\"updateParticipantModalLabel\">Update Participant</h4>\n        </div>\n        <form [formGroup]=\"myForm\">\n          <div class=\"modal-body\">\n  \n  \n            \n              <div class=\"form-group text-left\">\n                <label for=\"travellerId\">Traveller ID</label>\n  \n                \n                  <input [ngModel]=\"travellerId\" formControlName=\"travellerId\" class=\"form-control\" disabled=\"disabled\">  \n                \n  \n              </div>\n            \n  \n  \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            <button (click)=\"updateParticipant(myForm)\" type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  <div class=\"modal fade\" id=\"deleteParticipantModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteParticipantModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\" id=\"deleteParticipantModalLabel\">Delete Participant</h4>\n        </div>\n        <form [formGroup]=\"myForm\">\n          <div class=\"modal-body\">\n            Are you sure you want to delete this participant?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n            <button (click)=\"deleteParticipant()\" type=\"submit\" class=\"btn btn-danger\" data-dismiss=\"modal\">Yes</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  <div class=\"container\">\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n          <strong>Error:</strong> {{errorMessage}}\n      </div>\n    \n    <div class=\"row\">\n      <div class=\"col-md-9\">\n          <h1 class=\"participant-title\" id='participantName'>Traveller</h1>\n      </div>\n      <div class=\"col-md-3\">\n        <button (click)=\"resetForm()\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addParticipantModal\">\n            <span style=\"font-size: 14px;font-family: inherit;border-right:1px solid rgba(255,255,255,0.5);padding-right:0.6em;margin-right:0.5em;vertical-align:middle;\">\n                <svg class=\"plus-svg\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\">\n                  <path fill-rule=\"evenodd\" d=\"M5.5,4.5 L9.5,4.5 L10,4.5 L10,5.5 L9.5,5.5 L5.5,5.5 L5.5,9.5 L5.5,10 L4.5,10 L4.5,9.5 L4.5,5.5 L0.5,5.5 L0,5.5 L0,4.5 L0.5,4.5 L4.5,4.5 L4.5,0.5 L4.5,0 L5.5,0 L5.5,0.5 L5.5,4.5 Z\"/>\n                </svg>\n            </span>\n          Create Participant\n        </button>\n      </div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <table class=\"table table-responsive\">\n          <thead class=\"thead\">\n            <tr class=\"thead-cols\">\n              \n                  <th class=\"info\">Traveller ID</th>\n              \n                <th class=\"info-actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let participant of allParticipants\">\n  \n              \n                  <td class=\"participant-properties\">{{participant.travellerId}}</td>\n              \n              <td>\n                <button (click)=\"getForm(participant.travellerId);\" type=\"button\" class=\"btn btn-update\" data-toggle=\"modal\" data-target=\"#updateParticipantModal\">\n                    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    width=\"12.8px\" height=\"12.8px\" viewBox=\"0 0 30.7 30.7\" style=\"enable-background:new 0 0 30.7 30.7;\" xml:space=\"preserve\">\n                 <g>\n                   <path d=\"M1.5,30.7c0.1,0,0.2,0,0.4,0l5.9-1.5c0.8-0.2,1.3-1,1.1-1.8c-0.2-0.8-1-1.3-1.8-1.1l-3.6,0.9l0.8-3.8\n                     c0.2-0.8-0.4-1.6-1.2-1.8c-0.8-0.2-1.6,0.4-1.8,1.2L0,28.9c-0.1,0.5,0.1,1,0.4,1.4C0.7,30.6,1.1,30.7,1.5,30.7z\"/>\n                   <path d=\"M10.4,25.2c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4L30.3,7.5c0.6-0.6,0.6-1.5,0-2.1l-4.9-4.9\n                     C25.1,0.2,24.7,0,24.3,0c-0.4,0-0.8,0.2-1.1,0.4L5.5,18.2c-0.3,0.3-0.4,0.7-0.4,1.1s0.2,0.8,0.4,1.1L10.4,25.2z M24.3,3.6l2.8,2.8\n                     L11.5,22l-2.8-2.8L24.3,3.6z\"/>\n                 </g>\n                 </svg>\n                </button>\n  \n                <button (click)=\"setId(participant.travellerId);\" type=\"button\" class=\"btn btn-delete\" data-toggle=\"modal\" data-target=\"#deleteParticipantModal\">\n                    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    width=\"13.8px\" height=\"16px\" viewBox=\"0 0 65.9 76.2\" style=\"enable-background:new 0 0 65.9 76.2;\" xml:space=\"preserve\">\n                 <path d=\"M42.8,60.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S42.8,61.9,42.8,60.2z M29.1,60.2V22.6c0-1.7-1.3-3-3-3\n                   s-3,1.3-3,3v37.6c0,1.7,1.3,3,3,3S29.1,61.9,29.1,60.2z M56.2,19.6c-1.7,0-3,1.3-3,3V68c0,1.2-1,2.2-2.2,2.2H14.9\n                   c-1.2,0-2.2-1-2.2-2.2V22.6c0-1.7-1.3-3-3-3s-3,1.3-3,3V68c0,4.5,3.7,8.2,8.2,8.2H51c4.5,0,8.2-3.7,8.2-8.2V22.6\n                   C59.2,21,57.9,19.6,56.2,19.6z M62.9,10.3H49.3V3c0-1.7-1.3-3-3-3H19.6c-1.7,0-3,1.3-3,3v7.3H3c-1.7,0-3,1.3-3,3s1.3,3,3,3h59.9\n                   c1.7,0,3-1.3,3-3S64.5,10.3,62.9,10.3z M43.3,10.3H22.6V6h20.7L43.3,10.3L43.3,10.3z\"/>\n                 </svg>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<!--\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n<html>\n\t<body>\n\t\t<div id=\"backg\">\n\t\t\t<nav class=\"navbar navbar-inverse\" style=\"margin-bottom: 0px;\">\n\t\t\t  <div class=\"container-fluid\">\n\t\t\t    <div class=\"navbar-header\">\n\t\t\t    \t<a [routerLink]=\"['/']\">\n\t\t\t\t      <p class=\"navbar-brand\">Beep Boop: The Commuter's Carbon Market</p>\n\t\t\t\t    </a>\n\t\t\t    </div>\n\t\t\t    <ul class=\"nav navbar-nav\">\n\t\t\t      <li><a [routerLink]=\"['/BeepBoopAccount']\">Commuters</a></li>\n\t\t\t      <li><a [routerLink]=\"['/CreditListing']\">Credit Listings</a></li>\n\t\t\t    </ul>\n\t\t\t  </div>\n\t\t\t</nav>\n\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</body>\n</html>\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<!--\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n<html>\n<body>\n<div class=\"row\">\n  <div class=\"column\" align=\"center\">\n    <div class=\"card\">\n    \t<a [routerLink]=\"['/BeepBoopAccount']\">\n\t\t\t\t<img src=\"assets/person-white.png\"/>\n\t      <h2>Commuters</h2>\n\t    </a>\n    </div>\n  </div>\n\n  <div class=\"column\" align=\"center\">\n    <div class=\"card\">\n    \t<a [routerLink]=\"['/CreditListing']\">\n\t\t\t\t<img src=\"assets/listing.png\">\n\t      <h2>Credit Listings</h2>\n\t    </a>\n    </div>\n  </div>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(499);
module.exports = __webpack_require__(493);


/***/ })

},[859]);
//# sourceMappingURL=main.bundle.js.map