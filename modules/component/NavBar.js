var React = require('react-native');
var NavBarGeneric = require('./NavBarGeneric');
var NavBarParallax = require('./NavBarParallax');
var styles = require('../styles/styles.js');
var {
    Text,
    View,
    Image,
    TouchableHighlight,
    } = React;

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      routes : [],
      current_route : {},
    }
  }

  navbarPaddingTop() {
    return 20;
  }

  navbarHeight() {
    if (this.state.navbarType === 'hide') {
      return 20;
    }
    return 80;
  }

  componentDidMount() {

  }

  render() {
    if (this.props.navigationView && this.props.navigationView.pages()) {
      var routes = this.props.navigationView.pages()
      if (routes.length > 0) {
        var current_route = routes[routes.length - 1]
      } else {
        var current_routes = {}
      }
      this.state = {
        routes: routes,
        current_route: current_route,
      }
    }

    if (this.props.navbarType === "hide") {
      return (<View />);
    }
    else if (this.props.navbarType === "parallax") {
      return (
          <NavBarParallax ref='parallax' {...this.state} {...this.props} style={{height: this.navbarHeight(), paddingTop: this.navbarPaddingTop()}}>
          </NavBarParallax>
      );
    }
    return (
        <NavBarGeneric ref='generic' {...this.state} {...this.props} style={{height: this.navbarHeight(), paddingTop: this.navbarPaddingTop()}}>
        </NavBarGeneric>
    );
  }
}



module.exports = NavBar;