import React, { Component } from 'react';
import { Input, Button } from 'react-onsenui';
import Accounts from '../models/Accounts.js';
import Model from '../models/Model.js';

class PageProfileEdit extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;
        var currentAccount = Accounts.getSessionData();
        this.state = {
            address: currentAccount.address,
            email: currentAccount.email,
            title: currentAccount.title
        }
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleAddressChange(e) {
        this.setState({address: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }

    handleTitleChange(e) {
        this.setState({title: e.target.value});
    }

    handleClick() {
        Model.data.session.address = this.state.address;
        Model.data.session.email = this.state.email;
        Model.data.session.title = this.state.title;
        Model.save();
        this.navigator.popPage();
    }

    render() {

        return (
            <div className="PageProfileEdit">
                <section style={{margin: '16px'}}>
                    <p>
                        <Input
                          value={this.state.address}
                          onChange={this.handleAddressChange}
                          modifier='underbar'
                          float
                          placeholder='Address' />
                    </p>
                    <p>
                        <Input
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                          modifier='underbar'
                          float
                          placeholder='Email' />
                    </p>
                    <p>
                        <Input
                          value={this.state.title}
                          onChange={this.handleTitleChange}
                          modifier='underbar'
                          float
                          placeholder='Title' />
                    </p>
                    <p>
                      <Button onClick={this.handleClick}>Save</Button>
                    </p>
                </section>
            </div>
        )
    }
}

export default PageProfileEdit;
