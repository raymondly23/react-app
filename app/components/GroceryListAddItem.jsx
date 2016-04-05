var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx')

module.exports = React.createClass({
  getInitialState() {
      return {
        input: ''
      }
  },
  handleInputName: function(event) {
    this.setState({input: event.target.value})
  },
  addItem: function(event) {
    event.preventDefault()
    action.add({
      name: this.state.input
    })
    this.setState({
      input: ''
    })
  },
  render: function() {
    return (
      <div className='grocery-addItem'>
        <form onSubmit={this.addItem}>
          <input value={this.state.input} onChange={this.handleInputName}/>
          <button>Add Item</button>
        </form>
      </div>
    )
  }
})