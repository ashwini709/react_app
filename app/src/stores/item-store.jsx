'use strict'

var Reflux = require('reflux')
var ItemActions = require('actions/item-actions')

var ItemStore = Reflux.createStore({
  listenables: [ItemActions],

  init() {
    this.updateItems();
  },

  updateItems() {
    return JSON.parse(localStorage.getItem('event'));
  }
})

module.exports = ItemStore;

