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
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  height: 100vh;\r\n}\r\n\r\n#content {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  gap: 20px;\r\n}\r\n\r\n#nav {\r\n  display: grid;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  background-color: hsl(0, 0%, 20%);\r\n  color: hsl(0, 0%, 80%);\r\n}\r\n#nav > div:first-child {\r\n  grid-column: 1 / span 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#nav > div:nth-child(2) {\r\n  grid-column: 7 / span 6;\r\n}\r\n#nav > div:nth-child(2) > ul {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  height: 100%;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n#nav > div:nth-child(2) > ul > li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  list-style: none;\r\n  height: 100%;\r\n  width: 100px;\r\n  border-top: 5px solid hsl(0, 0%, 20%);\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n}\r\n\r\n#hero-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 20px;\r\n}\r\n#hero-container > div:nth-child(1) {\r\n  grid-column: 1 / 2;\r\n}\r\n#hero-container > div:nth-child(2) {\r\n  grid-column: 2/ 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n#hero-image {\r\n  width: 100%;\r\n  aspect-ratio: 16 / 9;\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n}\r\n\r\n#popular-meals > div {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n#popular-meals > div > div > img {\r\n  width: 100px;\r\n  aspect-ratio: 1 / 1;\r\n  border-radius: 10px;\r\n  object-fit: cover;\r\n  cursor: pointer;\r\n}\r\n#popular-meals > div > div > p {\r\n  text-align: center;\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  gap: 20px;\r\n  margin-bottom: 30px;\r\n}\r\n.menu img {\r\n  width: 100px;\r\n  aspect-ratio: 1 / 1;\r\n  border-radius: 10px;\r\n  object-fit: cover;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n}\r\n\r\n#footer {\r\n  background-color: hsl(0, 0%, 20%);\r\n  color: hsl(0, 0%, 80%);\r\n}\r\n#footer > div {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n#footer > div ul {\r\n  padding: 0px;\r\n}\r\n#footer > div li {\r\n  list-style: none;\r\n  cursor: pointer;\r\n}\r\n#footer > div a {\r\n  color: hsl(0, 0%, 80%);\r\n  text-decoration: none;\r\n}\r\n#footer > div > div:nth-child(1),\r\n#footer > div > div:nth-child(2) {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.icon {\r\n  width: 30px;\r\n  margin-right: 30px;\r\n}\r\n#footer > p {\r\n  text-align: center;\r\n  font-weight: lighter;\r\n  font-size: 0.6rem;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;EACjC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,iCAAiC;EACjC,sBAAsB;AACxB;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,qCAAqC;EACrC,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,iCAAiC;EACjC,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,sBAAsB;EACtB,qBAAqB;AACvB;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;AACnB","sourcesContent":["body {\r\n  height: 100vh;\r\n}\r\n\r\n#content {\r\n  height: 100%;\r\n  display: grid;\r\n  grid-template-rows: auto 1fr auto;\r\n  gap: 20px;\r\n}\r\n\r\n#nav {\r\n  display: grid;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  background-color: hsl(0, 0%, 20%);\r\n  color: hsl(0, 0%, 80%);\r\n}\r\n#nav > div:first-child {\r\n  grid-column: 1 / span 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#nav > div:nth-child(2) {\r\n  grid-column: 7 / span 6;\r\n}\r\n#nav > div:nth-child(2) > ul {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  height: 100%;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n#nav > div:nth-child(2) > ul > li {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  list-style: none;\r\n  height: 100%;\r\n  width: 100px;\r\n  border-top: 5px solid hsl(0, 0%, 20%);\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n}\r\n\r\n#hero-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 20px;\r\n}\r\n#hero-container > div:nth-child(1) {\r\n  grid-column: 1 / 2;\r\n}\r\n#hero-container > div:nth-child(2) {\r\n  grid-column: 2/ 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n#hero-image {\r\n  width: 100%;\r\n  aspect-ratio: 16 / 9;\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n}\r\n\r\n#popular-meals > div {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n#popular-meals > div > div > img {\r\n  width: 100px;\r\n  aspect-ratio: 1 / 1;\r\n  border-radius: 10px;\r\n  object-fit: cover;\r\n  cursor: pointer;\r\n}\r\n#popular-meals > div > div > p {\r\n  text-align: center;\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  gap: 20px;\r\n  margin-bottom: 30px;\r\n}\r\n.menu img {\r\n  width: 100px;\r\n  aspect-ratio: 1 / 1;\r\n  border-radius: 10px;\r\n  object-fit: cover;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n}\r\n\r\n#footer {\r\n  background-color: hsl(0, 0%, 20%);\r\n  color: hsl(0, 0%, 80%);\r\n}\r\n#footer > div {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n#footer > div ul {\r\n  padding: 0px;\r\n}\r\n#footer > div li {\r\n  list-style: none;\r\n  cursor: pointer;\r\n}\r\n#footer > div a {\r\n  color: hsl(0, 0%, 80%);\r\n  text-decoration: none;\r\n}\r\n#footer > div > div:nth-child(1),\r\n#footer > div > div:nth-child(2) {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.icon {\r\n  width: 30px;\r\n  margin-right: 30px;\r\n}\r\n#footer > p {\r\n  text-align: center;\r\n  font-weight: lighter;\r\n  font-size: 0.6rem;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearContent": () => (/* binding */ clearContent)
/* harmony export */ });
function clearContent() {
  function clear() {
    const contentContainer = document.getElementById("content-container");
    while (contentContainer.lastChild) {
      contentContainer.removeChild(contentContainer.lastChild);
    }
  }
  return { clear };
}




/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContact": () => (/* binding */ renderContact)
/* harmony export */ });
function renderContact() {
  function render() {
    makeContactForm();
  }
  return { render };
}

function makeContactForm() {
  const contentContainer = document.getElementById("content-container");
  const formHeader = document.createElement("h1");
  const form = document.createElement("form");
  const button = document.createElement("button");
  contentContainer.appendChild(formHeader);
  contentContainer.appendChild(form);
  contentContainer.appendChild(button);

  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const messageLabel = document.createElement("label");
  const messageInput = document.createElement("textarea");
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageInput);

  formHeader.innerText = "Contact Us";
  form.id = "form";
  button.setAttribute("form", "form");
  button.innerText = "Submit";

  nameLabel.setAttribute("for", "name");
  nameLabel.innerText = "Name";
  emailLabel.setAttribute("for", "email");
  emailLabel.innerText = "Email";
  messageLabel.setAttribute("for", "message");
  messageLabel.innerText = "Message";

  nameInput.id = "name";
  nameInput.type = "text";
  nameInput.name = "name";
  emailInput.id = "email";
  emailInput.type = "email";
  emailInput.name = "email";
  messageInput.id = "message";
  messageInput.name = "message";
  messageInput.rows = "4";
  messageInput.cols = "75";

  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ "./src/clear.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");



function renderHome() {
  function render() {
    makeHeroSection();
    makePopularMeals();
  }
  return { render };
}

function makeHeroSection() {
  const contentContainer = document.getElementById("content-container");
  const heroContainer = document.createElement("div");
  heroContainer.id = "hero-container";
  const popularMealsContainer = document.createElement("div");
  popularMealsContainer.id = "popular-meals";

  const heroImgDiv = document.createElement("div");
  const heroTextDiv = document.createElement("div");

  const heroImage = document.createElement("img");
  heroImage.setAttribute("src", "../assets/images/heroimg.jpg");
  heroImage.id = "hero-image";
  heroImgDiv.appendChild(heroImage);

  const heroHeader = document.createElement("h1");
  heroHeader.id = "hero-header";
  heroHeader.innerText = "Welcome to RESTAURANT";
  const heroText = document.createElement("p");
  heroText.id = "hero-text";
  heroText.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  heroTextDiv.appendChild(heroHeader);
  heroTextDiv.appendChild(heroText);

  heroContainer.appendChild(heroImgDiv);
  heroContainer.appendChild(heroTextDiv);
  contentContainer.appendChild(heroContainer);
  contentContainer.appendChild(popularMealsContainer);
}

function makePopularMeals() {
  const popularMealsContainer = document.getElementById("popular-meals");
  const header = document.createElement("h2");
  const menuContainer = document.createElement("div");
  popularMealsContainer.appendChild(header);
  popularMealsContainer.appendChild(menuContainer);

  const menu1 = document.createElement("div");
  const menu2 = document.createElement("div");
  const menu3 = document.createElement("div");
  menuContainer.appendChild(menu1);
  menuContainer.appendChild(menu2);
  menuContainer.appendChild(menu3);

  header.innerText = "Popular Menu";

  const menu1Image = document.createElement("img");
  const menu2Image = document.createElement("img");
  const menu3Image = document.createElement("img");
  menu1.appendChild(menu1Image);
  menu2.appendChild(menu2Image);
  menu3.appendChild(menu3Image);

  const menu1Name = document.createElement("p");
  const menu2Name = document.createElement("p");
  const menu3Name = document.createElement("p");
  menu1.appendChild(menu1Name);
  menu2.appendChild(menu2Name);
  menu3.appendChild(menu3Name);

  menu1Image.src = "../assets/images/menu1.jpg";
  menu2Image.src = "../assets/images/menu2.jpg";
  menu3Image.src = "../assets/images/menu3.jpg";

  menu1Name.innerText = "Menu 1";
  menu2Name.innerText = "Menu 2";
  menu3Name.innerText = "Menu 3";

  menu1Image.addEventListener("click", () => {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
    clearedPage.clear();
    const page = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();
    page.render();
    menu.style.backgroundColor = "white";
    menu.style.color = "hsl(0, 0%, 20%)";
    home.style.backgroundColor = "hsl(0, 0%, 20%)";
    home.style.color = "hsl(0, 0%, 80%)";
    contact.style.backgroundColor = "hsl(0, 0%, 20%)";
    contact.style.color = "hsl(0, 0%, 80%)";
  });
  menu2Image.addEventListener("click", () => {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
    clearedPage.clear();
    const page = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();
    page.render();
    menu.style.backgroundColor = "white";
    menu.style.color = "hsl(0, 0%, 20%)";
    home.style.backgroundColor = "hsl(0, 0%, 20%)";
    home.style.color = "hsl(0, 0%, 80%)";
    contact.style.backgroundColor = "hsl(0, 0%, 20%)";
    contact.style.color = "hsl(0, 0%, 80%)";
  });
  menu3Image.addEventListener("click", () => {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_0__.clearContent)();
    clearedPage.clear();
    const page = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();
    page.render();
    menu.style.backgroundColor = "white";
    menu.style.color = "hsl(0, 0%, 20%)";
    home.style.backgroundColor = "hsl(0, 0%, 20%)";
    home.style.color = "hsl(0, 0%, 80%)";
    contact.style.backgroundColor = "hsl(0, 0%, 20%)";
    contact.style.color = "hsl(0, 0%, 80%)";
  });
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
function renderMenu() {
  function render() {
    makeMenu();
  }
  return { render };
}

function makeMenu() {
  const contentContainer = document.getElementById("content-container");
  const menuHeading = document.createElement("h1");
  contentContainer.appendChild(menuHeading);

  menuHeading.innerText = "Our Menu";

  const menu1 = menuConstructor(
    "Menu1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu1.jpg"
  );
  const menu2 = menuConstructor(
    "Menu2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu2.jpg"
  );
  const menu3 = menuConstructor(
    "Menu3",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu3.jpg"
  );
  const menu4 = menuConstructor(
    "Menu4",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu4.jpg"
  );
  const menu5 = menuConstructor(
    "Menu5",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu5.jpg"
  );

  const menu = addMenu();
  menu.add(menu1);
  menu.add(menu2);
  menu.add(menu3);
  menu.add(menu4);
  menu.add(menu5);

  const toDisplay = menu.getMenu();

  displayMenu(toDisplay);
}

function addMenu() {
  const menuArr = [];
  function add(x) {
    menuArr.push(x);
  }

  function getMenu() {
    return menuArr;
  }
  return { add, getMenu };
}

function menuConstructor(name, description, url) {
  const menuName = name;
  const menuDescription = description;
  const menuUrl = url;

  function getMenuName() {
    return menuName;
  }

  function getMenuDescription() {
    return menuDescription;
  }

  function getMenuUrl() {
    return menuUrl;
  }

  return { getMenuName, getMenuDescription, getMenuUrl };
}

function displayMenu(arr) {
  for (let i = 0; i < arr.length; i++) {
    const contentContainer = document.getElementById("content-container");
    const menuDiv = document.createElement("div");
    contentContainer.appendChild(menuDiv);

    const menuImg = document.createElement("img");
    const menuInfo = document.createElement("div");
    menuDiv.appendChild(menuImg);
    menuDiv.appendChild(menuInfo);

    const menuName = document.createElement("h3");
    const menuDescription = document.createElement("p");
    menuInfo.appendChild(menuName);
    menuInfo.appendChild(menuDescription);

    menuDiv.className = "menu";

    menuImg.src = arr[i].getMenuUrl();
    menuName.innerText = arr[i].getMenuName();
    menuDescription.innerText = arr[i].getMenuDescription();
  }
}




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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clear */ "./src/clear.js");






(function initializePage() {
  (function createNav() {
    const container = document.getElementById("content");
    const nav = document.createElement("div");
    const logoDiv = document.createElement("div");
    const logo = document.createElement("p");
    const navLinkDiv = document.createElement("div");
    const navLinks = document.createElement("ul");
    const navLink1 = document.createElement("li");
    const navLink2 = document.createElement("li");
    const navLink3 = document.createElement("li");

    nav.id = "nav";
    logo.innerText = "RESTAURANT";
    navLink1.innerText = "Home";
    navLink1.id = "home";
    navLink2.innerText = "Menu";
    navLink2.id = "menu";
    navLink3.innerText = "Contact";
    navLink3.id = "contact";

    logoDiv.appendChild(logo);
    navLinks.appendChild(navLink1);
    navLinks.appendChild(navLink2);
    navLinks.appendChild(navLink3);
    navLinkDiv.appendChild(navLinks);

    nav.appendChild(logoDiv);
    nav.appendChild(navLinkDiv);
    container.appendChild(nav);
  })();

  (function renderPage() {
    const container = document.getElementById("content");
    const contentContainer = document.createElement("div");
    contentContainer.id = "content-container";
    container.appendChild(contentContainer);

    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

    document.addEventListener("DOMContentLoaded", () => {
      const page = (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();
      page.render();
      home.style.backgroundColor = "white";
      home.style.color = "hsl(0, 0%, 20%)";
    });

    home.addEventListener("click", () => {
      const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_4__.clearContent)();
      clearedPage.clear();
      const page = (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();
      page.render();
      home.style.backgroundColor = "white";
      home.style.color = "hsl(0, 0%, 20%)";
      menu.style.backgroundColor = "hsl(0, 0%, 20%)";
      menu.style.color = "hsl(0, 0%, 80%)";
      contact.style.backgroundColor = "hsl(0, 0%, 20%)";
      contact.style.color = "hsl(0, 0%, 80%)";
    });

    menu.addEventListener("click", () => {
      const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_4__.clearContent)();
      clearedPage.clear();
      const page = (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();
      page.render();
      menu.style.backgroundColor = "white";
      menu.style.color = "hsl(0, 0%, 20%)";
      home.style.backgroundColor = "hsl(0, 0%, 20%)";
      home.style.color = "hsl(0, 0%, 80%)";
      contact.style.backgroundColor = "hsl(0, 0%, 20%)";
      contact.style.color = "hsl(0, 0%, 80%)";
    });

    contact.addEventListener("click", () => {
      const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_4__.clearContent)();
      clearedPage.clear();
      const page = (0,_contact__WEBPACK_IMPORTED_MODULE_2__.renderContact)();
      page.render();
      contact.style.backgroundColor = "white";
      contact.style.color = "hsl(0, 0%, 20%)";
      home.style.backgroundColor = "hsl(0, 0%, 20%)";
      home.style.color = "hsl(0, 0%, 80%)";
      menu.style.backgroundColor = "hsl(0, 0%, 20%)";
      menu.style.color = "hsl(0, 0%, 80%)";
    });
  })();

  (function createFooter() {
    const container = document.getElementById("content");
    const footerContainer = document.createElement("div");
    container.appendChild(footerContainer);

    const footerLinks = document.createElement("div");
    const copyRight = document.createElement("p");
    footerContainer.appendChild(footerLinks);
    footerContainer.appendChild(copyRight);

    const projectsLink = document.createElement("div");
    const naviLink = document.createElement("div");
    const socialLink = document.createElement("div");
    footerLinks.appendChild(projectsLink);
    footerLinks.appendChild(naviLink);
    footerLinks.appendChild(socialLink);

    const projectsHeader = document.createElement("h3");
    const projectList = document.createElement("ul");
    projectsLink.appendChild(projectsHeader);
    projectsLink.appendChild(projectList);

    const naviHeader = document.createElement("h3");
    const naviList = document.createElement("ul");
    naviLink.appendChild(naviHeader);
    naviLink.appendChild(naviList);

    const socialHeader = document.createElement("h3");
    const githubIcon = document.createElement("a");
    const linkedinIcon = document.createElement("a");
    const facebookIcon = document.createElement("a");
    socialLink.appendChild(socialHeader);
    socialLink.appendChild(githubIcon);
    socialLink.appendChild(linkedinIcon);
    socialLink.appendChild(facebookIcon);

    const project1 = document.createElement("li");
    const project2 = document.createElement("li");
    const project3 = document.createElement("li");
    const project4 = document.createElement("li");
    const project5 = document.createElement("li");
    const project6 = document.createElement("li");
    projectList.appendChild(project1);
    projectList.appendChild(project2);
    projectList.appendChild(project3);
    projectList.appendChild(project4);
    projectList.appendChild(project5);
    projectList.appendChild(project6);

    const navi1 = document.createElement("li");
    const navi2 = document.createElement("li");
    const navi3 = document.createElement("li");
    naviList.appendChild(navi1);
    naviList.appendChild(navi2);
    naviList.appendChild(navi3);

    const navi1Link = document.createElement("p");
    const navi2Link = document.createElement("p");
    const navi3Link = document.createElement("p");
    navi1.appendChild(navi1Link);
    navi2.appendChild(navi2Link);
    navi3.appendChild(navi3Link);

    footerContainer.id = "footer";

    copyRight.innerText = "Copyright Pyae Sone with The Odin Project";

    projectsHeader.innerText = "Projects";
    naviHeader.innerText = "Navigation";
    socialHeader.innerText = "Socials";

    project1.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-tictactoe/">Tic-Tac-Toe</a>';
    project2.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-library/">Library</a>';
    project3.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-admin-dashboard/">Admin Dashboard</a>';
    project4.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-signupform/">Signup Form</a>';
    project5.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-calculator/">Calculator</a>';
    project6.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-etchasketch/">Etch-A-Sketch</a>';

    navi1Link.innerText = "Home";
    navi2Link.innerText = "Menu";
    navi3Link.innerText = "Contact";

    githubIcon.href = "https://github.com/PyaesoneP";
    linkedinIcon.href = "https://www.linkedin.com/in/pyaesonep/";
    facebookIcon.href =
      "https://www.facebook.com/profile.php?id=100008049600919";
    githubIcon.innerHTML =
      '<img src="../assets/icons/github-mark-white.png" class="icon">';
    linkedinIcon.innerHTML =
      '<img src="../assets/icons/LI-In-Bug.png" class="icon">';
    facebookIcon.innerHTML =
      '<img src="../assets/icons/f_logo_RGB-White_58.png" class="icon">';

    navi1Link.addEventListener("click", () => {
      const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_4__.clearContent)();
      clearedPage.clear();
      const page = (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)();
      page.render();
      home.style.backgroundColor = "white";
      home.style.color = "hsl(0, 0%, 20%)";
      menu.style.backgroundColor = "hsl(0, 0%, 20%)";
      menu.style.color = "hsl(0, 0%, 80%)";
      contact.style.backgroundColor = "hsl(0, 0%, 20%)";
      contact.style.color = "hsl(0, 0%, 80%)";
    });
    navi2Link.addEventListener("click", () => {
      const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_4__.clearContent)();
      clearedPage.clear();
      const page = (0,_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)();
      page.render();
      menu.style.backgroundColor = "white";
      menu.style.color = "hsl(0, 0%, 20%)";
      home.style.backgroundColor = "hsl(0, 0%, 20%)";
      home.style.color = "hsl(0, 0%, 80%)";
      contact.style.backgroundColor = "hsl(0, 0%, 20%)";
      contact.style.color = "hsl(0, 0%, 80%)";
    });
    navi3Link.addEventListener("click", () => {
      const clearedPage = (0,_clear__WEBPACK_IMPORTED_MODULE_4__.clearContent)();
      clearedPage.clear();
      const page = (0,_contact__WEBPACK_IMPORTED_MODULE_2__.renderContact)();
      page.render();
      contact.style.backgroundColor = "white";
      contact.style.color = "hsl(0, 0%, 20%)";
      home.style.backgroundColor = "hsl(0, 0%, 20%)";
      home.style.color = "hsl(0, 0%, 80%)";
      menu.style.backgroundColor = "hsl(0, 0%, 20%)";
      menu.style.color = "hsl(0, 0%, 80%)";
    });
  })();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7O0FDVnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDeUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRjO0FBQ0g7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFtQixpREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFZO0FBQ3RDO0FBQ0EsbUJBQW1CLHVEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFZO0FBQ3RDO0FBQ0EsbUJBQW1CLGlEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLG9EQUFZO0FBQ3RDO0FBQ0EsbUJBQW1CLGlEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLG9EQUFZO0FBQ3RDO0FBQ0EsbUJBQW1CLHVEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXHJcXG59XFxyXFxuI25hdiA+IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbiNuYXYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGdyaWQtY29sdW1uOiA3IC8gc3BhbiA2O1xcclxcbn1cXHJcXG4jbmF2ID4gZGl2Om50aC1jaGlsZCgyKSA+IHVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuI25hdiA+IGRpdjpudGgtY2hpbGQoMikgPiB1bCA+IGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGhzbCgwLCAwJSwgMjAlKTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNoZXJvLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuI2hlcm8tY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxufVxcclxcbiNoZXJvLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgZ3JpZC1jb2x1bW46IDIvIDM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4jaGVyby1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMTYgLyA5O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcG9wdWxhci1tZWFscyA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcbiNwb3B1bGFyLW1lYWxzID4gZGl2ID4gZGl2ID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbiNwb3B1bGFyLW1lYWxzID4gZGl2ID4gZGl2ID4gcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG4ubWVudSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCAyMCUpO1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXHJcXG59XFxyXFxuI2Zvb3RlciA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG59XFxyXFxuI2Zvb3RlciA+IGRpdiB1bCB7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcbiNmb290ZXIgPiBkaXYgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2Zvb3RlciA+IGRpdiBhIHtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDgwJSk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbiNmb290ZXIgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDEpLFxcclxcbiNmb290ZXIgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaWNvbiB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG59XFxyXFxuI2Zvb3RlciA+IHAge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsaUNBQWlDO0VBQ2pDLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7QUFDWDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCA4MCUpO1xcclxcbn1cXHJcXG4jbmF2ID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuI25hdiA+IGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgZ3JpZC1jb2x1bW46IDcgLyBzcGFuIDY7XFxyXFxufVxcclxcbiNuYXYgPiBkaXY6bnRoLWNoaWxkKDIpID4gdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG4jbmF2ID4gZGl2Om50aC1jaGlsZCgyKSA+IHVsID4gbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBib3JkZXItdG9wOiA1cHggc29saWQgaHNsKDAsIDAlLCAyMCUpO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2hlcm8tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4jaGVyby1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG59XFxyXFxuI2hlcm8tY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICBncmlkLWNvbHVtbjogMi8gMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNoZXJvLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxNiAvIDk7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNwb3B1bGFyLW1lYWxzID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuI3BvcHVsYXItbWVhbHMgPiBkaXYgPiBkaXYgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI3BvcHVsYXItbWVhbHMgPiBkaXYgPiBkaXYgPiBwIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcbi5tZW51IGltZyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDIwJSk7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCA4MCUpO1xcclxcbn1cXHJcXG4jZm9vdGVyID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbn1cXHJcXG4jZm9vdGVyID4gZGl2IHVsIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuI2Zvb3RlciA+IGRpdiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jZm9vdGVyID4gZGl2IGEge1xcclxcbiAgY29sb3I6IGhzbCgwLCAwJSwgODAlKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuI2Zvb3RlciA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMSksXFxyXFxuI2Zvb3RlciA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5pY29uIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG4jZm9vdGVyID4gcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcbiAgZnVuY3Rpb24gY2xlYXIoKSB7XHJcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWNvbnRhaW5lclwiKTtcclxuICAgIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmxhc3RDaGlsZCkge1xyXG4gICAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIubGFzdENoaWxkKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHsgY2xlYXIgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgY2xlYXJDb250ZW50IH07XHJcbiIsImZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKSB7XHJcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgbWFrZUNvbnRhY3RGb3JtKCk7XHJcbiAgfVxyXG4gIHJldHVybiB7IHJlbmRlciB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1jb250YWluZXJcIik7XHJcbiAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xyXG4gIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcclxuICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XHJcblxyXG4gIGZvcm1IZWFkZXIuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XHJcbiAgZm9ybS5pZCA9IFwiZm9ybVwiO1xyXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJmb3JtXCIsIFwiZm9ybVwiKTtcclxuICBidXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcclxuXHJcbiAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XHJcbiAgbmFtZUxhYmVsLmlubmVyVGV4dCA9IFwiTmFtZVwiO1xyXG4gIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZW1haWxcIik7XHJcbiAgZW1haWxMYWJlbC5pbm5lclRleHQgPSBcIkVtYWlsXCI7XHJcbiAgbWVzc2FnZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm1lc3NhZ2VcIik7XHJcbiAgbWVzc2FnZUxhYmVsLmlubmVyVGV4dCA9IFwiTWVzc2FnZVwiO1xyXG5cclxuICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcclxuICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gIG5hbWVJbnB1dC5uYW1lID0gXCJuYW1lXCI7XHJcbiAgZW1haWxJbnB1dC5pZCA9IFwiZW1haWxcIjtcclxuICBlbWFpbElucHV0LnR5cGUgPSBcImVtYWlsXCI7XHJcbiAgZW1haWxJbnB1dC5uYW1lID0gXCJlbWFpbFwiO1xyXG4gIG1lc3NhZ2VJbnB1dC5pZCA9IFwibWVzc2FnZVwiO1xyXG4gIG1lc3NhZ2VJbnB1dC5uYW1lID0gXCJtZXNzYWdlXCI7XHJcbiAgbWVzc2FnZUlucHV0LnJvd3MgPSBcIjRcIjtcclxuICBtZXNzYWdlSW5wdXQuY29scyA9IFwiNzVcIjtcclxuXHJcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJDb250YWN0IH07XHJcbiIsImltcG9ydCB7IGNsZWFyQ29udGVudCB9IGZyb20gXCIuL2NsZWFyXCI7XHJcbmltcG9ydCB7IHJlbmRlck1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIG1ha2VIZXJvU2VjdGlvbigpO1xyXG4gICAgbWFrZVBvcHVsYXJNZWFscygpO1xyXG4gIH1cclxuICByZXR1cm4geyByZW5kZXIgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFrZUhlcm9TZWN0aW9uKCkge1xyXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGhlcm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlcm9Db250YWluZXIuaWQgPSBcImhlcm8tY29udGFpbmVyXCI7XHJcbiAgY29uc3QgcG9wdWxhck1lYWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwb3B1bGFyTWVhbHNDb250YWluZXIuaWQgPSBcInBvcHVsYXItbWVhbHNcIjtcclxuXHJcbiAgY29uc3QgaGVyb0ltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaGVyb1RleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBjb25zdCBoZXJvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGhlcm9JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvaW1hZ2VzL2hlcm9pbWcuanBnXCIpO1xyXG4gIGhlcm9JbWFnZS5pZCA9IFwiaGVyby1pbWFnZVwiO1xyXG4gIGhlcm9JbWdEaXYuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcclxuXHJcbiAgY29uc3QgaGVyb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBoZXJvSGVhZGVyLmlkID0gXCJoZXJvLWhlYWRlclwiO1xyXG4gIGhlcm9IZWFkZXIuaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIFJFU1RBVVJBTlRcIjtcclxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGhlcm9UZXh0LmlkID0gXCJoZXJvLXRleHRcIjtcclxuICBoZXJvVGV4dC5pbm5lclRleHQgPVxyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXCI7XHJcbiAgaGVyb1RleHREaXYuYXBwZW5kQ2hpbGQoaGVyb0hlYWRlcik7XHJcbiAgaGVyb1RleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xyXG5cclxuICBoZXJvQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWdEaXYpO1xyXG4gIGhlcm9Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb1RleHREaXYpO1xyXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0NvbnRhaW5lcik7XHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1bGFyTWVhbHNDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlUG9wdWxhck1lYWxzKCkge1xyXG4gIGNvbnN0IHBvcHVsYXJNZWFsc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdWxhci1tZWFsc1wiKTtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcG9wdWxhck1lYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgcG9wdWxhck1lYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG5cclxuICBjb25zdCBtZW51MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbWVudTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG1lbnUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUxKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUyKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUzKTtcclxuXHJcbiAgaGVhZGVyLmlubmVyVGV4dCA9IFwiUG9wdWxhciBNZW51XCI7XHJcblxyXG4gIGNvbnN0IG1lbnUxSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IG1lbnUySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IG1lbnUzSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1lbnUxLmFwcGVuZENoaWxkKG1lbnUxSW1hZ2UpO1xyXG4gIG1lbnUyLmFwcGVuZENoaWxkKG1lbnUySW1hZ2UpO1xyXG4gIG1lbnUzLmFwcGVuZENoaWxkKG1lbnUzSW1hZ2UpO1xyXG5cclxuICBjb25zdCBtZW51MU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBtZW51Mk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBtZW51M05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBtZW51MS5hcHBlbmRDaGlsZChtZW51MU5hbWUpO1xyXG4gIG1lbnUyLmFwcGVuZENoaWxkKG1lbnUyTmFtZSk7XHJcbiAgbWVudTMuYXBwZW5kQ2hpbGQobWVudTNOYW1lKTtcclxuXHJcbiAgbWVudTFJbWFnZS5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbWVudTEuanBnXCI7XHJcbiAgbWVudTJJbWFnZS5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbWVudTIuanBnXCI7XHJcbiAgbWVudTNJbWFnZS5zcmMgPSBcIi4uL2Fzc2V0cy9pbWFnZXMvbWVudTMuanBnXCI7XHJcblxyXG4gIG1lbnUxTmFtZS5pbm5lclRleHQgPSBcIk1lbnUgMVwiO1xyXG4gIG1lbnUyTmFtZS5pbm5lclRleHQgPSBcIk1lbnUgMlwiO1xyXG4gIG1lbnUzTmFtZS5pbm5lclRleHQgPSBcIk1lbnUgM1wiO1xyXG5cclxuICBtZW51MUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XHJcblxyXG4gICAgY29uc3QgY2xlYXJlZFBhZ2UgPSBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNsZWFyZWRQYWdlLmNsZWFyKCk7XHJcbiAgICBjb25zdCBwYWdlID0gcmVuZGVyTWVudSgpO1xyXG4gICAgcGFnZS5yZW5kZXIoKTtcclxuICAgIG1lbnUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgbWVudS5zdHlsZS5jb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICBob21lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICBob21lLnN0eWxlLmNvbG9yID0gXCJoc2woMCwgMCUsIDgwJSlcIjtcclxuICAgIGNvbnRhY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2woMCwgMCUsIDIwJSlcIjtcclxuICAgIGNvbnRhY3Quc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gIH0pO1xyXG4gIG1lbnUySW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgICBjb25zdCBjbGVhcmVkUGFnZSA9IGNsZWFyQ29udGVudCgpO1xyXG4gICAgY2xlYXJlZFBhZ2UuY2xlYXIoKTtcclxuICAgIGNvbnN0IHBhZ2UgPSByZW5kZXJNZW51KCk7XHJcbiAgICBwYWdlLnJlbmRlcigpO1xyXG4gICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICBtZW51LnN0eWxlLmNvbG9yID0gXCJoc2woMCwgMCUsIDIwJSlcIjtcclxuICAgIGhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2woMCwgMCUsIDIwJSlcIjtcclxuICAgIGhvbWUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgY29udGFjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgY29udGFjdC5zdHlsZS5jb2xvciA9IFwiaHNsKDAsIDAlLCA4MCUpXCI7XHJcbiAgfSk7XHJcbiAgbWVudTNJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xyXG5cclxuICAgIGNvbnN0IGNsZWFyZWRQYWdlID0gY2xlYXJDb250ZW50KCk7XHJcbiAgICBjbGVhcmVkUGFnZS5jbGVhcigpO1xyXG4gICAgY29uc3QgcGFnZSA9IHJlbmRlck1lbnUoKTtcclxuICAgIHBhZ2UucmVuZGVyKCk7XHJcbiAgICBtZW51LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgIG1lbnUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgaG9tZS5zdHlsZS5jb2xvciA9IFwiaHNsKDAsIDAlLCA4MCUpXCI7XHJcbiAgICBjb250YWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICBjb250YWN0LnN0eWxlLmNvbG9yID0gXCJoc2woMCwgMCUsIDgwJSlcIjtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVySG9tZSB9O1xyXG4iLCJmdW5jdGlvbiByZW5kZXJNZW51KCkge1xyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIG1ha2VNZW51KCk7XHJcbiAgfVxyXG4gIHJldHVybiB7IHJlbmRlciB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlTWVudSgpIHtcclxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nKTtcclxuXHJcbiAgbWVudUhlYWRpbmcuaW5uZXJUZXh0ID0gXCJPdXIgTWVudVwiO1xyXG5cclxuICBjb25zdCBtZW51MSA9IG1lbnVDb25zdHJ1Y3RvcihcclxuICAgIFwiTWVudTFcIixcclxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFZ1bHB1dGF0ZSBvZGlvIHV0IGVuaW0gYmxhbmRpdCB2b2x1dHBhdC4gR3JhdmlkYSBkaWN0dW0gZnVzY2UgdXQgcGxhY2VyYXQgb3JjaS5cIixcclxuICAgIFwiLi4vYXNzZXRzL2ltYWdlcy9tZW51MS5qcGdcIlxyXG4gICk7XHJcbiAgY29uc3QgbWVudTIgPSBtZW51Q29uc3RydWN0b3IoXHJcbiAgICBcIk1lbnUyXCIsXHJcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBWdWxwdXRhdGUgb2RpbyB1dCBlbmltIGJsYW5kaXQgdm9sdXRwYXQuIEdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0IHBsYWNlcmF0IG9yY2kuXCIsXHJcbiAgICBcIi4uL2Fzc2V0cy9pbWFnZXMvbWVudTIuanBnXCJcclxuICApO1xyXG4gIGNvbnN0IG1lbnUzID0gbWVudUNvbnN0cnVjdG9yKFxyXG4gICAgXCJNZW51M1wiLFxyXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVnVscHV0YXRlIG9kaW8gdXQgZW5pbSBibGFuZGl0IHZvbHV0cGF0LiBHcmF2aWRhIGRpY3R1bSBmdXNjZSB1dCBwbGFjZXJhdCBvcmNpLlwiLFxyXG4gICAgXCIuLi9hc3NldHMvaW1hZ2VzL21lbnUzLmpwZ1wiXHJcbiAgKTtcclxuICBjb25zdCBtZW51NCA9IG1lbnVDb25zdHJ1Y3RvcihcclxuICAgIFwiTWVudTRcIixcclxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFZ1bHB1dGF0ZSBvZGlvIHV0IGVuaW0gYmxhbmRpdCB2b2x1dHBhdC4gR3JhdmlkYSBkaWN0dW0gZnVzY2UgdXQgcGxhY2VyYXQgb3JjaS5cIixcclxuICAgIFwiLi4vYXNzZXRzL2ltYWdlcy9tZW51NC5qcGdcIlxyXG4gICk7XHJcbiAgY29uc3QgbWVudTUgPSBtZW51Q29uc3RydWN0b3IoXHJcbiAgICBcIk1lbnU1XCIsXHJcbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBWdWxwdXRhdGUgb2RpbyB1dCBlbmltIGJsYW5kaXQgdm9sdXRwYXQuIEdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0IHBsYWNlcmF0IG9yY2kuXCIsXHJcbiAgICBcIi4uL2Fzc2V0cy9pbWFnZXMvbWVudTUuanBnXCJcclxuICApO1xyXG5cclxuICBjb25zdCBtZW51ID0gYWRkTWVudSgpO1xyXG4gIG1lbnUuYWRkKG1lbnUxKTtcclxuICBtZW51LmFkZChtZW51Mik7XHJcbiAgbWVudS5hZGQobWVudTMpO1xyXG4gIG1lbnUuYWRkKG1lbnU0KTtcclxuICBtZW51LmFkZChtZW51NSk7XHJcblxyXG4gIGNvbnN0IHRvRGlzcGxheSA9IG1lbnUuZ2V0TWVudSgpO1xyXG5cclxuICBkaXNwbGF5TWVudSh0b0Rpc3BsYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRNZW51KCkge1xyXG4gIGNvbnN0IG1lbnVBcnIgPSBbXTtcclxuICBmdW5jdGlvbiBhZGQoeCkge1xyXG4gICAgbWVudUFyci5wdXNoKHgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWVudSgpIHtcclxuICAgIHJldHVybiBtZW51QXJyO1xyXG4gIH1cclxuICByZXR1cm4geyBhZGQsIGdldE1lbnUgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudUNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCB1cmwpIHtcclxuICBjb25zdCBtZW51TmFtZSA9IG5hbWU7XHJcbiAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgY29uc3QgbWVudVVybCA9IHVybDtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWVudU5hbWUoKSB7XHJcbiAgICByZXR1cm4gbWVudU5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRNZW51RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gbWVudURlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0TWVudVVybCgpIHtcclxuICAgIHJldHVybiBtZW51VXJsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgZ2V0TWVudU5hbWUsIGdldE1lbnVEZXNjcmlwdGlvbiwgZ2V0TWVudVVybCB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TWVudShhcnIpIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURpdik7XHJcblxyXG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBjb25zdCBtZW51SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVJbWcpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51SW5mbyk7XHJcblxyXG4gICAgY29uc3QgbWVudU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKG1lbnVOYW1lKTtcclxuICAgIG1lbnVJbmZvLmFwcGVuZENoaWxkKG1lbnVEZXNjcmlwdGlvbik7XHJcblxyXG4gICAgbWVudURpdi5jbGFzc05hbWUgPSBcIm1lbnVcIjtcclxuXHJcbiAgICBtZW51SW1nLnNyYyA9IGFycltpXS5nZXRNZW51VXJsKCk7XHJcbiAgICBtZW51TmFtZS5pbm5lclRleHQgPSBhcnJbaV0uZ2V0TWVudU5hbWUoKTtcclxuICAgIG1lbnVEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBhcnJbaV0uZ2V0TWVudURlc2NyaXB0aW9uKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJNZW51IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IHJlbmRlckNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlck1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XHJcbmltcG9ydCB7IGNsZWFyQ29udGVudCB9IGZyb20gXCIuL2NsZWFyXCI7XHJcblxyXG4oZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XHJcbiAgKGZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IG5hdkxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBjb25zdCBuYXZMaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IG5hdkxpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgbmF2TGluazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgbmF2LmlkID0gXCJuYXZcIjtcclxuICAgIGxvZ28uaW5uZXJUZXh0ID0gXCJSRVNUQVVSQU5UXCI7XHJcbiAgICBuYXZMaW5rMS5pbm5lclRleHQgPSBcIkhvbWVcIjtcclxuICAgIG5hdkxpbmsxLmlkID0gXCJob21lXCI7XHJcbiAgICBuYXZMaW5rMi5pbm5lclRleHQgPSBcIk1lbnVcIjtcclxuICAgIG5hdkxpbmsyLmlkID0gXCJtZW51XCI7XHJcbiAgICBuYXZMaW5rMy5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcclxuICAgIG5hdkxpbmszLmlkID0gXCJjb250YWN0XCI7XHJcblxyXG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKG5hdkxpbmsxKTtcclxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKG5hdkxpbmsyKTtcclxuICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKG5hdkxpbmszKTtcclxuICAgIG5hdkxpbmtEaXYuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZChsb2dvRGl2KTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMaW5rRGl2KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xyXG4gIH0pKCk7XHJcblxyXG4gIChmdW5jdGlvbiByZW5kZXJQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmlkID0gXCJjb250ZW50LWNvbnRhaW5lclwiO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSByZW5kZXJIb21lKCk7XHJcbiAgICAgIHBhZ2UucmVuZGVyKCk7XHJcbiAgICAgIGhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBob21lLnN0eWxlLmNvbG9yID0gXCJoc2woMCwgMCUsIDIwJSlcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgY2xlYXJlZFBhZ2UgPSBjbGVhckNvbnRlbnQoKTtcclxuICAgICAgY2xlYXJlZFBhZ2UuY2xlYXIoKTtcclxuICAgICAgY29uc3QgcGFnZSA9IHJlbmRlckhvbWUoKTtcclxuICAgICAgcGFnZS5yZW5kZXIoKTtcclxuICAgICAgaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIGhvbWUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIG1lbnUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgICBjb250YWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIGNvbnRhY3Quc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjbGVhcmVkUGFnZSA9IGNsZWFyQ29udGVudCgpO1xyXG4gICAgICBjbGVhcmVkUGFnZS5jbGVhcigpO1xyXG4gICAgICBjb25zdCBwYWdlID0gcmVuZGVyTWVudSgpO1xyXG4gICAgICBwYWdlLnJlbmRlcigpO1xyXG4gICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgbWVudS5zdHlsZS5jb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIGhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2woMCwgMCUsIDIwJSlcIjtcclxuICAgICAgaG9tZS5zdHlsZS5jb2xvciA9IFwiaHNsKDAsIDAlLCA4MCUpXCI7XHJcbiAgICAgIGNvbnRhY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJoc2woMCwgMCUsIDIwJSlcIjtcclxuICAgICAgY29udGFjdC5zdHlsZS5jb2xvciA9IFwiaHNsKDAsIDAlLCA4MCUpXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsZWFyZWRQYWdlID0gY2xlYXJDb250ZW50KCk7XHJcbiAgICAgIGNsZWFyZWRQYWdlLmNsZWFyKCk7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSByZW5kZXJDb250YWN0KCk7XHJcbiAgICAgIHBhZ2UucmVuZGVyKCk7XHJcbiAgICAgIGNvbnRhY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICBjb250YWN0LnN0eWxlLmNvbG9yID0gXCJoc2woMCwgMCUsIDIwJSlcIjtcclxuICAgICAgaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgICBob21lLnN0eWxlLmNvbG9yID0gXCJoc2woMCwgMCUsIDgwJSlcIjtcclxuICAgICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgICBtZW51LnN0eWxlLmNvbG9yID0gXCJoc2woMCwgMCUsIDgwJSlcIjtcclxuICAgIH0pO1xyXG4gIH0pKCk7XHJcblxyXG4gIChmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29weVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGlua3MpO1xyXG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlSaWdodCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IG5hdmlMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHNvY2lhbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vdGVyTGlua3MuYXBwZW5kQ2hpbGQocHJvamVjdHNMaW5rKTtcclxuICAgIGZvb3RlckxpbmtzLmFwcGVuZENoaWxkKG5hdmlMaW5rKTtcclxuICAgIGZvb3RlckxpbmtzLmFwcGVuZENoaWxkKHNvY2lhbExpbmspO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBwcm9qZWN0c0xpbmsuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xyXG4gICAgcHJvamVjdHNMaW5rLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcclxuXHJcbiAgICBjb25zdCBuYXZpSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgY29uc3QgbmF2aUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBuYXZpTGluay5hcHBlbmRDaGlsZChuYXZpSGVhZGVyKTtcclxuICAgIG5hdmlMaW5rLmFwcGVuZENoaWxkKG5hdmlMaXN0KTtcclxuXHJcbiAgICBjb25zdCBzb2NpYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBjb25zdCBsaW5rZWRpbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGNvbnN0IGZhY2Vib29rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgc29jaWFsTGluay5hcHBlbmRDaGlsZChzb2NpYWxIZWFkZXIpO1xyXG4gICAgc29jaWFsTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcclxuICAgIHNvY2lhbExpbmsuYXBwZW5kQ2hpbGQobGlua2VkaW5JY29uKTtcclxuICAgIHNvY2lhbExpbmsuYXBwZW5kQ2hpbGQoZmFjZWJvb2tJY29uKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IHByb2plY3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IHByb2plY3Q1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgY29uc3QgcHJvamVjdDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0MSk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Mik7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Myk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0NCk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0NSk7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0Nik7XHJcblxyXG4gICAgY29uc3QgbmF2aTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBuYXZpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGNvbnN0IG5hdmkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbmF2aUxpc3QuYXBwZW5kQ2hpbGQobmF2aTEpO1xyXG4gICAgbmF2aUxpc3QuYXBwZW5kQ2hpbGQobmF2aTIpO1xyXG4gICAgbmF2aUxpc3QuYXBwZW5kQ2hpbGQobmF2aTMpO1xyXG5cclxuICAgIGNvbnN0IG5hdmkxTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgbmF2aTJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBuYXZpM0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG5hdmkxLmFwcGVuZENoaWxkKG5hdmkxTGluayk7XHJcbiAgICBuYXZpMi5hcHBlbmRDaGlsZChuYXZpMkxpbmspO1xyXG4gICAgbmF2aTMuYXBwZW5kQ2hpbGQobmF2aTNMaW5rKTtcclxuXHJcbiAgICBmb290ZXJDb250YWluZXIuaWQgPSBcImZvb3RlclwiO1xyXG5cclxuICAgIGNvcHlSaWdodC5pbm5lclRleHQgPSBcIkNvcHlyaWdodCBQeWFlIFNvbmUgd2l0aCBUaGUgT2RpbiBQcm9qZWN0XCI7XHJcblxyXG4gICAgcHJvamVjdHNIZWFkZXIuaW5uZXJUZXh0ID0gXCJQcm9qZWN0c1wiO1xyXG4gICAgbmF2aUhlYWRlci5pbm5lclRleHQgPSBcIk5hdmlnYXRpb25cIjtcclxuICAgIHNvY2lhbEhlYWRlci5pbm5lclRleHQgPSBcIlNvY2lhbHNcIjtcclxuXHJcbiAgICBwcm9qZWN0MS5pbm5lckhUTUwgPVxyXG4gICAgICAnPGEgaHJlZj1cImh0dHBzOi8vcHlhZXNvbmVwLmdpdGh1Yi5pby9vZGluLXRpY3RhY3RvZS9cIj5UaWMtVGFjLVRvZTwvYT4nO1xyXG4gICAgcHJvamVjdDIuaW5uZXJIVE1MID1cclxuICAgICAgJzxhIGhyZWY9XCJodHRwczovL3B5YWVzb25lcC5naXRodWIuaW8vb2Rpbi1saWJyYXJ5L1wiPkxpYnJhcnk8L2E+JztcclxuICAgIHByb2plY3QzLmlubmVySFRNTCA9XHJcbiAgICAgICc8YSBocmVmPVwiaHR0cHM6Ly9weWFlc29uZXAuZ2l0aHViLmlvL29kaW4tYWRtaW4tZGFzaGJvYXJkL1wiPkFkbWluIERhc2hib2FyZDwvYT4nO1xyXG4gICAgcHJvamVjdDQuaW5uZXJIVE1MID1cclxuICAgICAgJzxhIGhyZWY9XCJodHRwczovL3B5YWVzb25lcC5naXRodWIuaW8vb2Rpbi1zaWdudXBmb3JtL1wiPlNpZ251cCBGb3JtPC9hPic7XHJcbiAgICBwcm9qZWN0NS5pbm5lckhUTUwgPVxyXG4gICAgICAnPGEgaHJlZj1cImh0dHBzOi8vcHlhZXNvbmVwLmdpdGh1Yi5pby9vZGluLWNhbGN1bGF0b3IvXCI+Q2FsY3VsYXRvcjwvYT4nO1xyXG4gICAgcHJvamVjdDYuaW5uZXJIVE1MID1cclxuICAgICAgJzxhIGhyZWY9XCJodHRwczovL3B5YWVzb25lcC5naXRodWIuaW8vb2Rpbi1ldGNoYXNrZXRjaC9cIj5FdGNoLUEtU2tldGNoPC9hPic7XHJcblxyXG4gICAgbmF2aTFMaW5rLmlubmVyVGV4dCA9IFwiSG9tZVwiO1xyXG4gICAgbmF2aTJMaW5rLmlubmVyVGV4dCA9IFwiTWVudVwiO1xyXG4gICAgbmF2aTNMaW5rLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xyXG5cclxuICAgIGdpdGh1Ykljb24uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1B5YWVzb25lUFwiO1xyXG4gICAgbGlua2VkaW5JY29uLmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9weWFlc29uZXAvXCI7XHJcbiAgICBmYWNlYm9va0ljb24uaHJlZiA9XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTEwMDAwODA0OTYwMDkxOVwiO1xyXG4gICAgZ2l0aHViSWNvbi5pbm5lckhUTUwgPVxyXG4gICAgICAnPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvZ2l0aHViLW1hcmstd2hpdGUucG5nXCIgY2xhc3M9XCJpY29uXCI+JztcclxuICAgIGxpbmtlZGluSWNvbi5pbm5lckhUTUwgPVxyXG4gICAgICAnPGltZyBzcmM9XCIuLi9hc3NldHMvaWNvbnMvTEktSW4tQnVnLnBuZ1wiIGNsYXNzPVwiaWNvblwiPic7XHJcbiAgICBmYWNlYm9va0ljb24uaW5uZXJIVE1MID1cclxuICAgICAgJzxpbWcgc3JjPVwiLi4vYXNzZXRzL2ljb25zL2ZfbG9nb19SR0ItV2hpdGVfNTgucG5nXCIgY2xhc3M9XCJpY29uXCI+JztcclxuXHJcbiAgICBuYXZpMUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgY2xlYXJlZFBhZ2UgPSBjbGVhckNvbnRlbnQoKTtcclxuICAgICAgY2xlYXJlZFBhZ2UuY2xlYXIoKTtcclxuICAgICAgY29uc3QgcGFnZSA9IHJlbmRlckhvbWUoKTtcclxuICAgICAgcGFnZS5yZW5kZXIoKTtcclxuICAgICAgaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIGhvbWUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIG1lbnUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgICBjb250YWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIGNvbnRhY3Quc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgfSk7XHJcbiAgICBuYXZpMkxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgY2xlYXJlZFBhZ2UgPSBjbGVhckNvbnRlbnQoKTtcclxuICAgICAgY2xlYXJlZFBhZ2UuY2xlYXIoKTtcclxuICAgICAgY29uc3QgcGFnZSA9IHJlbmRlck1lbnUoKTtcclxuICAgICAgcGFnZS5yZW5kZXIoKTtcclxuICAgICAgbWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIG1lbnUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgICBob21lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIGhvbWUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgICBjb250YWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIGNvbnRhY3Quc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgfSk7XHJcbiAgICBuYXZpM0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgY2xlYXJlZFBhZ2UgPSBjbGVhckNvbnRlbnQoKTtcclxuICAgICAgY2xlYXJlZFBhZ2UuY2xlYXIoKTtcclxuICAgICAgY29uc3QgcGFnZSA9IHJlbmRlckNvbnRhY3QoKTtcclxuICAgICAgcGFnZS5yZW5kZXIoKTtcclxuICAgICAgY29udGFjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XHJcbiAgICAgIGNvbnRhY3Quc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgMjAlKVwiO1xyXG4gICAgICBob21lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIGhvbWUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgICBtZW51LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaHNsKDAsIDAlLCAyMCUpXCI7XHJcbiAgICAgIG1lbnUuc3R5bGUuY29sb3IgPSBcImhzbCgwLCAwJSwgODAlKVwiO1xyXG4gICAgfSk7XHJcbiAgfSkoKTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9