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

/***/ "./components/WorkFlow/Board.tsx":
/*!***************************************!*\
  !*** ./components/WorkFlow/Board.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_dates_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/dates/action */ \"./redux/dates/action.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Board = function(param) {\n    var date = param.date, _positionsAmount = param.positionsAmount, positionsAmount = _positionsAmount === void 0 ? 8 : _positionsAmount, isAdmin = param.isAdmin, formState = param.formState;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array.from({\n        length: positionsAmount\n    }, function(_, i) {\n        return i + 1;\n    })), positions = ref[0], setPositions = ref[1];\n    var positionsState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.dates[date];\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!positionsState) {\n            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.getPositionsByDate)(date));\n        }\n        setPositions(Array.from({\n            length: positionsAmount\n        }, function(_, i) {\n            return i + 1;\n        }));\n    }, [\n        formState === null || formState === void 0 ? void 0 : formState.user, \n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center flex-column flex-wrap\",\n        children: positions.map(function(position) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto w-100 h-100 d-flex flex-row my-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) ? \"bg-danger w-75\" : \"bg-success w-100\", \" \").concat((positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) && isAdmin ? \"w-75\" : \"w-100\"),\n                        children: position\n                    }, \"\".concat(date, \"-\").concat(position), false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, _this),\n                    isAdmin && (positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            e.preventDefault();\n                            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.deletePositionFromApi)({\n                                date: date,\n                                position: position\n                            }));\n                            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.deltePositionFromState)({\n                                date: date,\n                                position: position\n                            }));\n                            setPositions((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(positions));\n                        },\n                        className: \"btn btn-danger border-danger w-auto m-auto\",\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                lineNumber: 41,\n                columnNumber: 11\n            }, _this);\n        })\n    }, \"\".concat(date), false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Board, \"SPjbaomi9B0s+K58qkqsgAmisxk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUMsQ0FBQzs0QkFDckRSLFlBQVksQ0FBRSxxRkFBR0QsU0FBUyxDQUFUQSxDQUFXLENBQUM7eUJBQzlCO3dCQUNETyxTQUFTLEVBQUMsNENBQTRDO2tDQUN2RCxRQUVEOzs7Ozs2QkFBUzs7Ozs7O3FCQUVQLENBQ047U0FDSCxDQUFDO09BaENHLEVBQUMsQ0FBTyxPQUFMakIsSUFBSSxDQUFFOzs7O2FBaUNWLENBQ047Q0FDSDtHQTVES0QsS0FBSzs7UUFNUUwsb0RBQVc7UUFNTEMsb0RBQVc7OztBQVo5QkksS0FBQUEsS0FBSztBQTZEWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV29ya0Zsb3cvQm9hcmQudHN4P2JmYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTdGF0ZUludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtcclxuICBkZWxldGVQb3NpdGlvbkZyb21BcGksXHJcbiAgZGVsdGVQb3NpdGlvbkZyb21TdGF0ZSxcclxuICBnZXRQb3NpdGlvbnNCeURhdGUsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2RhdGVzL2FjdGlvblwiO1xyXG5pbXBvcnQgeyBCb2FyZFByb3BzIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgQm9hcmQgPSAoe1xyXG4gIGRhdGUsXHJcbiAgcG9zaXRpb25zQW1vdW50ID0gOCxcclxuICBpc0FkbWluLFxyXG4gIGZvcm1TdGF0ZSxcclxufTogQm9hcmRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgW3Bvc2l0aW9ucywgc2V0UG9zaXRpb25zXSA9IHVzZVN0YXRlKFxyXG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9zaXRpb25zQW1vdW50IH0sIChfLCBpKSA9PiBpICsgMSlcclxuICApO1xyXG5cclxuICBjb25zdCBwb3NpdGlvbnNTdGF0ZSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBHZW5lcmFsU3RhdGVJbnRlcmZhY2UpID0+IHN0YXRlLmRhdGVzW2RhdGVdXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcG9zaXRpb25zU3RhdGUpIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0UG9zaXRpb25zQnlEYXRlKGRhdGUpKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9ucyhBcnJheS5mcm9tKHsgbGVuZ3RoOiBwb3NpdGlvbnNBbW91bnQgfSwgKF8sIGkpID0+IGkgKyAxKSk7XHJcbiAgfSwgW2Zvcm1TdGF0ZT8udXNlciwgXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGtleT17YCR7ZGF0ZX1gfVxyXG4gICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtbiBmbGV4LXdyYXBcIlxyXG4gICAgPlxyXG4gICAgICB7cG9zaXRpb25zLm1hcCgocG9zaXRpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LTEwMCBoLTEwMCBkLWZsZXggZmxleC1yb3cgIG15LTFcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YCR7ZGF0ZX0tJHtwb3NpdGlvbn1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNTdGF0ZT8uW3Bvc2l0aW9uXVxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctZGFuZ2VyIHctNzVcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctc3VjY2VzcyB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgfSAke3Bvc2l0aW9uc1N0YXRlPy5bcG9zaXRpb25dICYmIGlzQWRtaW4gPyBcInctNzVcIiA6IFwidy0xMDBcIn1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtpc0FkbWluICYmIHBvc2l0aW9uc1N0YXRlPy5bcG9zaXRpb25dICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVBvc2l0aW9uRnJvbUFwaSh7IGRhdGUsIHBvc2l0aW9uIH0pKTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVsdGVQb3NpdGlvbkZyb21TdGF0ZSh7IGRhdGUsIHBvc2l0aW9uIH0pKTtcclxuICAgICAgICAgICAgICAgICAgc2V0UG9zaXRpb25zKFsuLi5wb3NpdGlvbnNdKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBib3JkZXItZGFuZ2VyIHctYXV0byBtLWF1dG9cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZGVsZXRlUG9zaXRpb25Gcm9tQXBpIiwiZGVsdGVQb3NpdGlvbkZyb21TdGF0ZSIsImdldFBvc2l0aW9uc0J5RGF0ZSIsIkJvYXJkIiwiZGF0ZSIsInBvc2l0aW9uc0Ftb3VudCIsImlzQWRtaW4iLCJmb3JtU3RhdGUiLCJkaXNwYXRjaCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwicG9zaXRpb25zIiwic2V0UG9zaXRpb25zIiwicG9zaXRpb25zU3RhdGUiLCJzdGF0ZSIsImRhdGVzIiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc2l0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WorkFlow/Board.tsx\n"));

/***/ })

});