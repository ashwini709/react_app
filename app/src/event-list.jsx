'use strict'

var React = require('react')
var EventListHeader = require('./event-list-header')
var EventItem = require('./event-item')

module.exports = React.createClass({
    displayName: 'Event List',

    getInitialState: function() {
      return {
        items: localStorage.getItem('event') || []
      }
    },

    render: function(){
        return <div className="event-list">
          <div className="event-list-header">
            <EventListHeader />
          </div>
          <div className="event-summary">
            <ul>
              {this.state.items.map(function(item) {
                return <EventItem key={item.id} data={item}/>;
              })}
            </ul>
          </div>
        </div>
    }
})
