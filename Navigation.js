var React = require('react-native')
var {
  NavigatorIOS,
  StyleSheet,
  PropTypes,
  TabBarIOS,
  View,
  Text
} = React

var Projects = require('./Projects')


/**
 * Styles
 */

var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'blue'
  }
})



/**
 * Nav Class
 */

var Nav = React.createClass({

  getInitialState () {
    return {}
  },

  render () {
    return (
      <View style={styles.wrapper}>
        <NavigatorIOS
          style={styles.wrapper}
          initialRoute={{
            component: Projects,
            title: 'Projects',
            leftButtonTitle: 'Menu',
            onLeftButtonPress: this.showMenu,
            rightButtonTitle: 'New Project',
            onRightButtonPress: this.createProject
          }}
        />
      </View>
    )
  },

  showMenu () {
    console.log('show menu')
  },

  createProject () {
    console.log('new project')
  }

})

module.exports = Nav
