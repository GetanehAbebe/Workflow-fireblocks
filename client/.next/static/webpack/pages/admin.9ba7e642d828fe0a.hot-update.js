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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_dates_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/dates/action */ \"./redux/dates/action.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Board = function(param) {\n    \"\";\n    var date = param.date, _positionsAmount = param.positionsAmount, positionsAmount = _positionsAmount === void 0 ? 8 : _positionsAmount, isAdmin = param.isAdmin;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array.from({\n        length: positionsAmount\n    }, function(_, i) {\n        return i + 1;\n    })), positions = ref[0], setPositions = ref[1];\n    var positionsState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.dates[date];\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!positionsState) {\n            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.getPositionsByDate)(date));\n        }\n        setPositions(Array.from({\n            length: positionsAmount\n        }, function(_, i) {\n            return i + 1;\n        }));\n    }, [\n        date\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center flex-column flex-wrap\",\n        children: positions.map(function(position) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto w-100 h-100 d-flex flex-row my-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) ? \"bg-danger w-75\" : \"bg-success w-100\", \" \").concat((positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) && isAdmin ? \"w-75\" : \"w-100\"),\n                        children: position\n                    }, \"\".concat(date, \"-\").concat(position), false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, _this),\n                    isAdmin && (positionsState === null || positionsState === void 0 ? void 0 : positionsState[position]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function(e) {\n                            e.preventDefault();\n                            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.deletePositionFromApi)({\n                                date: date,\n                                position: position\n                            }));\n                            dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.deltePositionFromState)({\n                                date: date,\n                                position: position\n                            }));\n                            setPositions((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(positions));\n                        },\n                        className: \"btn btn-danger border-danger w-auto m-auto\",\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 15\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, _this);\n        })\n    }, \"\".concat(date), false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Board.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(Board, \"SPjbaomi9B0s+K58qkqsgAmisxk=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0RNLFNBQVMsRUFBQyw0Q0FBNEM7a0NBQ3ZELFFBRUQ7Ozs7OzZCQUFTOzs7Ozs7cUJBRVAsQ0FDTjtTQUNILENBQUM7T0FoQ0csRUFBQyxDQUFPLE9BQUxmLElBQUksQ0FBRTs7OzthQWlDVixDQUNOO0NBQ0g7R0F4REtELEtBQUs7O1FBRVFMLG9EQUFXO1FBTUxDLG9EQUFXOzs7QUFSOUJJLEtBQUFBLEtBQUs7QUF5RFgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dvcmtGbG93L0JvYXJkLnRzeD9iZmIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBHZW5lcmFsU3RhdGVJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVsZXRlUG9zaXRpb25Gcm9tQXBpLFxyXG4gIGRlbHRlUG9zaXRpb25Gcm9tU3RhdGUsXHJcbiAgZ2V0UG9zaXRpb25zQnlEYXRlLFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9kYXRlcy9hY3Rpb25cIjtcclxuaW1wb3J0IHsgQm9hcmRQcm9wcyB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IEJvYXJkID0gKHsgZGF0ZSwgcG9zaXRpb25zQW1vdW50ID0gOCwgaXNBZG1pbiB9OiBCb2FyZFByb3BzKSA9PiB7XHJcbiAgXCJcIlxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgW3Bvc2l0aW9ucywgc2V0UG9zaXRpb25zXSA9IHVzZVN0YXRlKFxyXG4gICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogcG9zaXRpb25zQW1vdW50IH0sIChfLCBpKSA9PiBpICsgMSlcclxuICApO1xyXG5cclxuICBjb25zdCBwb3NpdGlvbnNTdGF0ZSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBHZW5lcmFsU3RhdGVJbnRlcmZhY2UpID0+IHN0YXRlLmRhdGVzW2RhdGVdXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcG9zaXRpb25zU3RhdGUpIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0UG9zaXRpb25zQnlEYXRlKGRhdGUpKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9ucyhBcnJheS5mcm9tKHsgbGVuZ3RoOiBwb3NpdGlvbnNBbW91bnQgfSwgKF8sIGkpID0+IGkgKyAxKSk7XHJcbiAgfSwgW2RhdGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAga2V5PXtgJHtkYXRlfWB9XHJcbiAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtY29sdW1uIGZsZXgtd3JhcFwiXHJcbiAgICA+XHJcbiAgICAgIHtwb3NpdGlvbnMubWFwKChwb3NpdGlvbjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHctMTAwIGgtMTAwIGQtZmxleCBmbGV4LXJvdyAgbXktMVwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgJHtkYXRlfS0ke3Bvc2l0aW9ufWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1N0YXRlPy5bcG9zaXRpb25dXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1kYW5nZXIgdy03NVwiXHJcbiAgICAgICAgICAgICAgICAgIDogXCJiZy1zdWNjZXNzIHctMTAwXCJcclxuICAgICAgICAgICAgICB9ICR7cG9zaXRpb25zU3RhdGU/Lltwb3NpdGlvbl0gJiYgaXNBZG1pbiA/IFwidy03NVwiIDogXCJ3LTEwMFwifWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cG9zaXRpb259XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge2lzQWRtaW4gJiYgcG9zaXRpb25zU3RhdGU/Lltwb3NpdGlvbl0gJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlUG9zaXRpb25Gcm9tQXBpKHsgZGF0ZSwgcG9zaXRpb24gfSkpO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaChkZWx0ZVBvc2l0aW9uRnJvbVN0YXRlKHsgZGF0ZSwgcG9zaXRpb24gfSkpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbnMoWy4uLnBvc2l0aW9uc10pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJvcmRlci1kYW5nZXIgdy1hdXRvIG0tYXV0b1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJkZWxldGVQb3NpdGlvbkZyb21BcGkiLCJkZWx0ZVBvc2l0aW9uRnJvbVN0YXRlIiwiZ2V0UG9zaXRpb25zQnlEYXRlIiwiQm9hcmQiLCJkYXRlIiwicG9zaXRpb25zQW1vdW50IiwiaXNBZG1pbiIsImRpc3BhdGNoIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJwb3NpdGlvbnMiLCJzZXRQb3NpdGlvbnMiLCJwb3NpdGlvbnNTdGF0ZSIsInN0YXRlIiwiZGF0ZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3NpdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WorkFlow/Board.tsx\n"));

/***/ })

});