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

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOG_EMOJI\": () => (/* binding */ DOG_EMOJI),\n/* harmony export */   \"DOG_LABEL\": () => (/* binding */ DOG_LABEL),\n/* harmony export */   \"CAT_EMOJI\": () => (/* binding */ CAT_EMOJI),\n/* harmony export */   \"MICE_TO_GET_LIVE\": () => (/* binding */ MICE_TO_GET_LIVE),\n/* harmony export */   \"TABLE_DIMENSION_SIZE\": () => (/* binding */ TABLE_DIMENSION_SIZE),\n/* harmony export */   \"DOGS_MULTIPLIER\": () => (/* binding */ DOGS_MULTIPLIER),\n/* harmony export */   \"TD_TAG\": () => (/* binding */ TD_TAG),\n/* harmony export */   \"catMeowSound\": () => (/* binding */ catMeowSound),\n/* harmony export */   \"catHissSound\": () => (/* binding */ catHissSound),\n/* harmony export */   \"catGetLive\": () => (/* binding */ catGetLive)\n/* harmony export */ });\nconst DOG_EMOJI = \"🐶\";\nconst DOG_LABEL = \"dog\";\n\nconst CAT_EMOJI = \"🐱\";\nconst MICE_TO_GET_LIVE = 10;\n\nconst TABLE_DIMENSION_SIZE = 10;\nconst DOGS_MULTIPLIER = 1;\nconst TD_TAG = \"<td>🐭</td>\";\n\nconst catMeowSound = new Audio(\"./src/sounds/meow.mp3\");\nconst catHissSound = new Audio(\"./src/sounds/catHiss.mp3\");\nconst catGetLive = new Audio(\"./src/sounds/catGetLive.mp3\");\n\n\n//# sourceURL=webpack://query-test/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\n\nlet miceCaught = 0;\nlet lives = 2;\n\nlet tableEl = null;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"Loaded\");\n  renderLives();\n  createTable();\n  addDraggableItem(_constants__WEBPACK_IMPORTED_MODULE_1__.CAT_EMOJI);\n  deployDogs();\n  addDragAndDropHandler();\n});\n\nconst deployDogs = () => {\n  const allAvailableCells = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$All)(\"td\");\n\n  for (\n    let dogsCount = 0;\n    dogsCount < _constants__WEBPACK_IMPORTED_MODULE_1__.TABLE_DIMENSION_SIZE * _constants__WEBPACK_IMPORTED_MODULE_1__.DOGS_MULTIPLIER;\n    dogsCount++\n  ) {\n    const dogPosition = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)();\n    console.log(\"dogPosition\", dogPosition);\n    allAvailableCells[dogPosition].dataset[_constants__WEBPACK_IMPORTED_MODULE_1__.DOG_LABEL] = \"yes\";\n  }\n};\n\nconst renderLives = () => {\n  const livesCountEl = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(\"#lives-count\");\n  livesCountEl.innerText = new Array(lives).fill(\"❤️\").join(\"\");\n};\n\nconst createTable = () => {\n  tableEl = document.createElement(\"table\");\n  const rowBody = new Array(_constants__WEBPACK_IMPORTED_MODULE_1__.TABLE_DIMENSION_SIZE).fill(_constants__WEBPACK_IMPORTED_MODULE_1__.TD_TAG).join(\"\");\n  const row = `<tr>${rowBody}</tr>`;\n  tableEl.innerHTML = new Array(_constants__WEBPACK_IMPORTED_MODULE_1__.TABLE_DIMENSION_SIZE).fill(row).join(\"\");\n  document.body.append(tableEl);\n};\n\nconst addDraggableItem = (item) => {\n  const firstCell = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(\"td\");\n  firstCell.innerHTML = `<div id=\"drag-me\" draggable=\"true\">${item}</div>`;\n};\n\nconst updateScoreSection = (miceCaught) => {\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(\"#mice-count\").innerText = miceCaught;\n};\n\nconst endGame = () => {\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(\"#game-over\").style.display = \"block\";\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(\"#drag-me\").remove();\n};\n\nconst revealDogAtElement = (el) => (el.innerText = _constants__WEBPACK_IMPORTED_MODULE_1__.DOG_EMOJI);\nconst moveToInitialPosition = () => {\n  const cat = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(\"#drag-me\");\n  const firstTd = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(\"td\");\n  firstTd.append(cat);\n};\n\nconst onMouseEatHandler = () => {\n  miceCaught++;\n  if (miceCaught % _constants__WEBPACK_IMPORTED_MODULE_1__.MICE_TO_GET_LIVE !== 0) {\n    _constants__WEBPACK_IMPORTED_MODULE_1__.catMeowSound.play();\n  }\n  updateScoreSection(miceCaught);\n};\n\nconst onCatDeathHandler = () => {\n  lives--;\n  renderLives();\n  _constants__WEBPACK_IMPORTED_MODULE_1__.catHissSound.play();\n};\n\nconst onGetNewLive = () => {\n  lives++;\n  renderLives();\n  _constants__WEBPACK_IMPORTED_MODULE_1__.catGetLive.play();\n};\n\nconst dragOverHandler = (e) => e.preventDefault();\nconst dropHandler = (e) => {\n  const dropZoneElement = e.target;\n  const isMouseMutantZone = dropZoneElement.dataset[_constants__WEBPACK_IMPORTED_MODULE_1__.DOG_LABEL] === \"yes\";\n  if (isMouseMutantZone) {\n    moveToInitialPosition();\n    revealDogAtElement(dropZoneElement);\n    onCatDeathHandler();\n\n    if (lives === 0) {\n      endGame();\n    }\n    return;\n  }\n  if (dropZoneElement.innerText) {\n    dropZoneElement.innerText = \"\";\n    onMouseEatHandler();\n\n    if (miceCaught > 0 && miceCaught % _constants__WEBPACK_IMPORTED_MODULE_1__.MICE_TO_GET_LIVE === 0) {\n      onGetNewLive();\n    }\n  }\n\n  dropZoneElement.append((0,_utils__WEBPACK_IMPORTED_MODULE_0__.$)(\"#drag-me\"));\n};\n\nconst addDragAndDropHandler = () => {\n  tableEl.addEventListener(\"dragover\", dragOverHandler);\n  tableEl.addEventListener(\"drop\", dropHandler);\n};\n\n\n//# sourceURL=webpack://query-test/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber),\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$All\": () => (/* binding */ $All)\n/* harmony export */ });\nconst getRandomNumber = () => Math.round(Math.random() * 100);\nconst $ = document.querySelector.bind(document);\nconst $All = document.querySelectorAll.bind(document);\n\n\n//# sourceURL=webpack://query-test/./src/utils.js?");

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