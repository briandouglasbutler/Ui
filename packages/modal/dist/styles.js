'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Container = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(1, 1, 1, 0.5);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 5;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(1, 1, 1, 0.5);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 5;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\nbackground-color: white;\nwidth: 400px;\nheight: 400px;\nzindex: 10;\nborder-radius: 10px;\npadding: 15px;\n'], ['\nbackground-color: white;\nwidth: 400px;\nheight: 400px;\nzindex: 10;\nborder-radius: 10px;\npadding: 15px;\n']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = exports.Container = (0, _reactEmotion2.default)('div')(_templateObject);

var Content = exports.Content = (0, _reactEmotion2.default)('div')(_templateObject2);