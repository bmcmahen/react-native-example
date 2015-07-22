var React = require('react-native')
var {
  View,
  ScrollView,
  PropTypes,
  Text
} = React

var ProjectView = React.createClass({

  propTypes: {
    projectItem: PropTypes.object.isRequired
  },

  render () {

    let {name} = this.props.projectItem

    return (
      <ScrollView>
        <Text>{name}</Text>
      </ScrollView>
    )
  }
})

module.exports = ProjectView
