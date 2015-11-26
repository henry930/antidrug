const React = require('react-native');
const Dimensions = require('Dimensions');
const {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    Component,
    TouchableOpacity,
    } = React;

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#FFFFFF',
  },
  menu_content: {

  },
  avatarContainer: {
    margin: 0,
    paddingTop: 24,
    paddingBottom: 16,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#EDAA1F',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    margin: 12,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  button: {
    height: 32,
    borderRadius: 16,
    backgroundColor: "transparent",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    fontSize: 18,
    fontWeight: '200',
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'stretch',
    color: '#1A1A1A',
  },
  item_icon: {
    marginLeft: 20,
    marginRight: 20,
    width: 25,
    height: 25,
    resizeMode: 'contain',
    color: '#1A1A1A',
  },
});

module.exports = class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content_width : 0,
      content_height : 0,
    }
  }


  render() {
    return (
        <ScrollView style={styles.menu}
                    bounces={false}
                    onLayout={(event) => {var {x, y, width, height} = event.nativeEvent.layout; this.setState({content_width: (width * 2) / 3, content_height: height}) }}>
          <View style={[{width: this.state.content_width, alignSelf: 'flex-start'}, styles.menu_content]} >
            <View style={{position: 'absolute', width: 1, height: this.state.content_height, shadowColor: '#000000', shadowOpacity: 0.75, shadowRadius: 5, shadowOffset: {width: 0, height: 0} }}></View>
            <View style={styles.avatarContainer}>
              <Image
                  style={styles.avatar}
                  source={GLOBAL.IMAGE.icon}/>
            </View>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Image style={styles.item_icon} source={GLOBAL.IMAGE.icon1} />
              <Text style={styles.item}>「理．不理」測試</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Image style={styles.item_icon} source={GLOBAL.IMAGE.icon2} />
              <Text style={styles.item}>相處十式</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Image style={styles.item_icon} source={GLOBAL.IMAGE.icon3} />
              <Text style={styles.item}>迷思</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Image style={styles.item_icon} source={GLOBAL.IMAGE.icon4} />
              <Text style={styles.item}>我的支援</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Image style={styles.item_icon} source={GLOBAL.IMAGE.icon5} />
              <Text style={styles.item}>關於我們</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
              <Image style={styles.item_icon} source={GLOBAL.IMAGE.icon6} />
              <Text style={styles.item}>其他Apps</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
    );
  }
}