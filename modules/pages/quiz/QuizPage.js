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

class QuizPage extends React.Component {

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
        <View style={{flex: 1, backgroundColor: "#A3DAE5", padding: 15}}>
          <ScrollView
              keyboardShouldPersistTaps={false}
              automaticallyAdjustContentInsets={false}
              style={{flex: 1}}>

            <Text style={__styles.text_header}>情境 1</Text>
            <Text style={__styles.text_desc}>你知道你的子女如何打發空餘時間嗎？</Text>

          </ScrollView>

          <View style={[__styles.button_shadow, {marginTop: 15}]}>
            <TouchableOpacity style={__styles.btn_quiz_option} onPress={() => {this.props.navigationView.push('QuizResultPage')} }>
              <Text style={__styles.text_quiz_option}>A. 全不知道</Text>
            </TouchableOpacity>
          </View>
          <View style={[__styles.button_shadow, {marginTop: 15}]}>
            <TouchableOpacity style={__styles.btn_quiz_option} onPress={() => {this.props.navigationView.push('QuizResultPage')} }>
              <Text style={__styles.text_quiz_option}>B. 知道一點點</Text>
            </TouchableOpacity>
          </View>
          <View style={[__styles.button_shadow, {marginTop: 15}]}>
            <TouchableOpacity style={__styles.btn_quiz_option} onPress={() => {this.props.navigationView.push('QuizResultPage')} }>
              <Text style={__styles.text_quiz_option}>C. 頗知道</Text>
            </TouchableOpacity>
          </View>
          <View style={[__styles.button_shadow, {marginTop: 15}]}>
            <TouchableOpacity style={__styles.btn_quiz_option} onPress={() => {this.props.navigationView.push('QuizResultPage')} }>
              <Text style={__styles.text_quiz_option}>D. 完全知道</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

module.exports = QuizPage;