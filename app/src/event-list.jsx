'use strict'

var React = require('react')
var EventListHeader = require('./event-list-header')

module.exports = React.createClass({
    displayName: 'Event List',

    getInitialState: function() {
      return {
        items: localStorage.getItem('event') || []
      }
    },

    renderChildren: function () {
      var children = {};
      var counter = 0;
      this.state.items.forEach(item => children[counter++] = <EventListHeader />);
      return <div>{children}</div>;
    },

    render: function(){
        return <div className="event-list">
          <div className="event-list-header">
            <EventListHeader />
          </div>
          <div className="event-summary">
            {this.renderChildren()}
          </div>
        </div>
    }
})
