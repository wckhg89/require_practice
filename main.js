require(['App', 'Logger'], function (app, logger) {
  'use strict';
  app.start();
  logger.log('Application Start');

}, function (err) {
  // Error handling
});
