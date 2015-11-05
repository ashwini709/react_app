'use strict'

var Reflux = require('reflux')
var ItemActions = require('actions/item-actions')

var ItemStore = Reflux.createStore({
  listenables: [ItemActions],

  init() {
    this.updateItems();
  },

  updateItems() {
    localStorage.getItem('event');
  }
})

module.exports = ItemStore;

