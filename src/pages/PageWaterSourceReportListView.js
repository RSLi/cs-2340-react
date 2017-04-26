import React, { Component } from 'react';
import { Button, List, ListItem, ListHeader} from 'react-onsenui';
import Reports from '../models/Reports.js';
import PageWaterSourceReportView from './PageWaterSourceReportView';

class PageWaterSourceReportListView extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;

        this.state = {
            dataSource: Reports.getListSourceReport()
        };

        this.handleClick = this.handleClick.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    handleClick(index) {
        var viewData = Reports.getListSourceReport()[index];
        this.navigator.pushPage({
            title: 'View Source Report',
            hasBackButton: true,
            pageComponent: PageWaterSourceReportView,
            data: viewData
        });
    }

    renderRow(row, index) {
        return (
            <ListItem key={index}>
                <Button style={{margin: '6px'}} onClick={this.handleClick.bind(this, index)} modifier='quiet'>{"Report: " + index}</Button>
            </ListItem>
        )
    }

    render() {
        return (
            <List
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={() => <ListHeader>Source Reports</ListHeader>}
            />
        )
    }
}

export default PageWaterSourceReportListView;
