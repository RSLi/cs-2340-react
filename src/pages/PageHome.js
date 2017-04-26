import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import Accounts from '../models/Accounts.js';
import PageLogin from './PageLogin';

class PageHome extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;
        this.handleClickLogout = this.handleClickLogout.bind(this);
    }

    handleClickLogout() {
        Accounts.logout();
        this.navigator.resetPage({
            title: 'Login',
            hasBackButton: false,
            pageComponent: PageLogin
        });
    }

    render() {
        return (
            <div className="PageHome">
                <section style={{margin: '16px'}}>
                    <Button style={{margin: '6px'}} onClick={this.handleClickLogout} modifier='large'>Logout</Button>
                </section>
            </div>
        )
    }
}

export default PageHome;
