"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/WorkFlow/index.tsx":
/*!***************************************!*\
  !*** ./components/WorkFlow/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ \"./components/WorkFlow/Board.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Form */ \"./components/WorkFlow/Form.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar MAX_PLACES = 8;\nvar WorkFlow = function(param) {\n    var isAdmin = param.isAdmin;\n    _s();\n    var currentDate = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        var ref;\n        return (ref = state.form) === null || ref === void 0 ? void 0 : ref.date;\n    });\n    var initialState = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.form;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Board__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                positionsAmount: 8,\n                date: currentDate,\n                isAdmin: isAdmin\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 8\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                initialState: initialState\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(WorkFlow, \"FdA8BJKap5e8k6ZxVsUWiya5Uro=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = WorkFlow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkFlow);\nvar _c;\n$RefreshReg$(_c, \"WorkFlow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmtGbG93L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBbUQ7QUFDdkI7QUFDMkI7QUFPN0I7QUFDMUIsSUFBTUksVUFBVSxHQUFHLENBQUM7QUFFcEIsSUFBTUMsUUFBUSxHQUFnQyxnQkFBaUI7UUFBZEMsT0FBTyxTQUFQQSxPQUFPOztJQUN0RCxJQUFNQyxXQUFXLEdBQUdMLHdEQUFXLENBQUMsU0FBQ00sS0FBSztZQUFLQSxHQUFVO1FBQVZBLE9BQUFBLENBQUFBLEdBQVUsR0FBVkEsS0FBSyxDQUFDQyxJQUFJLGNBQVZELEdBQVUsV0FBTSxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLEdBQVUsQ0FBRUUsSUFBSTtLQUFBLENBQUM7SUFDNUQsSUFBTUMsWUFBWSxHQUFHVCx3REFBVyxDQUFDLFNBQUNNLEtBQUs7ZUFBS0EsS0FBSyxDQUFDQyxJQUFJO0tBQUEsQ0FBQztJQUN2RCxxQkFDRSw4REFBQ0csS0FBRzs7MEJBQ0QsOERBQUNYLDhDQUFLO2dCQUFDWSxlQUFlLEVBQUUsQ0FBQztnQkFBRUgsSUFBSSxFQUFFSCxXQUFXO2dCQUFFRCxPQUFPLEVBQUVBLE9BQU87Ozs7O3FCQUFJOzBCQUNuRSw4REFBQ0gsNkNBQUk7Z0JBQUNRLFlBQVksRUFBRUEsWUFBWTs7Ozs7cUJBQUk7Ozs7OzthQTZEaEMsQ0FDTjtDQUNIO0dBckVLTixRQUFROztRQUNRSCxvREFBVztRQUNWQSxvREFBVzs7O0FBRjVCRyxLQUFBQSxRQUFRO0FBdUVkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3JrRmxvdy9pbmRleC50c3g/Yzk3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm9hcmQgZnJvbSBcIi4vQm9hcmRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTdGF0ZUludGVyZmFjZSwgV29ya0Zsb3dJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IGFkZFBvc2l0aW9uLCBhZGRQb3NpdGlvblRvQXBpIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2RhdGVzL2FjdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hVc2VycyB9IGZyb20gXCIuLi8uLi9yZWR1eC91c2Vycy9hY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0QXZpYWxhYmxlUG9zaXRpb25zLCBnZXROZXh0V2Vla1JhbmdlIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBQb3NpdGlvbkludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5jb25zdCBNQVhfUExBQ0VTID0gODtcclxuXHJcbmNvbnN0IFdvcmtGbG93OiBSZWFjdC5GQzxXb3JrRmxvd0ludGVyZmFjZT4gPSAoeyBpc0FkbWluIH0pID0+IHtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9ybT8uZGF0ZSk7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mb3JtKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgezxCb2FyZCBwb3NpdGlvbnNBbW91bnQ9ezh9IGRhdGU9e2N1cnJlbnREYXRlfSBpc0FkbWluPXtpc0FkbWlufSAvPn1cclxuICAgICAgPEZvcm0gaW5pdGlhbFN0YXRlPXtpbml0aWFsU3RhdGV9IC8+XHJcblxyXG4gICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJkYXRlXCI+RGF5OiA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgIG1pbj17bmV4dHdlZWsuc3RhcnR9XHJcbiAgICAgICAgbWF4PXtuZXh0d2Vlay5lbmR9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5kYXRlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlKFwiZGF0ZVwiLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcnNcIj5OYW1lOiA8L2xhYmVsPlxyXG4gICAgICA8c2VsZWN0XHJcbiAgICAgICAgaWQ9XCJ1c2Vyc1wiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBkZWZhdWx0VmFsdWU9e25ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCl9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS51c2VyfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlKFwidXNlclwiLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxvcHRpb24+LS1DaG9vc2UgTmFtZS0tPC9vcHRpb24+XHJcbiAgICAgICAge3VzZXJzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgdXNlcnMubWFwKCh7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGlkIH06IFVzZXJJbnRlcmZhY2UpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgIGtleT17YCR7Zmlyc3ROYW1lfS0ke2xhc3ROYW1lfS0ke2lkfWB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Ake2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gfVxyXG4gICAgICAgICAgICA+e2Ake2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gfTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb3NpdGlvblwiPlBvc2l0aW9uIE51bWJlcjogPC9sYWJlbD5cclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIGlkPVwicG9zaXRpb25cIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5wb3NpdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZShcInBvc2l0aW9uXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPG9wdGlvbj4tLUNob29zZSBwb3N0aW9uLS08L29wdGlvbj5cclxuICAgICAgICB7cG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+IChcclxuICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgdmFsdWU9e2Ake3Bvc2l0aW9ufWB9XHJcbiAgICAgICAgICAgIGtleT17YCR7Zm9ybVN0YXRlLnVzZXJ9LSR7cG9zaXRpb259YH1cclxuICAgICAgICAgID57YCR7cG9zaXRpb259YH08L29wdGlvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIGRpc2FibGVkPXtPYmplY3QudmFsdWVzKGZvcm1TdGF0ZSkubGVuZ3RoICE9PSAzfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgID5cclxuICAgICAgICBTdWJtaXRcclxuICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtGbG93O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb2FyZCIsInVzZVNlbGVjdG9yIiwiRm9ybSIsIk1BWF9QTEFDRVMiLCJXb3JrRmxvdyIsImlzQWRtaW4iLCJjdXJyZW50RGF0ZSIsInN0YXRlIiwiZm9ybSIsImRhdGUiLCJpbml0aWFsU3RhdGUiLCJkaXYiLCJwb3NpdGlvbnNBbW91bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WorkFlow/index.tsx\n"));

/***/ })

});