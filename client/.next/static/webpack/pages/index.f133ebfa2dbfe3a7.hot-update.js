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

/***/ "./components/WorkFlow/helpers.ts":
/*!****************************************!*\
  !*** ./components/WorkFlow/helpers.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAvialablePositions\": function() { return /* binding */ getAvialablePositions; },\n/* harmony export */   \"getNextWeekDay\": function() { return /* binding */ getNextWeekDay; },\n/* harmony export */   \"getNextWeekRange\": function() { return /* binding */ getNextWeekRange; }\n/* harmony export */ });\nvar getNextWeekRange = function(day) {\n    // get current date\n    var first = day.getDate() - day.getDay() + 7; // First day is the day of the month - the day of the week\n    var last = first + 6; // last day is the first day + 6\n    var firstday = new Date(day.setDate(first));\n    var lastday = new Date(day.setDate(last));\n    return {\n        start: new Date(firstday).toISOString().slice(0, 10),\n        end: new Date(lastday).toISOString().slice(0, 10)\n    };\n};\nvar getNextWeekDay = function() {\n    var today = new Date();\n    var nextWeekDate = new Date(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7));\n    return nextWeekDate;\n};\nvar getAvialablePositions = function(positions, positionNumber) {\n    var avialeablePositions = [];\n    for(var i = 1; i <= positionNumber; i++){\n        if (positions && !positions[i]) {\n            avialeablePositions.push(i);\n        }\n    }\n    return avialeablePositions;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmtGbG93L2hlbHBlcnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBQ0MsR0FBUyxFQUFLO0lBQzdDLG1CQUFtQjtJQUNuQixJQUFNQyxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsT0FBTyxFQUFFLEdBQUdGLEdBQUcsQ0FBQ0csTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLDBEQUEwRDtJQUMxRyxJQUFNQyxJQUFJLEdBQUdILEtBQUssR0FBRyxDQUFDLEVBQUUsZ0NBQWdDO0lBRXhELElBQU1JLFFBQVEsR0FBRyxJQUFJQyxJQUFJLENBQUNOLEdBQUcsQ0FBQ08sT0FBTyxDQUFDTixLQUFLLENBQUMsQ0FBQztJQUM3QyxJQUFNTyxPQUFPLEdBQUcsSUFBSUYsSUFBSSxDQUFDTixHQUFHLENBQUNPLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDLENBQUM7SUFFM0MsT0FBTztRQUNMSyxLQUFLLEVBQUUsSUFBSUgsSUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBQ0ssV0FBVyxFQUFFLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3BEQyxHQUFHLEVBQUUsSUFBSU4sSUFBSSxDQUFDRSxPQUFPLENBQUMsQ0FBQ0UsV0FBVyxFQUFFLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0tBQ2xELENBQUM7Q0FDSCxDQUFDO0FBRUssSUFBTUUsY0FBYyxHQUFHLFdBQU07SUFDbEMsSUFBTUMsS0FBSyxHQUFHLElBQUlSLElBQUksRUFBRTtJQUN4QixJQUFNUyxZQUFZLEdBQUcsSUFBSVQsSUFBSSxDQUMzQixJQUFJQSxJQUFJLENBQUNRLEtBQUssQ0FBQ0UsV0FBVyxFQUFFLEVBQUVGLEtBQUssQ0FBQ0csUUFBUSxFQUFFLEVBQUVILEtBQUssQ0FBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQ3JFO0lBQ0QsT0FBT2EsWUFBWSxDQUFDO0NBQ3JCLENBQUM7QUFDSyxJQUFNRyxxQkFBcUIsR0FBRyxTQUNuQ0MsU0FBYyxFQUNkQyxjQUFzQixFQUNUO0lBQ2IsSUFBTUMsbUJBQW1CLEdBQUcsRUFBRTtJQUM5QixJQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSUYsY0FBYyxFQUFFRSxDQUFDLEVBQUUsQ0FBRTtRQUN4QyxJQUFJSCxTQUFTLElBQUksQ0FBQ0EsU0FBUyxDQUFDRyxDQUFDLENBQUMsRUFBRTtZQUM5QkQsbUJBQW1CLENBQUNFLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUM7U0FDN0I7S0FDRjtJQUNELE9BQU9ELG1CQUFtQixDQUFDO0NBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3JrRmxvdy9oZWxwZXJzLnRzP2M5NGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldE5leHRXZWVrUmFuZ2UgPSAoZGF5OiBEYXRlKSA9PiB7XHJcbiAgLy8gZ2V0IGN1cnJlbnQgZGF0ZVxyXG4gIGNvbnN0IGZpcnN0ID0gZGF5LmdldERhdGUoKSAtIGRheS5nZXREYXkoKSArIDc7IC8vIEZpcnN0IGRheSBpcyB0aGUgZGF5IG9mIHRoZSBtb250aCAtIHRoZSBkYXkgb2YgdGhlIHdlZWtcclxuICBjb25zdCBsYXN0ID0gZmlyc3QgKyA2OyAvLyBsYXN0IGRheSBpcyB0aGUgZmlyc3QgZGF5ICsgNlxyXG5cclxuICBjb25zdCBmaXJzdGRheSA9IG5ldyBEYXRlKGRheS5zZXREYXRlKGZpcnN0KSk7XHJcbiAgY29uc3QgbGFzdGRheSA9IG5ldyBEYXRlKGRheS5zZXREYXRlKGxhc3QpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXJ0OiBuZXcgRGF0ZShmaXJzdGRheSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXHJcbiAgICBlbmQ6IG5ldyBEYXRlKGxhc3RkYXkpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TmV4dFdlZWtEYXkgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IG5leHRXZWVrRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpICsgNylcclxuICApO1xyXG4gIHJldHVybiBuZXh0V2Vla0RhdGU7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRBdmlhbGFibGVQb3NpdGlvbnMgPSAoXHJcbiAgcG9zaXRpb25zOiBhbnksXHJcbiAgcG9zaXRpb25OdW1iZXI6IE51bWJlclxyXG4pOiBOdW1iZXJbXSA9PiB7XHJcbiAgY29uc3QgYXZpYWxlYWJsZVBvc2l0aW9ucyA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHBvc2l0aW9uTnVtYmVyOyBpKyspIHtcclxuICAgIGlmIChwb3NpdGlvbnMgJiYgIXBvc2l0aW9uc1tpXSkge1xyXG4gICAgICBhdmlhbGVhYmxlUG9zaXRpb25zLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBhdmlhbGVhYmxlUG9zaXRpb25zO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiZ2V0TmV4dFdlZWtSYW5nZSIsImRheSIsImZpcnN0IiwiZ2V0RGF0ZSIsImdldERheSIsImxhc3QiLCJmaXJzdGRheSIsIkRhdGUiLCJzZXREYXRlIiwibGFzdGRheSIsInN0YXJ0IiwidG9JU09TdHJpbmciLCJzbGljZSIsImVuZCIsImdldE5leHRXZWVrRGF5IiwidG9kYXkiLCJuZXh0V2Vla0RhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0QXZpYWxhYmxlUG9zaXRpb25zIiwicG9zaXRpb25zIiwicG9zaXRpb25OdW1iZXIiLCJhdmlhbGVhYmxlUG9zaXRpb25zIiwiaSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WorkFlow/helpers.ts\n"));

/***/ })

});