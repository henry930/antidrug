var React = require('react-native');
var styles = require('../styles/styles.js');
var {
    Text,
    View,
    Image,
    TouchableOpacity,
    } = React;

class NavBarGeneric extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes : [],
      current_route : {},
      rightChildren: null,
      bgColor: "#24B0CC",
    }
  }




  setBackgroundColor(color) {
    this.setState({bgColor: color})
  }




  setRightChildren(rightChildren) {
    this.setState({rightChildren: rightChildren});
  }




  render() {
    return (
        <View style={[styles.container, this.props.style, {backgroundColor: this.state.bgColor}]}>
          {
            this.props.routes.length > 1 ? (
                <View style={styles.left}>
                  <TouchableOpacity onPress={() => { this.props.navigationView.pop() }}>
                    <Image style={styles.icon} source={GLOBAL.IMAGE.icon_back} />
                  </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.left}>
                  <TouchableOpacity onPress={() => { this.context.menuActions.toggle(); }}>
                    <Image style={styles.icon} source={GLOBAL.IMAGE.icon_menu} />
                  </TouchableOpacity>
                </View>
            )
          }
          {
            this.props.title ? (
                <Text style={styles.title}>{this.props.title}</Text>
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
  },
  title: {
    flex: 1,
    fontSize: 18,
    position: 'relative',
    color: "#FFFFFF",
    alignItems: 'stretch',
    textAlign: 'left',
  },
  title_icon: {
    flex: 1,
    resizeMode: 'contain',
  },
  left: {
    position: 'relative',
    left: 4,
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  icon: {
    margin: 8,
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});


NavBarGeneric.contextTypes = {
  menuActions: React.PropTypes.object.isRequired
};


module.exports = NavBarGeneric;