'use strict'

var React = require('react')
var AddEvent = require('./add-event')
var EventList = require('./event-list')

module.exports = React.createClass({
    displayName: 'Event List',
    render: function(){
        return <div className="event-app">
          <AddEvent />
          <EventList />
        </div>
    }
})
