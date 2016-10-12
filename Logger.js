define(function () {
  'use strict';

  var console = global.console || window.console;
  var exports = {
    version : '0.1.0',
    author : 'zumgu'
  };

  exports.log = function () {
    var args = Array.prototype.unshift.call(arguments, new Date().toLocaleString());
    console.log.apply(console, arguments);
  };

  return exports;
});
