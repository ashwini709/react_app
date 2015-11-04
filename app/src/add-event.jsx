'use strict'

var React = require('react')

module.exports = React.createClass({
    displayName: 'Add an event',
    render: function(){
        return <div class="event-form">
          <div>Add Event</div>
          <input class="event-name" placeholder="Event Name" type="text"></input>
          <input class="event-time" placeholder="Start At?" type="text"></input>
          <input class="event-duration" placeholder="For how long" type="text"></input>
        </div>
    }
})
