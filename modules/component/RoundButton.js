'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var {
    Image,
    TextInput,
    View,
    ScrollView,
    Text,
    TouchableHighlight,
    StyleSheet,
    } = React;


class CoreButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

    this.buttonStyle = styles.button;
    this.buttonThemeStyle = styles.transparent;
    this.buttonUnderlayColor = "transparent";
    this.buttonTextColor = "#FFFFFF";

    if (this.props.theme === "transparent") {
      this.buttonThemeStyle = styles.transparent;
      this.buttonUnderlayColor = "transparent";
      this.buttonTextColor = "#FFFFFF";
    }
    else if (this.props.theme === "white") {
      this.buttonThemeStyle = styles.white;
      this.buttonUnderlayColor = "#999999";
      this.buttonTextColor = "#000000";
    }
    else if (this.props.theme === "purple") {
      this.buttonThemeStyle = styles.purple;
      this.buttonUnderlayColor = "#99BEF7";
      this.buttonTextColor = "#FFFFFF";
    }

    this.left_icon = null;
    if (this.props.left_icon) {
      this.left_icon = (<Image style={{marginRight: 10, marginLeft: -10, alignSelf: "center", width: 40, height: 40}} source={this.props.left_icon} />)
    }

    this.right_icon = null;
    if (this.props.right_icon) {
      this.right_icon = (<Image style={{marginRight: -10, marginLeft: 10, alignSelf: "center", width: 40, height: 40}} source={this.props.right_icon} />)
    }

    this.text = null;
    if (this.props.text) {
      this.text = (<Text style={[{fontSize: 22, flex: 1, backgroundColor: "transparent", textAlign: "center"}, {color: this.buttonTextColor}]}>{this.props.text}</Text>)
    }
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
      console.log(focused)
    })
  }



  render() {
    return (
        <TouchableHighlight onPress={this.props.onPress} activeOpacity={0.5} underlayColor={this.buttonUnderlayColor} style={[this.buttonStyle, this.buttonThemeStyle, this.props.style]}>
          <View style={[{marginLeft: 32, marginRight: 32, flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-around"}, this.props.innerStyle]}>
            {this.left_icon}
            {this.text}
            {this.right_icon}
          </View>
        </TouchableHighlight>
    );
  }
}



var styles = React.StyleSheet.create({
  button: {
    backgroundColor:"transparent",
    borderColor: "#FFFFFF",
    borderRadius: 35,
    borderWidth:2,
    alignItems: "stretch",
    padding: 15,
    justifyContent: "center",
  },
  transparent: {
  },
  white: {
    backgroundColor:"#FFFFFF",
  },
  purple: {
    backgroundColor:"#669ED7",
  }
});

module.exports = CoreButton;