var React = require('react-native')

var {
  StyleSheet,
  ListView,
  TouchableHighlight,
  Text,
  View
} = React

var ProjectView = require('./ProjectView')

const styles = StyleSheet.create({
  separator: {
   height: 1,
   backgroundColor: '#CCCCCC',
 },
 rowItem: {
   padding: 15
 }
})


var ProjectItems = React.createClass({

  propTypes: {

  },

  getInitialState () {

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        return r1.id !== r2.id
      }
    })

    return {
      listItems: ds.cloneWithRows(this.props.project.items)
    }
  },

  render () {

    return (
      <ListView
        dataSource={this.state.listItems}
        renderRow={this.renderRow.bind(this)}
      />
    )
  },

  renderRow (rowData) {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor='#eee'
        onPress={this.onButtonPress.bind(this, rowData)}>
          <View>
            <View style={styles.rowItem}>
              <Text> {rowData.name} </Text>
            </View>
            <View style={styles.separator} />
          </View>
      </TouchableHighlight>
    )
  },

  onButtonPress (selectedRow) {
    this.props.navigator.push({
      component: ProjectView,
      title: selectedRow.name,
      passProps: { projectItem : selectedRow }
    })
  }
})

module.exports = ProjectItems
