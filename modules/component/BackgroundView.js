'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    Image,
    } = React;


class BackgroundView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

    if (this.props.source) {
      this.state.source = this.props.source;
    } else {
      this.state.source = null;
    }
  }

  componentDidMount() {

  }

  render() {
    return (
        <View style={styles.splashWrapper}>
          <Image style={[styles.splash, this.props.image_style]} source={this.state.source} ref="image">
            <View style={[{flex: 1, flexDirection:"column", alignItems: "center", alignSelf: "stretch", justifyContent: "flex-start"}, this.props.style]} ref="view">
              {this.props.children}
            </View>
          </Image>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  splashWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch"
  },
  splash: {
    flex: 1,
    width: null,
    height: null
  },
})

module.exports = BackgroundView;