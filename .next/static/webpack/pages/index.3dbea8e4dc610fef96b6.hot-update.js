webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\ChallengeBox.tsx",
    _s = $RefreshSig$();





function ChallengeBox() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      activeChallenge = _useContext.activeChallenge,
      resetChallenge = _useContext.resetChallenge,
      completeChallenge = _useContext.completeChallenge;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]),
      resetCountdown = _useContext2.resetCountdown;

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/".concat(activeChallenge.type, ".svg")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: handleChallengeFailed,
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeFailedButton,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          onClick: handleChallengeSucceeded,
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSucceededButton,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um desafio."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "level up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), "Avance de level completando desafios."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(ChallengeBox, "9pKHdK65uTGc9tk+58Lle7cHD7c=");

_c = ChallengeBox;

var _c;

$RefreshReg$(_c, "ChallengeBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VCb3giLCJ1c2VDb250ZXh0IiwiQ2hhbGxlbmdlc0NvbnRleHQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiQ291bnRkb3duQ29udGV4dCIsInJlc2V0Q291bnRkb3duIiwiaGFuZGxlQ2hhbGxlbmdlU3VjY2VlZGVkIiwiaGFuZGxlQ2hhbGxlbmdlRmFpbGVkIiwic3R5bGVzIiwiY2hhbGxlbmdlQm94Q29udGFpbmVyIiwiY2hhbGxlbmdlQWN0aXZlIiwiYW1vdW50IiwidHlwZSIsImRlc2NyaXB0aW9uIiwiY2hhbGxlbmdlRmFpbGVkQnV0dG9uIiwiY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uIiwiY2hhbGxlbmdlTm90QWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxZQUFULEdBQXVCO0FBQUE7O0FBQUEsb0JBRW1DQyx3REFBVSxDQUFDQyw0RUFBRCxDQUY3QztBQUFBLE1BRW5CQyxlQUZtQixlQUVuQkEsZUFGbUI7QUFBQSxNQUVGQyxjQUZFLGVBRUZBLGNBRkU7QUFBQSxNQUVjQyxpQkFGZCxlQUVjQSxpQkFGZDs7QUFBQSxxQkFHREosd0RBQVUsQ0FBQ0ssMkVBQUQsQ0FIVDtBQUFBLE1BR25CQyxjQUhtQixnQkFHbkJBLGNBSG1COztBQUsxQixXQUFTQyx3QkFBVCxHQUFtQztBQUMvQkgscUJBQWlCO0FBQ2pCRSxrQkFBYztBQUNqQjs7QUFFRCxXQUFTRSxxQkFBVCxHQUFpQztBQUM3Qkwsa0JBQWM7QUFDZEcsa0JBQWM7QUFDakI7O0FBR0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUVHLGlGQUFNLENBQUNDLHFCQUF2QjtBQUFBLGNBQ0tSLGVBQWUsZ0JBQ1o7QUFBSyxlQUFTLEVBQUVPLGlGQUFNLENBQUNFLGVBQXZCO0FBQUEsOEJBQ0k7QUFBQSw2QkFDV1QsZUFBZSxDQUFDVSxNQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUEsZ0NBQ0k7QUFBSyxhQUFHLGtCQUFXVixlQUFlLENBQUNXLElBQTNCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBQSxvQkFBSVgsZUFBZSxDQUFDWTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBVUk7QUFBQSxnQ0FDSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUVOLHFCQUEvQjtBQUFzRCxtQkFBUyxFQUFFQyxpRkFBTSxDQUFDTSxxQkFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUVSLHdCQUEvQjtBQUF5RCxtQkFBUyxFQUFFRSxpRkFBTSxDQUFDTyx3QkFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFksZ0JBaUJaO0FBQUssZUFBUyxFQUFFUCxpRkFBTSxDQUFDUSxrQkFBdkI7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBQSxnQ0FDSTtBQUFLLGFBQUcsRUFBQyxvQkFBVDtBQUE4QixhQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOEJIOztHQTlDZWxCLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2RiZWE4ZTRkYzYxMGZlZjk2YjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ2hhbGxlbmdlQ29udGV4dCc7XHJcbmltcG9ydCB7IENvdW50ZG93bkNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlQm94KCl7XHJcbiAgICBcclxuICAgIGNvbnN0IHthY3RpdmVDaGFsbGVuZ2UsIHJlc2V0Q2hhbGxlbmdlLCBjb21wbGV0ZUNoYWxsZW5nZX0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICAgIGNvbnN0IHtyZXNldENvdW50ZG93bn0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZVN1Y2NlZWRlZCgpe1xyXG4gICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlKCk7XHJcbiAgICAgICAgcmVzZXRDb3VudGRvd24oKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VGYWlsZWQoKSB7XHJcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UoKTtcclxuICAgICAgICByZXNldENvdW50ZG93bigpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUJveENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHthY3RpdmVDaGFsbGVuZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUFjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FuaGUge2FjdGl2ZUNoYWxsZW5nZS5hbW91bnR9IHhwIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGljb25zLyR7YWN0aXZlQ2hhbGxlbmdlLnR5cGV9LnN2Z2B9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm92byBkZXNhZmlvPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2hhbGxlbmdlRmFpbGVkfSBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VGYWlsZWRCdXR0b259PkZhbGhlaTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VTdWNjZWVkZWR9IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvbn0+Q29tcGxldGVpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlTm90QWN0aXZlfT5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW8uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cImxldmVsIHVwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIEF2YW5jZSBkZSBsZXZlbCBjb21wbGV0YW5kbyBkZXNhZmlvcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=