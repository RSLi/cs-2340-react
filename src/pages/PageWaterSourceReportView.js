import React, { Component } from 'react';
import Reports from '../models/Reports.js';

class PageWaterSourceReportView extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;
    }

    render() {
        var d = this.route.data;
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Report No.</td>
                            <td>{d.id}</td>
                        </tr>
                        <tr>
                            <td>Reporter</td>
                            <td>{d.reporter_username}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{d.date}</td>
                        </tr>
                        <tr>
                            <td>Latitude</td>
                            <td>{d.latitude}</td>
                        </tr>
                        <tr>
                            <td>Longitude</td>
                            <td>{d.longitude}</td>
                        </tr>
                        <tr>
                            <td>Water Type</td>
                            <td>{d.water_type}</td>
                        </tr>
                        <tr>
                            <td>Water Condition</td>
                            <td>{d.water_condition}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }
}

export default PageWaterSourceReportView;
