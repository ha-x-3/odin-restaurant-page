"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["main"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Jost-Regular.woff */ "./src/Jost-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Jost-Bold.woff */ "./src/Jost-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./cafeBackground.jpg */ "./src/cafeBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Jost';
  font-style: normal;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Jost';
  font-style: normal;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
  font-weight: 800;
  font-style: normal;
}

body {
    text-align: center;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #231812;
    backdrop-filter: opacity(50%);
    color: white;
    height: 100vh;
    width: 100%;
    padding: 20px;
    font-family: 'Jost';
    margin: 0;
}

header nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

button {
    background-color: #392b21;
    color: white;
    width: 80%;
    max-width: 200px;
    padding: 10px;
    margin: 5px;
    border-radius: 6px;
    box-shadow: 1px 1px 1px 1px black;
}

img {
    border-radius: 50%;
    box-shadow: 1px 1px 1px 1px black;
    width: 100%;
    max-width: 300px;
}

figcaption {
    font-size: small;
}

a {
    text-decoration: none;
    color: white;
}

footer {
    width: 100%;
    margin: 20px;
}

.page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
    max-width: 600px;
    margin: auto;
}

li {
    list-style: none;
    font-weight: 600;
}

#home-text {
    font-size: 20px;
    margin: 10px;
}

#hours-list {
    margin-left: 0;
    font-weight: bold
}

#about-us {
    background-color: rgba(200, 178,165, 0.8);
    box-shadow: 0 0 5px 10px rgba(200, 178,165, 0.8);
    border-radius: 8px;
    margin-top: 20px;
    padding: 20px;
}

#about-us p {
    font-size: 18px;
}

#menu {
    background-color: rgba(200, 178,165, 0.8);
    box-shadow: 0 0 5px 10px rgba(200, 178,165, 0.8);
    border-radius: 8px;
    margin-top: 20px;
    width: 90%;
    max-width: 800px;
    padding: 15px;
}

#top-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

@media (min-width: 896px) {
    body {
        height: 100%;
        width: 90vw;
        padding: 20px;
    }

    header nav {
        justify-content: space-around;
    }

    button {
        width: auto;
        max-width: none;
    }

    .page-content {
        width: 60%;
    }

    #top-div {
        flex-direction: row;
    }
}

@media (min-width: 1024px) {
    #top-div {
        justify-content: space-between;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,2DAA8C;EAC9C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,2DAA2C;EAC3C,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mDAAuC;IACvC,2BAA2B;IAC3B,sBAAsB;IACtB,4BAA4B;IAC5B,yBAAyB;IACzB,6BAA6B;IAC7B,YAAY;IACZ,aAAa;IACb,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,WAAW;IACX,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,cAAc;IACd;AACJ;;AAEA;IACI,yCAAyC;IACzC,gDAAgD;IAChD,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,gDAAgD;IAChD,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;IACV,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI;QACI,YAAY;QACZ,WAAW;QACX,aAAa;IACjB;;IAEA;QACI,6BAA6B;IACjC;;IAEA;QACI,WAAW;QACX,eAAe;IACnB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,8BAA8B;IAClC;AACJ","sourcesContent":["@font-face {\n  font-family: 'Jost';\n  font-style: normal;\n  src: url('./Jost-Regular.woff') format('woff');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Jost';\n  font-style: normal;\n  src: url('./Jost-Bold.woff') format('woff');\n  font-weight: 800;\n  font-style: normal;\n}\n\nbody {\n    text-align: center;\n    background: url('./cafeBackground.jpg');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: #231812;\n    backdrop-filter: opacity(50%);\n    color: white;\n    height: 100vh;\n    width: 100%;\n    padding: 20px;\n    font-family: 'Jost';\n    margin: 0;\n}\n\nheader nav {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\nbutton {\n    background-color: #392b21;\n    color: white;\n    width: 80%;\n    max-width: 200px;\n    padding: 10px;\n    margin: 5px;\n    border-radius: 6px;\n    box-shadow: 1px 1px 1px 1px black;\n}\n\nimg {\n    border-radius: 50%;\n    box-shadow: 1px 1px 1px 1px black;\n    width: 100%;\n    max-width: 300px;\n}\n\nfigcaption {\n    font-size: small;\n}\n\na {\n    text-decoration: none;\n    color: white;\n}\n\nfooter {\n    width: 100%;\n    margin: 20px;\n}\n\n.page-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 90vw;\n    max-width: 600px;\n    margin: auto;\n}\n\nli {\n    list-style: none;\n    font-weight: 600;\n}\n\n#home-text {\n    font-size: 20px;\n    margin: 10px;\n}\n\n#hours-list {\n    margin-left: 0;\n    font-weight: bold\n}\n\n#about-us {\n    background-color: rgba(200, 178,165, 0.8);\n    box-shadow: 0 0 5px 10px rgba(200, 178,165, 0.8);\n    border-radius: 8px;\n    margin-top: 20px;\n    padding: 20px;\n}\n\n#about-us p {\n    font-size: 18px;\n}\n\n#menu {\n    background-color: rgba(200, 178,165, 0.8);\n    box-shadow: 0 0 5px 10px rgba(200, 178,165, 0.8);\n    border-radius: 8px;\n    margin-top: 20px;\n    width: 90%;\n    max-width: 800px;\n    padding: 15px;\n}\n\n#top-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n}\n\n@media (min-width: 896px) {\n    body {\n        height: 100%;\n        width: 90vw;\n        padding: 20px;\n    }\n\n    header nav {\n        justify-content: space-around;\n    }\n\n    button {\n        width: auto;\n        max-width: none;\n    }\n\n    .page-content {\n        width: 60%;\n    }\n\n    #top-div {\n        flex-direction: row;\n    }\n}\n\n@media (min-width: 1024px) {\n    #top-div {\n        justify-content: space-between;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAboutUsPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    pageContent.id = 'about-us';

    //Create and append heading
    const heading = document.createElement("h1");
    heading.textContent = "About The Cat's Meow Cafe"
    pageContent.appendChild(heading);

    //Create and append hours
    const hours = document.createElement('ul');
    hours.textContent = "Hours";
    hours.id = "hours-list";
    const sunday = document.createElement('li');
	sunday.textContent = 'Sun: 10am - 6pm';
	hours.appendChild(sunday);
    const monday = document.createElement('li');
	monday.textContent = 'Mon: 10am - 8pm';
	hours.appendChild(monday);
    const tuesday = document.createElement("li");
    tuesday.textContent = "Tues: 10am - 8pm";
    hours.appendChild(tuesday);
    const wednesday = document.createElement('li');
	wednesday.textContent = 'Wed: 10am - 8pm';
	hours.appendChild(wednesday);
    const thursday = document.createElement('li');
	thursday.textContent = 'Thurs: 10am - 8pm';
	hours.appendChild(thursday);
    const friday = document.createElement('li');
	friday.textContent = 'Fri: 10am - 10pm';
	hours.appendChild(friday);
    const saturday = document.createElement('li');
	saturday.textContent = 'Sat: 10am - 10pm';
	hours.appendChild(saturday);
    pageContent.appendChild(hours);

    //Create and append address
    const addressDiv = document.createElement('div');
    const addressHeader = document.createElement('h3');
    addressHeader.textContent = "Address";
    const address = document.createElement('p');
    address.textContent = 'Located at: 123 Rainey St., Arlen, TX 73104';
    addressDiv.append(addressHeader, address);
    pageContent.appendChild(addressDiv);

    //Create and append about us
    const aboutUsDiv = document.createElement('div');
    const aboutUsHeading = document.createElement('h3');
    aboutUsHeading.textContent = "About Us";
    const aboutUs = document.createElement('p');
    aboutUs.textContent =
		"Welcome to The Cat's Meow Cafe, where coffee meets cuddles! Nestled in the heart of the city, we offer a unique and cozy environment where cat lovers can enjoy a delicious cup of coffee and mouthwatering sandwiches while mingling with our resident feline friends. Our mission is to provide a purrfect sanctuary for both humans and cats alike, creating memorable moments and endless purrs. So, whether you're looking for a peaceful place to unwind or some playful paws to keep you company, The Cat's Meow Cafe is the ultimate destination for all your caffeinated and cat-loving needs. Come join the purrty!";
    aboutUsDiv.append(aboutUsHeading, aboutUs);
    pageContent.appendChild(aboutUsDiv);

    content.appendChild(pageContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutUsPage);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _catCafe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catCafe.jpg */ "./src/catCafe.jpg");


const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to The Cat's Meow Cafe";
    pageContent.appendChild(headline);

    //Create and append image figure and caption
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const imgCaption = document.createElement('figcaption');
    image.src = _catCafe_jpg__WEBPACK_IMPORTED_MODULE_0__;
    image.height = '300';
    imgCaption.innerHTML = 
        'Photo by <a href="https://unsplash.com/@rebaspike?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Reba Spike</a> on <a href="https://unsplash.com/photos/black-cat-on-brown-wooden-table-xxIyFBpcDuk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>';
    figure.appendChild(image);
    figure.appendChild(imgCaption);
    pageContent.appendChild(figure);  

    //Create and append text content
    const text = document.createElement('p');
    text.textContent =
		"Indulge in the purrfect blend of coffee and comfort at The Cat's Meow Cafe! Enjoy delicious sandwiches while making feline friends. Where every sip and bite is the cat's whiskers!";
    text.id = "home-text";

    pageContent.appendChild(text);

    content.appendChild(pageContent);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _aboutUs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutUs.js */ "./src/aboutUs.js");





(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

function clearContent() {
    content.innerHTML = '';
}

const content = document.querySelector('#content');
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutUsButton = document.querySelector('#aboutUs-button');

homeButton.addEventListener('click', () => {
	clearContent();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

menuButton.addEventListener('click', () => {
	clearContent();
	(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

aboutUsButton.addEventListener('click', () => {
	clearContent();
	(0,_aboutUs_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMenuPage = () => {
	const content = document.querySelector('#content');
	const pageContent = document.createElement('div');
	pageContent.classList.add('page-content');

	//Create menu div
	const menuDiv = document.createElement('div');
	menuDiv.id = 'menu';

	//Create and append headline
	const menuHeadline = document.createElement('h1');
	menuHeadline.textContent = 'Menu';
	menuDiv.appendChild(menuHeadline);

	//Create and append drinks
	const drinksDiv = document.createElement('div');
	const drinksHeadline = document.createElement('h3');
	drinksHeadline.textContent = 'Drinks';
	//Drink 1
	const drink1Div = document.createElement('div');
	const drink1Name = document.createElement('h5');
	drink1Name.textContent = 'Whisker Whirl Coffee';
	const drink1Desc = document.createElement('p');
	drink1Desc.textContent =
		'A smooth blend of Arabica beans with hints of caramel and chocolate, topped with frothy milk and a sprinkle of cinnamon.';
	const drink1Price = document.createElement('p');
	drink1Price.textContent = 'Price: $4.50';
	drink1Div.append(drinksHeadline, drink1Name, drink1Desc, drink1Price);
	//Drink 2
	const drink2Div = document.createElement('div');
	const drink2Name = document.createElement('h5');
	drink2Name.textContent = 'Purrfect Latte';
	const drink2Desc = document.createElement('p');
	drink2Desc.textContent =
		'Our signature espresso mixed with velvety steamed milk, flavored with vanilla and a touch of honey.';
	const drink2Price = document.createElement('p');
	drink2Price.textContent = 'Price: $5.00';
	drink2Div.append(drink2Name, drink2Desc, drink2Price);
	//Drink 3
	const drink3Div = document.createElement('div');
	const drink3Name = document.createElement('h5');
	drink3Name.textContent = 'Meowchaccino';
	const drink3Desc = document.createElement('p');
	drink3Desc.textContent =
		'Rich and creamy hot chocolate paired with a shot of espresso, topped with whipped cream and chocolate shavings.';
	const drink3Price = document.createElement('p');
	drink3Price.textContent = 'Price: $5.50';
	drink3Div.append(drink3Name, drink3Desc, drink3Price);
	//Drink 4
	const drink4Div = document.createElement('div');
	const drink4Name = document.createElement('h5');
	drink4Name.textContent = 'Kitty Kooler';
	const drink4Desc = document.createElement('p');
	drink4Desc.textContent =
		'Refreshing iced green tea infused with fresh mint and a splash of lemonade, served over ice.';
	const drink4Price = document.createElement('p');
	drink4Price.textContent = 'Price: $4.00';
	drink4Div.append(drink4Name, drink4Desc, drink4Price);
	//Drink 5
	const drink5Div = document.createElement('div');
	const drink5Name = document.createElement('h5');
	drink5Name.textContent = 'Tail-Twitching Tea';
	const drink5Desc = document.createElement('p');
	drink5Desc.textContent =
		'A soothing blend of chamomile and lavender tea, perfect for winding down.';
	const drink5Price = document.createElement('p');
	drink5Price.textContent = 'Price: $3.50';
	drink5Div.append(drink5Name, drink5Desc, drink5Price);

	drinksDiv.append(
		drinksHeadline,
		drink1Div,
		drink2Div,
		drink3Div,
		drink4Div,
		drink5Div
	);

	//Create and append sandwiches
	const sandwichDiv = document.createElement('div');
	const sandwichHeadline = document.createElement('h3');
	sandwichHeadline.textContent = 'Sandwiches';
	//Sandwich 1
	const sandwich1Div = document.createElement('div');
	const sandwich1Name = document.createElement('h5');
	sandwich1Name.textContent = 'Tuna Tabbies Sandwich';
	const sandwich1Desc = document.createElement('p');
	sandwich1Desc.textContent =
		'Flaky tuna salad with crunchy celery and red onions, served on freshly baked whole grain bread.';
	const sandwich1Price = document.createElement('p');
	sandwich1Price.textContent = 'Price: $8.50';
	sandwich1Div.append(
		sandwichHeadline,
		sandwich1Name,
		sandwich1Desc,
		sandwich1Price
	);
	//Sandwich 2
	const sandwich2Div = document.createElement('div');
	const sandwich2Name = document.createElement('h5');
	sandwich2Name.textContent = 'Meatball Meow';
	const sandwich2Desc = document.createElement('p');
	sandwich2Desc.textContent =
		'Juicy homemade meatballs smothered in marinara sauce, topped with melted mozzarella cheese, served on a toasted ciabatta roll.';
	const sandwich2Price = document.createElement('p');
	sandwich2Price.textContent = 'Price: $9.00';
	sandwich2Div.append(sandwich2Name, sandwich2Desc, sandwich2Price);
	//Sandwich 3
	const sandwich3Div = document.createElement('div');
	const sandwich3Name = document.createElement('h5');
	sandwich3Name.textContent = 'Purrfect Veggie Wrap';
	const sandwich3Desc = document.createElement('p');
	sandwich3Desc.textContent =
		'A delightful combination of roasted vegetables, hummus, and mixed greens wrapped in a spinach tortilla.';
	const sandwich3Price = document.createElement('p');
	sandwich3Price.textContent = 'Price: $8.00';
	sandwich3Div.append(sandwich3Name, sandwich3Desc, sandwich3Price);
	//Sandwich 4
	const sandwich4Div = document.createElement('div');
	const sandwich4Name = document.createElement('h5');
	sandwich4Name.textContent = 'Chicken & Cheddar Chirpwich';
	const sandwich4Desc = document.createElement('p');
	sandwich4Desc.textContent =
		'Grilled chicken breast, sharp cheddar cheese, crisp lettuce, and juicy tomato, drizzled with creamy ranch dressing, served on a toasted sourdough bread.';
	const sandwich4Price = document.createElement('p');
	sandwich4Price.textContent = 'Price: $9.50';
	sandwich4Div.append(sandwich4Name, sandwich4Desc, sandwich4Price);
	//Sandwich 5
	const sandwich5Div = document.createElement('div');
	const sandwich5Name = document.createElement('h5');
	sandwich5Name.textContent = 'Smoked Salmon Siamese';
	const sandwich5Desc = document.createElement('p');
	sandwich5Desc.textContent =
		'Smoked salmon, cream cheese, red onion, and capers on a toasted everything bagel.';
	const sandwich5Price = document.createElement('p');
	sandwich5Price.textContent = 'Price: $10.00';
	sandwich5Div.append(sandwich5Name, sandwich5Desc, sandwich5Price);

	sandwichDiv.append(
		sandwichHeadline,
		sandwich1Div,
		sandwich2Div,
		sandwich3Div,
		sandwich4Div,
		sandwich5Div
	);

	//Create and append desserts
	const dessertDiv = document.createElement('div');
	const dessertHeadline = document.createElement('h3');
	dessertHeadline.textContent = 'Desserts';
	//Dessert 1
	const dessert1Div = document.createElement('div');
	const dessert1Name = document.createElement('h5');
	dessert1Name.textContent = 'Mew-sical Cheesecake';
	const dessert1Desc = document.createElement('p');
	dessert1Desc.textContent =
		'Creamy New York-style cheesecake with a graham cracker crust, topped with mixed berry compote.';
	const dessert1Price = document.createElement('p');
	dessert1Price.textContent = 'Price: $6.00';
	dessert1Div.append(
		dessertHeadline,
		dessert1Name,
		dessert1Desc,
		dessert1Price
	);
	//Dessert 2
	const dessert2Div = document.createElement('div');
	const dessert2Name = document.createElement('h5');
	dessert2Name.textContent = 'Chocolate Chip Cookie Cat';
	const dessert2Desc = document.createElement('p');
	dessert2Desc.textContent =
		'Freshly baked chocolate chip cookie in the shape of a cat, served warm and gooey.';
	const dessert2Price = document.createElement('p');
	dessert2Price.textContent = 'Price: $3.50';
	dessert2Div.append(dessert2Name, dessert2Desc, dessert2Price);
    dessertDiv.append(dessert1Div, dessert2Div);

	//Create page divs
	const topDiv = document.createElement('div');
	topDiv.id = 'top-div';
	topDiv.append(drinksDiv, sandwichDiv);
	const bottomDiv = document.createElement('div');
	bottomDiv.append(dessertDiv);

    //Append divs
	menuDiv.append(topDiv, bottomDiv);
	pageContent.appendChild(menuDiv);
	content.appendChild(pageContent);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);


/***/ }),

/***/ "./src/Jost-Bold.woff":
/*!****************************!*\
  !*** ./src/Jost-Bold.woff ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cf92d06b5b1102f1ed1.woff";

/***/ }),

/***/ "./src/Jost-Regular.woff":
/*!*******************************!*\
  !*** ./src/Jost-Regular.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5439059adc444f3b0d6a.woff";

/***/ }),

/***/ "./src/cafeBackground.jpg":
/*!********************************!*\
  !*** ./src/cafeBackground.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0555ad6206232c959c6e.jpg";

/***/ }),

/***/ "./src/catCafe.jpg":
/*!*************************!*\
  !*** ./src/catCafe.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4963f6d555787f4b6e20.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0pvc3QtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Kb3N0LUJvbGQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vY2FmZUJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0pvc3QnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0pvc3QnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmJvZHkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMxODEyO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogb3BhY2l0eSg1MCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdKb3N0JztcbiAgICBtYXJnaW46IDA7XG59XG5cbmhlYWRlciBuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTJiMjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggYmxhY2s7XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG5maWdjYXB0aW9uIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwdnc7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNob21lLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbiNob3Vycy1saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG4jYWJvdXQtdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAxNzgsMTY1LCAwLjgpO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMTBweCByZ2JhKDIwMCwgMTc4LDE2NSwgMC44KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jYWJvdXQtdXMgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDE3OCwxNjUsIDAuOCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxMHB4IHJnYmEoMjAwLCAxNzgsMTY1LCAwLjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4jdG9wLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDg5NnB4KSB7XG4gICAgYm9keSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgaGVhZGVyIG5hdiB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgfVxuXG4gICAgLnBhZ2UtY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuXG4gICAgI3RvcC1kaXYge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgICN0b3AtZGl2IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJEQUE4QztFQUM5QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyREFBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtREFBdUM7SUFDdkMsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdEQUFnRDtJQUNoRCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdEQUFnRDtJQUNoRCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSw4QkFBOEI7SUFDbEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zdCc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBzcmM6IHVybCgnLi9Kb3N0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0pvc3QnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgc3JjOiB1cmwoJy4vSm9zdC1Cb2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9jYWZlQmFja2dyb3VuZC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMxODEyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IG9wYWNpdHkoNTAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3N0JztcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5MmIyMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggYmxhY2s7XFxufVxcblxcbmltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggMXB4IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG59XFxuXFxuZmlnY2FwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLnBhZ2UtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNob21lLXRleHQge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI2hvdXJzLWxpc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcXG59XFxuXFxuI2Fib3V0LXVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDE3OCwxNjUsIDAuOCk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMTBweCByZ2JhKDIwMCwgMTc4LDE2NSwgMC44KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jYWJvdXQtdXMgcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI21lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMTc4LDE2NSwgMC44KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxMHB4IHJnYmEoMjAwLCAxNzgsMTY1LCAwLjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbiN0b3AtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA4OTZweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgfVxcblxcbiAgICBoZWFkZXIgbmF2IHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgfVxcblxcbiAgICAucGFnZS1jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgIH1cXG5cXG4gICAgI3RvcC1kaXYge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgICN0b3AtZGl2IHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVBYm91dFVzUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xuICAgIHBhZ2VDb250ZW50LmlkID0gJ2Fib3V0LXVzJztcblxuICAgIC8vQ3JlYXRlIGFuZCBhcHBlbmQgaGVhZGluZ1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWJvdXQgVGhlIENhdCdzIE1lb3cgQ2FmZVwiXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAvL0NyZWF0ZSBhbmQgYXBwZW5kIGhvdXJzXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICAgIGhvdXJzLmlkID0gXCJob3Vycy1saXN0XCI7XG4gICAgY29uc3Qgc3VuZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0c3VuZGF5LnRleHRDb250ZW50ID0gJ1N1bjogMTBhbSAtIDZwbSc7XG5cdGhvdXJzLmFwcGVuZENoaWxkKHN1bmRheSk7XG4gICAgY29uc3QgbW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0bW9uZGF5LnRleHRDb250ZW50ID0gJ01vbjogMTBhbSAtIDhwbSc7XG5cdGhvdXJzLmFwcGVuZENoaWxkKG1vbmRheSk7XG4gICAgY29uc3QgdHVlc2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0dWVzZGF5LnRleHRDb250ZW50ID0gXCJUdWVzOiAxMGFtIC0gOHBtXCI7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQodHVlc2RheSk7XG4gICAgY29uc3Qgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0d2VkbmVzZGF5LnRleHRDb250ZW50ID0gJ1dlZDogMTBhbSAtIDhwbSc7XG5cdGhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheSk7XG4gICAgY29uc3QgdGh1cnNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHR0aHVyc2RheS50ZXh0Q29udGVudCA9ICdUaHVyczogMTBhbSAtIDhwbSc7XG5cdGhvdXJzLmFwcGVuZENoaWxkKHRodXJzZGF5KTtcbiAgICBjb25zdCBmcmlkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRmcmlkYXkudGV4dENvbnRlbnQgPSAnRnJpOiAxMGFtIC0gMTBwbSc7XG5cdGhvdXJzLmFwcGVuZENoaWxkKGZyaWRheSk7XG4gICAgY29uc3Qgc2F0dXJkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRzYXR1cmRheS50ZXh0Q29udGVudCA9ICdTYXQ6IDEwYW0gLSAxMHBtJztcblx0aG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXkpO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIC8vQ3JlYXRlIGFuZCBhcHBlbmQgYWRkcmVzc1xuICAgIGNvbnN0IGFkZHJlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRyZXNzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhZGRyZXNzSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGRyZXNzXCI7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ0xvY2F0ZWQgYXQ6IDEyMyBSYWluZXkgU3QuLCBBcmxlbiwgVFggNzMxMDQnO1xuICAgIGFkZHJlc3NEaXYuYXBwZW5kKGFkZHJlc3NIZWFkZXIsIGFkZHJlc3MpO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3NEaXYpO1xuXG4gICAgLy9DcmVhdGUgYW5kIGFwcGVuZCBhYm91dCB1c1xuICAgIGNvbnN0IGFib3V0VXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhYm91dFVzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYWJvdXRVc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFVzLnRleHRDb250ZW50ID1cblx0XHRcIldlbGNvbWUgdG8gVGhlIENhdCdzIE1lb3cgQ2FmZSwgd2hlcmUgY29mZmVlIG1lZXRzIGN1ZGRsZXMhIE5lc3RsZWQgaW4gdGhlIGhlYXJ0IG9mIHRoZSBjaXR5LCB3ZSBvZmZlciBhIHVuaXF1ZSBhbmQgY296eSBlbnZpcm9ubWVudCB3aGVyZSBjYXQgbG92ZXJzIGNhbiBlbmpveSBhIGRlbGljaW91cyBjdXAgb2YgY29mZmVlIGFuZCBtb3V0aHdhdGVyaW5nIHNhbmR3aWNoZXMgd2hpbGUgbWluZ2xpbmcgd2l0aCBvdXIgcmVzaWRlbnQgZmVsaW5lIGZyaWVuZHMuIE91ciBtaXNzaW9uIGlzIHRvIHByb3ZpZGUgYSBwdXJyZmVjdCBzYW5jdHVhcnkgZm9yIGJvdGggaHVtYW5zIGFuZCBjYXRzIGFsaWtlLCBjcmVhdGluZyBtZW1vcmFibGUgbW9tZW50cyBhbmQgZW5kbGVzcyBwdXJycy4gU28sIHdoZXRoZXIgeW91J3JlIGxvb2tpbmcgZm9yIGEgcGVhY2VmdWwgcGxhY2UgdG8gdW53aW5kIG9yIHNvbWUgcGxheWZ1bCBwYXdzIHRvIGtlZXAgeW91IGNvbXBhbnksIFRoZSBDYXQncyBNZW93IENhZmUgaXMgdGhlIHVsdGltYXRlIGRlc3RpbmF0aW9uIGZvciBhbGwgeW91ciBjYWZmZWluYXRlZCBhbmQgY2F0LWxvdmluZyBuZWVkcy4gQ29tZSBqb2luIHRoZSBwdXJydHkhXCI7XG4gICAgYWJvdXRVc0Rpdi5hcHBlbmQoYWJvdXRVc0hlYWRpbmcsIGFib3V0VXMpO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXNEaXYpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFib3V0VXNQYWdlO1xuIiwiaW1wb3J0IENhdENhZmUgZnJvbSAnLi9jYXRDYWZlLmpwZyc7XG5cbmNvbnN0IGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncGFnZS1jb250ZW50Jyk7XG5cbiAgICAvL0NyZWF0ZSBhbmQgYXBwZW5kIGhlYWRsaW5lXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIFRoZSBDYXQncyBNZW93IENhZmVcIjtcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgICAvL0NyZWF0ZSBhbmQgYXBwZW5kIGltYWdlIGZpZ3VyZSBhbmQgY2FwdGlvblxuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ3VyZScpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1nQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcbiAgICBpbWFnZS5zcmMgPSBDYXRDYWZlO1xuICAgIGltYWdlLmhlaWdodCA9ICczMDAnO1xuICAgIGltZ0NhcHRpb24uaW5uZXJIVE1MID0gXG4gICAgICAgICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQHJlYmFzcGlrZT91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIj5SZWJhIFNwaWtlPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2JsYWNrLWNhdC1vbi1icm93bi13b29kZW4tdGFibGUteHhJeUZCcGNEdWs/dXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHQmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fc291cmNlPXVuc3BsYXNoXCI+VW5zcGxhc2g8L2E+JztcbiAgICBmaWd1cmUuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGZpZ3VyZS5hcHBlbmRDaGlsZChpbWdDYXB0aW9uKTtcbiAgICBwYWdlQ29udGVudC5hcHBlbmRDaGlsZChmaWd1cmUpOyAgXG5cbiAgICAvL0NyZWF0ZSBhbmQgYXBwZW5kIHRleHQgY29udGVudFxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9XG5cdFx0XCJJbmR1bGdlIGluIHRoZSBwdXJyZmVjdCBibGVuZCBvZiBjb2ZmZWUgYW5kIGNvbWZvcnQgYXQgVGhlIENhdCdzIE1lb3cgQ2FmZSEgRW5qb3kgZGVsaWNpb3VzIHNhbmR3aWNoZXMgd2hpbGUgbWFraW5nIGZlbGluZSBmcmllbmRzLiBXaGVyZSBldmVyeSBzaXAgYW5kIGJpdGUgaXMgdGhlIGNhdCdzIHdoaXNrZXJzIVwiO1xuICAgIHRleHQuaWQgPSBcImhvbWUtdGV4dFwiO1xuXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IGNyZWF0ZU1lbnVQYWdlIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY3JlYXRlQWJvdXRVc1BhZ2UgZnJvbSAnLi9hYm91dFVzLmpzJztcblxuY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlKCk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xufVxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idXR0b24nKTtcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idXR0b24nKTtcbmNvbnN0IGFib3V0VXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRVcy1idXR0b24nKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Y2xlYXJDb250ZW50KCk7XG4gICAgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlKCk7XG59KTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Y2xlYXJDb250ZW50KCk7XG5cdGNyZWF0ZU1lbnVQYWdlKCk7XG59KTtcblxuYWJvdXRVc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Y2xlYXJDb250ZW50KCk7XG5cdGNyZWF0ZUFib3V0VXNQYWdlKCk7XG59KTsiLCJjb25zdCBjcmVhdGVNZW51UGFnZSA9ICgpID0+IHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cdGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHBhZ2VDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtY29udGVudCcpO1xuXG5cdC8vQ3JlYXRlIG1lbnUgZGl2XG5cdGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bWVudURpdi5pZCA9ICdtZW51JztcblxuXHQvL0NyZWF0ZSBhbmQgYXBwZW5kIGhlYWRsaW5lXG5cdGNvbnN0IG1lbnVIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5cdG1lbnVIZWFkbGluZS50ZXh0Q29udGVudCA9ICdNZW51Jztcblx0bWVudURpdi5hcHBlbmRDaGlsZChtZW51SGVhZGxpbmUpO1xuXG5cdC8vQ3JlYXRlIGFuZCBhcHBlbmQgZHJpbmtzXG5cdGNvbnN0IGRyaW5rc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBkcmlua3NIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5cdGRyaW5rc0hlYWRsaW5lLnRleHRDb250ZW50ID0gJ0RyaW5rcyc7XG5cdC8vRHJpbmsgMVxuXHRjb25zdCBkcmluazFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgZHJpbmsxTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdGRyaW5rMU5hbWUudGV4dENvbnRlbnQgPSAnV2hpc2tlciBXaGlybCBDb2ZmZWUnO1xuXHRjb25zdCBkcmluazFEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkcmluazFEZXNjLnRleHRDb250ZW50ID1cblx0XHQnQSBzbW9vdGggYmxlbmQgb2YgQXJhYmljYSBiZWFucyB3aXRoIGhpbnRzIG9mIGNhcmFtZWwgYW5kIGNob2NvbGF0ZSwgdG9wcGVkIHdpdGggZnJvdGh5IG1pbGsgYW5kIGEgc3ByaW5rbGUgb2YgY2lubmFtb24uJztcblx0Y29uc3QgZHJpbmsxUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGRyaW5rMVByaWNlLnRleHRDb250ZW50ID0gJ1ByaWNlOiAkNC41MCc7XG5cdGRyaW5rMURpdi5hcHBlbmQoZHJpbmtzSGVhZGxpbmUsIGRyaW5rMU5hbWUsIGRyaW5rMURlc2MsIGRyaW5rMVByaWNlKTtcblx0Ly9EcmluayAyXG5cdGNvbnN0IGRyaW5rMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBkcmluazJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0ZHJpbmsyTmFtZS50ZXh0Q29udGVudCA9ICdQdXJyZmVjdCBMYXR0ZSc7XG5cdGNvbnN0IGRyaW5rMkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGRyaW5rMkRlc2MudGV4dENvbnRlbnQgPVxuXHRcdCdPdXIgc2lnbmF0dXJlIGVzcHJlc3NvIG1peGVkIHdpdGggdmVsdmV0eSBzdGVhbWVkIG1pbGssIGZsYXZvcmVkIHdpdGggdmFuaWxsYSBhbmQgYSB0b3VjaCBvZiBob25leS4nO1xuXHRjb25zdCBkcmluazJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0ZHJpbmsyUHJpY2UudGV4dENvbnRlbnQgPSAnUHJpY2U6ICQ1LjAwJztcblx0ZHJpbmsyRGl2LmFwcGVuZChkcmluazJOYW1lLCBkcmluazJEZXNjLCBkcmluazJQcmljZSk7XG5cdC8vRHJpbmsgM1xuXHRjb25zdCBkcmluazNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgZHJpbmszTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdGRyaW5rM05hbWUudGV4dENvbnRlbnQgPSAnTWVvd2NoYWNjaW5vJztcblx0Y29uc3QgZHJpbmszRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0ZHJpbmszRGVzYy50ZXh0Q29udGVudCA9XG5cdFx0J1JpY2ggYW5kIGNyZWFteSBob3QgY2hvY29sYXRlIHBhaXJlZCB3aXRoIGEgc2hvdCBvZiBlc3ByZXNzbywgdG9wcGVkIHdpdGggd2hpcHBlZCBjcmVhbSBhbmQgY2hvY29sYXRlIHNoYXZpbmdzLic7XG5cdGNvbnN0IGRyaW5rM1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkcmluazNQcmljZS50ZXh0Q29udGVudCA9ICdQcmljZTogJDUuNTAnO1xuXHRkcmluazNEaXYuYXBwZW5kKGRyaW5rM05hbWUsIGRyaW5rM0Rlc2MsIGRyaW5rM1ByaWNlKTtcblx0Ly9EcmluayA0XG5cdGNvbnN0IGRyaW5rNERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBkcmluazROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0ZHJpbms0TmFtZS50ZXh0Q29udGVudCA9ICdLaXR0eSBLb29sZXInO1xuXHRjb25zdCBkcmluazREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkcmluazREZXNjLnRleHRDb250ZW50ID1cblx0XHQnUmVmcmVzaGluZyBpY2VkIGdyZWVuIHRlYSBpbmZ1c2VkIHdpdGggZnJlc2ggbWludCBhbmQgYSBzcGxhc2ggb2YgbGVtb25hZGUsIHNlcnZlZCBvdmVyIGljZS4nO1xuXHRjb25zdCBkcmluazRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0ZHJpbms0UHJpY2UudGV4dENvbnRlbnQgPSAnUHJpY2U6ICQ0LjAwJztcblx0ZHJpbms0RGl2LmFwcGVuZChkcmluazROYW1lLCBkcmluazREZXNjLCBkcmluazRQcmljZSk7XG5cdC8vRHJpbmsgNVxuXHRjb25zdCBkcmluazVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgZHJpbms1TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdGRyaW5rNU5hbWUudGV4dENvbnRlbnQgPSAnVGFpbC1Ud2l0Y2hpbmcgVGVhJztcblx0Y29uc3QgZHJpbms1RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0ZHJpbms1RGVzYy50ZXh0Q29udGVudCA9XG5cdFx0J0Egc29vdGhpbmcgYmxlbmQgb2YgY2hhbW9taWxlIGFuZCBsYXZlbmRlciB0ZWEsIHBlcmZlY3QgZm9yIHdpbmRpbmcgZG93bi4nO1xuXHRjb25zdCBkcmluazVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0ZHJpbms1UHJpY2UudGV4dENvbnRlbnQgPSAnUHJpY2U6ICQzLjUwJztcblx0ZHJpbms1RGl2LmFwcGVuZChkcmluazVOYW1lLCBkcmluazVEZXNjLCBkcmluazVQcmljZSk7XG5cblx0ZHJpbmtzRGl2LmFwcGVuZChcblx0XHRkcmlua3NIZWFkbGluZSxcblx0XHRkcmluazFEaXYsXG5cdFx0ZHJpbmsyRGl2LFxuXHRcdGRyaW5rM0Rpdixcblx0XHRkcmluazREaXYsXG5cdFx0ZHJpbms1RGl2XG5cdCk7XG5cblx0Ly9DcmVhdGUgYW5kIGFwcGVuZCBzYW5kd2ljaGVzXG5cdGNvbnN0IHNhbmR3aWNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IHNhbmR3aWNoSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRzYW5kd2ljaEhlYWRsaW5lLnRleHRDb250ZW50ID0gJ1NhbmR3aWNoZXMnO1xuXHQvL1NhbmR3aWNoIDFcblx0Y29uc3Qgc2FuZHdpY2gxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IHNhbmR3aWNoMU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXHRzYW5kd2ljaDFOYW1lLnRleHRDb250ZW50ID0gJ1R1bmEgVGFiYmllcyBTYW5kd2ljaCc7XG5cdGNvbnN0IHNhbmR3aWNoMURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHNhbmR3aWNoMURlc2MudGV4dENvbnRlbnQgPVxuXHRcdCdGbGFreSB0dW5hIHNhbGFkIHdpdGggY3J1bmNoeSBjZWxlcnkgYW5kIHJlZCBvbmlvbnMsIHNlcnZlZCBvbiBmcmVzaGx5IGJha2VkIHdob2xlIGdyYWluIGJyZWFkLic7XG5cdGNvbnN0IHNhbmR3aWNoMVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRzYW5kd2ljaDFQcmljZS50ZXh0Q29udGVudCA9ICdQcmljZTogJDguNTAnO1xuXHRzYW5kd2ljaDFEaXYuYXBwZW5kKFxuXHRcdHNhbmR3aWNoSGVhZGxpbmUsXG5cdFx0c2FuZHdpY2gxTmFtZSxcblx0XHRzYW5kd2ljaDFEZXNjLFxuXHRcdHNhbmR3aWNoMVByaWNlXG5cdCk7XG5cdC8vU2FuZHdpY2ggMlxuXHRjb25zdCBzYW5kd2ljaDJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3Qgc2FuZHdpY2gyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdHNhbmR3aWNoMk5hbWUudGV4dENvbnRlbnQgPSAnTWVhdGJhbGwgTWVvdyc7XG5cdGNvbnN0IHNhbmR3aWNoMkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHNhbmR3aWNoMkRlc2MudGV4dENvbnRlbnQgPVxuXHRcdCdKdWljeSBob21lbWFkZSBtZWF0YmFsbHMgc21vdGhlcmVkIGluIG1hcmluYXJhIHNhdWNlLCB0b3BwZWQgd2l0aCBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UsIHNlcnZlZCBvbiBhIHRvYXN0ZWQgY2lhYmF0dGEgcm9sbC4nO1xuXHRjb25zdCBzYW5kd2ljaDJQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0c2FuZHdpY2gyUHJpY2UudGV4dENvbnRlbnQgPSAnUHJpY2U6ICQ5LjAwJztcblx0c2FuZHdpY2gyRGl2LmFwcGVuZChzYW5kd2ljaDJOYW1lLCBzYW5kd2ljaDJEZXNjLCBzYW5kd2ljaDJQcmljZSk7XG5cdC8vU2FuZHdpY2ggM1xuXHRjb25zdCBzYW5kd2ljaDNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3Qgc2FuZHdpY2gzTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdHNhbmR3aWNoM05hbWUudGV4dENvbnRlbnQgPSAnUHVycmZlY3QgVmVnZ2llIFdyYXAnO1xuXHRjb25zdCBzYW5kd2ljaDNEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRzYW5kd2ljaDNEZXNjLnRleHRDb250ZW50ID1cblx0XHQnQSBkZWxpZ2h0ZnVsIGNvbWJpbmF0aW9uIG9mIHJvYXN0ZWQgdmVnZXRhYmxlcywgaHVtbXVzLCBhbmQgbWl4ZWQgZ3JlZW5zIHdyYXBwZWQgaW4gYSBzcGluYWNoIHRvcnRpbGxhLic7XG5cdGNvbnN0IHNhbmR3aWNoM1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRzYW5kd2ljaDNQcmljZS50ZXh0Q29udGVudCA9ICdQcmljZTogJDguMDAnO1xuXHRzYW5kd2ljaDNEaXYuYXBwZW5kKHNhbmR3aWNoM05hbWUsIHNhbmR3aWNoM0Rlc2MsIHNhbmR3aWNoM1ByaWNlKTtcblx0Ly9TYW5kd2ljaCA0XG5cdGNvbnN0IHNhbmR3aWNoNERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBzYW5kd2ljaDROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0c2FuZHdpY2g0TmFtZS50ZXh0Q29udGVudCA9ICdDaGlja2VuICYgQ2hlZGRhciBDaGlycHdpY2gnO1xuXHRjb25zdCBzYW5kd2ljaDREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRzYW5kd2ljaDREZXNjLnRleHRDb250ZW50ID1cblx0XHQnR3JpbGxlZCBjaGlja2VuIGJyZWFzdCwgc2hhcnAgY2hlZGRhciBjaGVlc2UsIGNyaXNwIGxldHR1Y2UsIGFuZCBqdWljeSB0b21hdG8sIGRyaXp6bGVkIHdpdGggY3JlYW15IHJhbmNoIGRyZXNzaW5nLCBzZXJ2ZWQgb24gYSB0b2FzdGVkIHNvdXJkb3VnaCBicmVhZC4nO1xuXHRjb25zdCBzYW5kd2ljaDRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0c2FuZHdpY2g0UHJpY2UudGV4dENvbnRlbnQgPSAnUHJpY2U6ICQ5LjUwJztcblx0c2FuZHdpY2g0RGl2LmFwcGVuZChzYW5kd2ljaDROYW1lLCBzYW5kd2ljaDREZXNjLCBzYW5kd2ljaDRQcmljZSk7XG5cdC8vU2FuZHdpY2ggNVxuXHRjb25zdCBzYW5kd2ljaDVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3Qgc2FuZHdpY2g1TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdHNhbmR3aWNoNU5hbWUudGV4dENvbnRlbnQgPSAnU21va2VkIFNhbG1vbiBTaWFtZXNlJztcblx0Y29uc3Qgc2FuZHdpY2g1RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0c2FuZHdpY2g1RGVzYy50ZXh0Q29udGVudCA9XG5cdFx0J1Ntb2tlZCBzYWxtb24sIGNyZWFtIGNoZWVzZSwgcmVkIG9uaW9uLCBhbmQgY2FwZXJzIG9uIGEgdG9hc3RlZCBldmVyeXRoaW5nIGJhZ2VsLic7XG5cdGNvbnN0IHNhbmR3aWNoNVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRzYW5kd2ljaDVQcmljZS50ZXh0Q29udGVudCA9ICdQcmljZTogJDEwLjAwJztcblx0c2FuZHdpY2g1RGl2LmFwcGVuZChzYW5kd2ljaDVOYW1lLCBzYW5kd2ljaDVEZXNjLCBzYW5kd2ljaDVQcmljZSk7XG5cblx0c2FuZHdpY2hEaXYuYXBwZW5kKFxuXHRcdHNhbmR3aWNoSGVhZGxpbmUsXG5cdFx0c2FuZHdpY2gxRGl2LFxuXHRcdHNhbmR3aWNoMkRpdixcblx0XHRzYW5kd2ljaDNEaXYsXG5cdFx0c2FuZHdpY2g0RGl2LFxuXHRcdHNhbmR3aWNoNURpdlxuXHQpO1xuXG5cdC8vQ3JlYXRlIGFuZCBhcHBlbmQgZGVzc2VydHNcblx0Y29uc3QgZGVzc2VydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBkZXNzZXJ0SGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuXHRkZXNzZXJ0SGVhZGxpbmUudGV4dENvbnRlbnQgPSAnRGVzc2VydHMnO1xuXHQvL0Rlc3NlcnQgMVxuXHRjb25zdCBkZXNzZXJ0MURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBkZXNzZXJ0MU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXHRkZXNzZXJ0MU5hbWUudGV4dENvbnRlbnQgPSAnTWV3LXNpY2FsIENoZWVzZWNha2UnO1xuXHRjb25zdCBkZXNzZXJ0MURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGRlc3NlcnQxRGVzYy50ZXh0Q29udGVudCA9XG5cdFx0J0NyZWFteSBOZXcgWW9yay1zdHlsZSBjaGVlc2VjYWtlIHdpdGggYSBncmFoYW0gY3JhY2tlciBjcnVzdCwgdG9wcGVkIHdpdGggbWl4ZWQgYmVycnkgY29tcG90ZS4nO1xuXHRjb25zdCBkZXNzZXJ0MVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkZXNzZXJ0MVByaWNlLnRleHRDb250ZW50ID0gJ1ByaWNlOiAkNi4wMCc7XG5cdGRlc3NlcnQxRGl2LmFwcGVuZChcblx0XHRkZXNzZXJ0SGVhZGxpbmUsXG5cdFx0ZGVzc2VydDFOYW1lLFxuXHRcdGRlc3NlcnQxRGVzYyxcblx0XHRkZXNzZXJ0MVByaWNlXG5cdCk7XG5cdC8vRGVzc2VydCAyXG5cdGNvbnN0IGRlc3NlcnQyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGRlc3NlcnQyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdGRlc3NlcnQyTmFtZS50ZXh0Q29udGVudCA9ICdDaG9jb2xhdGUgQ2hpcCBDb29raWUgQ2F0Jztcblx0Y29uc3QgZGVzc2VydDJEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkZXNzZXJ0MkRlc2MudGV4dENvbnRlbnQgPVxuXHRcdCdGcmVzaGx5IGJha2VkIGNob2NvbGF0ZSBjaGlwIGNvb2tpZSBpbiB0aGUgc2hhcGUgb2YgYSBjYXQsIHNlcnZlZCB3YXJtIGFuZCBnb29leS4nO1xuXHRjb25zdCBkZXNzZXJ0MlByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRkZXNzZXJ0MlByaWNlLnRleHRDb250ZW50ID0gJ1ByaWNlOiAkMy41MCc7XG5cdGRlc3NlcnQyRGl2LmFwcGVuZChkZXNzZXJ0Mk5hbWUsIGRlc3NlcnQyRGVzYywgZGVzc2VydDJQcmljZSk7XG4gICAgZGVzc2VydERpdi5hcHBlbmQoZGVzc2VydDFEaXYsIGRlc3NlcnQyRGl2KTtcblxuXHQvL0NyZWF0ZSBwYWdlIGRpdnNcblx0Y29uc3QgdG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRvcERpdi5pZCA9ICd0b3AtZGl2Jztcblx0dG9wRGl2LmFwcGVuZChkcmlua3NEaXYsIHNhbmR3aWNoRGl2KTtcblx0Y29uc3QgYm90dG9tRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGJvdHRvbURpdi5hcHBlbmQoZGVzc2VydERpdik7XG5cbiAgICAvL0FwcGVuZCBkaXZzXG5cdG1lbnVEaXYuYXBwZW5kKHRvcERpdiwgYm90dG9tRGl2KTtcblx0cGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpdik7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRlbnQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVBhZ2U7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=