var React = require('react-native');
var {
    AsyncStorage,
    View,
    Image,
    } = React;

var styles = require('./styles/styles.js');

var AppSplashPage = require('./pages/AppSplashPage');
var AppMainRoutePage = require('./pages/AppMainRoutePage');
var AppUnitTestRoutePage = require('./pages/AppUnitTestRoutePage');

class AppDelegate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index : 0,
      bottomBarIsVisible : true,
      isStarted: false,
      isReady: false,
      isPageTest: true,
      touchToCloseMenu: true,
    }

    GLOBAL.APPDELEGATE = this
  }


  decide() {
    this.setState({
      isStarted : true
    })
  }


  setIsLoggedIn(bool) {
    this.setState({
      isLoggedIn: bool
    })
  }


  componentDidMount() {

    var guid = function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
    }

    AsyncStorage.getItem('@APP_UUID')
        .then((value) => {
          if (!value) {
            var _guid = guid()
            console.log("NEW APP_UUID: ", _guid)
            AsyncStorage.setItem('@APP_UUID', _guid).done()
          } else {
            console.log("CUR APP_UUID: ", value)
          }
        })
  }


  // ROOT RENDER

  render() {

    var isStarted = this.state.isStarted;
    if (!isStarted) isLoggedIn = false

    if (this.state.isPageTest) {
      return (
          <View style={{flex: 1}}>
            <AppUnitTestRoutePage handleFocus={this.handleFocus.bind(this)} />
          </View>
      )
    }

    return (
        <View style={{flex: 1}}>
          {
            !this.state.isStarted ? (
                <AppSplashPage />
            ) : null
          }
          {
            this.state.isStarted ? (
                <AppMainRoutePage handleFocus={this.handleFocus.bind(this)} />
            ) : null
          }
        </View>

    );
  }



  // MAIN NAVIGATION START

  handleFocus(route, nav) {
    var curRoute = route.data.route
    var curRouteName = curRoute.page.name

    nav.setNavbarType(null);

    if (curRouteName == "AppDashboardPage") {
      nav.setTitle("");
    }

    else {
      nav.setTitle(curRoute.data.title);
    }
  }

}

module.exports = AppDelegate;