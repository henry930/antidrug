var React = require('react-native');
var {
    ActivityIndicatorIOS,
    StyleSheet,
    } = React;

class LoadingSun extends React.Component {
  render() {
    return (
        <ActivityIndicatorIOS
            animating={true}
            color="grey"
            style={[styles.centering, {height: 80}, this.props.style]}
            size="large"
            />
    );
  }
}

var styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gray: {
    backgroundColor: '#cccccc',
  },
});

module.exports = LoadingSun;