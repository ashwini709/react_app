'use strict'

var React = require('react')

module.exports = React.createClass({
    displayName: 'Event Item',
    render: function(){
      return <li className="event-item">
        <div>{ this.props.data.name }</div>
        <div>{ this.props.data.time }</div>
        <div>{ this.props.data.duration }</div>
      </li>
    }
})
