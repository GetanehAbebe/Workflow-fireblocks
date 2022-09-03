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

/***/ "./components/WorkFlow/Board.tsx":
/*!***************************************!*\
  !*** ./components/WorkFlow/Board.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_dates_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/dates/action */ \"./redux/dates/action.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Board = function(param) {\n    var date = param.date, _positionsAmount = param.positionsAmount, positionsAmount = _positionsAmount === void 0 ? 8 : _positionsAmount, isAdmin = param.isAdmin;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array.from({\n        length: positionsAmount\n    }, function(_, i) {\n        return i + 1;\n    })), positions = ref[0], setPositions = ref[1];\n    var positionsState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.dates[date];\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!positionsState) {\n            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.getPositionsByDate)(date));\n        }\n        setPositions(Array.from({\n            length: positionsAmount\n        }, function(_, i) {\n            return i + 1;\n        }));\n    }, [\n        date\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center flex-column flex-wrap\",\n        children: positions.map(function(position) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto w-100 h-100 d-flex flex-row my-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) ? \"bg-danger w-75\" : \"bg-success w-100\", \" \").concat((positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) && isAdmin ? \"w-75\" : \"w-100\"),\n                        children: position\n                    }, \"\".concat(date, \"-\").concat(position), false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, _this),\n                    isAdmin && (positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            e.preventDefault();\n                            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.deletePositionFromApi)({\n                                date: date,\n                                position: position\n                            }));\n                            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.deltePositionFromState)({\n                                date: date,\n                                position: position\n                            }));\n                            set;\n                        },\n                        className: \"btn btn-danger border-danger w-auto m-auto\",\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, _this);\n        })\n    }, \"\".concat(date), false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(Board, \"SPjbaomi9B0s+K58qkqsgAmisxk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztxQkFFUCxDQUNOO1NBQ0gsQ0FBQztPQWhDRyxFQUFDLENBQU8sT0FBTGYsSUFBSSxDQUFFOzs7O2FBaUNWLENBQ047Q0FDSDtHQXZES0QsS0FBSzs7UUFDUUwsb0RBQVc7UUFNTEMsb0RBQVc7OztBQVA5QkksS0FBQUEsS0FBSztBQXdEWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV29ya0Zsb3cvQm9hcmQudHN4P2JmYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTdGF0ZUludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtcclxuICBkZWxldGVQb3NpdGlvbkZyb21BcGksXHJcbiAgZGVsdGVQb3NpdGlvbkZyb21TdGF0ZSxcclxuICBnZXRQb3NpdGlvbnNCeURhdGUsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2RhdGVzL2FjdGlvblwiO1xyXG5pbXBvcnQgeyBCb2FyZFByb3BzIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgQm9hcmQgPSAoeyBkYXRlLCBwb3NpdGlvbnNBbW91bnQgPSA4LCBpc0FkbWluIH06IEJvYXJkUHJvcHMpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtwb3NpdGlvbnMsIHNldFBvc2l0aW9uc10gPSB1c2VTdGF0ZShcclxuICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IHBvc2l0aW9uc0Ftb3VudCB9LCAoXywgaSkgPT4gaSArIDEpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcG9zaXRpb25zU3RhdGUgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogR2VuZXJhbFN0YXRlSW50ZXJmYWNlKSA9PiBzdGF0ZS5kYXRlc1tkYXRlXVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXBvc2l0aW9uc1N0YXRlKSB7XHJcbiAgICAgIGRpc3BhdGNoKGdldFBvc2l0aW9uc0J5RGF0ZShkYXRlKSk7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbnMoQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9zaXRpb25zQW1vdW50IH0sIChfLCBpKSA9PiBpICsgMSkpO1xyXG4gIH0sIFtkYXRlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGtleT17YCR7ZGF0ZX1gfVxyXG4gICAgICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWNvbHVtbiBmbGV4LXdyYXBcIlxyXG4gICAgPlxyXG4gICAgICB7cG9zaXRpb25zLm1hcCgocG9zaXRpb246IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byB3LTEwMCBoLTEwMCBkLWZsZXggZmxleC1yb3cgIG15LTFcIj5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YCR7ZGF0ZX0tJHtwb3NpdGlvbn1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNTdGF0ZT8uW3Bvc2l0aW9uXVxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctZGFuZ2VyIHctNzVcIlxyXG4gICAgICAgICAgICAgICAgICA6IFwiYmctc3VjY2VzcyB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgfSAke3Bvc2l0aW9uc1N0YXRlPy5bcG9zaXRpb25dICYmIGlzQWRtaW4gPyBcInctNzVcIiA6IFwidy0xMDBcIn1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtpc0FkbWluICYmIHBvc2l0aW9uc1N0YXRlPy5bcG9zaXRpb25dICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVBvc2l0aW9uRnJvbUFwaSh7IGRhdGUsIHBvc2l0aW9uIH0pKTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVsdGVQb3NpdGlvbkZyb21TdGF0ZSh7IGRhdGUsIHBvc2l0aW9uIH0pKTtcclxuICAgICAgICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYm9yZGVyLWRhbmdlciB3LWF1dG8gbS1hdXRvXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZW1vdmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImRlbGV0ZVBvc2l0aW9uRnJvbUFwaSIsImRlbHRlUG9zaXRpb25Gcm9tU3RhdGUiLCJnZXRQb3NpdGlvbnNCeURhdGUiLCJCb2FyZCIsImRhdGUiLCJwb3NpdGlvbnNBbW91bnQiLCJpc0FkbWluIiwiZGlzcGF0Y2giLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsInBvc2l0aW9ucyIsInNldFBvc2l0aW9ucyIsInBvc2l0aW9uc1N0YXRlIiwic3RhdGUiLCJkYXRlcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc2l0aW9uIiwiYnV0dG9uIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WorkFlow/Board.tsx\n"));

/***/ })

});