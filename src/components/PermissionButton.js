/**
 * Button component that only displays when user has permission
 * Requires navigator and route in order to push a new page
 */
import React, { Component } from 'react';
import {Button} from 'react-onsenui';
import Accounts from '../models/Accounts.js';

class PermissionButton extends Component {
    constructor(props) {
        super(props);
        this.display = props.display;
        this.navigator = props.navigator;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.navigator.pushPage({
            title: this.props.label,
            hasBackButton: true,
            pageComponent: this.props.component
        });
    }

    render() {
        if (this.display) {
            return (
                <Button modifier='large' onClick={this.handleClick}>{this.props.label}</Button>
            )
        }
        return (
            <div></div>
        )
    }
}

export default PermissionButton;
