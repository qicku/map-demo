"use strict";
self["webpackHotUpdatemap_demo"]("index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw */ "./src/draw.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");



 // import * as d3 from 'd3'



startApp().catch(function (err) {
  console.log('Fail:', err);
});

function startApp() {
  return _startApp.apply(this, arguments);
}

function _startApp() {
  _startApp = (0,_babel_runtime_corejs3_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var _context;

    var box, margin, svg, g;
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            box = d3.select('#root');
            margin = {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10
            };
            svg = box.append('svg').attr('width', _draw__WEBPACK_IMPORTED_MODULE_4__.width).attr('height', _draw__WEBPACK_IMPORTED_MODULE_4__.height);
            g = svg.append('g').attr('transform', _babel_runtime_corejs3_core_js_instance_concat__WEBPACK_IMPORTED_MODULE_2___default()(_context = "translate(".concat(margin.top, ",")).call(_context, margin.left, ")"));
            _context2.next = 6;
            return (0,_draw__WEBPACK_IMPORTED_MODULE_4__.draw)(g);

          case 6:
            bindHideButton();
            bindGithub();

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  }));
  return _startApp.apply(this, arguments);
}

function bindHideButton() {
  document.querySelector('#hideButton').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#toast').classList.add('hide');
    document.querySelector('selectRegon').innerHTML = '';
  });
}

function bindGithub() {
  document.querySelector('.goto-github').addEventListener('click', function (e) {
    e.preventDefault();
    window.open('https://github.com/qicku/map-demo/tree/dev-main', 'game-demo-code');
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2c7d7e8ddcccb1872110")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzhlMTI4MDYzZTQzMjkzY2Q0NzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFFQTtBQUVBO0FBQ0FHLFFBQVEsR0FBR0MsS0FBWCxDQUFpQixVQUFDQyxHQUFELEVBQVM7QUFDeEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLEdBQXJCO0FBQ0QsQ0FGRDs7U0FJZUY7Ozs7OzJNQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNRSyxZQUFBQSxHQURSLEdBQ2NDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLE9BQVYsQ0FEZDtBQUdRQyxZQUFBQSxNQUhSLEdBR2lCO0FBQ2JDLGNBQUFBLEdBQUcsRUFBRSxFQURRO0FBRWJDLGNBQUFBLEtBQUssRUFBRSxFQUZNO0FBR2JDLGNBQUFBLE1BQU0sRUFBRSxFQUhLO0FBSWJDLGNBQUFBLElBQUksRUFBRTtBQUpPLGFBSGpCO0FBVVFDLFlBQUFBLEdBVlIsR0FVY1IsR0FBRyxDQUFDUyxNQUFKLENBQVcsS0FBWCxFQUFrQkMsSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0NsQix3Q0FBaEMsRUFBdUNrQixJQUF2QyxDQUE0QyxRQUE1QyxFQUFzRGpCLHlDQUF0RCxDQVZkO0FBWVFrQixZQUFBQSxDQVpSLEdBWVlILEdBQUcsQ0FDVkMsTUFETyxDQUNBLEdBREEsRUFFUEMsSUFGTyxDQUVGLFdBRkUsdUhBRXdCUCxNQUFNLENBQUNDLEdBRi9CLHVCQUVzQ0QsTUFBTSxDQUFDSSxJQUY3QyxPQVpaO0FBQUE7QUFBQSxtQkFnQlFiLDJDQUFJLENBQUNpQixDQUFELENBaEJaOztBQUFBO0FBaUJFQyxZQUFBQSxjQUFjO0FBQ2RDLFlBQUFBLFVBQVU7O0FBbEJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBcUJBLFNBQVNELGNBQVQsR0FBMEI7QUFDeEJFLEVBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLFVBQVVDLENBQVYsRUFBYTtBQUMzRUEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FKLElBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ0ksU0FBakMsQ0FBMkNDLEdBQTNDLENBQStDLE1BQS9DO0FBQ0FOLElBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixFQUFzQ00sU0FBdEMsR0FBa0QsRUFBbEQ7QUFDRCxHQUpEO0FBS0Q7O0FBRUQsU0FBU1IsVUFBVCxHQUFzQjtBQUNwQkMsRUFBQUEsUUFBUSxDQUNMQyxhQURILENBQ2lCLGNBRGpCLEVBRUdDLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCLFVBQVVDLENBQVYsRUFBYTtBQUN0Q0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FJLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUNFLGlEQURGLEVBRUUsZ0JBRkY7QUFJRCxHQVJIO0FBU0Q7Ozs7Ozs7O1VDbEREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFwLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWFwLWRlbW8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tYWluLnNjc3MnXHJcblxyXG4vLyBpbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcclxuXHJcbmltcG9ydCB7IHdpZHRoLCBoZWlnaHQgfSBmcm9tICcuL2RyYXcnXHJcblxyXG5pbXBvcnQgeyBkcmF3IH0gZnJvbSAnLi9kcmF3J1xyXG5zdGFydEFwcCgpLmNhdGNoKChlcnIpID0+IHtcclxuICBjb25zb2xlLmxvZygnRmFpbDonLCBlcnIpXHJcbn0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdGFydEFwcCgpIHtcclxuICBjb25zdCBib3ggPSBkMy5zZWxlY3QoJyNyb290JylcclxuXHJcbiAgY29uc3QgbWFyZ2luID0ge1xyXG4gICAgdG9wOiAxMCxcclxuICAgIHJpZ2h0OiAxMCxcclxuICAgIGJvdHRvbTogMTAsXHJcbiAgICBsZWZ0OiAxMCxcclxuICB9XHJcblxyXG4gIGNvbnN0IHN2ZyA9IGJveC5hcHBlbmQoJ3N2ZycpLmF0dHIoJ3dpZHRoJywgd2lkdGgpLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcclxuXHJcbiAgY29uc3QgZyA9IHN2Z1xyXG4gICAgLmFwcGVuZCgnZycpXHJcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi50b3B9LCR7bWFyZ2luLmxlZnR9KWApXHJcblxyXG4gIGF3YWl0IGRyYXcoZylcclxuICBiaW5kSGlkZUJ1dHRvbigpXHJcbiAgYmluZEdpdGh1YigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRIaWRlQnV0dG9uKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoaWRlQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9hc3QnKS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFJlZ29uJykuaW5uZXJIVE1MID0gJydcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5kR2l0aHViKCkge1xyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcignLmdvdG8tZ2l0aHViJylcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICB3aW5kb3cub3BlbihcclxuICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL3FpY2t1L21hcC1kZW1vL3RyZWUvZGV2LW1haW4nLFxyXG4gICAgICAgICdnYW1lLWRlbW8tY29kZSdcclxuICAgICAgKVxyXG4gICAgfSlcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYzdkN2U4ZGRjY2NiMTg3MjExMFwiKSJdLCJuYW1lcyI6WyJ3aWR0aCIsImhlaWdodCIsImRyYXciLCJzdGFydEFwcCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImJveCIsImQzIiwic2VsZWN0IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3ZnIiwiYXBwZW5kIiwiYXR0ciIsImciLCJiaW5kSGlkZUJ1dHRvbiIsImJpbmRHaXRodWIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwid2luZG93Iiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=