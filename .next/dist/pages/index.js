'use strict';
Object.defineProperty(exports, "__esModule", { value: true });var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _Head = require('../components/Head');var _Head2 = _interopRequireDefault(_Head);
var _ExtScripts = require('../components/ExtScripts');var _ExtScripts2 = _interopRequireDefault(_ExtScripts);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}exports.default = function () {
  return _react2.default.createElement('html', null, _react2.default.createElement(_Head2.default, null), _react2.default.createElement('body', null, 'hello world', _react2.default.createElement(_ExtScripts2.default, null)));
};