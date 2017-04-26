import React, { Component } from 'react';
import ons from 'onsenui';
import Ons, { Navigator, Page, Toolbar, BackButton} from 'react-onsenui';
import Accounts from './models/Accounts.js';
import PageLogin from './pages/PageLogin.js';

class MyNavigator extends Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.renderToolbar = this.renderToolbar.bind(this);
      this.renderPage = this.renderPage.bind(this);
  }

  renderToolbar(route, navigator) {
      const backButton = route.hasBackButton
        ? <BackButton onClick={this.handleClick.bind(this, navigator)}>Back</BackButton>
        : null;

      return (
        <Toolbar>
          <div className='left'>{backButton}</div>
          <div className='center'>{route.title}</div>
        </Toolbar>
      );
  }

  handleClick(navigator) {
    navigator.popPage();
  }

  renderPage(route, navigator) {
      var PageComponent = route.pageComponent;
      return (
      <Page key={route.title} renderToolbar={this.renderToolbar.bind(this, route, navigator)}>
          <PageComponent route={route} navigator={navigator}/>
      </Page>
    );
  }

  render() {
    return (
        <Navigator
            renderPage={this.renderPage}
            initialRoute={{
                title: 'Fortress Water Report',
                hasBackButton: false,
                pageComponent: PageLogin
            }}
        />
    );
  }
}

export default MyNavigator;
