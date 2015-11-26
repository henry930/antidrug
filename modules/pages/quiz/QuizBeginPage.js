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

class QuizBeginPage extends React.Component {

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

            <Text style={__styles.text_header}>「理．不理」測試</Text>
            <Text style={__styles.text_desc}>教育子女絕對是一門藝術。
              一方面要讓子女成長，從依附父母邁向獨立；另一方面，成長路亦是充滿挑戰，需要父母在適當時候攙扶一把。
              所以，父母如何關顧子女，對子女如何面對吸毒誘惑有莫大影響。為人父母，你「理」得合適嗎？</Text>

          </ScrollView>

          <View style={__styles.button_shadow}>
            <TouchableOpacity style={__styles.button_blue} onPress={() => {this.props.navigationView.push('QuizPage')} }>
              <Text style={__styles.text_button}>開始</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

module.exports = QuizBeginPage;