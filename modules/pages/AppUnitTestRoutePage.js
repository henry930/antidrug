var React = require('react-native');
var {
    View,
    Image,
    } = React;

var CoreNavigationView = require('../core/CoreNavigationView');
var NavBar = require('../component/NavBar.js');

var IntroPage = require('./intro/IntroPage');

class AppUnitTestRoutePage extends React.Component {

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
      this.handleFocus({data: {route: {page: IntroPage, name: "IntroPage", data: {}}}}, this.refs.nav);
      this.props.handleFocus({data: {route: {page: IntroPage, name: "IntroPage", data: {}}}}, this.refs.nav);
    })
  }

  handleFocus(route, nav) {


  }


  triggerGoToPage(id) {
    this.refs.nav.resetTo(id)
  }


  render() {
    return (
        <View style={{flex: 1}}>
          <CoreNavigationView
              ref="nav"
              initialPage={"IntroPage"}
              initialData={{}}
              navigationBar={this.state.NavBarRef}
              routeDictionary={{
                IntroPage: require('./intro/IntroPage'),
                QuizBeginPage: require('./quiz/QuizBeginPage'),
                QuizPage: require('./quiz/QuizPage'),
                QuizResultPage: require('./quiz/QuizResultPage'),
                AboutPage: require('./about/AboutPage'),
              }}
              />
        </View>
    );
  }
}

module.exports = AppUnitTestRoutePage;