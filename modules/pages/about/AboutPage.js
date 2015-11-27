'use strict';

var React = require('react-native');
var __styles = require('../../styles/styles');
var {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    } = React;

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }


  render() {
    return (
        <View style={{flex: 1, backgroundColor: "#FFFFFF", padding: 15}}>
          <ScrollView
              keyboardShouldPersistTaps={false}
              automaticallyAdjustContentInsets={false}
              style={{flex: 1}}>

            <Text style={__styles.about_text_header}>關於我們</Text>
            <Text style={__styles.about_text_desc}>{GLOBAL.ABOUT.about}</Text>
            <Text style={__styles.about_text_header}>關於HKELC</Text>
            <Text style={__styles.about_text_desc}>{GLOBAL.ABOUT.hkelc}</Text>

          </ScrollView>
        </View>
    );
  }
}

module.exports = AboutPage;