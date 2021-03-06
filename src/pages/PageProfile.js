import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import Accounts from '../models/Accounts.js';
import PageProfileEdit from './PageProfileEdit.js';

class PageProfile extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navigator.pushPage({
            title: 'Edit Profile',
            hasBackButton: true,
            pageComponent: PageProfileEdit
        });
    }

    render() {
        var currentAccount = Accounts.getSessionData();
        return (
            <div className="PageProfile">
                <section style={{margin: '16px'}}>
                    User Name: {currentAccount.user_name} <br/>
                    Account Type: {currentAccount.account_type} <br/>
                    Address: {currentAccount.address} <br/>
                    Email: {currentAccount.email} <br/>
                    Title: {currentAccount.title} <br/>
                </section>
                <Button onClick={this.handleClick}>Edit</Button>
            </div>
        )
    }
}

export default PageProfile;
