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

/***/ "./redux/dates/reducer.ts":
/*!********************************!*\
  !*** ./redux/dates/reducer.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ \"./redux/dates/action.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nvar initialState = {};\nfunction reducer() {\n    var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState, action = arguments.length > 1 ? arguments[1] : void 0;\n    switch(action.type){\n        case _action__WEBPACK_IMPORTED_MODULE_0__.positionActionTypes.ADD_POSITION:\n            {\n                var _payload = action.payload, date = _payload.date, position = _payload.position, user = _payload.user;\n                if (!state[date]) {\n                    state[date] = {};\n                }\n                if (!state[date][position] && !Object.values(state[date]).includes(user)) {\n                    state[date][position] = user;\n                }\n                return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state);\n            }\n        case _action__WEBPACK_IMPORTED_MODULE_0__.positionActionTypes.ADD_POSITION_TO_API:\n            axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:8000/api/positions/add\", action.payload).then(function(res) {\n                console.log(\"request sent\", res);\n            }).catch(function(e) {\n                console.log(\"could not send the request\", e);\n            });\n            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state);\n        case _action__WEBPACK_IMPORTED_MODULE_0__.positionActionTypes.GET_POSITIONS:\n            var _payload1 = action.payload, date1 = _payload1.date, data = _payload1.data;\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, date1, data));\n        case _action__WEBPACK_IMPORTED_MODULE_0__.positionActionTypes.REMOVE_USER_FROM_POSITION:\n            delete state[action.payload.date][action.payload.position];\n            return (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, state);\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9kYXRlcy9yZWR1Y2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7O0FBQStDO0FBQ3JCO0FBRTFCLElBQU1FLFlBQVksR0FBRyxFQUFFO0FBRVIsU0FBU0MsT0FBTyxHQUErQjtRQUE5QkMsS0FBSyxHQUFMQSwrQ0FBb0Isa0JBQVpGLFlBQVksRUFBRUcsTUFBTTtJQUMxRCxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBS04scUVBQWdDO1lBQUU7Z0JBQ3JDLElBQWlDSyxRQUFjLEdBQWRBLE1BQU0sQ0FBQ0csT0FBTyxFQUF2Q0MsSUFBSSxHQUFxQkosUUFBYyxDQUF2Q0ksSUFBSSxFQUFFQyxRQUFRLEdBQVdMLFFBQWMsQ0FBakNLLFFBQVEsRUFBRUMsSUFBSSxHQUFLTixRQUFjLENBQXZCTSxJQUFJO2dCQUU1QixJQUFJLENBQUNQLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLEVBQUU7b0JBQ2hCTCxLQUFLLENBQUNLLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDbEI7Z0JBRUQsSUFDRSxDQUFDTCxLQUFLLENBQUNLLElBQUksQ0FBQyxDQUFDQyxRQUFRLENBQUMsSUFDdEIsQ0FBQ0UsTUFBTSxDQUFDQyxNQUFNLENBQUNULEtBQUssQ0FBQ0ssSUFBSSxDQUFDLENBQUMsQ0FBQ0ssUUFBUSxDQUFDSCxJQUFJLENBQUMsRUFDMUM7b0JBQ0FQLEtBQUssQ0FBQ0ssSUFBSSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxHQUFHQyxJQUFJLENBQUM7aUJBQzlCO2dCQUNELE9BQU8sbUZBQUtQLEtBQUssQ0FBRSxDQUFDO2FBQ3JCO1FBRUQsS0FBS0osNEVBQXVDO1lBQzFDQyxpREFDTyxDQUFDLHlDQUF5QyxFQUFFSSxNQUFNLENBQUNHLE9BQU8sQ0FBQyxDQUMvRFMsSUFBSSxDQUFDLFNBQUNDLEdBQUcsRUFBSztnQkFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFRixHQUFHLENBQUMsQ0FBQzthQUNsQyxDQUFDLENBQ0RHLEtBQUssQ0FBQyxTQUFDQyxDQUFDLEVBQUs7Z0JBQ1pILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixFQUFFRSxDQUFDLENBQUMsQ0FBQzthQUM5QyxDQUFDLENBQUM7WUFDTCxPQUFPLG1GQUFLbEIsS0FBSyxDQUFFLENBQUM7UUFFdEIsS0FBS0osc0VBQWlDO1lBQ3BDLElBQXVCSyxTQUFjLEdBQWRBLE1BQU0sQ0FBQ0csT0FBTyxFQUE3QkMsS0FBSSxHQUFXSixTQUFjLENBQTdCSSxJQUFJLEVBQUVlLElBQUksR0FBS25CLFNBQWMsQ0FBdkJtQixJQUFJO1lBQ2xCLE9BQU8sd0tBQUtwQixLQUFLLEdBQUUscUZBQUNLLEtBQUksRUFBR2UsSUFBSSxFQUFFLENBQUM7UUFFcEMsS0FBS3hCLGtGQUE2QztZQUNoRCxPQUFPSSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0osTUFBTSxDQUFDRyxPQUFPLENBQUNFLFFBQVEsQ0FBQyxDQUFDO1lBQzNELE9BQU8sbUZBQUtOLEtBQUssQ0FBRSxDQUFDO1FBRXRCO1lBQ0UsT0FBT0EsS0FBSyxDQUFDO0tBQ2hCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvZGF0ZXMvcmVkdWNlci50cz81N2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBvc2l0aW9uQWN0aW9uVHlwZXMgfSBmcm9tIFwiLi9hY3Rpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIHBvc2l0aW9uQWN0aW9uVHlwZXMuQUREX1BPU0lUSU9OOiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0ZSwgcG9zaXRpb24sIHVzZXIgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgaWYgKCFzdGF0ZVtkYXRlXSkge1xyXG4gICAgICAgIHN0YXRlW2RhdGVdID0ge307XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICAhc3RhdGVbZGF0ZV1bcG9zaXRpb25dICYmXHJcbiAgICAgICAgIU9iamVjdC52YWx1ZXMoc3RhdGVbZGF0ZV0pLmluY2x1ZGVzKHVzZXIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHN0YXRlW2RhdGVdW3Bvc2l0aW9uXSA9IHVzZXI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIHBvc2l0aW9uQWN0aW9uVHlwZXMuQUREX1BPU0lUSU9OX1RPX0FQSTpcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcG9zaXRpb25zL2FkZFwiLCBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3Qgc2VudFwiLCByZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdWxkIG5vdCBzZW5kIHRoZSByZXF1ZXN0XCIsIGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xyXG5cclxuICAgIGNhc2UgcG9zaXRpb25BY3Rpb25UeXBlcy5HRVRfUE9TSVRJT05TOlxyXG4gICAgICBjb25zdCB7IGRhdGUsIGRhdGEgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgW2RhdGVdOiBkYXRhIH07XHJcblxyXG4gICAgY2FzZSBwb3NpdGlvbkFjdGlvblR5cGVzLlJFTU9WRV9VU0VSX0ZST01fUE9TSVRJT046XHJcbiAgICAgIGRlbGV0ZSBzdGF0ZVthY3Rpb24ucGF5bG9hZC5kYXRlXVthY3Rpb24ucGF5bG9hZC5wb3NpdGlvbl07XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicG9zaXRpb25BY3Rpb25UeXBlcyIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9QT1NJVElPTiIsInBheWxvYWQiLCJkYXRlIiwicG9zaXRpb24iLCJ1c2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5jbHVkZXMiLCJBRERfUE9TSVRJT05fVE9fQVBJIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlIiwiR0VUX1BPU0lUSU9OUyIsImRhdGEiLCJSRU1PVkVfVVNFUl9GUk9NX1BPU0lUSU9OIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/dates/reducer.ts\n"));

/***/ })

});