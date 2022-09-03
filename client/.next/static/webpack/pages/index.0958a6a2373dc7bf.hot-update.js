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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_dates_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/dates/action */ \"./redux/dates/action.ts\");\n/* harmony import */ var _redux_users_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/users/action */ \"./redux/users/action.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ \"./components/WorkFlow/helpers.ts\");\n/* harmony import */ var _redux_form_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/form/action */ \"./redux/form/action.ts\");\n/* harmony import */ var _Form_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Form/Input */ \"./components/Form/Input.tsx\");\n/* harmony import */ var _Form_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Form/Select */ \"./components/Form/Select.tsx\");\n/* harmony import */ var _Form_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Form/Button */ \"./components/Form/Button.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar MAX_PLACES = 8;\nvar Form = function(param) {\n    var formState = param.formState;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var nextweek = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.getNextWeekRange)(new Date());\n    var positionState = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.dates[formState.date];\n    });\n    var positions = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.getAvialablePositions)(positionState, MAX_PLACES);\n    var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.users.usersList;\n    });\n    var handleChange = function(name, value) {\n        dispatch((0,_redux_form_action__WEBPACK_IMPORTED_MODULE_6__.changeFormState)({\n            name: name,\n            value: value\n        }));\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.addPosition)(formState));\n        dispatch((0,_redux_dates_action__WEBPACK_IMPORTED_MODULE_3__.addPositionToApi)(formState));\n        dispatch((0,_redux_form_action__WEBPACK_IMPORTED_MODULE_6__.changeFormState)((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, formState)));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!users.length) {\n            dispatch((0,_redux_users_action__WEBPACK_IMPORTED_MODULE_4__.fetchUsers)());\n        }\n    }, []);\n    var usersOptions = users.length ? users.map(function(param) {\n        var firstName = param.firstName, lastName = param.lastName;\n        return {\n            value: \"\".concat(firstName, \" \").concat(lastName),\n            displayValue: \"\".concat(firstName, \" \").concat(lastName)\n        };\n    }) : [];\n    var positionsOptions = positions.map(function(position) {\n        return {\n            value: position,\n            displayValue: position\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_Input__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                id: \"date\",\n                name: \"Day: \",\n                type: \"date\",\n                min: nextweek.start,\n                max: nextweek.end,\n                onChange: function(e) {\n                    handleChange(\"date\", e.target.value);\n                },\n                isRequired: true,\n                defaultValue: nextWeekDate.toISOString().slice(0, 10),\n                value: formState.date\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_Select__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                defaultOption: \"--Choose Name--\",\n                onChange: function(e) {\n                    handleChange(\"user\", e.target.value);\n                },\n                id: \"users\",\n                name: \"Name: \",\n                value: formState.user,\n                options: usersOptions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_Select__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                defaultOption: \"--Choose postion--\",\n                onChange: function(e) {\n                    handleChange(\"position\", e.target.value);\n                },\n                id: \"position\",\n                name: \"Position Number: \",\n                value: formState.position,\n                options: positionsOptions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                type: \"submit\",\n                onClick: handleSubmit,\n                disabled: Object.values(formState).length < 2,\n                className: \"btn btn-success\",\n                name: \"Submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\Workflow-fireblocks\\\\client\\\\components\\\\WorkFlow\\\\Form.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, _this);\n};\n_s(Form, \"0l0snvjlFi/XkkJnvxGbHqOOK2E=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNQO0NBQ0g7R0F4RktiLElBQUk7O1FBQ1NYLG9EQUFXO1FBSU5ELG9EQUFXO1FBSW5CQSxvREFBVzs7O0FBVHJCWSxLQUFBQSxJQUFJO0FBMEZWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3JrRmxvdy9Gb3JtLnRzeD8yZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEdlbmVyYWxTdGF0ZUludGVyZmFjZSwgVXNlckludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgYWRkUG9zaXRpb24sIGFkZFBvc2l0aW9uVG9BcGkgfSBmcm9tIFwiLi4vLi4vcmVkdXgvZGF0ZXMvYWN0aW9uXCI7XHJcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvdXNlcnMvYWN0aW9uXCI7XHJcbmltcG9ydCB7IGdldEF2aWFsYWJsZVBvc2l0aW9ucywgZ2V0TmV4dFdlZWtSYW5nZSB9IGZyb20gXCIuL2hlbHBlcnNcIjtcclxuaW1wb3J0IHsgY2hhbmdlRm9ybVN0YXRlIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2Zvcm0vYWN0aW9uXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vRm9ybS9JbnB1dFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuLi9Gb3JtL1NlbGVjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9Gb3JtL0J1dHRvblwiO1xyXG5cclxuY29uc3QgTUFYX1BMQUNFUyA9IDg7XHJcblxyXG5jb25zdCBGb3JtOiBSZWFjdC5GQzx7fT4gPSAoeyBmb3JtU3RhdGUgfTogYW55KTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgbmV4dHdlZWsgPSBnZXROZXh0V2Vla1JhbmdlKG5ldyBEYXRlKCkpO1xyXG5cclxuICBjb25zdCBwb3NpdGlvblN0YXRlID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IEdlbmVyYWxTdGF0ZUludGVyZmFjZSkgPT4gc3RhdGUuZGF0ZXNbZm9ybVN0YXRlLmRhdGVdXHJcbiAgKTtcclxuICBjb25zdCBwb3NpdGlvbnMgPSBnZXRBdmlhbGFibGVQb3NpdGlvbnMocG9zaXRpb25TdGF0ZSwgTUFYX1BMQUNFUyk7XHJcbiAgY29uc3QgdXNlcnMgPSB1c2VTZWxlY3RvcihcclxuICAgIChzdGF0ZTogR2VuZXJhbFN0YXRlSW50ZXJmYWNlKSA9PiBzdGF0ZS51c2Vycy51c2Vyc0xpc3RcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmFtZTogU3RyaW5nLCB2YWx1ZTogU3RyaW5nKSA9PiB7XHJcbiAgICBkaXNwYXRjaChjaGFuZ2VGb3JtU3RhdGUoeyBuYW1lLCB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IHsgcHJldmVudERlZmF1bHQ6ICgpID0+IHZvaWQgfSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGlzcGF0Y2goYWRkUG9zaXRpb24oZm9ybVN0YXRlKSk7XHJcbiAgICBkaXNwYXRjaChhZGRQb3NpdGlvblRvQXBpKGZvcm1TdGF0ZSkpO1xyXG4gICAgZGlzcGF0Y2goY2hhbmdlRm9ybVN0YXRlKHsgLi4uZm9ybVN0YXRlIH0pKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF1c2Vycy5sZW5ndGgpIHtcclxuICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHVzZXJzT3B0aW9ucyA9IHVzZXJzLmxlbmd0aFxyXG4gICAgPyB1c2Vycy5tYXAoKHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9OiBhbnkpID0+ICh7XHJcbiAgICAgICAgdmFsdWU6IGAke2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gLFxyXG4gICAgICAgIGRpc3BsYXlWYWx1ZTogYCR7Zmlyc3ROYW1lfSAke2xhc3ROYW1lfWAsXHJcbiAgICAgIH0pKVxyXG4gICAgOiBbXTtcclxuXHJcbiAgY29uc3QgcG9zaXRpb25zT3B0aW9ucyA9IHBvc2l0aW9ucy5tYXAoKHBvc2l0aW9uKSA9PiAoe1xyXG4gICAgdmFsdWU6IHBvc2l0aW9uLFxyXG4gICAgZGlzcGxheVZhbHVlOiBwb3NpdGlvbixcclxuICB9KSk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBpZD1cImRhdGVcIlxyXG4gICAgICAgIG5hbWU9XCJEYXk6IFwiXHJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgIG1pbj17bmV4dHdlZWsuc3RhcnR9XHJcbiAgICAgICAgbWF4PXtuZXh0d2Vlay5lbmR9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlOiB7IHRhcmdldDogeyB2YWx1ZTogU3RyaW5nIH0gfSkgPT4ge1xyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlKFwiZGF0ZVwiLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17bmV4dFdlZWtEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApfVxyXG4gICAgICAgIHZhbHVlPXtmb3JtU3RhdGUuZGF0ZX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICBkZWZhdWx0T3B0aW9uPVwiLS1DaG9vc2UgTmFtZS0tXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZShcInVzZXJcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgaWQ9XCJ1c2Vyc1wiXHJcbiAgICAgICAgbmFtZT1cIk5hbWU6IFwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS51c2VyfVxyXG4gICAgICAgIG9wdGlvbnM9e3VzZXJzT3B0aW9uc31cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICBkZWZhdWx0T3B0aW9uPVwiLS1DaG9vc2UgcG9zdGlvbi0tXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIGhhbmRsZUNoYW5nZShcInBvc2l0aW9uXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGlkPVwicG9zaXRpb25cIlxyXG4gICAgICAgIG5hbWU9XCJQb3NpdGlvbiBOdW1iZXI6IFwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5wb3NpdGlvbn1cclxuICAgICAgICBvcHRpb25zPXtwb3NpdGlvbnNPcHRpb25zfVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgIGRpc2FibGVkPXtPYmplY3QudmFsdWVzKGZvcm1TdGF0ZSkubGVuZ3RoIDwgMn1cclxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgIG5hbWU9XCJTdWJtaXRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiYWRkUG9zaXRpb24iLCJhZGRQb3NpdGlvblRvQXBpIiwiZmV0Y2hVc2VycyIsImdldEF2aWFsYWJsZVBvc2l0aW9ucyIsImdldE5leHRXZWVrUmFuZ2UiLCJjaGFuZ2VGb3JtU3RhdGUiLCJJbnB1dCIsIlNlbGVjdCIsIkJ1dHRvbiIsIk1BWF9QTEFDRVMiLCJGb3JtIiwiZm9ybVN0YXRlIiwiZGlzcGF0Y2giLCJuZXh0d2VlayIsIkRhdGUiLCJwb3NpdGlvblN0YXRlIiwic3RhdGUiLCJkYXRlcyIsImRhdGUiLCJwb3NpdGlvbnMiLCJ1c2VycyIsInVzZXJzTGlzdCIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInVzZXJzT3B0aW9ucyIsIm1hcCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZGlzcGxheVZhbHVlIiwicG9zaXRpb25zT3B0aW9ucyIsInBvc2l0aW9uIiwiZm9ybSIsImlkIiwidHlwZSIsIm1pbiIsInN0YXJ0IiwibWF4IiwiZW5kIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFZhbHVlIiwibmV4dFdlZWtEYXRlIiwidG9JU09TdHJpbmciLCJzbGljZSIsImRlZmF1bHRPcHRpb24iLCJ1c2VyIiwib3B0aW9ucyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIk9iamVjdCIsInZhbHVlcyIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WorkFlow/Form.tsx\n"));

/***/ })

});