"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/WorkFlow/index.tsx":
/*!***************************************!*\
  !*** ./components/WorkFlow/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ \"./components/WorkFlow/Board.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ \"./components/WorkFlow/Form.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar WorkFlow = function(param) {\n    var isAdmin = param.isAdmin;\n    _s();\n    var formState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.form;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: isAdmin ? \"Welcome to Admin Page\" : \"Wecome to user Page\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"{}\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                positionsAmount: 8,\n                date: formState === null || formState === void 0 ? void 0 : formState.date,\n                isAdmin: isAdmin\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                formState: formState\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(WorkFlow, \"FtxP+EHkBrTLFNHjsSaMO3BssJE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = WorkFlow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkFlow);\nvar _c;\n$RefreshReg$(_c, \"WorkFlow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmtGbG93L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBMEI7QUFDRTtBQUNjO0FBRWhCO0FBRTFCLElBQU1JLFFBQVEsR0FBZ0MsZ0JBQThCO1FBQTNCQyxPQUFPLFNBQVBBLE9BQU87O0lBQ3RELElBQU1DLFNBQVMsR0FBR0osd0RBQVcsQ0FBQyxTQUFDSyxLQUE0QjtlQUFLQSxLQUFLLENBQUNDLElBQUk7S0FBQSxDQUFDO0lBRTNFLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0EsS0FBRzs7a0NBQ0osOERBQUNDLElBQUU7a0NBQUVMLE9BQU8sR0FBRyx1QkFBdUIsR0FBRyxxQkFBcUI7Ozs7OzZCQUFNO2tDQUNwRSw4REFBQ00sUUFBTTtrQ0FBRyxJQUFFOzs7Ozs2QkFBVzs7Ozs7O3FCQUVqQjswQkFDTiw4REFBQ1YsOENBQUs7Z0JBQUNXLGVBQWUsRUFBRSxDQUFDO2dCQUFFQyxJQUFJLEVBQUVQLFNBQVMsYUFBVEEsU0FBUyxXQUFNLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsU0FBUyxDQUFFTyxJQUFJO2dCQUFFUixPQUFPLEVBQUVBLE9BQU87Ozs7O3FCQUFJOzBCQUN0RSw4REFBQ0YsNkNBQUk7Z0JBQUNHLFNBQVMsRUFBRUEsU0FBUzs7Ozs7cUJBQUk7Ozs7OzthQUMxQixDQUNOO0NBQ0g7R0FkS0YsUUFBUTs7UUFDTUYsb0RBQVc7OztBQUR6QkUsS0FBQUEsUUFBUTtBQWdCZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV29ya0Zsb3cvaW5kZXgudHN4P2M5NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vQm9hcmRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFN0YXRlSW50ZXJmYWNlLCBXb3JrRmxvd0ludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5cclxuY29uc3QgV29ya0Zsb3c6IFJlYWN0LkZDPFdvcmtGbG93SW50ZXJmYWNlPiA9ICh7IGlzQWRtaW4gfSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCBmb3JtU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IEdlbmVyYWxTdGF0ZUludGVyZmFjZSkgPT4gc3RhdGUuZm9ybSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8aDE+e2lzQWRtaW4gPyBcIldlbGNvbWUgdG8gQWRtaW4gUGFnZVwiIDogXCJXZWNvbWUgdG8gdXNlciBQYWdlXCJ9PC9oMT5cclxuICAgICAgPGJ1dHRvbj57YHt9YH08L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Qm9hcmQgcG9zaXRpb25zQW1vdW50PXs4fSBkYXRlPXtmb3JtU3RhdGU/LmRhdGV9IGlzQWRtaW49e2lzQWRtaW59IC8+XHJcbiAgICAgIDxGb3JtIGZvcm1TdGF0ZT17Zm9ybVN0YXRlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtGbG93O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb2FyZCIsInVzZVNlbGVjdG9yIiwiRm9ybSIsIldvcmtGbG93IiwiaXNBZG1pbiIsImZvcm1TdGF0ZSIsInN0YXRlIiwiZm9ybSIsImRpdiIsImgxIiwiYnV0dG9uIiwicG9zaXRpb25zQW1vdW50IiwiZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WorkFlow/index.tsx\n"));

/***/ })

});