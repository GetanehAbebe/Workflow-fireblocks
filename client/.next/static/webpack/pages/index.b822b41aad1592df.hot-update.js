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

/***/ "./components/WorkFlow/Form.tsx":
/*!**************************************!*\
  !*** ./components/WorkFlow/Form.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_dates_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/dates/action */ \"./redux/dates/action.ts\");\n/* harmony import */ var _redux_users_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/users/action */ \"./redux/users/action.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ \"./components/WorkFlow/helpers.ts\");\n/* harmony import */ var _redux_form_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/form/action */ \"./redux/form/action.ts\");\n/* harmony import */ var _Form_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Form/Input */ \"./components/Form/Input.tsx\");\n/* harmony import */ var _Form_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Form/Select */ \"./components/Form/Select.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar MAX_PLACES = 8;\nvar Form = function(param) {\n    var formState = param.formState;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var nextweek = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.getNextWeekRange)(new Date());\n    var positionState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.dates[formState.date];\n    });\n    var positions = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.getAvialablePositions)(positionState, MAX_PLACES);\n    var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.users.usersList;\n    });\n    var handleChange = function(name, value) {\n        dispatch((0,_redux_form_action__WEBPACK_IMPORTED_MODULE_6__.changeFormState)({\n            name: name,\n            value: value\n        }));\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.addPosition)(formState));\n        dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.addPositionToApi)(formState));\n        dispatch((0,_redux_form_action__WEBPACK_IMPORTED_MODULE_6__.changeFormState)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, formState)));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!users.length) {\n            dispatch((0,_redux_users_action__WEBPACK_IMPORTED_MODULE_4__.fetchUsers)());\n        }\n    }, []);\n    var usersOptions = users.length ? users.map(function(param) {\n        var firstName = param.firstName, lastName = param.lastName;\n        return {\n            value: \"\".concat(firstName, \" \").concat(lastName),\n            displayValue: \"\".concat(firstName, \" \").concat(lastName)\n        };\n    }) : [];\n    var positionsOptions = positions.map(function(position) {\n        return {\n            value: position,\n            displayValue: position\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_Input__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: \"date\",\n                name: \"Day: \",\n                type: \"date\",\n                min: nextweek.start,\n                max: nextweek.end,\n                onChange: function(e) {\n                    handleChange(\"date\", e.target.value);\n                },\n                isRequired: true,\n                defaultValue: new Date().toISOString().slice(0, 10),\n                value: formState.date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_Select__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                defaultOption: \"--Choose Name--\",\n                onChange: function(e) {\n                    handleChange(\"user\", e.target.value);\n                },\n                id: \"users\",\n                name: \"Name: \",\n                value: formState.user,\n                options: usersOptions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_Select__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                defaultOption: \"--Choose postion--\",\n                onChange: function(e) {\n                    handleChange(\"position\", e.target.value);\n                },\n                id: \"position\",\n                name: \"Position Number: \",\n                value: formState.position,\n                options: positionsOptions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            \"B\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                onClick: handleSubmit,\n                disabled: Object.values(formState).length < 2,\n                className: \"btn btn-success\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(Form, \"0l0snvjlFi/XkkJnvxGbHqOOK2E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDTjtDQUNIO0dBL0ZLL0MsSUFBSTs7UUFDU1Ysb0RBQVc7UUFJTkQsb0RBQVc7UUFJbkJBLG9EQUFXOzs7QUFUckJXLEtBQUFBLElBQUk7QUFpR1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dvcmtGbG93L0Zvcm0udHN4PzJmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgR2VuZXJhbFN0YXRlSW50ZXJmYWNlLCBVc2VySW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBhZGRQb3NpdGlvbiwgYWRkUG9zaXRpb25Ub0FwaSB9IGZyb20gXCIuLi8uLi9yZWR1eC9kYXRlcy9hY3Rpb25cIjtcclxuaW1wb3J0IHsgZmV0Y2hVc2VycyB9IGZyb20gXCIuLi8uLi9yZWR1eC91c2Vycy9hY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0QXZpYWxhYmxlUG9zaXRpb25zLCBnZXROZXh0V2Vla1JhbmdlIH0gZnJvbSBcIi4vaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBjaGFuZ2VGb3JtU3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvZm9ybS9hY3Rpb25cIjtcclxuaW1wb3J0IElucHV0IGZyb20gXCIuLi9Gb3JtL0lucHV0XCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4uL0Zvcm0vU2VsZWN0XCI7XHJcblxyXG5jb25zdCBNQVhfUExBQ0VTID0gODtcclxuXHJcbmNvbnN0IEZvcm06IFJlYWN0LkZDPHt9PiA9ICh7IGZvcm1TdGF0ZSB9OiBhbnkpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBuZXh0d2VlayA9IGdldE5leHRXZWVrUmFuZ2UobmV3IERhdGUoKSk7XHJcblxyXG4gIGNvbnN0IHBvc2l0aW9uU3RhdGUgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogR2VuZXJhbFN0YXRlSW50ZXJmYWNlKSA9PiBzdGF0ZS5kYXRlc1tmb3JtU3RhdGUuZGF0ZV1cclxuICApO1xyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IGdldEF2aWFsYWJsZVBvc2l0aW9ucyhwb3NpdGlvblN0YXRlLCBNQVhfUExBQ0VTKTtcclxuICBjb25zdCB1c2VycyA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBHZW5lcmFsU3RhdGVJbnRlcmZhY2UpID0+IHN0YXRlLnVzZXJzLnVzZXJzTGlzdFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lOiBTdHJpbmcsIHZhbHVlOiBTdHJpbmcpID0+IHtcclxuICAgIGRpc3BhdGNoKGNoYW5nZUZvcm1TdGF0ZSh7IG5hbWUsIHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZCB9KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkaXNwYXRjaChhZGRQb3NpdGlvbihmb3JtU3RhdGUpKTtcclxuICAgIGRpc3BhdGNoKGFkZFBvc2l0aW9uVG9BcGkoZm9ybVN0YXRlKSk7XHJcbiAgICBkaXNwYXRjaChjaGFuZ2VGb3JtU3RhdGUoeyAuLi5mb3JtU3RhdGUgfSkpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXVzZXJzLmxlbmd0aCkge1xyXG4gICAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXNlcnNPcHRpb25zID0gdXNlcnMubGVuZ3RoXHJcbiAgICA/IHVzZXJzLm1hcCgoeyBmaXJzdE5hbWUsIGxhc3ROYW1lIH06IGFueSkgPT4gKHtcclxuICAgICAgICB2YWx1ZTogYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWAsXHJcbiAgICAgICAgZGlzcGxheVZhbHVlOiBgJHtmaXJzdE5hbWV9ICR7bGFzdE5hbWV9YCxcclxuICAgICAgfSkpXHJcbiAgICA6IFtdO1xyXG5cclxuICBjb25zdCBwb3NpdGlvbnNPcHRpb25zID0gcG9zaXRpb25zLm1hcCgocG9zaXRpb24pID0+ICh7XHJcbiAgICB2YWx1ZTogcG9zaXRpb24sXHJcbiAgICBkaXNwbGF5VmFsdWU6IHBvc2l0aW9uLFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIGlkPVwiZGF0ZVwiXHJcbiAgICAgICAgbmFtZT1cIkRheTogXCJcclxuICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgbWluPXtuZXh0d2Vlay5zdGFydH1cclxuICAgICAgICBtYXg9e25leHR3ZWVrLmVuZH1cclxuICAgICAgICBvbkNoYW5nZT17KGU6IHsgdGFyZ2V0OiB7IHZhbHVlOiBTdHJpbmcgfSB9KSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVDaGFuZ2UoXCJkYXRlXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApfVxyXG4gICAgICAgIHZhbHVlPXtmb3JtU3RhdGUuZGF0ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICBkZWZhdWx0T3B0aW9uPVwiLS1DaG9vc2UgTmFtZS0tXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZShcInVzZXJcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgaWQ9XCJ1c2Vyc1wiXHJcbiAgICAgICAgbmFtZT1cIk5hbWU6IFwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS51c2VyfVxyXG4gICAgICAgIG9wdGlvbnM9e3VzZXJzT3B0aW9uc31cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICBkZWZhdWx0T3B0aW9uPVwiLS1DaG9vc2UgcG9zdGlvbi0tXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZShcInBvc2l0aW9uXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGlkPVwicG9zaXRpb25cIlxyXG4gICAgICAgIG5hbWU9XCJQb3NpdGlvbiBOdW1iZXI6IFwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5wb3NpdGlvbn1cclxuICAgICAgICBvcHRpb25zPXtwb3NpdGlvbnNPcHRpb25zfVxyXG4gICAgICAvPlxyXG4gICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIEJcclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBkaXNhYmxlZD17T2JqZWN0LnZhbHVlcyhmb3JtU3RhdGUpLmxlbmd0aCA8IDJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCJcclxuICAgICAgPlxyXG4gICAgICAgIFN1Ym1pdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiYWRkUG9zaXRpb24iLCJhZGRQb3NpdGlvblRvQXBpIiwiZmV0Y2hVc2VycyIsImdldEF2aWFsYWJsZVBvc2l0aW9ucyIsImdldE5leHRXZWVrUmFuZ2UiLCJjaGFuZ2VGb3JtU3RhdGUiLCJJbnB1dCIsIlNlbGVjdCIsIk1BWF9QTEFDRVMiLCJGb3JtIiwiZm9ybVN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0d2VlayIsIkRhdGUiLCJwb3NpdGlvblN0YXRlIiwic3RhdGUiLCJkYXRlcyIsImRhdGUiLCJwb3NpdGlvbnMiLCJ1c2VycyIsInVzZXJzTGlzdCIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInVzZXJzT3B0aW9ucyIsIm1hcCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGlzcGxheVZhbHVlIiwicG9zaXRpb25zT3B0aW9ucyIsInBvc2l0aW9uIiwiZGl2IiwiaWQiLCJ0eXBlIiwibWluIiwic3RhcnQiLCJtYXgiLCJlbmQiLCJvbkNoYW5nZSIsInRhcmdldCIsImlzUmVxdWlyZWQiLCJkZWZhdWx0VmFsdWUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZGVmYXVsdE9wdGlvbiIsInVzZXIiLCJvcHRpb25zIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiT2JqZWN0IiwidmFsdWVzIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WorkFlow/Form.tsx\n"));

/***/ })

});