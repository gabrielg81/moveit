webpackHotUpdate_N_E("pages/_app",{

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
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);


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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  } //pedir permissão para enviar notificações para o usuário.


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Notification.requestPermission();
  }, []);

  function startNewChallenge() {
    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio!', {
        body: "Valendo ".concat(challenge.amount, " xp.")
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallendesCompleted(challendesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      level: level,
      startNewChallenge: startNewChallenge,
      currentExperience: currentExperience,
      challendesCompleted: challendesCompleted,
      levelUp: levelUp,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      experienceToNextLevel: experienceToNextLevel,
      completeChallenge: completeChallenge
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "8QgXhTdrmurxncuU7cN5pY8xDeI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQudHN4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJsZXZlbCIsInNldExldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5kZXNDb21wbGV0ZWQiLCJzZXRDaGFsbGVuZGVzQ29tcGxldGVkIiwiYWN0aXZlQ2hhbGxlbmdlIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiZXhwZXJpZW5jZVRvTmV4dExldmVsIiwiTWF0aCIsInBvdyIsImxldmVsVXAiLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdlSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYm9keSIsImFtb3VudCIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJmaW5hbEV4cGVyaWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUF5Qk8sSUFBTUEsaUJBQWlCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdkM7QUFFQSxTQUFTQyxrQkFBVCxPQUErRDtBQUFBOztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7O0FBQUEsa0JBQ3pDQyxzREFBUSxDQUFDLENBQUQsQ0FEaUM7QUFBQSxNQUMzREMsS0FEMkQ7QUFBQSxNQUNwREMsUUFEb0Q7O0FBQUEsbUJBRWhCRixzREFBUSxDQUFDLENBQUQsQ0FGUTtBQUFBLE1BRTNERyxpQkFGMkQ7QUFBQSxNQUV4Q0Msb0JBRndDOztBQUFBLG1CQUdaSixzREFBUSxDQUFDLENBQUQsQ0FISTtBQUFBLE1BRzNESyxtQkFIMkQ7QUFBQSxNQUd0Q0Msc0JBSHNDOztBQUFBLG1CQUtwQk4sc0RBQVEsQ0FBQyxJQUFELENBTFk7QUFBQSxNQUszRE8sZUFMMkQ7QUFBQSxNQUsxQ0Msa0JBTDBDOztBQU9sRSxNQUFNQyxxQkFBcUIsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBQ1YsS0FBSyxHQUFDLENBQVAsSUFBVSxDQUFuQixFQUFxQixDQUFyQixDQUE5Qjs7QUFFQSxXQUFTVyxPQUFULEdBQWtCO0FBQ2hCVixZQUFRLENBQUNELEtBQUssR0FBQyxDQUFQLENBQVI7QUFDRCxHQVhpRSxDQWFsRTs7O0FBQ0FZLHlEQUFTLENBQUMsWUFBSztBQUNYQyxnQkFBWSxDQUFDQyxpQkFBYjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsV0FBU0MsaUJBQVQsR0FBNEI7QUFDeEIsUUFBTUMsb0JBQW9CLEdBQUdQLElBQUksQ0FBQ1EsS0FBTCxDQUFXUixJQUFJLENBQUNTLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUE1QjtBQUNBVCxzQkFBa0IsQ0FBQ2MsU0FBRCxDQUFsQjtBQUVBLFFBQUlDLEtBQUosQ0FBVSxtQkFBVixFQUErQkMsSUFBL0I7O0FBRUEsUUFBSVYsWUFBWSxDQUFDVyxVQUFiLEtBQTRCLFNBQWhDLEVBQTBDO0FBQ3RDLFVBQUlYLFlBQUosQ0FBaUIsZUFBakIsRUFDQTtBQUNJWSxZQUFJLG9CQUFhSixTQUFTLENBQUNLLE1BQXZCO0FBRFIsT0FEQTtBQUlIO0FBQ0o7O0FBRUQsV0FBU0MsY0FBVCxHQUF5QjtBQUNyQnBCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDSDs7QUFFRCxXQUFTcUIsaUJBQVQsR0FBNEI7QUFDeEIsUUFBRyxDQUFDdEIsZUFBSixFQUFvQjtBQUNoQjtBQUNIOztBQUh1QixRQUlqQm9CLE1BSmlCLEdBSVBwQixlQUpPLENBSWpCb0IsTUFKaUI7QUFNeEIsUUFBSUcsZUFBZSxHQUFHM0IsaUJBQWlCLEdBQUd3QixNQUExQzs7QUFFQSxRQUFHRyxlQUFlLElBQUlyQixxQkFBdEIsRUFBNkM7QUFDekNxQixxQkFBZSxHQUFHQSxlQUFlLEdBQUdyQixxQkFBcEM7QUFDQUcsYUFBTztBQUNWOztBQUVEUix3QkFBb0IsQ0FBQzBCLGVBQUQsQ0FBcEI7QUFDQXRCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYsMEJBQXNCLENBQUNELG1CQUFtQixHQUFFLENBQXRCLENBQXRCO0FBQ0g7O0FBRUQsc0JBQ0EscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFO0FBQy9CSixXQUFLLEVBQUxBLEtBRCtCO0FBRS9CZSx1QkFBaUIsRUFBakJBLGlCQUYrQjtBQUcvQmIsdUJBQWlCLEVBQWpCQSxpQkFIK0I7QUFJL0JFLHlCQUFtQixFQUFuQkEsbUJBSitCO0FBSy9CTyxhQUFPLEVBQVBBLE9BTCtCO0FBTS9CTCxxQkFBZSxFQUFmQSxlQU4rQjtBQU8vQnFCLG9CQUFjLEVBQWRBLGNBUCtCO0FBUS9CbkIsMkJBQXFCLEVBQXJCQSxxQkFSK0I7QUFTL0JvQix1QkFBaUIsRUFBakJBO0FBVCtCLEtBQW5DO0FBQUEsY0FXRzlCO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBZUg7O0dBdEVlRCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZmQ3YmI0OTdjNzYwYmE0ZmZlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICAgIHR5cGU6ICdib2R5Oyd8J2V5ZSc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6ICBudW1iZXI7XHJcbiAgICBjaGFsbGVuZGVzQ29tcGxldGVkOiAgbnVtYmVyO1xyXG4gICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICAgIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgXHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHtjaGlsZHJlbn06Q2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF09IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaGFsbGVuZGVzQ29tcGxldGVkLCBzZXRDaGFsbGVuZGVzQ29tcGxldGVkXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwrMSkqNCwyKVxyXG5cclxuICAgIGZ1bmN0aW9uIGxldmVsVXAoKXtcclxuICAgICAgc2V0TGV2ZWwobGV2ZWwrMSlcclxuICAgIH1cclxuXHJcbiAgICAvL3BlZGlyIHBlcm1pc3PDo28gcGFyYSBlbnZpYXIgbm90aWZpY2HDp8O1ZXMgcGFyYSBvIHVzdcOhcmlvLlxyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpOyBcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCl7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aClcclxuICAgICAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nZUluZGV4XTtcclxuICAgICAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuXHJcbiAgICAgICAgbmV3IEF1ZGlvKCcvbm90aWZpY2F0aW9uLm1wMycpLnBsYXkoKTtcclxuXHJcbiAgICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpe1xyXG4gICAgICAgICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8hJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fSB4cC5gLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpe1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpe1xyXG4gICAgICAgIGlmKCFhY3RpdmVDaGFsbGVuZ2Upe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHthbW91bnR9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgICAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgICAgIGlmKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcclxuICAgICAgICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICAgICAgICBsZXZlbFVwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgICAgICBzZXRDaGFsbGVuZGVzQ29tcGxldGVkKGNoYWxsZW5kZXNDb21wbGV0ZWQgKzEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICAgIGxldmVsLFxyXG4gICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgIGNoYWxsZW5kZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxyXG4gICAgICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==