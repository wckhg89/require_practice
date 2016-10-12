define(['Logger'], function (logger) {
  'use strict';

  var exports = {
    type : 'controller',
    name : 'Main'
  }

  var bindEvent = function () {
    logger.log('bindEvent ...');
  };

  var view = function () {
    logger.log('render ui');
  };

  exports.execute = function () {
    logger.log(exports.name + " controller execute ...");
  };

  return exports;
});
