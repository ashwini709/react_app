'use strict'

var React = require('react')

module.exports = React.createClass({
    displayName: 'Event List Header',
    render: function(){
        return <div className="header-container">
          <div>Event</div>
          <div>Time</div>
          <div>Duration</div>
        </div>
    }
})
