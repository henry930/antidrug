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

class QaPage extends React.Component {

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
        <View style={{flex: 1, backgroundColor: "#EEDDE4", marginTop: 20}}>
          <ScrollView
              keyboardShouldPersistTaps={false}
              automaticallyAdjustContentInsets={false}
              style={{flex: 1}}>

            <View style={[__styles.qacard_shadow, {flex: 1, marginTop: 15}]}>
              <View style={[__styles.qacard, {flex: 1}]}>

                <Text style={__styles.qacard_text_header}>{GLOBAL.QA[0].question}</Text>
                <Text style={__styles.qacard_text_desc}>{GLOBAL.QA[0].answer}</Text>

              </View>
            </View>

            <View style={[__styles.qacard_shadow, {flex: 1, marginTop: 15}]}>
              <View style={[__styles.qacard, {flex: 1}]}>

                <Text style={__styles.qacard_text_header}>{GLOBAL.QA[1].question}</Text>
                <Text style={__styles.qacard_text_desc}>{GLOBAL.QA[1].answer}</Text>

                <TouchableOpacity style={[__styles.button_purple, {margin: 15}]} onPress={() => {this.props.navigationView.replace('QuizBeginPage')} }>
                  <Text style={__styles.qacard_text_button}>更多幫助</Text>
                </TouchableOpacity>

              </View>
            </View>

          </ScrollView>
        </View>
    );
  }
}

module.exports = QaPage;