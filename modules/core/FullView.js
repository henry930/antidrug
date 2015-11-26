var React = require('react-native');
var styles = require('../styles/styles');
var {
    View,
    } = React;


class FullView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current_text: '',
    }
  }

  render() {
    return (
        <TextInput
            onChangeText={(text) => {this.setState({
              current_text : text
            })}}
            {...this.props} style={{flex: 1, flexDirection: 'row', alignItems: 'stretch', alignSelf: 'stretch'}}>
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch', alignSelf: 'stretch'}}>
            {this.props.children}
          </View>

          <Text>{this.state.current_text}</Text>

        </TextInput>
    )
  }

}

module.exports = FullView;
