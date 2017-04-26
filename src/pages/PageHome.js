import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import Accounts from '../models/Accounts.js';
import PageLogin from './PageLogin.js';
import PermissionButton from '../components/PermissionButton.js';
import PageProfile from './PageProfile.js';
import PageWaterSourceReportCreate from './PageWaterSourceReportCreate.js';
import PageWaterPurityReportCreate from './PageWaterPurityReportCreate.js';
import PageWaterSourceReportListView from './PageWaterSourceReportListView.js';
import PageWaterPurityReportListView from './PageWaterPurityReportListView.js';
import PageWaterMap from './PageWaterMap.js';
import PageHistoricalReport from './PageHistoricalReport.js';

class PageHome extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;

        //check user permission to see each Button
        var type = Accounts.getSessionData().account_type;
        var ACCESS_SOURCE_REPORT = true;
        var SUBMIT_SOURCE_REPORT = true;
        var ACCESS_AVAILABILITY_REPORT = true;
        var SUBMIT_PURITY_REPORT = false;
        var ACCESS_PURITY_REPORT = false;
        var DELETE_REPORT = false;
        var ACCESS_HISTORICAL_REPORT = false;
        if (type == "Worker") {
            SUBMIT_PURITY_REPORT = true;
        } else if (type == "Manager") {
            SUBMIT_PURITY_REPORT = true;
            ACCESS_PURITY_REPORT = true;
            DELETE_REPORT = true;
            ACCESS_HISTORICAL_REPORT = true;
        } else if (type == "Administrator") {
            SUBMIT_PURITY_REPORT = true;
            ACCESS_PURITY_REPORT = true;
            DELETE_REPORT = true;
            ACCESS_HISTORICAL_REPORT = true;
        }

        this.state = {
            permission_access_source_report: ACCESS_SOURCE_REPORT,
            permission_access_availability_report: ACCESS_AVAILABILITY_REPORT,
            permission_submit_source_report: SUBMIT_SOURCE_REPORT,
            permission_submit_purity_report: SUBMIT_PURITY_REPORT,
            permission_access_purity_report: ACCESS_PURITY_REPORT,
            permission_delete_report: DELETE_REPORT,
            permission_access_historical_report: ACCESS_HISTORICAL_REPORT
        }


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
                    <PermissionButton
                        display={true}
                        navigator={this.navigator}
                        label="User Profile"
                        component={PageProfile}
                    /><br/>
                    <PermissionButton
                        display={this.state.permission_access_source_report}
                        navigator={this.navigator}
                        label="View Water Source Report"
                        component={PageWaterSourceReportListView}
                    /><br/>
                    <PermissionButton
                        display={this.state.permission_access_purity_report}
                        navigator={this.navigator}
                        label="View Water Purity Report"
                        component={PageWaterPurityReportListView}
                    /><br/>
                    <PermissionButton
                        display={this.state.permission_access_availability_report}
                        navigator={this.navigator}
                        label="View Water Availability Map"
                        component={PageWaterMap}
                    /><br/>
                    <PermissionButton
                        display={this.state.permission_access_historical_report}
                        navigator={this.navigator}
                        label="View Historical Report"
                        component={PageHistoricalReport}
                    /><br/>
                    <PermissionButton
                        display={this.state.permission_submit_source_report}
                        navigator={this.navigator}
                        label="Submit Water Source Report"
                        component={PageWaterSourceReportCreate}
                    /><br/>
                    <PermissionButton
                        display={this.state.permission_submit_purity_report}
                        navigator={this.navigator}
                        label="Submit Water Purity Report"
                        component={PageWaterPurityReportCreate}
                    />
                    <Button style={{margin: '6px'}} onClick={this.handleClickLogout} modifier='large outline'>Logout</Button>
                </section>
            </div>
        )
    }
}

export default PageHome;
