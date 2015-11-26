'use strict';

var React = require('react-native');
var styles = require('../styles/styles');
var BackgroundView = require('../component/BackgroundView');
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
        <Image source={require('image!splash')} style={{justifyContent: 'flex-end', flex: 1, width: null, height: null, left: 0, right: 0, top: 0, bottom: 0, resizeMode: 'cover'}}>
          <LoadingSun style={{alignSelf: 'center', bottom: 50, backgroundColor: 'transparent'}} />
        </Image>
    );
  }
}

module.exports = AppSplashPage;