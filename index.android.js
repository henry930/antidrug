/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Constants = require('./modules/constants/Constants.js');
var Dummies = require('./modules/dummies/Dummies.js');
var AppDelegate = require('./modules/AppDelegate.js');
var {
    AppRegistry,
    BackAndroid,
    } = React;

class AntiDrug extends React.Component {

  constructor(props) {
    super(props);
    new Constants().Make('sim', 'aos', 'dev');
    new Dummies().Make('sim', 'aos', 'dev');
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.onBackPress.bind(this));
  }

  onBackPress() {
    console.log("hardwareBackPress");
    var _navigator = this.refs.appDelegate.getNavigator();
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
      _navigator.pop();
      return true;
    }
    return false;
  }

  render() {
    return (
        <AppDelegate ref="appDelegate" />
    );
  }
}

AppRegistry.registerComponent('AntiDrug', () => AntiDrug);
