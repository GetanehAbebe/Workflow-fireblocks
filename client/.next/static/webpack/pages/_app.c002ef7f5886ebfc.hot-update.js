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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n\nvar initialState = {};\nfunction reducer() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case form.CHNAGE_STATE:\n            {\n                var _payload = action.payload, name = _payload.name, value = _payload.value;\n                state[name] = value;\n                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, state);\n            }\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9mb3JtL3JlZHVjZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVBLElBQU1BLFlBQVksR0FBRyxFQUFFO0FBRVIsU0FBU0MsT0FBTyxHQUErQjtRQUE5QkMsS0FBSyxHQUFMQSwrQ0FBb0Isa0JBQVpGLFlBQVksRUFBRUcsTUFBTTtJQUMxRCxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBS0MsSUFBSSxDQUFDQyxZQUFZO1lBQUU7Z0JBQ3RCLElBQXdCSCxRQUFjLEdBQWRBLE1BQU0sQ0FBQ0ksT0FBTyxFQUE5QkMsSUFBSSxHQUFZTCxRQUFjLENBQTlCSyxJQUFJLEVBQUVDLEtBQUssR0FBS04sUUFBYyxDQUF4Qk0sS0FBSztnQkFDbkJQLEtBQUssQ0FBQ00sSUFBSSxDQUFDLEdBQUdDLEtBQUssQ0FBQztnQkFDcEIsT0FBTyxtRkFBS1AsS0FBSyxDQUFFLENBQUM7YUFDckI7UUFFRDtZQUNFLE9BQU9BLEtBQUssQ0FBQztLQUNoQjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2Zvcm0vcmVkdWNlci50cz8wNWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc2l0aW9uQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9hY3Rpb25cIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBmb3JtLkNITkFHRV9TVEFURToge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGVbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZm9ybSIsIkNITkFHRV9TVEFURSIsInBheWxvYWQiLCJuYW1lIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/form/reducer.ts\n"));

/***/ })

});