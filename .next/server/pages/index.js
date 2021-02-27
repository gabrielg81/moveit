module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: ChallengeBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeBox", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\ChallengeBox.tsx";




function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]);

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
          src: `icons/${activeChallenge.type}.svg`
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

/***/ }),

/***/ "./src/components/CompletedChallengers.tsx":
/*!*************************************************!*\
  !*** ./src/components/CompletedChallengers.tsx ***!
  \*************************************************/
/*! exports provided: CompletedChallengers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedChallengers", function() { return CompletedChallengers; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");
/* harmony import */ var _styles_components_CompletedChallengers_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CompletedChallengers.module.css */ "./src/styles/components/CompletedChallengers.module.css");
/* harmony import */ var _styles_components_CompletedChallengers_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallengers_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\CompletedChallengers.tsx";



function CompletedChallengers() {
  const {
    challendesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_CompletedChallengers_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.completedChallengersContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios Completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challendesCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/Countdown.tsx":
/*!**************************************!*\
  !*** ./src/components/Countdown.tsx ***!
  \**************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Countdown.module.css */ "./src/styles/components/Countdown.module.css");
/* harmony import */ var _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\Countdown.tsx";



function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_2__["CountdownContext"]);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
      children: "Ciclo encerrado"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: resetCountdown,
        className: `${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton} ${_styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButtonActive}`,
        children: "Abandonar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: startCountdown,
        className: _styles_components_Countdown_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.countdownButton,
        children: "Iniciar ciclo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: ExperienceBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceBar", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\ExperienceBar.tsx";



function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const percentToNextLevel = Math.round(currentExperience) * 100 / experienceToNextLevel;
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
          width: `${percentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${percentToNextLevel}%`
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

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\Profile.tsx";



function Profile() {
  const {
    level
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.profileContainer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "https://github.com/gabrielg81.png",
      alt: "Gabriel G81"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Gabriel S Cruz"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level.svg",
          alt: "Level"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this), "Level ", level]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/levelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/levelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: LevelUpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUpModal", function() { return LevelUpModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/LevelUpModal.module.css */ "./src/styles/components/LevelUpModal.module.css");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\components\\levelUpModal.tsx";



function LevelUpModal() {
  const {
    level,
    closeLevelUpModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: level
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Parab\xE9ns!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA alcan\xE7ou um novo level."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: closeLevelUpModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/close.svg",
          alt: "Fechar modal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/contexts/ChallengeContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/ChallengeContext.tsx ***!
  \*******************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_levelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/levelUpModal */ "./src/components/levelUpModal.tsx");

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\contexts\\ChallengeContext.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(_ref) {
  var _rest$level, _rest$currentExperien, _rest$challendesCompl;

  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0);
  const {
    0: challendesCompleted,
    1: setChallendesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_rest$challendesCompl = rest.challendesCompleted) !== null && _rest$challendesCompl !== void 0 ? _rest$challendesCompl : 0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: isLevelUpModalOpen,
    1: setIsLevelModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2); //Salvar informações no coockies

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challendesCompleted', String(challendesCompleted));
  }, [level, currentExperience, challendesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelModalOpen(true);
  } //pedir permissão para enviar notificações para o usuário.


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Notification.requestPermission();
  }, []);

  function closeLevelUpModal() {
    setIsLevelModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];
    setActiveChallenge(challenge);
    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio!', {
        body: `Valendo ${challenge.amount} xp.`
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

    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

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
      level,
      startNewChallenge,
      currentExperience,
      challendesCompleted,
      levelUp,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
      closeLevelUpModal
    },
    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_levelUpModal__WEBPACK_IMPORTED_MODULE_4__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengeContext */ "./src/contexts/ChallengeContext.tsx");

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\contexts\\CountdownContext.tsx";


let countdownTimeout;
const CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function CountdownProvider({
  children
}) {
  const {
    startNewChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengeContext__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(25 * 60);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.05 * 60);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
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
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CompletedChallengers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CompletedChallengers */ "./src/components/CompletedChallengers.tsx");
/* harmony import */ var _components_Countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Countdown */ "./src/components/Countdown.tsx");
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/CountdownContext */ "./src/contexts/CountdownContext.tsx");
/* harmony import */ var _contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/ChallengeContext */ "./src/contexts/ChallengeContext.tsx");

var _jsxFileName = "C:\\Users\\gabit\\Desktop\\Apps\\moveit\\src\\pages\\index.tsx";









function Home(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengeContext__WEBPACK_IMPORTED_MODULE_9__["ChallengesProvider"], {
    level: props.level,
    currentExperience: props.currentExperience,
    challendesCompleted: props.challendesCompleted,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Moveit - G81"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_3__["ExperienceBar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContext__WEBPACK_IMPORTED_MODULE_8__["CountdownProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_4__["Profile"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallengers__WEBPACK_IMPORTED_MODULE_1__["CompletedChallengers"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Countdown__WEBPACK_IMPORTED_MODULE_2__["Countdown"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_7__["ChallengeBox"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 1
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
const getServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challendesCompleted
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challendesCompleted: Number(challendesCompleted)
    }
  };
};

/***/ }),

/***/ "./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengeActive": "ChallengeBox_challengeActive__3mO_D",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__u8aFS",
	"challengeSucceededButton": "ChallengeBox_challengeSucceededButton__18bu2"
};


/***/ }),

/***/ "./src/styles/components/CompletedChallengers.module.css":
/*!***************************************************************!*\
  !*** ./src/styles/components/CompletedChallengers.module.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"completedChallengersContainer": "CompletedChallengers_completedChallengersContainer__1DLzu"
};


/***/ }),

/***/ "./src/styles/components/Countdown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/Countdown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"countdownContainer": "Countdown_countdownContainer__3pqLs",
	"countdownButton": "Countdown_countdownButton__2cSHU",
	"countdownButtonActive": "Countdown_countdownButtonActive__37GOc"
};


/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR"
};


/***/ }),

/***/ "./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"container": "LevelUpModal_container__1dM18"
};


/***/ }),

/***/ "./src/styles/components/Profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__3iYlY"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__HbJEc"
};


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2Vycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sZXZlbFVwTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvbXBsZXRlZENoYWxsZW5nZXJzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0NvdW50ZG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0xldmVsVXBNb2RhbC5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VCb3giLCJhY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJDb3VudGRvd25Db250ZXh0IiwiaGFuZGxlQ2hhbGxlbmdlU3VjY2VlZGVkIiwiaGFuZGxlQ2hhbGxlbmdlRmFpbGVkIiwic3R5bGVzIiwiY2hhbGxlbmdlQm94Q29udGFpbmVyIiwiY2hhbGxlbmdlQWN0aXZlIiwiYW1vdW50IiwidHlwZSIsImRlc2NyaXB0aW9uIiwiY2hhbGxlbmdlRmFpbGVkQnV0dG9uIiwiY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uIiwiY2hhbGxlbmdlTm90QWN0aXZlIiwiQ29tcGxldGVkQ2hhbGxlbmdlcnMiLCJjaGFsbGVuZGVzQ29tcGxldGVkIiwiY29tcGxldGVkQ2hhbGxlbmdlcnNDb250YWluZXIiLCJDb3VudGRvd24iLCJtaW51dGVzIiwic2Vjb25kcyIsImhhc0ZpbmlzaGVkIiwiaXNBY3RpdmUiLCJzdGFydENvdW50ZG93biIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJjb3VudGRvd25Db250YWluZXIiLCJjb3VudGRvd25CdXR0b24iLCJjb3VudGRvd25CdXR0b25BY3RpdmUiLCJFeHBlcmllbmNlQmFyIiwiY3VycmVudEV4cGVyaWVuY2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJwZXJjZW50VG9OZXh0TGV2ZWwiLCJNYXRoIiwicm91bmQiLCJleHBlcmllbmNlQmFyIiwid2lkdGgiLCJsZWZ0IiwiUHJvZmlsZSIsImxldmVsIiwicHJvZmlsZUNvbnRhaW5lciIsIkxldmVsVXBNb2RhbCIsImNsb3NlTGV2ZWxVcE1vZGFsIiwib3ZlcmxheSIsImNvbnRhaW5lciIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJzZXRMZXZlbCIsInVzZVN0YXRlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJzZXRDaGFsbGVuZGVzQ29tcGxldGVkIiwic2V0QWN0aXZlQ2hhbGxlbmdlIiwiaXNMZXZlbFVwTW9kYWxPcGVuIiwic2V0SXNMZXZlbE1vZGFsT3BlbiIsInBvdyIsInVzZUVmZmVjdCIsIkNvb2tpZXMiLCJzZXQiLCJsZXZlbFVwIiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nZUluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImJvZHkiLCJmaW5hbEV4cGVyaWVuY2UiLCJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJ0aW1lIiwic2V0VGltZSIsInNldElzQWN0aXZlIiwic2V0SGFzRmluaXNoZWQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiSG9tZSIsInByb3BzIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwicmVxIiwiY29va2llcyIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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QUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0JztcclxuaW1wb3J0IHsgQ291bnRkb3duQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VCb3goKXtcclxuICAgIFxyXG4gICAgY29uc3Qge2FjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGNvbXBsZXRlQ2hhbGxlbmdlfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gICAgY29uc3Qge3Jlc2V0Q291bnRkb3dufSA9IHVzZUNvbnRleHQoQ291bnRkb3duQ29udGV4dCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbGxlbmdlU3VjY2VlZGVkKCl7XHJcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UoKTtcclxuICAgICAgICByZXNldENvdW50ZG93bigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZUZhaWxlZCgpIHtcclxuICAgICAgICByZXNldENoYWxsZW5nZSgpO1xyXG4gICAgICAgIHJlc2V0Q291bnRkb3duKCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQm94Q29udGFpbmVyfT5cclxuICAgICAgICAgICAge2FjdGl2ZUNoYWxsZW5nZSA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlQWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW5oZSB7YWN0aXZlQ2hhbGxlbmdlLmFtb3VudH0geHAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ob3ZvIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2FjdGl2ZUNoYWxsZW5nZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VGYWlsZWR9IGNsYXNzTmFtZT17c3R5bGVzLmNoYWxsZW5nZUZhaWxlZEJ1dHRvbn0+RmFsaGVpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNoYWxsZW5nZVN1Y2NlZWRlZH0gY2xhc3NOYW1lPXtzdHlsZXMuY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9ufT5Db21wbGV0ZWk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFsbGVuZ2VOb3RBY3RpdmV9PlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5GaW5hbGl6ZSB1bSBjaWNsbyBwYXJhIHJlY2ViZXIgdW0gZGVzYWZpby48L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwtdXAuc3ZnXCIgYWx0PVwibGV2ZWwgdXBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgQXZhbmNlIGRlIGxldmVsIGNvbXBsZXRhbmRvIGRlc2FmaW9zLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ2Vycy5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb21wbGV0ZWRDaGFsbGVuZ2VycygpIHtcclxuXHJcbiAgICBjb25zdCB7Y2hhbGxlbmRlc0NvbXBsZXRlZH09IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpOyBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGxldGVkQ2hhbGxlbmdlcnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8c3Bhbj5EZXNhZmlvcyBDb21wbGV0b3M8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPntjaGFsbGVuZGVzQ29tcGxldGVkfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnRkb3duLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd24oKSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgICAgICBzZWNvbmRzLFxyXG4gICAgICAgICAgICBoYXNGaW5pc2hlZCxcclxuICAgICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHJlc2V0Q291bnRkb3duLFxyXG4gICAgICAgICAgICBzdGFydENvdW50ZG93blxyXG4gICAgICAgIH0gPSB1c2VDb250ZXh0KENvdW50ZG93bkNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKS5zcGxpdCgnJyk7XHJcbiAgICBjb25zdCBbc2Vjb25kTGVmdCwgc2Vjb25kUmlnaHRdID0gU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykuc3BsaXQoJycpO1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnttaW51dGVMZWZ0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bWludXRlUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3NlY29uZFJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtoYXNGaW5pc2hlZCA/IChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGRvd25CdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIENpY2xvIGVuY2VycmFkb1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpc0FjdGl2ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRDb3VudGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY291bnRkb3duQnV0dG9ufSAke3N0eWxlcy5jb3VudGRvd25CdXR0b25BY3RpdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJhbmRvbmFyIGNpY2xvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRDb3VudGRvd259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZG93bkJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluaWNpYXIgY2ljbG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLm1vZHVsZS5jc3MnO1xyXG5leHBvcnQgZnVuY3Rpb24gRXhwZXJpZW5jZUJhcigpIHtcclxuICAgIGNvbnN0IHtjdXJyZW50RXhwZXJpZW5jZSwgZXhwZXJpZW5jZVRvTmV4dExldmVsfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHBlcmNlbnRUb05leHRMZXZlbCA9IChNYXRoLnJvdW5kKGN1cnJlbnRFeHBlcmllbmNlKSAqIDEwMCkvZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmV4cGVyaWVuY2VCYXJ9PlxyXG4gICAgICAgICAgICA8c3Bhbj4wIHB4PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOmAke3BlcmNlbnRUb05leHRMZXZlbH0lYH19Lz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmN1cnJlbnRFeHBlcmllbmNlfSBzdHlsZT17e2xlZnQ6YCR7cGVyY2VudFRvTmV4dExldmVsfSVgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRFeHBlcmllbmNlfSB4cFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4+e2V4cGVyaWVuY2VUb05leHRMZXZlbH0geHA8L3NwYW4+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcbiAgICBjb25zdCB7IGxldmVsIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2dpdGh1Yi5jb20vZ2FicmllbGc4MS5wbmdcIiBhbHQ9XCJHYWJyaWVsIEc4MVwiLz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+R2FicmllbCBTIENydXo8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaWNvbnMvbGV2ZWwuc3ZnXCIgYWx0PVwiTGV2ZWxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgTGV2ZWwge2xldmVsfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9MZXZlbFVwTW9kYWwubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGV2ZWxVcE1vZGFsKCkge1xyXG4gICAgY29uc3QgeyBsZXZlbCwgY2xvc2VMZXZlbFVwTW9kYWwgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj57bGV2ZWx9PC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5QYXJhYsOpbnMhPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICA8cD5Wb2PDqiBhbGNhbsOnb3UgdW0gbm92byBsZXZlbC48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VMZXZlbFVwTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2Nsb3NlLnN2Z1wiIGFsdD1cIkZlY2hhciBtb2RhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gJy4uLy4uL2NoYWxsZW5nZXMuanNvbic7XHJcblxyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL2xldmVsVXBNb2RhbCc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICAgIHR5cGU6ICdib2R5Oyd8J2V5ZSc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzQ29udGV4dERhdGEge1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY3VycmVudEV4cGVyaWVuY2U6ICBudW1iZXI7XHJcbiAgICBjaGFsbGVuZGVzQ29tcGxldGVkOiAgbnVtYmVyO1xyXG4gICAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICAgIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xyXG4gICAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICAgIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgY2xvc2VMZXZlbFVwTW9kYWw6ICgpID0+IHZvaWQ7XHJcbiAgICBcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcblxyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgICBjaGFsbGVuZGVzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcih7Y2hpbGRyZW4sLi4ucmVzdH06Q2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF09IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XHJcbiAgICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMCk7XHJcbiAgICBjb25zdCBbY2hhbGxlbmRlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmRlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShyZXN0LmNoYWxsZW5kZXNDb21wbGV0ZWQgPz8gMCk7XHJcblxyXG4gICAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IFtpc0xldmVsVXBNb2RhbE9wZW4sIHNldElzTGV2ZWxNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCsxKSo0LDIpXHJcblxyXG4gICAgLy9TYWx2YXIgaW5mb3JtYcOnw7VlcyBubyBjb29ja2llc1xyXG4gICAgdXNlRWZmZWN0KCgpPT4ge1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xyXG4gICAgICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZGVzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5kZXNDb21wbGV0ZWQpKTtcclxuICAgIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5kZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsZXZlbFVwKCl7XHJcbiAgICAgIHNldExldmVsKGxldmVsKzEpO1xyXG4gICAgICBzZXRJc0xldmVsTW9kYWxPcGVuKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcGVkaXIgcGVybWlzc8OjbyBwYXJhIGVudmlhciBub3RpZmljYcOnw7VlcyBwYXJhIG8gdXN1w6FyaW8uXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcbiAgICAgICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7IFxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VMZXZlbFVwTW9kYWwoKSB7XHJcbiAgICAgICAgc2V0SXNMZXZlbE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcclxuICAgICAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKVxyXG4gICAgICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xyXG4gICAgICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG5cclxuICAgICAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xyXG5cclxuICAgICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJyl7XHJcbiAgICAgICAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbyEnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiBgVmFsZW5kbyAke2NoYWxsZW5nZS5hbW91bnR9IHhwLmAsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCl7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCl7XHJcbiAgICAgICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qge2Ftb3VudH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICAgICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICAgICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgICAgICAgIGxldmVsVXAoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgICAgIHNldENoYWxsZW5kZXNDb21wbGV0ZWQoY2hhbGxlbmRlc0NvbXBsZXRlZCArMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgY2hhbGxlbmRlc0NvbXBsZXRlZCxcclxuICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWwsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuXHJcbiAgICAgIHtpc0xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVXBNb2RhbCAvPn1cclxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlQ29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhe1xyXG4gICAgbWludXRlczogbnVtYmVyO1xyXG4gICAgc2Vjb25kczogbnVtYmVyO1xyXG4gICAgaGFzRmluaXNoZWQ6IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICAgIHN0YXJ0Q291bnRkb3duOiAoKT0+IHZvaWQgO1xyXG4gICAgcmVzZXRDb3VudGRvd246ICgpPT4gdm9pZCA7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3BzIHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmxldCBjb3VudGRvd25UaW1lb3V0OiBOb2RlSlMuVGltZW91dDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gIGNyZWF0ZUNvbnRleHQoe30gYXMgQ291bnRkb3duQ29udGV4dERhdGEpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoe2NoaWxkcmVufTogQ291bnRkb3duUHJvdmlkZXJQcm9wcykge1xyXG5cclxuICAgIGNvbnN0IHsgc3RhcnROZXdDaGFsbGVuZ2UgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG4gICAgXHJcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgyNSAqIDYwKTtcclxuICAgIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2hhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xyXG4gICAgICAgIHNldElzQWN0aXZlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChjb3VudGRvd25UaW1lb3V0KTtcclxuICAgICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldFRpbWUoMC4wNSAqIDYwKTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xyXG4gICAgICAgICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHRpbWUgLSAxKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzQWN0aXZlICYmIHRpbWUgPT09IDApIHtcclxuICAgICAgICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldElzQWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNBY3RpdmUsIHRpbWVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcblxyXG4gICAgICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgICAgICBzZWNvbmRzLFxyXG4gICAgICAgICAgICBoYXNGaW5pc2hlZCxcclxuICAgICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICAgIHN0YXJ0Q291bnRkb3duLFxyXG4gICAgICAgICAgICByZXNldENvdW50ZG93bixcclxuXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBDb21wbGV0ZWRDaGFsbGVuZ2VycyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxlbmdlcnMnO1xuXG5pbXBvcnQge0dldFNlcnZlclNpZGVQcm9wc30gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCB7IENvdW50ZG93biB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ291bnRkb3duJztcbmltcG9ydCB7IEV4cGVyaWVuY2VCYXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXInO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZmlsZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IENoYWxsZW5nZUJveCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94JztcbmltcG9ydCB7IENvdW50ZG93blByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dCc7XG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0JztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIGxldmVsOiBudW1iZXI7XG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XG4gIGNoYWxsZW5kZXNDb21wbGV0ZWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wczpIb21lUHJvcHMpIHtcblxuICByZXR1cm4gKFxuICAgIDxDaGFsbGVuZ2VzUHJvdmlkZXJcbiAgICAgIGxldmVsPXtwcm9wcy5sZXZlbH1cbiAgICAgIGN1cnJlbnRFeHBlcmllbmNlPXtwcm9wcy5jdXJyZW50RXhwZXJpZW5jZX1cbiAgICAgIGNoYWxsZW5kZXNDb21wbGV0ZWQ9e3Byb3BzLmNoYWxsZW5kZXNDb21wbGV0ZWR9XG4gICAgPlxuXG48ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5Nb3ZlaXQgLSBHODE8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPEV4cGVyaWVuY2VCYXIgLz5cblxuICAgICAgICA8Q291bnRkb3duUHJvdmlkZXI+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8UHJvZmlsZSAvPlxuICAgICAgICAgICAgICA8Q29tcGxldGVkQ2hhbGxlbmdlcnMgLz5cbiAgICAgICAgICAgICAgPENvdW50ZG93biAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxDaGFsbGVuZ2VCb3ggLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L0NvdW50ZG93blByb3ZpZGVyPlxuICAgIDwvZGl2PlxuXG4gICAgPC9DaGFsbGVuZ2VzUHJvdmlkZXI+XG4gICAgXG4gICk7XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczpHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5kZXNDb21wbGV0ZWQgfSA9IGN0eC5yZXEuY29va2llcztcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsZXZlbDogTnVtYmVyKGxldmVsKSxcbiAgICAgIGN1cnJlbnRFeHBlcmllbmNlOiBOdW1iZXIoY3VycmVudEV4cGVyaWVuY2UpLFxuICAgICAgY2hhbGxlbmRlc0NvbXBsZXRlZDogTnVtYmVyKGNoYWxsZW5kZXNDb21wbGV0ZWQpLFxuICAgIH1cbiAgfVxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoYWxsZW5nZUJveENvbnRhaW5lclwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VCb3hDb250YWluZXJfXzUzQWtGXCIsXG5cdFwiY2hhbGxlbmdlTm90QWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZU5vdEFjdGl2ZV9fMzVpeEtcIixcblx0XCJjaGFsbGVuZ2VBY3RpdmVcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQWN0aXZlX18zbU9fRFwiLFxuXHRcImNoYWxsZW5nZUZhaWxlZEJ1dHRvblwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VGYWlsZWRCdXR0b25fX3U4YUZTXCIsXG5cdFwiY2hhbGxlbmdlU3VjY2VlZGVkQnV0dG9uXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZVN1Y2NlZWRlZEJ1dHRvbl9fMThidTJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbXBsZXRlZENoYWxsZW5nZXJzQ29udGFpbmVyXCI6IFwiQ29tcGxldGVkQ2hhbGxlbmdlcnNfY29tcGxldGVkQ2hhbGxlbmdlcnNDb250YWluZXJfXzFETHp1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb3VudGRvd25Db250YWluZXJcIjogXCJDb3VudGRvd25fY291bnRkb3duQ29udGFpbmVyX18zcHFMc1wiLFxuXHRcImNvdW50ZG93bkJ1dHRvblwiOiBcIkNvdW50ZG93bl9jb3VudGRvd25CdXR0b25fXzJjU0hVXCIsXG5cdFwiY291bnRkb3duQnV0dG9uQWN0aXZlXCI6IFwiQ291bnRkb3duX2NvdW50ZG93bkJ1dHRvbkFjdGl2ZV9fMzdHT2NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV4cGVyaWVuY2VCYXJcIjogXCJFeHBlcmllbmNlQmFyX2V4cGVyaWVuY2VCYXJfXzJKYkFYXCIsXG5cdFwiY3VycmVudEV4cGVyaWVuY2VcIjogXCJFeHBlcmllbmNlQmFyX2N1cnJlbnRFeHBlcmllbmNlX18yWEFUUlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwib3ZlcmxheVwiOiBcIkxldmVsVXBNb2RhbF9vdmVybGF5X18xaHVRbFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkxldmVsVXBNb2RhbF9jb250YWluZXJfXzFkTTE4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcm9maWxlQ29udGFpbmVyXCI6IFwiUHJvZmlsZV9wcm9maWxlQ29udGFpbmVyX18zaVlsWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX0hiSkVjXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9