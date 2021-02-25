webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengeContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/ChallengeContext.tsx ***!
  \*******************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\contexts\\ChallengeContext.tsx",
    _s = $RefreshSig$();


var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      challendesCompleted = _useState3[0],
      setChallendesCompleted = _useState3[1];

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('New Challenge');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      startNewChallenge: startNewChallenge,
      currentExperience: currentExperience,
      challendesCompleted: challendesCompleted,
      levelUp: levelUp
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "jAUWajSmJWxTI3zt7xCkItT9fiY=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5kZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZGVzQ29tcGxldGVkIiwibGV2ZWxVcCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFnQkEsU0FBU0Msa0JBQVQsT0FBK0Q7QUFBQTs7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDOztBQUFBLGtCQUN6Q0Msc0RBQVEsQ0FBQyxDQUFELENBRGlDO0FBQUEsTUFDM0RDLEtBRDJEO0FBQUEsTUFDcERDLFFBRG9EOztBQUFBLG1CQUVoQkYsc0RBQVEsQ0FBQyxDQUFELENBRlE7QUFBQSxNQUUzREcsaUJBRjJEO0FBQUEsTUFFeENDLG9CQUZ3Qzs7QUFBQSxtQkFHWkosc0RBQVEsQ0FBQyxDQUFELENBSEk7QUFBQSxNQUczREssbUJBSDJEO0FBQUEsTUFHdENDLHNCQUhzQzs7QUFLbEUsV0FBU0MsT0FBVCxHQUFrQjtBQUNoQkwsWUFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxDQUFSO0FBQ0Q7O0FBRUQsV0FBU08saUJBQVQsR0FBNEI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSDs7QUFFRCxzQkFDQSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUE0QixTQUFLLEVBQUU7QUFDL0JULFdBQUssRUFBTEEsS0FEK0I7QUFFL0JPLHVCQUFpQixFQUFqQkEsaUJBRitCO0FBRy9CTCx1QkFBaUIsRUFBakJBLGlCQUgrQjtBQUkvQkUseUJBQW1CLEVBQW5CQSxtQkFKK0I7QUFLL0JFLGFBQU8sRUFBUEE7QUFMK0IsS0FBbkM7QUFBQSxjQU9HUjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQVdIOztHQXhCZUQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0Y2RmNTQ1OWE2NzY0NWQ4NTJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG5cclxufSk7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiAgbnVtYmVyO1xyXG4gICAgY2hhbGxlbmRlc0NvbXBsZXRlZDogIG51bWJlcjtcclxuICAgIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHtjaGlsZHJlbn06Q2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF09IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZGVzQ29tcGxldGVkLCBzZXRDaGFsbGVuZGVzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKXtcclxuICAgICAgc2V0TGV2ZWwobGV2ZWwrMSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOZXcgQ2hhbGxlbmdlJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgY2hhbGxlbmRlc0NvbXBsZXRlZCxcclxuICAgICAgICBsZXZlbFVwXHJcbiAgICAgICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9