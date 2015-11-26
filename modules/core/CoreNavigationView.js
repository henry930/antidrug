var React = require('react-native');
var {
    View,
    Navigator,
    } = React;
var NavigatorSceneConfigs = require('NavigatorSceneConfigs');



class CoreNavigationView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pages : [{page: this.props.initialPage, data: this.props.initialData}]
    }
  }

  componentDidMount() {

  }


  getPageByRouteDictionary(page) {
    if (this.props.routeDictionary) {
      if (typeof page === 'string') {
        var route = this.props.routeDictionary[page];
        if (route) {
          return route;
        } else {
          console.log("WARNING: ROUTE NOT EXIST / CONFIGURED IN this.props.routeDictionary");
          return null;
        }
      } else {
        console.log("WARNING: PAGE NOT STRING / CONFIGURED IN this.props.routeDictionary");
        return null;
      }
    } else {
      console.log("WARNING: ROUTE DICTIONARY NOT CONFIGURED IN this.props.routeDictionary");
      return null;
    }
    return page;
  }


  navbarPaddingTop() {
    if (this.state.navbarType === 'hide') {
      return 20;
    }
    return 60;
  }

  // CONTROLLERS

  push(page, data) {
    var pages = this.refs.nav.getCurrentRoutes()
    var route = {name: page, page: this.getPageByRouteDictionary(page), data: data};
    this.state.pages = pages
    this.refs.nav.push(route);
    this.refreshPageRoute()
  }

  replace(page, data) {
    var pages = this.refs.nav.getCurrentRoutes()
    var route = {name: page, page: this.getPageByRouteDictionary(page), data: data};
    this.state.pages = pages
    this.refs.nav.replace(route);
    this.refreshPageRoute()
  }

  pop() {
    var pages = this.refs.nav.getCurrentRoutes()
    if (pages.length > 0) {
      this.state.pages = pages
      this.state.pages.length -= 1;
      this.refs.nav.pop()
    }
  }

  popN(n) {
    var pages = this.refs.nav.getCurrentRoutes()
    var popCount = n;
    if (pages.length < n) {
      popCount = pages.length;
    }
    this.state.pages = pages
    this.state.pages.length -= popCount;
    this.refs.nav.popN(popCount);
  }

  popTo(page, data) {
    var pages = this.refs.nav.getCurrentRoutes()
    var route = {name: page, page: this.getPageByRouteDictionary(page), data: data};
    if (pages.length > 0) {
      this.state.pages = pages
      this.state.pages.length -= 1;
      this.refs.nav.popToRoute(route)
    }
  }

  popToTop() {
    var pages = this.refs.nav.getCurrentRoutes()
    if (pages.length > 0) {
      this.state.pages = pages
      this.state.pages.length = 1;
      this.refs.nav.popToTop();
    }
  }

  resetTo(page, data) {
    var pages = this.refs.nav.getCurrentRoutes()
    var route = {name: page, page: this.getPageByRouteDictionary(page), data: data};
    if (pages.length > 0) {
      this.state.pages = pages
      this.state.pages.length = 1;
      this.refs.nav.resetTo(route);
    }
  }


  refreshPageRoute() {
    requestAnimationFrame(() => {
      this.setState({
        pages: this.refs.nav.getCurrentRoutes()
      })
    })
  }


  // INFORMATIONS

  initialRoute() {
    return {name: this.props.initialPage, page: this.getPageByRouteDictionary(this.props.initialPage), data: this.props.initialData};
  }

  pages() {
    return this.state.pages
  }

  pageCount() {
    return this.pages().length
  }


  setTitle(title) {
    this.state.title = title;
    this.setState(this.state)
  }

  setNavbarType(navbarType) {
    console.log('set nav bar type', navbarType);
    this.state.navbarType = navbarType;
    this.setState(this.state)
  }


  getBar() {
    return this.refs.nav._navBar;
  }



  // RENDER INTERNAL

  navigationViewHook() {
    return       {
      push: this.push.bind(this),
      replace: this.replace.bind(this),
      pop: this.pop.bind(this),
      popN: this.popN.bind(this),
      popToTop: this.popToTop.bind(this),
      resetTo: this.resetTo.bind(this),
      initialRoute: this.initialRoute.bind(this),
      pages: this.pages.bind(this),
      pageCount: this.pageCount.bind(this),
      setTitle: this.setTitle.bind(this),
      setNavBarType: this.setNavbarType.bind(this),
      getBar: this.getBar.bind(this),
    }
  }

  renderScene(route, navigator) {
    var Page = route.page;
    var data = route.data;
    return (
        <View style={{alignSelf:'stretch', flex: 1, alignItems:'stretch', paddingTop: this.navbarPaddingTop()}}>
          <Page {...data} navigationView={this.navigationViewHook()} />
        </View>
    )
  }


  render() {
    return (
        <Navigator
            style={{left: 0, top: 0, bottom: 0, right: 0, flex: 1, alignSelf: 'stretch', backgroundColor: 'transparent'}}
            ref='nav'
            initialRoute={this.initialRoute()}
            renderScene={this.renderScene.bind(this)}
            configureScene={() => {
              return {
                gestures: null,
                springFriction: 26,
                springTension: 200,
                defaultTransitionVelocity: 2.5,
                animationInterpolators: NavigatorSceneConfigs.HorizontalSwipeJump.animationInterpolators,
              }
            }}
            navigationBar={this.props.navigationBar ? React.createElement(this.props.navigationBar,
            {
            ref:'bar',
            navigationView: this.navigationViewHook(),
            title: this.state.title,
            navbarType: this.state.navbarType,
            }) : null}
            />
    );
  }
}

var styles = React.StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 60,
    position: 'relative',
  },
  title: {
    flex: 1,
    fontSize: 20,
    position: 'relative',
    color: "#FFFFFF",
    alignItems: 'stretch',
    textAlign: 'center',
  },
  left: {
    position: 'absolute',
    left: 4,
    top: 20,
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});


module.exports = CoreNavigationView;