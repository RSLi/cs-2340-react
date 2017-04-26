import React, { Component } from 'react';
import { Button, List, ListItem, Input, ListHeader} from 'react-onsenui';
import Reports from '../models/Reports.js';
import ons from 'onsenui';

class PageWaterSourceReportCreate extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;

        this.state = {
            longitude: "",
            latitude: "",
            water_type: ['Bottled', 'Well', 'Stream', 'Lake', 'Spring', 'Other'],
            water_condition: ['Waste', 'Treatable-Clear', 'Treatable-Muddy', 'Potable'],
            water_type_selected: 'Bottled',
            water_condition_selected: 'Waste'
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
        this.handleWaterTypeChange = this.handleWaterTypeChange.bind(this);
        this.handleWaterConditionChange = this.handleWaterConditionChange.bind(this);
        this.renderRadioRowWaterType = this.renderRadioRowWaterType.bind(this);
        this.renderRadioRowWaterCondition = this.renderRadioRowWaterCondition.bind(this);
    }

    handleClick() {
        Reports.submitSourceReport(this.state.longitude, this.state.latitude, this.state.water_type_selected, this.state.water_condition_selected);
        ons.notification.alert('Submitted!');
        this.navigator.popPage();
    }

    handleLongitudeChange(e) {
        this.setState({longitude: e.target.value});
    }

    handleLatitudeChange(e) {
        this.setState({latitude: e.target.value});
    }

    handleWaterTypeChange(type) {
        this.setState({water_type_selected: type});
    }

    handleWaterConditionChange(condition) {
        this.setState({water_condition_selected: condition});
    }

    renderRadioRowWaterType(row) {
        return (
          <ListItem key={row} tappable>
            <label className='left'>
              <Input
                inputId={`radio-${row}`}
                checked={row === this.state.water_type_selected}
                onChange={this.handleWaterTypeChange.bind(this, row)}
                type='radio'
              />
            </label>
            <label htmlFor={`radio-${row}`} className='center'>
              {row}
            </label>
          </ListItem>
        )
    }

    renderRadioRowWaterCondition(row) {
        return (
          <ListItem key={row} tappable>
            <label className='left'>
              <Input
                inputId={`radio-${row}`}
                checked={row === this.state.water_condition_selected}
                onChange={this.handleWaterConditionChange.bind(this, row)}
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
            <div>
                <section style={{textAlign: 'center'}}>
                  <p>
                    <Input
                      value={this.state.longitude}
                      onChange={this.handleLongitudeChange}
                      modifier='underbar'
                      float
                      placeholder='Longitude' />
                  </p>
                  <p>
                    <Input
                      value={this.state.latitude}
                      onChange={this.handleLatitudeChange}
                      modifier='underbar'
                      float
                      placeholder='Latitude' />
                  </p>

                </section>
                <List
                  dataSource={this.state.water_type}
                  renderHeader={() => <ListHeader>Water Type</ListHeader>}
                  renderRow={this.renderRadioRowWaterType}
                />
                <List
                  dataSource={this.state.water_condition}
                  renderHeader={() => <ListHeader>Water Condition</ListHeader>}
                  renderRow={this.renderRadioRowWaterCondition}
                />

                <p>
                  <Button onClick={this.handleClick}>Submit</Button>
                </p>
            </div>
        )
    }
}

export default PageWaterSourceReportCreate;
