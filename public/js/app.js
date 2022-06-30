/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/Tile.js":
/*!******************************!*\
  !*** ./resources/js/Tile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tile)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tile = /*#__PURE__*/function () {
  // correct, present, absent
  function Tile(position) {
    _classCallCheck(this, Tile);

    _defineProperty(this, "letter", '');

    _defineProperty(this, "status", '');

    this.position = position;
  }

  _createClass(Tile, [{
    key: "updateStatus",
    value: function updateStatus(theWord) {
      if (!theWord.includes(this.letter)) {
        return this.status = 'absent';
      }

      if (this.letter === theWord[this.position]) {
        return this.status = 'correct';
      }

      this.status = 'present';
    }
  }, {
    key: "fill",
    value: function fill(key) {
      this.letter = key;
    }
  }, {
    key: "empty",
    value: function empty() {
      this.letter = '';
    }
  }], [{
    key: "updateStatusesForRow",
    value: function updateStatusesForRow(row, theWord) {
      theWord = theWord.split(''); //Check for the correct letters...

      var _iterator = _createForOfIteratorHelper(row),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tile = _step.value;

          if (theWord[tile.position] === tile.letter) {
            tile.status = 'correct';
            theWord[tile.position] = null;
          }
        } //Check for present letters...

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper(row),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _tile = _step2.value;

          if (theWord.includes(_tile.letter)) {
            _tile.status = 'present';
            theWord[theWord.indexOf(_tile.letter)] = null;
          }
        } //Check for remaining and absent letters...

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(row.filter(function (tile) {
        return !tile.status;
      })),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _tile2 = _step3.value;
          _tile2.status = 'absent';
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }]);

  return Tile;
}();



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./resources/js/game.js");

document.addEventListener('alpine:init', function () {
  Alpine.data('game', function () {
    return _game__WEBPACK_IMPORTED_MODULE_0__["default"];
  });
}); // VANILLA JS WAY TO GENERATE GRID
// let grid = document.querySelector('#game');
//
// let guessesAllowed = 4;
// let wordLength = 3;
// let fragment = document.createDocumentFragment();
//
// let generateGrid = () => {
//     Array.from({ length: guessesAllowed }).forEach(() => {
//         let row = document.createElement('div');
//         row.classList.add('row');
//
//         Array.from({ length: wordLength }).forEach(() => {
//             let tile = document.createElement('div');
//             tile.classList.add('tile');
//             row.appendChild(tile);
//         });
//         fragment.appendChild(row);
//     });
//     grid.appendChild(fragment);
// }
//
// //Initialize the game Generate the grid
// generateGrid();
// Key up event listener
// document.addEventListener('keyup', e => {
//     alert(e.key)
// });

/***/ }),

/***/ "./resources/js/game.js":
/*!******************************!*\
  !*** ./resources/js/game.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile */ "./resources/js/Tile.js");
/* harmony import */ var _words_3_letter_words_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./words/3-letter-words.js */ "./resources/js/words/3-letter-words.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // Talks about loading more word files: https://laracasts.com/series/wordle-workshop/episodes/16

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // get random word from words array
  //words[Math.floor(Math.random() * words.length)]
  //console.log(this.theWord),
  guessesAllowed: 6,
  theWord: _words_3_letter_words_js__WEBPACK_IMPORTED_MODULE_1__["default"][Math.floor(Math.random() * _words_3_letter_words_js__WEBPACK_IMPORTED_MODULE_1__["default"].length)],
  // theWord: 'cat',
  currentRowIndex: 0,
  state: 'active',
  errors: false,
  message: '',
  letters: [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']],

  /***********
   * Getters *
   ***********/
  get currentRow() {
    return this.board[this.currentRowIndex];
  },

  get currentGuess() {
    return this.currentRow.map(function (tile) {
      return tile.letter;
    }).join('');
  },

  get remainingGuesses() {
    return this.guessesAllowed - this.currentRowIndex - 1;
  },

  /******************************
   * Initialization of the game *
   ******************************/
  init: function init() {
    var _this = this;

    this.board = Array.from({
      length: this.guessesAllowed
    }, function () {
      return Array.from({
        length: _this.theWord.length
      }, function (item, index) {
        return new _Tile__WEBPACK_IMPORTED_MODULE_0__["default"](index);
      });
    });
    console.log(this.theWord);
  },
  matchingTileForKey: function matchingTileForKey(key) {
    return this.board.flat().filter(function (tile) {
      return tile.status;
    }).sort(function (t1, t2) {
      return t2.status === 'correct';
    }).find(function (tile) {
      return tile.letter === key;
    });
  },

  /*************************************
   * Handle the Key Press *
   * Only allow letters to be entered *
   *************************************/
  onKeyPress: function onKeyPress(key) {
    this.message = ''; //this.state = 'active';

    this.errors = false;

    if (/^[A-z]$/.test(key)) {
      this.fillTile(key);
    } else if (key === 'Backspace' || key === 'Delete') {
      this.emptyTile();
    } else if (key === 'Enter') {
      this.submitGuess();
    }
  },

  /*****************************************************
   * Fill the tiles and rows to the length of the word *
   * Break to next row if the current row is full *
   *****************************************************/
  fillTile: function fillTile(key) {
    var _iterator = _createForOfIteratorHelper(this.currentRow),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var tile = _step.value;

        if (!tile.letter) {
          tile.fill(key);
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },

  /****************************************
   * On Backspace or Delete remove a tile *
   ***************************************/
  emptyTile: function emptyTile() {
    var _iterator2 = _createForOfIteratorHelper(_toConsumableArray(this.currentRow).reverse()),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var tile = _step2.value;

        if (tile.letter) {
          tile.empty();
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },

  /********************
   * Submit the guess *
   **********************/
  submitGuess: function submitGuess() {
    //Submit the guess and decide if we proceed
    if (this.currentGuess.length < this.theWord.length) {
      return;
    }

    if (!_words_3_letter_words_js__WEBPACK_IMPORTED_MODULE_1__["default"].includes(this.currentGuess)) {
      this.errors = true;
      this.message = 'Not a word...';
      return;
    } // Update the tile colors


    _Tile__WEBPACK_IMPORTED_MODULE_0__["default"].updateStatusesForRow(this.currentRow, this.theWord); // Check if we have a winner by confirming all tiles are correct

    if (this.currentGuess === this.theWord) {
      this.state = 'complete';
      this.message = 'You win!';
    } else if (this.remainingGuesses === 0) {
      this.state = 'complete';
      this.message = 'Game over. You lose. The word was ' + this.theWord;
    } else {
      this.currentRowIndex++;
      this.message = 'Incorrect!';
    }
  }
});

/***/ }),

/***/ "./resources/js/words/3-letter-words.js":
/*!**********************************************!*\
  !*** ./resources/js/words/3-letter-words.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['aba', 'abs', 'ace', 'act', 'add', 'ado', 'aft', 'age', 'ago', 'aha', 'aid', 'aim', 'air', 'ala', 'ale', 'all', 'alt', 'amp', 'ana', 'and', 'ant', 'any', 'ape', 'app', 'apt', 'arc', 'are', 'ark', 'arm', 'art', 'ash', 'ask', 'asp', 'ass', 'ate', 'ave', 'awe', 'axe', 'aye', 'BAA', 'bad', 'bag', 'ban', 'bar', 'bat', 'bay', 'bed', 'bee', 'beg', 'bel', 'ben', 'bet', 'bid', 'big', 'bin', 'bio', 'bis', 'bit', 'biz', 'bob', 'bog', 'boo', 'bow', 'box', 'boy', 'bra', 'bud', 'Bug', 'bum', 'bun', 'bus', 'but', 'buy', 'bye', 'cab', 'cad', 'cam', 'can', 'cap', 'car', 'cat', 'chi', 'cob', 'cod', 'col', 'con', 'coo', 'cop', 'cor', 'cos', 'cot', 'cow', 'cox', 'coy', 'cry', 'cub', 'cue', 'cum', 'cup', 'cut', 'dab', 'dad', 'dal', 'dam', 'dan', 'day', 'Dee', 'def', 'del', 'den', 'dew', 'did', 'die', 'dig', 'dim', 'din', 'dip', 'dis', 'doc', 'doe', 'dog', 'don', 'dot', 'dry', 'dub', 'due', 'dug', 'dun', 'duo', 'dye', 'ear', 'eat', 'ebb', 'ecu', 'eft', 'egg', 'ego', 'elf', 'elm', 'emu', 'end', 'era', 'eta', 'eve', 'eye', 'fab', 'fad', 'fan', 'far', 'fat', 'fax', 'fay', 'fed', 'fee', 'fen', 'few', 'fig', 'fin', 'fir', 'fit', 'fix', 'flu', 'fly', 'foe', 'fog', 'for', 'fox', 'fry', 'fun', 'fur', 'gag', 'gal', 'gap', 'gas', 'gay', 'gee', 'gel', 'gem', 'get', 'gig', 'gin', 'god', 'got', 'gum', 'gun', 'gut', 'guy', 'gym', 'had', 'ham', 'has', 'hat', 'hay', 'hem', 'hen', 'her', 'hey', 'hid', 'him', 'hip', 'his', 'hit', 'hog', 'hon', 'hop', 'hot', 'how', 'hub', 'hue', 'hug', 'huh', 'hum', 'hut', 'ice', 'icy', 'igg', 'ill', 'imp', 'ink', 'inn', 'ion', 'its', 'ivy', 'jam', 'jar', 'jaw', 'jay', 'jet', 'jew', 'job', 'joe', 'jog', 'joy', 'jug', 'jun', 'kay', 'ken', 'key', 'kid', 'kin', 'kit', 'lab', 'lac', 'lad', 'lag', 'lam', 'lap', 'law', 'lax', 'lay', 'lea', 'led', 'Lee', 'leg', 'les', 'let', 'lib', 'lid', 'lie', 'lip', 'lit', 'log', 'lot', 'low', 'mac', 'mad', 'mag', 'man', 'map', 'mar', 'mas', 'mat', 'max', 'may', 'med', 'meg', 'men', 'Met', 'mid', 'mil', 'mix', 'mob', 'mod', 'mol', 'mom', 'mon', 'mop', 'mot', 'mud', 'mug', 'mum', 'nab', 'nah', 'nan', 'nap', 'nay', 'neb', 'neg', 'net', 'new', 'nil', 'nip', 'nod', 'nor', 'nos', 'not', 'now', 'nun', 'nut', 'oak', 'odd', 'off', 'oft', 'oil', 'old', 'ole', 'one', 'ooh', 'opt', 'orb', 'ore', 'our', 'out', 'owe', 'owl', 'own', 'pac', 'pad', 'pal', 'pam', 'pan', 'pap', 'par', 'pas', 'pat', 'paw', 'pay', 'pea', 'peg', 'pen', 'pep', 'per', 'pet', 'pew', 'phi', 'pic', 'pie', 'pig', 'pin', 'pip', 'pit', 'ply', 'pod', 'pol', 'pop', 'pot', 'pro', 'psi', 'pub', 'pup', 'put', 'rad', 'rag', 'raj', 'ram', 'ran', 'rap', 'rat', 'raw', 'ray', 'red', 'ref', 'reg', 'rem', 'rep', 'rev', 'rib', 'rid', 'rig', 'rim', 'rip', 'rob', 'rod', 'roe', 'rot', 'row', 'rub', 'rue', 'rug', 'rum', 'run', 'rye', 'sab', 'sac', 'sad', 'sae', 'sag', 'sal', 'sap', 'sat', 'saw', 'say', 'sea', 'sec', 'see', 'sen', 'set', 'sew', 'sex', 'she', 'shy', 'sic', 'sim', 'sin', 'sip', 'sir', 'sis', 'sit', 'six', 'ski', 'sky', 'sly', 'sod', 'sol', 'son', 'sow', 'soy', 'spa', 'spy', 'sub', 'sue', 'sum', 'sun', 'sup', 'tab', 'tad', 'tag', 'tam', 'tan', 'tap', 'tar', 'tat', 'tax', 'tea', 'ted', 'tee', 'ten', 'the', 'thy', 'tie', 'tin', 'tip', 'tod', 'toe', 'tom', 'ton', 'too', 'top', 'tor', 'tot', 'tow', 'toy', 'try', 'tub', 'tug', 'two', 'use', 'van', 'vat', 'vet', 'via', 'vie', 'vow', 'wan', 'war', 'was', 'wax', 'way', 'web', 'wed', 'wee', 'wet', 'who', 'why', 'wig', 'win', 'wis', 'wit', 'won', 'woo', 'wow', 'wry', 'wye', 'yen', 'yep', 'yes', 'yet', 'you', 'zip', 'zoo']);

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;