var React = require('react-native');
var {
    View,
    Image,
    } = React;

var CoreNavigationView = require('../core/CoreNavigationView');
var NavBar = require('../component/NavBar.js');

class AppMainRoutePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      NavBarRef : NavBar
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
      this.handleFocus({data: {route: {page: AppDashboardPage, name: "AppDashboardPage", data: {}}}}, this.refs.nav);
      this.props.handleFocus({data: {route: {page: AppDashboardPage, name: "AppDashboardPage", data: {}}}}, this.refs.nav);
    })
  }

  handleFocus(route, nav) {


  }


  render() {
    return (
        <View style={{flex: 1}}>
          <CoreNavigationView
              ref="nav"
              initialPage={"AppDashboardPage"}
              initialData={{}}
              navigationBar={this.state.NavBarRef}
              routeDictionary={{
                AppDashboardPage: require('./AppDashboardPage'),
              }}
              />
        </View>
    );
  }
}

module.exports = AppMainRoutePage;