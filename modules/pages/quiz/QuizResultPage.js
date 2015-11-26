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

class QuizResultPage extends React.Component {

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
          <View style={[__styles.card_shadow, {flex: 1, marginTop: 15}]}>
            <View style={[__styles.card, {flex: 1}]}>
              <ScrollView
                  keyboardShouldPersistTaps={false}
                  automaticallyAdjustContentInsets={false}
                  style={{flex: 1}}>

                <Text style={__styles.text_header}>理．不知</Text>
                <Text style={__styles.text_desc}>初步顯示，你「理」得很少。

                  對於子女日常情況近乎不知，子女似乎有極大的自主去處理日常生活。青少年缺乏父母監管，是導致吸毒行為的其中一個危機因素，高度自主可能誘發放任行為。

                  建議你要多加注意，讓子女知道你是關心他/她(們)：你會「理」，你想「知」。</Text>

              </ScrollView>
            </View>
          </View>

          <View style={[__styles.button_shadow, {marginTop: 15}]}>
            <TouchableOpacity style={__styles.button_blue} onPress={() => {this.props.navigationView.replace('QuizPage')} }>
              <Text style={__styles.text_button}>應對方式</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

module.exports = QuizResultPage;