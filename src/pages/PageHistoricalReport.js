import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import Reports from '../models/Reports.js';
import RTChart from 'react-rt-chart';

class PageHistoricalReport extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;

    }

    componentDidMount() {
        setInterval(() => this.forceUpdate(), 1000);
    }

    render() {
        var data = {
          date: new Date(),
          Contaminant: 23,
          Virus: 56
        };

        return <RTChart
                fields={['Contaminant','Virus']}
                data={data} />
    }
}

export default PageHistoricalReport;
