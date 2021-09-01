"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/georgehigbie/personal_projects/edmey-next/components/Header.js\";\n\n\nconst Header = ({\n  title\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n  className: \"jumbotron bg-primary text-center square\",\n  children: title\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 5\n}, undefined);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELGtCQUNYO0FBQUksV0FBUyxFQUFDLHlDQUFkO0FBQUEsWUFDS0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREo7O0FBS0EsaUVBQWVELE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGVteS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzPzZmNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBIZWFkZXIgPSAoe3RpdGxlfSkgPT4gKFxuICAgIDxoMSBjbGFzc05hbWU9XCJqdW1ib3Ryb24gYmctcHJpbWFyeSB0ZXh0LWNlbnRlciBzcXVhcmVcIj5cbiAgICAgICAge3RpdGxlfVxuICAgIDwvaDE+KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Spinner.js":
/*!*******************************!*\
  !*** ./components/Spinner.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/georgehigbie/personal_projects/edmey-next/components/Spinner.js\";\n\n\nconst spin = styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes`\n    100% { \n        transform: rotate(360deg); \n        transform: rotate(360deg); \n    }\n`;\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\n    flex: 1;\n    height: 100vh;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: #000;\n`;\nconst SpinDiv = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`\n    height: 75px;\n    width: 75px;\n    border-radius: 50%;\n    border-top: 75px solid #f00;\n    border-right: 75px solid #0ff;\n    border-bottom: 75px solid #0f0;\n    border-left: 75px solid #00f;\n    animation-name: ${spin};\n    animation-iteration-count: infinite;\n`;\n\nconst Spinner = props => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpinDiv, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NwaW5uZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1HLElBQUksR0FBR0Qsd0RBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUxBO0FBT0EsTUFBTUUsU0FBUyxHQUFHSCw4REFBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUkE7QUFVQSxNQUFNSyxPQUFPLEdBQUdMLDhEQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCRSxJQUFLO0FBQzNCO0FBQ0EsQ0FWQTs7QUFZQSxNQUFNSSxPQUFPLEdBQUlDLEtBQUQsSUFBVztBQUN2QixzQkFDSSw4REFBQyxTQUFEO0FBQUEsMkJBQ0ksOERBQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0FORDs7QUFRQSxpRUFBZUQsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2VkZW15Ly4vY29tcG9uZW50cy9TcGlubmVyLmpzPzY4N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBzcGluID0ga2V5ZnJhbWVzYFxuICAgIDEwMCUgeyBcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxuICAgIH1cbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG5gO1xuXG5jb25zdCBTcGluRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3A6IDc1cHggc29saWQgI2YwMDtcbiAgICBib3JkZXItcmlnaHQ6IDc1cHggc29saWQgIzBmZjtcbiAgICBib3JkZXItYm90dG9tOiA3NXB4IHNvbGlkICMwZjA7XG4gICAgYm9yZGVyLWxlZnQ6IDc1cHggc29saWQgIzAwZjtcbiAgICBhbmltYXRpb24tbmFtZTogJHtzcGlufTtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbmA7XG5cbmNvbnN0IFNwaW5uZXIgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFNwaW5EaXYvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsImtleWZyYW1lcyIsInNwaW4iLCJDb250YWluZXIiLCJkaXYiLCJTcGluRGl2IiwiU3Bpbm5lciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Spinner.js\n");

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Spinner */ \"./components/Spinner.js\");\n\n\nvar _jsxFileName = \"/Users/georgehigbie/personal_projects/edmey-next/pages/test.js\";\n\n\n\n\nconst login = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__.default, {\n      title: 'Login'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsS0FBSyxHQUFHLE1BQU07QUFDaEIsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyx1REFBRDtBQUFRLFdBQUssRUFBRTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsa0JBREo7QUFNSCxDQVBEOztBQVNBLGlFQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRlbXkvLi9wYWdlcy90ZXN0LmpzPzE0MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInO1xuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWRlciB0aXRsZT17J0xvZ2luJ30vPlxuICAgICAgICAgICAgPFNwaW5uZXIvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIlNwaW5uZXIiLCJsb2dpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test.js"));
module.exports = __webpack_exports__;

})();