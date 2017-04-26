import React, { Component } from 'react';
import {Input, Button, ListItem, List, ListHeader} from 'react-onsenui';
import Accounts from '../models/Accounts.js';
import PageHome from './PageHome.js';
import ons from 'onsenui';

class PageRegister extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;
        this.state = {
            username: "",
            password: "",
            account_type: "User",
            type_options: ['User', 'Worker', 'Manager', 'Administrator']
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleAccountTypeChange = this.handleAccountTypeChange.bind(this);
        this.renderRadioRow = this.renderRadioRow.bind(this);
    }

    handleClick() {
        Accounts.registerNewAccount(this.state.username, this.state.password, this.state.account_type);

        this.navigator.resetPage({
            title: 'Home',
            hasBackButton: false,
            pageComponent: PageHome
        });
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    handleAccountTypeChange(account_type) {
        this.setState({account_type: account_type});
    }

    renderRadioRow(row) {
        return (
          <ListItem key={row} tappable>
            <label className='left'>
              <Input
                inputId={`radio-${row}`}
                checked={row === this.state.account_type}
                onChange={this.handleAccountTypeChange.bind(this, row)}
                type='radio'
              />
            </label>
            <label htmlFor={`radio-${row}`} className='center'>
              {row}
            </label>
          </ListItem>
        )
    }

    render() {
        return (
            <div className="PageRegister">
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

                </section>
                <List
                  dataSource={this.state.type_options}
                  renderHeader={() => <ListHeader>Account Type</ListHeader>}
                  renderRow={this.renderRadioRow}
                />

                <p>
                  <Button onClick={this.handleClick}>Register</Button>
                </p>
            </div>
        )
    }
}

export default PageRegister;
