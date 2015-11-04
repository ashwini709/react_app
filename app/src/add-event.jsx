'use strict'

var React = require('react')

module.exports = React.createClass({
    displayName: 'Add an event',

    getInitialState: function() {
      return {
        counter: localStorage.getItem('counter') || 0
      }
    },

    saveToLocalStorage: function(event) {
      var eventName = (document.getElementsByClassName('event-name')[0]).value
      var eventTime = (document.getElementsByClassName('event-time')[0]).value
      var eventDuration = (document.getElementsByClassName('event-duration')[0]).value

      if (eventTime.length == 0 && eventDuration.length == 0) {
        eventDuration = 'All Day Event'
      }
      var event = {
        name: eventName,
        time: eventTime,
        duration: eventDuration
      }

      if (eventName.length != 0) {
        localStorage.setItem('event:'+this.state.counter, JSON.stringify(event))
        localStorage.setItem('counter', this.state.counter)
        this.setState({counter: parseInt(this.state.counter) + 1})
      }
    },

    render: function(){
        return <div className="event-form">
          <div className="title">Add Event</div>
          <div className="input-group">
            <input className="event-name" placeholder="Event Name" type="text" />
            <input className="event-time" placeholder="Start At?" type="text" />
            <input className="event-duration" placeholder="For how long" type="text" />
          </div>
          <button className="submit-btn" onClick={this.saveToLocalStorage}>Submit</button>
        </div>
    }
})
