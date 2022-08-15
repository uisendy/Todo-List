/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgba(214, 214, 214, 0.858);\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nmain {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.todo-section {\r\n  margin: 50px auto;\r\n  width: 90%;\r\n  background-color: whitesmoke;\r\n  max-height: calc(100vh - 50px);\r\n  box-shadow: 0 0 10px 4px rgba(85, 85, 85, 0.2);\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2.5%;\r\n  border-bottom: 0.3px solid rgba(119, 119, 119, 0.3);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 2.5%;\r\n  border-bottom: 0.3px solid rgba(119, 119, 119, 0.3);\r\n}\r\n\r\nform input {\r\n  width: 99%;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  font-size: 1.3rem;\r\n}\r\n\r\nform input::placeholder {\r\n  font-style: italic;\r\n  font-weight: 100;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  gap: 10px;\r\n  padding: 2.5%;\r\n  align-items: center;\r\n  border-bottom: 0.3px solid rgba(119, 119, 119, 0.3);\r\n}\r\n\r\n.todo.edit {\r\n  background-color: antiquewhite;\r\n}\r\n\r\n.checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-form {\r\n  display: none;\r\n  width: 93%;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.edit-todo-input {\r\n  display: none;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.edit-form-btn {\r\n  display: none;\r\n}\r\n\r\n.edit-form.edit {\r\n  display: block;\r\n  padding: 0;\r\n}\r\n\r\n.edit-todo-input.edit {\r\n  display: block;\r\n}\r\n\r\n.todo-label {\r\n  width: 93%;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.todo-label.edit {\r\n  display: none;\r\n}\r\n\r\n.todo-label.completed {\r\n  text-decoration: line-through;\r\n  color: rgb(124, 124, 124);\r\n}\r\n\r\n.fa-trash-alt {\r\n  display: none;\r\n  padding-left: 20px;\r\n  color: rgb(60, 60, 60);\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-trash-alt:hover {\r\n  color: black;\r\n}\r\n\r\n.clear-complete-container {\r\n  padding: 3% 2.5%;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n  background-color: rgb(223, 223, 223);\r\n}\r\n\r\n.clear-completed {\r\n  background-color: rgb(223, 223, 223);\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.3rem;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.clear-completed:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.fa-ellipsis-v.completed {\r\n  display: none;\r\n}\r\n\r\n.fa-trash-alt.completed {\r\n  display: block;\r\n}\r\n\r\n@media screen and (max-width: 300px) {\r\n  * {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .clear-completed {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  form input {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  form input::placeholder {\r\n    font-weight: 50;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 840px) {\r\n  .todo-section {\r\n    margin: 50px auto;\r\n    width: 60%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,4CAA4C;EAC5C,+BAA+B;AACjC;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,4BAA4B;EAC5B,8BAA8B;EAC9B,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,mDAAmD;AACrD;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,mDAAmD;AACrD;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,mDAAmD;AACrD;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,+BAA+B;AACjC;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,eAAe;EACjB;AACF;;AAEA;EACE;IACE,iBAAiB;IACjB,UAAU;EACZ;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgba(214, 214, 214, 0.858);\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nmain {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n}\r\n\r\n.todo-section {\r\n  margin: 50px auto;\r\n  width: 90%;\r\n  background-color: whitesmoke;\r\n  max-height: calc(100vh - 50px);\r\n  box-shadow: 0 0 10px 4px rgba(85, 85, 85, 0.2);\r\n}\r\n\r\n.todo-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2.5%;\r\n  border-bottom: 0.3px solid rgba(119, 119, 119, 0.3);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 2.5%;\r\n  border-bottom: 0.3px solid rgba(119, 119, 119, 0.3);\r\n}\r\n\r\nform input {\r\n  width: 99%;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  font-size: 1.3rem;\r\n}\r\n\r\nform input::placeholder {\r\n  font-style: italic;\r\n  font-weight: 100;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nform button {\r\n  border: none;\r\n  background-color: transparent;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  gap: 10px;\r\n  padding: 2.5%;\r\n  align-items: center;\r\n  border-bottom: 0.3px solid rgba(119, 119, 119, 0.3);\r\n}\r\n\r\n.todo.edit {\r\n  background-color: antiquewhite;\r\n}\r\n\r\n.checkbox {\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.edit-form {\r\n  display: none;\r\n  width: 93%;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.edit-todo-input {\r\n  display: none;\r\n  width: 100%;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.edit-form-btn {\r\n  display: none;\r\n}\r\n\r\n.edit-form.edit {\r\n  display: block;\r\n  padding: 0;\r\n}\r\n\r\n.edit-todo-input.edit {\r\n  display: block;\r\n}\r\n\r\n.todo-label {\r\n  width: 93%;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.todo-label.edit {\r\n  display: none;\r\n}\r\n\r\n.todo-label.completed {\r\n  text-decoration: line-through;\r\n  color: rgb(124, 124, 124);\r\n}\r\n\r\n.fa-trash-alt {\r\n  display: none;\r\n  padding-left: 20px;\r\n  color: rgb(60, 60, 60);\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-trash-alt:hover {\r\n  color: black;\r\n}\r\n\r\n.clear-complete-container {\r\n  padding: 3% 2.5%;\r\n  text-align: center;\r\n  font-size: 1.2rem;\r\n  background-color: rgb(223, 223, 223);\r\n}\r\n\r\n.clear-completed {\r\n  background-color: rgb(223, 223, 223);\r\n  border: none;\r\n  outline: none;\r\n  font-size: 1.3rem;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.clear-completed:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.fa-ellipsis-v.completed {\r\n  display: none;\r\n}\r\n\r\n.fa-trash-alt.completed {\r\n  display: block;\r\n}\r\n\r\n@media screen and (max-width: 300px) {\r\n  * {\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .clear-completed {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  form input {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  form input::placeholder {\r\n    font-weight: 50;\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 840px) {\r\n  .todo-section {\r\n    margin: 50px auto;\r\n    width: 60%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/LocalStore.js":
/*!***************************!*\
  !*** ./src/LocalStore.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class LocalStore {
  static getTodos = () => (localStorage.getItem('TodosAlpha')
    ? JSON.parse(localStorage.getItem('TodosAlpha'))
    : []);

  static saveTodos = (todos) => {
    localStorage.setItem('TodosAlpha', JSON.stringify(todos));
  };

  static indexGenerator = () => {
    const todos = LocalStore.getTodos();
    return todos.length ? todos[todos.length - 1].index + 1 : 1;
  };

  static resetIndex = (todos) => todos.map((todo, i) => ({ ...todo, index: i + 1 }));

  static removeTodo = (index) => {
    const todos = this.getTodos();
    const removedTodo = todos.filter(
      (todo) => todo.index.toString() !== index.id.toString(),
    );
    const resetTodo = this.resetIndex(removedTodo);
    this.saveTodos(resetTodo);
  };

  static handleCheck = (index) => {
    const todos = LocalStore.getTodos();
    const checkedTodos = todos.map((todo) => {
      if (todo.index.toString() === index.id.toString()) {
        if (todo.completed === false) {
          index.setAttribute('checked', '');
        } else {
          index.removeAttribute('checked');
        }
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    LocalStore.saveTodos(checkedTodos);
  };

  static handleEditTodo = (element) => {
    const todos = LocalStore.getTodos();
    const editedTodos = todos.map((todo) => (todo.index.toString() === element.id
      ? { ...todo, description: element.nextElementSibling.textContent }
      : todo));
    LocalStore.saveTodos(editedTodos);
  };

  static handleRemoveAllCompleted = () => {
    const todos = this.getTodos();
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    this.saveTodos(uncompletedTodos);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalStore);


/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class TodoList {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ }),

/***/ "./src/UIDisplay.js":
/*!**************************!*\
  !*** ./src/UIDisplay.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todosDisplayContainer = document.querySelector(
  '.todos-display-container',
);

class UIDisplay {
  static displayTodoItem = (todo) => {
    const todoContainer = document.createElement('div');
    todoContainer.className = 'todo';

    const todoInput = document.createElement('input');
    todoInput.className = 'checkbox';
    todoInput.type = 'checkbox';
    todoInput.id = todo.index;

    const editForm = document.createElement('form');
    editForm.className = 'edit-form';
    editForm.id = todo.index;

    const editTodoInput = document.createElement('input');
    editTodoInput.className = 'edit-todo-input';
    editTodoInput.type = 'text';

    const editFormBtn = document.createElement('button');
    editFormBtn.className = 'edit-form-btn';
    editFormBtn.type = 'submit';

    editForm.appendChild(editTodoInput);
    editForm.appendChild(editFormBtn);

    const todoLabel = document.createElement('label');
    todoLabel.for = todo.index;
    todoLabel.className = 'todo-label';
    todoLabel.textContent = todo.description;

    const editIcon = document.createElement('i');
    editIcon.className = 'fas fa-ellipsis-v';
    editIcon.id = todo.index;

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fas fa-trash-alt';
    deleteIcon.id = todo.index;

    if (todo.completed === true) {
      todoInput.setAttribute('checked', '');
      todoLabel.classList.add('completed');
      // editIcon.classList.add("completed");
      // deleteIcon.classList.add("completed");

      todoContainer.appendChild(todoInput);
      todoContainer.appendChild(editForm);
      todoContainer.appendChild(todoLabel);
      todoContainer.appendChild(editIcon);
      todoContainer.appendChild(deleteIcon);

      todosDisplayContainer.appendChild(todoContainer);
    } else {
      todoContainer.appendChild(todoInput);
      todoContainer.appendChild(editForm);
      todoContainer.appendChild(todoLabel);
      todoContainer.appendChild(editIcon);
      todoContainer.appendChild(deleteIcon);

      todosDisplayContainer.appendChild(todoContainer);
    }
  };

  static handleCheck = (element) => {
    element.nextElementSibling.nextElementSibling.classList.toggle('completed');
  };

  static handleEdit = (element) => {
    const trashIcon = element.nextElementSibling.nextElementSibling;
    element.nextElementSibling.classList.add('completed');
    trashIcon.classList.add('completed');
    element.classList.add('edit');
    const editTodoForm = element.parentElement.childNodes[1];
    const editTodoInput = editTodoForm.firstChild;
    editTodoForm.classList.add('edit');
    editTodoInput.classList.add('edit');
    editTodoInput.focus();
    editTodoInput.value = element.textContent;
    element.parentElement.classList.add('edit');
  };

  static removeTodo = (todo) => {
    todo.parentElement.remove();
  };

  static handleRemoveAllCompleted = (todos) => {
    todos.forEach((todo) => (todo.firstChild.checked ? todo.remove() : todo));
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIDisplay);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _TodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList.js */ "./src/TodoList.js");
/* harmony import */ var _UIDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UIDisplay.js */ "./src/UIDisplay.js");
/* harmony import */ var _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocalStore.js */ "./src/LocalStore.js");





const todosDisplayContainer = document.querySelector(
  '.todos-display-container',
);
const todoInputForm = document.querySelector('.todo-form');

const loadTodoList = () => {
  const todos = _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTodos();
  todos.forEach((todo) => {
    _UIDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTodoItem(todo);
  });
};

document.addEventListener('DOMContentLoaded', loadTodoList());

todoInputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todos = _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTodos();
  const description = document.querySelector('.todo-input').value;
  const completed = false;
  const index = _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__["default"].indexGenerator();

  const newTodo = new _TodoList_js__WEBPACK_IMPORTED_MODULE_1__["default"](description, completed, index);
  _UIDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayTodoItem(newTodo);
  todos.push(newTodo);
  _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__["default"].saveTodos(todos);
  e.target.firstElementChild.value = '';
});

todosDisplayContainer.addEventListener('change', (e) => {
  if (e.target.classList.contains('checkbox')) {
    _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__["default"].handleCheck(e.target);
    _UIDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleCheck(e.target);
  }
});

todosDisplayContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('todo-label')) {
    _UIDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleEdit(e.target);
  }

  if (e.target.classList.contains('fa-trash-alt')) {
    _UIDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"].removeTodo(e.target);
    _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeTodo(e.target);
  }
});

todosDisplayContainer.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoLabel = e.target.nextElementSibling;
  e.target.classList.remove('edit');
  todoLabel.classList.remove('edit');
  e.target.parentElement.lastChild.classList.remove('completed');
  e.target.parentElement.lastChild.previousElementSibling.classList.remove(
    'completed',
  );
  e.target.parentElement.classList.remove('edit');
  todoLabel.textContent = e.target.firstChild.value;
  _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__["default"].handleEditTodo(e.target);
});

const todoSection = document.querySelector('.todo-section');
todoSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('clear-completed')) {
    const todos = document.querySelectorAll('.todo');
    _UIDisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleRemoveAllCompleted(todos);
    _LocalStore_js__WEBPACK_IMPORTED_MODULE_3__["default"].handleRemoveAllCompleted();
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEQxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1J4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7OztVQzdGekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQjtBQUNFO0FBQ0U7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLCtEQUFtQjtBQUNuQztBQUNBLElBQUkscUVBQXlCO0FBQzdCLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLCtEQUFtQjtBQUNuQztBQUNBO0FBQ0EsZ0JBQWdCLHFFQUF5Qjs7QUFFekMsc0JBQXNCLG9EQUFRO0FBQzlCLEVBQUUscUVBQXlCO0FBQzNCO0FBQ0EsRUFBRSxnRUFBb0I7QUFDdEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGtFQUFzQjtBQUMxQixJQUFJLGlFQUFxQjtBQUN6QjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksZ0VBQW9CO0FBQ3hCOztBQUVBO0FBQ0EsSUFBSSxnRUFBb0I7QUFDeEIsSUFBSSxpRUFBcUI7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRUFBeUI7QUFDM0IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOEVBQWtDO0FBQ3RDLElBQUksK0VBQW1DO0FBQ3ZDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvTG9jYWxTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTQsIDIxNCwgMC44NTgpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWN0aW9uIHtcXHJcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCA0cHggcmdiYSg4NSwgODUsIDg1LCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyLjUlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4zcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAyLjUlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4zcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA5OSU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAyLjUlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8uZWRpdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDkzJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1mb3JtLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1mb3JtLmVkaXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWlucHV0LmVkaXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxhYmVsIHtcXHJcXG4gIHdpZHRoOiA5MyU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGFiZWwuZWRpdCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1sYWJlbC5jb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogcmdiKDEyNCwgMTI0LCAxMjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdHJhc2gtYWx0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAzJSAyLjUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1jb21wbGV0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMywgMjIzLCAyMjMpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLWVsbGlwc2lzLXYuY29tcGxldGVkIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5mYS10cmFzaC1hbHQuY29tcGxldGVkIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xcclxcbiAgKiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNsZWFyLWNvbXBsZXRlZCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0gaW5wdXQge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDBweCkge1xcclxcbiAgLnRvZG8tc2VjdGlvbiB7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5Qiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIxNCwgMjE0LCAwLjg1OCk7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlY3Rpb24ge1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDRweCByZ2JhKDg1LCA4NSwgODUsIDAuMik7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIuNSU7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjNweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuMyk7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDIuNSU7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjNweCBzb2xpZCByZ2JhKDExOSwgMTE5LCAxMTksIDAuMyk7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaW5wdXQge1xcclxcbiAgd2lkdGg6IDk5JTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDIuNSU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4zcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby5lZGl0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogOTMlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRvZG8taW5wdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWZvcm0tYnRuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWZvcm0uZWRpdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRvZG8taW5wdXQuZWRpdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGFiZWwge1xcclxcbiAgd2lkdGg6IDkzJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1sYWJlbC5lZGl0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxhYmVsLmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiByZ2IoMTI0LCAxMjQsIDEyNCk7XFxyXFxufVxcclxcblxcclxcbi5mYS10cmFzaC1hbHQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS10cmFzaC1hbHQ6aG92ZXIge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGUtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDMlIDIuNSU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIyMywgMjIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMjMsIDIyMyk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtZWxsaXBzaXMtdi5jb21wbGV0ZWQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRyYXNoLWFsdC5jb21wbGV0ZWQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XFxyXFxuICAqIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2xlYXItY29tcGxldGVkIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9ybSBpbnB1dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0MHB4KSB7XFxyXFxuICAudG9kby1zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgTG9jYWxTdG9yZSB7XG4gIHN0YXRpYyBnZXRUb2RvcyA9ICgpID0+IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVG9kb3NBbHBoYScpXG4gICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb2Rvc0FscGhhJykpXG4gICAgOiBbXSk7XG5cbiAgc3RhdGljIHNhdmVUb2RvcyA9ICh0b2RvcykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb2Rvc0FscGhhJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfTtcblxuICBzdGF0aWMgaW5kZXhHZW5lcmF0b3IgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBMb2NhbFN0b3JlLmdldFRvZG9zKCk7XG4gICAgcmV0dXJuIHRvZG9zLmxlbmd0aCA/IHRvZG9zW3RvZG9zLmxlbmd0aCAtIDFdLmluZGV4ICsgMSA6IDE7XG4gIH07XG5cbiAgc3RhdGljIHJlc2V0SW5kZXggPSAodG9kb3MpID0+IHRvZG9zLm1hcCgodG9kbywgaSkgPT4gKHsgLi4udG9kbywgaW5kZXg6IGkgKyAxIH0pKTtcblxuICBzdGF0aWMgcmVtb3ZlVG9kbyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gdGhpcy5nZXRUb2RvcygpO1xuICAgIGNvbnN0IHJlbW92ZWRUb2RvID0gdG9kb3MuZmlsdGVyKFxuICAgICAgKHRvZG8pID0+IHRvZG8uaW5kZXgudG9TdHJpbmcoKSAhPT0gaW5kZXguaWQudG9TdHJpbmcoKSxcbiAgICApO1xuICAgIGNvbnN0IHJlc2V0VG9kbyA9IHRoaXMucmVzZXRJbmRleChyZW1vdmVkVG9kbyk7XG4gICAgdGhpcy5zYXZlVG9kb3MocmVzZXRUb2RvKTtcbiAgfTtcblxuICBzdGF0aWMgaGFuZGxlQ2hlY2sgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB0b2RvcyA9IExvY2FsU3RvcmUuZ2V0VG9kb3MoKTtcbiAgICBjb25zdCBjaGVja2VkVG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgIGlmICh0b2RvLmluZGV4LnRvU3RyaW5nKCkgPT09IGluZGV4LmlkLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgIGluZGV4LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbmRleC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyAuLi50b2RvLCBjb21wbGV0ZWQ6ICF0b2RvLmNvbXBsZXRlZCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvZG87XG4gICAgfSk7XG4gICAgTG9jYWxTdG9yZS5zYXZlVG9kb3MoY2hlY2tlZFRvZG9zKTtcbiAgfTtcblxuICBzdGF0aWMgaGFuZGxlRWRpdFRvZG8gPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gTG9jYWxTdG9yZS5nZXRUb2RvcygpO1xuICAgIGNvbnN0IGVkaXRlZFRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiAodG9kby5pbmRleC50b1N0cmluZygpID09PSBlbGVtZW50LmlkXG4gICAgICA/IHsgLi4udG9kbywgZGVzY3JpcHRpb246IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50IH1cbiAgICAgIDogdG9kbykpO1xuICAgIExvY2FsU3RvcmUuc2F2ZVRvZG9zKGVkaXRlZFRvZG9zKTtcbiAgfTtcblxuICBzdGF0aWMgaGFuZGxlUmVtb3ZlQWxsQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gdGhpcy5nZXRUb2RvcygpO1xuICAgIGNvbnN0IHVuY29tcGxldGVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+ICF0b2RvLmNvbXBsZXRlZCk7XG4gICAgdGhpcy5zYXZlVG9kb3ModW5jb21wbGV0ZWRUb2Rvcyk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsU3RvcmU7XG4iLCJjbGFzcyBUb2RvTGlzdCB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsImNvbnN0IHRvZG9zRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcudG9kb3MtZGlzcGxheS1jb250YWluZXInLFxuKTtcblxuY2xhc3MgVUlEaXNwbGF5IHtcbiAgc3RhdGljIGRpc3BsYXlUb2RvSXRlbSA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9Db250YWluZXIuY2xhc3NOYW1lID0gJ3RvZG8nO1xuXG4gICAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvSW5wdXQuY2xhc3NOYW1lID0gJ2NoZWNrYm94JztcbiAgICB0b2RvSW5wdXQudHlwZSA9ICdjaGVja2JveCc7XG4gICAgdG9kb0lucHV0LmlkID0gdG9kby5pbmRleDtcblxuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGVkaXRGb3JtLmNsYXNzTmFtZSA9ICdlZGl0LWZvcm0nO1xuICAgIGVkaXRGb3JtLmlkID0gdG9kby5pbmRleDtcblxuICAgIGNvbnN0IGVkaXRUb2RvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRUb2RvSW5wdXQuY2xhc3NOYW1lID0gJ2VkaXQtdG9kby1pbnB1dCc7XG4gICAgZWRpdFRvZG9JbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3QgZWRpdEZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0Rm9ybUJ0bi5jbGFzc05hbWUgPSAnZWRpdC1mb3JtLWJ0bic7XG4gICAgZWRpdEZvcm1CdG4udHlwZSA9ICdzdWJtaXQnO1xuXG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdFRvZG9JbnB1dCk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdEZvcm1CdG4pO1xuXG4gICAgY29uc3QgdG9kb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0b2RvTGFiZWwuZm9yID0gdG9kby5pbmRleDtcbiAgICB0b2RvTGFiZWwuY2xhc3NOYW1lID0gJ3RvZG8tbGFiZWwnO1xuICAgIHRvZG9MYWJlbC50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBlZGl0SWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLWVsbGlwc2lzLXYnO1xuICAgIGVkaXRJY29uLmlkID0gdG9kby5pbmRleDtcblxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXRyYXNoLWFsdCc7XG4gICAgZGVsZXRlSWNvbi5pZCA9IHRvZG8uaW5kZXg7XG5cbiAgICBpZiAodG9kby5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgIHRvZG9JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICB0b2RvTGFiZWwuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAvLyBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgICAgLy8gZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuXG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JbnB1dCk7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xhYmVsKTtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgICAgdG9kb3NEaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JbnB1dCk7XG4gICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xhYmVsKTtcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgICAgdG9kb3NEaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgaGFuZGxlQ2hlY2sgPSAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQnKTtcbiAgfTtcblxuICBzdGF0aWMgaGFuZGxlRWRpdCA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgdHJhc2hJY29uID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgIHRyYXNoSWNvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBjb25zdCBlZGl0VG9kb0Zvcm0gPSBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGROb2Rlc1sxXTtcbiAgICBjb25zdCBlZGl0VG9kb0lucHV0ID0gZWRpdFRvZG9Gb3JtLmZpcnN0Q2hpbGQ7XG4gICAgZWRpdFRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0VG9kb0lucHV0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0VG9kb0lucHV0LmZvY3VzKCk7XG4gICAgZWRpdFRvZG9JbnB1dC52YWx1ZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgfTtcblxuICBzdGF0aWMgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kby5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICB9O1xuXG4gIHN0YXRpYyBoYW5kbGVSZW1vdmVBbGxDb21wbGV0ZWQgPSAodG9kb3MpID0+IHtcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiAodG9kby5maXJzdENoaWxkLmNoZWNrZWQgPyB0b2RvLnJlbW92ZSgpIDogdG9kbykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVSURpc3BsYXk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL1RvZG9MaXN0LmpzJztcbmltcG9ydCBVSURpc3BsYXkgZnJvbSAnLi9VSURpc3BsYXkuanMnO1xuaW1wb3J0IExvY2FsU3RvcmUgZnJvbSAnLi9Mb2NhbFN0b3JlLmpzJztcblxuY29uc3QgdG9kb3NEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy50b2Rvcy1kaXNwbGF5LWNvbnRhaW5lcicsXG4pO1xuY29uc3QgdG9kb0lucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKTtcblxuY29uc3QgbG9hZFRvZG9MaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvcyA9IExvY2FsU3RvcmUuZ2V0VG9kb3MoKTtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIFVJRGlzcGxheS5kaXNwbGF5VG9kb0l0ZW0odG9kbyk7XG4gIH0pO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxvYWRUb2RvTGlzdCgpKTtcblxudG9kb0lucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRvZG9zID0gTG9jYWxTdG9yZS5nZXRUb2RvcygpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICBjb25zdCBpbmRleCA9IExvY2FsU3RvcmUuaW5kZXhHZW5lcmF0b3IoKTtcblxuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG9MaXN0KGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KTtcbiAgVUlEaXNwbGF5LmRpc3BsYXlUb2RvSXRlbShuZXdUb2RvKTtcbiAgdG9kb3MucHVzaChuZXdUb2RvKTtcbiAgTG9jYWxTdG9yZS5zYXZlVG9kb3ModG9kb3MpO1xuICBlLnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC52YWx1ZSA9ICcnO1xufSk7XG5cbnRvZG9zRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpKSB7XG4gICAgTG9jYWxTdG9yZS5oYW5kbGVDaGVjayhlLnRhcmdldCk7XG4gICAgVUlEaXNwbGF5LmhhbmRsZUNoZWNrKGUudGFyZ2V0KTtcbiAgfVxufSk7XG5cbnRvZG9zRGlzcGxheUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tbGFiZWwnKSkge1xuICAgIFVJRGlzcGxheS5oYW5kbGVFZGl0KGUudGFyZ2V0KTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhLXRyYXNoLWFsdCcpKSB7XG4gICAgVUlEaXNwbGF5LnJlbW92ZVRvZG8oZS50YXJnZXQpO1xuICAgIExvY2FsU3RvcmUucmVtb3ZlVG9kbyhlLnRhcmdldCk7XG4gIH1cbn0pO1xuXG50b2Rvc0Rpc3BsYXlDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRvZG9MYWJlbCA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdCcpO1xuICB0b2RvTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdCcpO1xuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lmxhc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgZS50YXJnZXQucGFyZW50RWxlbWVudC5sYXN0Q2hpbGQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICdjb21wbGV0ZWQnLFxuICApO1xuICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXQnKTtcbiAgdG9kb0xhYmVsLnRleHRDb250ZW50ID0gZS50YXJnZXQuZmlyc3RDaGlsZC52YWx1ZTtcbiAgTG9jYWxTdG9yZS5oYW5kbGVFZGl0VG9kbyhlLnRhcmdldCk7XG59KTtcblxuY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1zZWN0aW9uJyk7XG50b2RvU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLWNvbXBsZXRlZCcpKSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kbycpO1xuICAgIFVJRGlzcGxheS5oYW5kbGVSZW1vdmVBbGxDb21wbGV0ZWQodG9kb3MpO1xuICAgIExvY2FsU3RvcmUuaGFuZGxlUmVtb3ZlQWxsQ29tcGxldGVkKCk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9