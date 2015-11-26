/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Constants = require('./modules/constants/Constants.js');
var Dummies = require('./modules/dummies/Dummies.js');
var Images = require('./modules/images/Images.js');
var AppDelegate = require('./modules/AppDelegate.js');
var {
    AppRegistry
    } = React;

class AntiDrug extends React.Component {

  constructor(props) {
    super(props);
    new Constants().Make('sim', 'ios', 'dev');
    new Dummies().Make('sim', 'ios', 'dev');
    new Images().Make('sim', 'ios', 'dev');
  }

  render() {
    return (
        <AppDelegate />
    );
  }
}

AppRegistry.registerComponent('AntiDrug', () => AntiDrug);
