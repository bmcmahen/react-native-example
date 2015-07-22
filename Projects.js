var React = require('react-native')
var {
  StyleSheet,
  Text,
  View,
  Component,
  ListView,
  TouchableHighlight,
  PixelRatio
} = React

var ProjectItems = require('./ProjectItems')


// define our list styles
var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    justifyContent: 'flex-start'
  },
  separator: {
   height: 1 / PixelRatio.get(),
   backgroundColor: '#CCCCCC',
 },
 rowItem: {
   paddingTop: 15,
   paddingBottom: 15,
   paddingLeft: 5,
   paddingRight: 5
 },
 rowItemText: {
   fontSize: 16,
   fontWeight: 'bold'
 }
})

/**
 * List of Projects
 *
 * note that i would probably use something like
 * flux (redux?) or relay once it's released, to fetch
 * data from the server
 */

var Projects = React.createClass({

  getInitialState () {

    // define our list-view data source
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        return r1.id !== r2.id
      }
    })

    // define our initial list state w/ mockdata
    return {
      dataSource: ds.cloneWithRows([
        {
          name: 'Project 1',
          id: 1,
          items: [
            { name: 'bacon', id: 'a1' },
            { name: 'more bacon', id: 'a2' }
          ]
        },
        {
          name: 'Project 2',
          id: 2,
          items: [
            { name: 'project2 item', id: 'a3' },
            { name: 'project3 item', id: 'a4' }
          ]
        }
      ])
    }

  },


  render () {

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    )
  },

  // how is each row rendered?
  renderRow (rowData) {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor='#eee'
        onPress={this.onButtonPress.bind(this, rowData)}>
          <View>
            <View style={styles.rowItem}>
              <Text style={styles.rowItemText}> {rowData.name} </Text>
            </View>
            <View style={styles.separator} />
          </View>
      </TouchableHighlight>
    )
  },

  onButtonPress (selectedRow) {
    this.props.navigator.push({
      component: ProjectItems,
      title: selectedRow.name,
      passProps: { project : selectedRow }
    })
  }

})

module.exports = Projects
