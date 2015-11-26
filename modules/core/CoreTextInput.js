'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var {
    TextInput,
    View,
    ScrollView,
    Text,
    StyleSheet,
    } = React;


class CoreTextInput extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }



  inputFocused (focused) {
    requestAnimationFrame(() => {
      if (this.props.scrollView) {
        if (focused) {
          var scrollResponder = this.props.scrollView.getScrollResponder();

          scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
              React.findNodeHandle(this.refs.textinput),
              0,
              true
          );
        }
      }
    })
  }



  render() {
    return (
        <TextInput
            ref="textinput"
            style={[styles.textinput, this.props.style]}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChangeText={this.props.onChangeText}
            onFocus={() => this.inputFocused(true) }
            />
    );
  }
}


var styles = StyleSheet.create({

  textinput: {
    paddingLeft: 30,
    paddingRight: 30,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    marginBottom: 2,
  },

})

module.exports = CoreTextInput;