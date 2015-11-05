'use strict'

var Reflux = require('reflux')
var ItemActions = require('actions/item-actions')

var ItemStore = Reflux.createStore({
  listenables: [ItemActions],

  init() {
    this.listenTo(ItemActions.onEventsAdd, this.updateItems)
  },


  updateItems() {
    var items  = JSON.parse(localStorage.getItem('event'))
    this.trigger(items)
  }
})

module.exports = ItemStore;

