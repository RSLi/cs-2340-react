import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import Reports from '../models/Reports.js';

class PageWaterMap extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;

    }

    render() {
        return (
            <div>
                <iframe
                  width="600"
                  height="450"
                  frameborder="0" style={{border:0}}
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCr83uellY2J-ErBN6nYEbM8BM_SIU0t74&q=Atlanta" allowfullscreen>
                </iframe>
            </div>
        )
    }
}

export default PageWaterMap;
