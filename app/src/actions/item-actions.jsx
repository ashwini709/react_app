'use strict'

var Reflux = require('reflux')

var ItemActions = Reflux.createActions([
  'onEventsAdd'
]);

ItemActions.onEventsAdd();

module.exports = ItemActions;
