'use strict';

var eco = require('eco');

exports.name = 'eco';
exports.outputFormat = 'html';
exports.render = function (str, options) {
  return eco.render(str, options);
};
