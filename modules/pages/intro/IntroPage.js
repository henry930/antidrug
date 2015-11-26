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

class IntroPage extends React.Component {

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
        <View style={{flex: 1, backgroundColor: "#F2CD7F", padding: 15, marginTop: -20}}>
          <ScrollView
              keyboardShouldPersistTaps={false}
              automaticallyAdjustContentInsets={false}
              style={{flex: 1}}>

            <Text style={__styles.text_header}>序</Text>
            <Text style={__styles.text_desc}>不作Monster(怪獸)，只要合適地Monitor(關顧)。
              毒品的影響力是跨越地區及年齡的，甚至已攻陷香港的中小學！據保安局調查，有九成學校皆有學生曾經吸毒。作為家長，該如何面對？
              有不少研究指出，「家長關顧」(Parental Monitoring)能夠有效地協助青少年抵禦毒品誘惑。譲我們了解多一些</Text>

          </ScrollView>

          <View style={__styles.button_shadow}>
            <TouchableOpacity style={__styles.button_orange} onPress={() => {this.props.navigationView.replace('QuizBeginPage')} }>
              <Text style={__styles.text_button}>開始</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

module.exports = IntroPage;