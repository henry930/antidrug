var React = require('react-native');
var {
    View,
    Image,
    } = React;

var CoreNavigationView = require('./CoreNavigationView');

class CoreGenericNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.refs.nav.refs.nav.navigationContext.addListener('willfocus', (route) => {
      this.handleFocus(route, this.refs.nav)
      this.props.handleFocus(route, this.refs.nav)
    })
    this.refs.nav.refs.nav.navigationContext.addListener('didfocus', (route) => {
      this.handleFocus(route, this.refs.nav)
      this.props.handleFocus(route, this.refs.nav)
    })

    requestAnimationFrame(() => {
      this.handleFocus({data: {route: {name: this.props.rootViewControllerName, page: this.props.rootViewController, data: {}}}}, this.refs.nav);
      this.props.handleFocus({data: {route: {name: this.props.rootViewControllerName, page: this.props.rootViewController, data: {}}}}, this.refs.nav);
    })
  }

  handleFocus(route, nav) {


  }


  render() {
    return (
        <View style={{flex: 1}}>
          <CoreNavigationView
              ref="nav"
              initialPage={this.props.rootViewControllerName}
              initialData={{}}
              navigationBar={this.props.NavBar}
              routeDictionary={this.props.routeDictionary}
              />
        </View>
    );
  }
}

module.exports = CoreGenericNavigator;