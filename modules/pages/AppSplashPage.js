'use strict';

var React = require('react-native');
var styles = require('../styles/styles');
var LoadingSun = require('../component/LoadingSun');
var Actions = require('react-native-router-flux').Actions;
var {
    View,
    Image,
    } = React;

class AppSplashPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    setTimeout(() => {
      GLOBAL.APPDELEGATE.decide();
    }, 2000);

  }

  componentWillUnmount() {

  }



  render() {
    return (
          <LoadingSun style={{alignSelf: 'center', bottom: 50, backgroundColor: 'transparent'}} />
    );
  }
}

module.exports = AppSplashPage;