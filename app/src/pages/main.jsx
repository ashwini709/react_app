'use strict'

var React = require('react')
var AddEvent = require('components/add-event')
var EventList = require('components/event-list')
var ItemStore = require('stores/item-store')

module.exports = React.createClass({
  displayName: 'Event List',

  getInitialState: function() {
    return this.state = {
      items : JSON.parse(localStorage.getItem('event')) || []
    };
  },

  componentDidMount: function() {
    this.unsubscribe = ItemStore.listen(this.onEventsAdd)
  },

  componentWillUnmount: function() {
    this.unsubscribe()
  },

  onEventsAdd(state) {
    this.setState({items: state})
  },

  render: function(){
    return <div className="event-app">
      <AddEvent />
      <EventList { ...this.state } />
    </div>
  }
})
