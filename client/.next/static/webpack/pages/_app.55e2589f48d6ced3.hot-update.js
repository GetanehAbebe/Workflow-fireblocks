"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/form/reducer.ts":
/*!*******************************!*\
  !*** ./redux/form/reducer.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./redux/form/action.ts\");\n\n\nvar initialState = {\n    date: getNex\n};\nfunction reducer() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case _action__WEBPACK_IMPORTED_MODULE_0__.formStateTypes.CHNAGE_STATE:\n            {\n                var _payload = action.payload, name = _payload.name, value = _payload.value;\n                state[name] = value;\n                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state);\n            }\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9mb3JtL3JlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBMEM7QUFFMUMsSUFBTUMsWUFBWSxHQUFHO0lBQ25CQyxJQUFJLEVBQUVDLE1BQU07Q0FDYjtBQUVjLFNBQVNDLE9BQU8sR0FBK0I7UUFBOUJDLEtBQUssR0FBTEEsK0NBQW9CLGtCQUFaSixZQUFZLEVBQUVLLE1BQU07SUFDMUQsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLEtBQUtQLGdFQUEyQjtZQUFFO2dCQUNoQyxJQUF3Qk0sUUFBYyxHQUFkQSxNQUFNLENBQUNHLE9BQU8sRUFBOUJDLElBQUksR0FBWUosUUFBYyxDQUE5QkksSUFBSSxFQUFFQyxLQUFLLEdBQUtMLFFBQWMsQ0FBeEJLLEtBQUs7Z0JBQ25CTixLQUFLLENBQUNLLElBQUksQ0FBQyxHQUFHQyxLQUFLLENBQUM7Z0JBQ3BCLE9BQU8sbUZBQUtOLEtBQUssQ0FBRSxDQUFDO2FBQ3JCO1FBRUQ7WUFDRSxPQUFPQSxLQUFLLENBQUM7S0FDaEI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9mb3JtL3JlZHVjZXIudHM/MDVhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtU3RhdGVUeXBlcyB9IGZyb20gXCIuL2FjdGlvblwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGRhdGU6IGdldE5leFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBmb3JtU3RhdGVUeXBlcy5DSE5BR0VfU1RBVEU6IHtcclxuICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHN0YXRlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZm9ybVN0YXRlVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJkYXRlIiwiZ2V0TmV4IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkNITkFHRV9TVEFURSIsInBheWxvYWQiLCJuYW1lIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/form/reducer.ts\n"));

/***/ })

});