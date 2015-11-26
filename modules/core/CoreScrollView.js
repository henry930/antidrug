'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var {
    View,
    ScrollView,
    Text,
    } = React;


class CoreScrollView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "bounces" : this.props.bounces,
      "has_scrollbar_width" : this.props.has_scrollbar_width,
      "content_inset_bottom" : 0,
      "offset_x" : 0,
      "offset_y" : 0,
      "scrollview_width" : 0,
      "scrollview_height" : 0,
      "content_width" : 0,
      "content_height" : 0,
    }
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      this.refresh();
    })
  }

  refresh() {
    requestAnimationFrame(() => {
      this.getScrollView().refs.ScrollView.measure((ox, oy, width, height) => {
        this.setState({"scrollview_width": width - (this.props.has_scrollbar_width ? 10 : 0) });
        this.setState({"scrollview_height": height});
        console.log(width, height)
      });
    });
  }

  getScrollView() {
    return this.refs.scrollview_content;
  }

  scrollTo(x, y) {
    this.getScrollView().getScrollResponder().scrollResponderScrollTo(x, y);
  }

  render() {
    return (
      <ScrollView horizontal={false}
                  ref="scrollview_content"
                  style={[{flex: 1, alignSelf: 'stretch'}, this.props.style]}
                  bounces={this.props.bounces}
                  contentContainerStyle={[{width: this.state.scrollview_width}, this.props.contentContainerStyle]}
                  contentInset={{top:0, bottom: this.state.content_inset_bottom}}
                  keyboardShouldPersistTaps={false}
                  automaticallyAdjustContentInsets={false}
                  onKeyboardWillShow={this.onKeyboardWillShow.bind(this)}
                  onKeyboardWillHide={this.onKeyboardWillHide.bind(this)}
                  onScroll={this.onScroll.bind(this)}
                  scrollEventThrottle={200}>
        <View style={{flex: 1, flexDirection: "column", alignItems: "center", marginBottom: 20}}>
          {this.props.children}
        </View>
      </ScrollView>
    );
  }

  onKeyboardWillShow(e) {
    this.setState({
      content_inset_bottom: - (e.endCoordinates.screenY - e.startCoordinates.screenY)
    })
  }

  onKeyboardWillHide(e) {
    this.setState({
      content_inset_bottom: 0
    })

    if (this.state.scrollview_height < this.state.content_height) {
      if (this.state.offset_y > this.state.content_height - this.state.scrollview_height) {
        this.state.offset_y = this.state.content_height - this.state.scrollview_height;
      }
    } else {
      this.state.offset_x = 0;
      this.state.offset_y = 0;
    }
    this.scrollTo(this.state.offset_x, this.state.offset_y);
  }

  onScroll(e) {
    this.state.offset_x = e.nativeEvent.contentOffset.x;
    this.state.offset_y = e.nativeEvent.contentOffset.y;
    this.state.content_width = e.nativeEvent.contentSize.width;
    this.state.content_height = e.nativeEvent.contentSize.height;
    console.log(this.state.offset_x, this.state.offset_y);
  }
}

module.exports = CoreScrollView;