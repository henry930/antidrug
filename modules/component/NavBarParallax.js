var React = require('react-native');
var __styles = require('../styles/styles.js');
var {
    Text,
    View,
    Image,
    TouchableHighlight,
    } = React;
var rebound = require('rebound');

class NavBarParallax extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes : [],
      current_route : {},
      offsetY: 0,
      parallax: null,
      rightChildren: null,
    }
  }

  componentDidMount() {
    this.springSystem = new rebound.SpringSystem();
    this._scrollSpring = this.springSystem.createSpring();
    var springConfig = this._scrollSpring.getSpringConfig();
    springConfig.tension = 200;
    springConfig.friction = 40;

    this._scrollSpring.addListener({
      onSpringUpdate: () => {
        this.setState({offsetY: this._scrollSpring.getCurrentValue()});
      },
    });

    this._scrollSpring.setCurrentValue(200);
    this._scrollSpring.setEndValue(0);
  }

  parallaxBackgroundColorStyle() {
    var height = 240;
    var offsetY = this.state.offsetY;
    if (offsetY < 0) offsetY = 0;
    var top = -20 - offsetY;

    return {
      left: 0,
      right: 0,
      position:'absolute',
      top: top,
      height: height,
      overflow: 'hidden',
      alignSelf: 'stretch',
      backgroundColor: 'rgb(41,117,202)',
    }
  }

  parallaxBackgroundStyle() {
    var height = 240;
    var offsetY = this.state.offsetY;
    if (offsetY < 0) offsetY = 0;

    return {
      flex: 1,
      left: 0,
      right: 0,
      alignSelf: 'stretch',
      opacity: (height - (offsetY * 2)) / height,
    }
  }

  parallaxForegroundStyle() {
    var height = 240;
    var offsetY = this.state.offsetY;
    return {
      opacity: (offsetY * 3) / height,
    }
  }



  setRightChildren(rightChildren) {
    this.setState({rightChildren: rightChildren});
  }

  setParallax(parallax) {
    this.setState({parallax: parallax});
  }

  setParallaxOffsetY(offsetY) {
    this._scrollSpring.setEndValue(offsetY);
  }






  render() {
    return (
        <View style={[styles.container, this.props.style, {overflow: 'visible'} ]}>
          <View style={[this.parallaxBackgroundColorStyle() ]}>
            <View style={[this.parallaxBackgroundStyle() ]}>
              {this.state.parallax ? this.state.parallax : null}
            </View>
          </View>
          {
            this.props.title ? (
                <Text style={[styles.title, this.parallaxForegroundStyle() ]}>{this.props.title}</Text>
            ) : (
                <Image style={[styles.title_icon, {height: 24}, this.parallaxForegroundStyle() ]} source={require('image!icon_header')} />
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
    backgroundColor: 'transparent',
  },
  title_icon: {
    flex: 1,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
  left: {
    position: 'absolute',
    left: 4,
    top: 20,
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
});


module.exports = NavBarParallax;