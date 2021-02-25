webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\ExperienceBar.tsx",
    _s = $RefreshSig$();




function ExperienceBar() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      currentExperience = _useContext.currentExperience,
      experienceToNextLevel = _useContext.experienceToNextLevel;

  var percentToNextLevel = Math.round(currentExperience) * 100 / experienceToNextLevel;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 px"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: "".concat(percentToNextLevel, "%")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: "".concat(percentToNextLevel, "%")
        },
        children: [currentExperience, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

_s(ExperienceBar, "xp6xnADdbDm6RMZ4bALXLzkyKR0=");

_c = ExperienceBar;

var _c;

$RefreshReg$(_c, "ExperienceBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci50c3giXSwibmFtZXMiOlsiRXhwZXJpZW5jZUJhciIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsImN1cnJlbnRFeHBlcmllbmNlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwicGVyY2VudFRvTmV4dExldmVsIiwiTWF0aCIsInJvdW5kIiwic3R5bGVzIiwiZXhwZXJpZW5jZUJhciIsIndpZHRoIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ08sU0FBU0EsYUFBVCxHQUF5QjtBQUFBOztBQUFBLG9CQUN1QkMsd0RBQVUsQ0FBQ0MsNEVBQUQsQ0FEakM7QUFBQSxNQUNyQkMsaUJBRHFCLGVBQ3JCQSxpQkFEcUI7QUFBQSxNQUNGQyxxQkFERSxlQUNGQSxxQkFERTs7QUFHNUIsTUFBTUMsa0JBQWtCLEdBQUlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixpQkFBWCxJQUFnQyxHQUFqQyxHQUFzQ0MscUJBQWpFO0FBRUEsc0JBQ0k7QUFBUSxhQUFTLEVBQUVJLGtGQUFNLENBQUNDLGFBQTFCO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsOEJBQ0k7QUFBSyxhQUFLLEVBQUU7QUFBQ0MsZUFBSyxZQUFJTCxrQkFBSjtBQUFOO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxpQkFBUyxFQUFFRyxrRkFBTSxDQUFDTCxpQkFBeEI7QUFBMkMsYUFBSyxFQUFFO0FBQUNRLGNBQUksWUFBSU4sa0JBQUo7QUFBTCxTQUFsRDtBQUFBLG1CQUNLRixpQkFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQVFJO0FBQUEsaUJBQU9DLHFCQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBakJlSixhOztLQUFBQSxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIwZmM1YzI5ZTEwNjIzZGUxY2I1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBFeHBlcmllbmNlQmFyKCkge1xyXG4gICAgY29uc3Qge2N1cnJlbnRFeHBlcmllbmNlLCBleHBlcmllbmNlVG9OZXh0TGV2ZWx9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcblxyXG4gICAgY29uc3QgcGVyY2VudFRvTmV4dExldmVsID0gKE1hdGgucm91bmQoY3VycmVudEV4cGVyaWVuY2UpICogMTAwKS9leHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZXhwZXJpZW5jZUJhcn0+XHJcbiAgICAgICAgICAgIDxzcGFuPjAgcHg8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6YCR7cGVyY2VudFRvTmV4dExldmVsfSVgfX0vPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEV4cGVyaWVuY2V9IHN0eWxlPXt7bGVmdDpgJHtwZXJjZW50VG9OZXh0TGV2ZWx9JWB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudEV4cGVyaWVuY2V9IHhwXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj57ZXhwZXJpZW5jZVRvTmV4dExldmVsfSB4cDwvc3Bhbj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9