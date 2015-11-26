var React = require('react-native');
var styles = require('../styles/styles.js');
var {
    Text,
    View,
    Image,
    TouchableHighlight,
    } = React;

class NavBarGeneric extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes : [],
      current_route : {},
      rightChildren: null,
    }
  }





  setRightChildren(rightChildren) {
    this.setState({rightChildren: rightChildren});
  }




  render() {
    return (
        <View style={[styles.container, this.props.style]}>
          {
            this.props.title ? (
                <Text style={styles.title}>{this.props.title}</Text>
            ) : (
                <Image style={[styles.title_icon, {height: 24}]} source={require('image!icon_header')} />
            )
          }
          {
            this.props.routes.length > 1 ? (
                <View style={styles.left}>
                  <TouchableHighlight underlayColor='transparent' onPress={() => { this.props.navigationView.pop() }}>
                    <Image style={styles.icon} source={require('image!icon_back')} />
                  </TouchableHighlight>
                </View>
            ) : null
          }
          {this.state.rightChildren}
        </View>
    );
  }
}

var styles = React.StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: "row",
    alignSelf: 'stretch',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgb(41,117,202)'
  },
  title: {
    flex: 1,
    fontSize: 20,
    position: 'relative',
    color: "#FFFFFF",
    alignItems: 'stretch',
    textAlign: 'center',
  },
  title_icon: {
    flex: 1,
    resizeMode: 'contain',
  },
  left: {
    position: 'absolute',
    left: 4,
    top: 20,
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});


module.exports = NavBarGeneric;