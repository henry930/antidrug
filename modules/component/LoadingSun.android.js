var React = require('react-native');
var ProgressBar = require('ProgressBarAndroid');

class LoadingSun extends React.Component {
  render() {
    return (
      <ProgressBar style={[this.props.style]}/>
    );
  }
}
module.exports = LoadingSun;