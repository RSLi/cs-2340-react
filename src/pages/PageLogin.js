import React, { Component } from 'react';
import {Input, Button} from 'react-onsenui';
import Accounts from '../models/Accounts.js';
import PageHome from './PageHome.js';
import ons from 'onsenui';

class PageLogin extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;
        this.state = {
            username: "",
            password: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleClick() {
        if (Accounts.login(this.state.username, this.state.password)) {
            this.navigator.resetPage({
                title: 'Home',
                hasBackButton: false,
                pageComponent: PageHome
            });
        } else {
            ons.notification.alert('Username or password incorrect!');
        }
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div className="PageLogin">
                <section style={{textAlign: 'center'}}>
                  <p>
                    <Input
                      value={this.state.username}
                      onChange={this.handleUsernameChange}
                      modifier='underbar'
                      float
                      placeholder='Username' />
                  </p>
                  <p>
                    <Input
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                      modifier='underbar'
                      type='password'
                      float
                      placeholder='Password' />
                  </p>
                  <p>
                    <Button onClick={this.handleClick}>Sign in</Button>
                  </p>
                </section>
            </div>
        )
    }
}

export default PageLogin;
