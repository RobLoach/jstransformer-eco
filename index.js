'use strict';

var eco = require('eco');

exports.name = 'eco';
exports.outputFormat = 'xml';
exports.render = function (str, options) {
  return eco.render(str, options);
};
