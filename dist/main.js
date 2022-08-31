/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-home.js */ \"./src/load-home.js\");\n/* harmony import */ var _load_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-menu.js */ \"./src/load-menu.js\");\n\r\n\r\n\r\nwindow.onload = function() {\r\n    (0,_load_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n}\r\n\r\nconst content = document.getElementById(\"content\");\r\nconst homeButton = document.getElementById(\"home\");\r\nconst menuButton = document.getElementById(\"menu\");\r\n\r\nhomeButton.addEventListener(\"click\", function() {\r\n    content.textContent = \"\";\r\n    (0,_load_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})\r\n\r\nmenuButton.addEventListener(\"click\", function() {\r\n    content.textContent = \"\";\r\n    (0,_load_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-home.js":
/*!**************************!*\
  !*** ./src/load-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\n\r\n\r\nfunction loadHome() {\r\n    const content = document.getElementById(\"content\");\r\n    \r\n    // Creating needed elements\r\n    const imageDiv = document.createElement(\"div\");\r\n    const imageTag = document.createElement(\"img\");\r\n\r\n    // Changing the textcontexts of the elements\r\n\r\n    imageDiv.classList.add(\"foto\");\r\n    imageTag.src = \"./images/1.jpg\";\r\n\r\n    // Appending the childs to their parents\r\n\r\n    \r\n    imageDiv.appendChild(imageTag);\r\n    content.appendChild(imageDiv);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-home.js?");

/***/ }),

/***/ "./src/load-menu.js":
/*!**************************!*\
  !*** ./src/load-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n\r\nfunction loadMenu() {\r\n\r\n    const content = document.getElementById(\"content\");\r\n\r\n    const allMeals = document.createElement(\"div\");\r\n    const hamburgerDiv = document.createElement(\"div\");\r\n    const steakDiv = document.createElement(\"div\");\r\n    const meatballsDiv = document.createElement(\"div\");\r\n    const hamburgerImg = document.createElement(\"img\");\r\n    const steakImg = document.createElement(\"img\");\r\n    const meatballsImg = document.createElement(\"img\");\r\n    let hamburgerp = document.createElement(\"p\");\r\n    let steakp = document.createElement(\"p\");\r\n    let meatballsp = document.createElement(\"p\");\r\n\r\n    // Altering the textcontents\r\n\r\n    hamburgerp.textContent = \"Hamburger\";\r\n    steakp.textContent = \"Steak\";\r\n    meatballsp.textContent = \"Meatballs\";\r\n    allMeals.classList.add(\"menus\");\r\n\r\n    // Adjusting the images for every meal\r\n\r\n    hamburgerImg.src = \"./images/hamburger.jpg\";\r\n    steakImg.src = \"./images/steak.jpg\";\r\n    meatballsImg.src = \"./images/meatballs.jpg\";\r\n\r\n    // Appending the childs to the parents\r\n\r\n    \r\n    content.appendChild(allMeals);\r\n\r\n    allMeals.appendChild(hamburgerDiv);\r\n    allMeals.appendChild(steakDiv);\r\n    allMeals.appendChild(meatballsDiv);\r\n\r\n    hamburgerDiv.appendChild(hamburgerImg);\r\n    hamburgerDiv.appendChild(hamburgerp);\r\n\r\n    steakDiv.appendChild(steakImg);\r\n    steakDiv.appendChild(steakp);\r\n\r\n    meatballsDiv.appendChild(meatballsImg);\r\n    meatballsDiv.appendChild(meatballsp);\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-menu.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;