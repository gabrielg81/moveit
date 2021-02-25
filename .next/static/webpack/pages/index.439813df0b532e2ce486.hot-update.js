webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_gabit_Desktop_Apps_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\Countdown.tsx",
    _s = $RefreshSig$();




var countdownTimeout;
function Countdown() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]),
      minutes = _useContext.minutes,
      seconds = _useContext.seconds,
      hasFinished = _useContext.hasFinished,
      isActive = _useContext.isActive,
      resetCountdown = _useContext.resetCountdown,
      startCountdown = _useContext.startCountdown;

  var _String$padStart$spli = String(minutes).padStart(2, '0').split(''),
      _String$padStart$spli2 = Object(C_Users_gabit_Desktop_Apps_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli, 2),
      minuteLeft = _String$padStart$spli2[0],
      minuteRight = _String$padStart$spli2[1];

  var _String$padStart$spli3 = String(seconds).padStart(2, '0').split(''),
      _String$padStart$spli4 = Object(C_Users_gabit_Desktop_Apps_moveit_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_String$padStart$spli3, 2),
      secondLeft = _String$padStart$spli4[0],
      secondRight = _String$padStart$spli4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: resetCountdown,
        className: "".concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton, " ").concat(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButtonActive),
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: startCountdown,
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.countdownButton,
        children: "Iniciar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 33
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(Countdown, "N8BKmZrcSzwnmOzIHWLnqvC7VXI=");

_c = Countdown;

var _c;

$RefreshReg$(_c, "Countdown");

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

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengeContext */ "./src/contexts/ChallengeContext.tsx");


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\contexts\\CountdownContext.tsx",
    _s = $RefreshSig$();



var countdownTimeout;
var CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountdownProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      startNewChallenge = _useContext.startNewChallenge;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.05 * 60),
      time = _useState[0],
      setTime = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      hasFinished = _useState3[0],
      setHasFinished = _useState3[1];

  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(function () {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes: minutes,
      seconds: seconds,
      hasFinished: hasFinished,
      isActive: isActive,
      startCountdown: startCountdown,
      resetCountdown: resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

_s(CountdownProvider, "12y2hdgftYDMRrFBdoqHz5/jB4s=");

_c = CountdownProvider;

var _c;

$RefreshReg$(_c, "CountdownProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4Il0sIm5hbWVzIjpbImNvdW50ZG93blRpbWVvdXQiLCJDb3VudGRvd24iLCJ1c2VDb250ZXh0IiwiQ291bnRkb3duQ29udGV4dCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaGFzRmluaXNoZWQiLCJpc0FjdGl2ZSIsInJlc2V0Q291bnRkb3duIiwic3RhcnRDb3VudGRvd24iLCJTdHJpbmciLCJwYWRTdGFydCIsInNwbGl0IiwibWludXRlTGVmdCIsIm1pbnV0ZVJpZ2h0Iiwic2Vjb25kTGVmdCIsInNlY29uZFJpZ2h0Iiwic3R5bGVzIiwiY291bnRkb3duQ29udGFpbmVyIiwiY291bnRkb3duQnV0dG9uIiwiY291bnRkb3duQnV0dG9uQWN0aXZlIiwiY3JlYXRlQ29udGV4dCIsIkNvdW50ZG93blByb3ZpZGVyIiwiY2hpbGRyZW4iLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsInNldElzQWN0aXZlIiwic2V0SGFzRmluaXNoZWQiLCJNYXRoIiwiZmxvb3IiLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxnQkFBSjtBQUVPLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxvQkFTaEJDLHdEQUFVLENBQUNDLDJFQUFELENBVE07QUFBQSxNQUdoQkMsT0FIZ0IsZUFHaEJBLE9BSGdCO0FBQUEsTUFJaEJDLE9BSmdCLGVBSWhCQSxPQUpnQjtBQUFBLE1BS2hCQyxXQUxnQixlQUtoQkEsV0FMZ0I7QUFBQSxNQU1oQkMsUUFOZ0IsZUFNaEJBLFFBTmdCO0FBQUEsTUFP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SSxHQUFHLEVBQXZCOztBQUVBLFdBQVNsQixjQUFULEdBQTBCO0FBQ3RCb0IsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNIOztBQUVELFdBQVNyQixjQUFULEdBQTBCO0FBQ3RCeUIsZ0JBQVksQ0FBQ2pDLGdCQUFELENBQVo7QUFDQTZCLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUQsV0FBTyxDQUFDLE9BQU8sRUFBUixDQUFQO0FBQ0g7O0FBRURNLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUkzQixRQUFRLElBQUlvQixJQUFJLEdBQUcsQ0FBdkIsRUFBMEI7QUFDdEIzQixzQkFBZ0IsR0FBR21DLFVBQVUsQ0FBQyxZQUFNO0FBQ2hDUCxlQUFPLENBQUNELElBQUksR0FBRyxDQUFSLENBQVA7QUFDSCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdILEtBSkQsTUFLSyxJQUFJcEIsUUFBUSxJQUFJb0IsSUFBSSxLQUFLLENBQXpCLEVBQTRCO0FBQzdCRyxvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBRCxpQkFBVyxDQUFDLEtBQUQsQ0FBWDtBQUNBSix1QkFBaUI7QUFDcEI7QUFDSixHQVhRLEVBV04sQ0FBQ2xCLFFBQUQsRUFBV29CLElBQVgsQ0FYTSxDQUFUO0FBYUEsc0JBQ0kscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFO0FBRTlCdkIsYUFBTyxFQUFQQSxPQUY4QjtBQUc5QkMsYUFBTyxFQUFQQSxPQUg4QjtBQUk5QkMsaUJBQVcsRUFBWEEsV0FKOEI7QUFLOUJDLGNBQVEsRUFBUkEsUUFMOEI7QUFNOUJFLG9CQUFjLEVBQWRBLGNBTjhCO0FBTzlCRCxvQkFBYyxFQUFkQTtBQVA4QixLQUFsQztBQUFBLGNBVUtlO0FBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0dBakRlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDM5ODEzZGYwYjUzMmUyY2U0ODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db3VudGRvd24ubW9kdWxlLmNzcyc7XHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duKCkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgbWludXRlcyxcclxuICAgICAgICAgICAgc2Vjb25kcyxcclxuICAgICAgICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlLFxyXG4gICAgICAgICAgICByZXNldENvdW50ZG93bixcclxuICAgICAgICAgICAgc3RhcnRDb3VudGRvd25cclxuICAgICAgICB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBbbWludXRlTGVmdCwgbWludXRlUmlnaHRdID0gU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG4gICAgY29uc3QgW3NlY29uZExlZnQsIHNlY29uZFJpZ2h0XSA9IFN0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpLnNwbGl0KCcnKTtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZExlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntzZWNvbmRSaWdodH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7aGFzRmluaXNoZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRkb3duQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgICAgICBDaWNsbyBlbmNlcnJhZG9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaXNBY3RpdmUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0gJHtzdHlsZXMuY291bnRkb3duQnV0dG9uQWN0aXZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFiYW5kb25hciBjaWNsb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmljaWFyIGNpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSIsImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi9DaGFsbGVuZ2VDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRkb3duQ29udGV4dERhdGF7XHJcbiAgICBtaW51dGVzOiBudW1iZXI7XHJcbiAgICBzZWNvbmRzOiBudW1iZXI7XHJcbiAgICBoYXNGaW5pc2hlZDogYm9vbGVhbjtcclxuICAgIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgc3RhcnRDb3VudGRvd246ICgpPT4gdm9pZCA7XHJcbiAgICByZXNldENvdW50ZG93bjogKCk9PiB2b2lkIDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxubGV0IGNvdW50ZG93blRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvdW50ZG93bkNvbnRleHQgPSAgY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXh0RGF0YSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7Y2hpbGRyZW59KSB7XHJcblxyXG4gICAgY29uc3QgeyBzdGFydE5ld0NoYWxsZW5nZSB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgICBcclxuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMDUgKiA2MCk7XHJcbiAgICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpIHtcclxuICAgICAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENvdW50ZG93bigpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XHJcbiAgICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHNldFRpbWUoMC4wNSAqIDYwKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xyXG4gICAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzQWN0aXZlICYmIHRpbWUgPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNBY3RpdmUsIHRpbWVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcblxyXG4gICAgICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgICAgICBzZWNvbmRzLFxyXG4gICAgICAgICAgICBoYXNGaW5pc2hlZCxcclxuICAgICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICAgICAgICByZXNldENvdW50ZG93bixcclxuXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9