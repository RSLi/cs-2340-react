import React, { Component } from 'react';
import { Button, List, ListItem, Input, ListHeader} from 'react-onsenui';
import Reports from '../models/Reports.js';
import ons from 'onsenui';

class PageWaterPurityReportCreate extends Component {
    constructor(props) {
        super(props);
        this.route = props.route;
        this.navigator = props.navigator;

        this.state = {
            longitude: "",
            latitude: "",
            contaminant_ppm: "",
            virus_ppm: "",
            water_condition: ['Safe', 'Treatable', 'Unsafe'],
            water_condition_selected: 'Treatable'
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleLongitudeChange = this.handleLongitudeChange.bind(this);
        this.handleLatitudeChange = this.handleLatitudeChange.bind(this);
        this.handleContaminantChange = this.handleContaminantChange.bind(this);
        this.handleVirusChange = this.handleVirusChange.bind(this);
        this.handleWaterConditionChange = this.handleWaterConditionChange.bind(this);
        this.renderRadioRowWaterCondition = this.renderRadioRowWaterCondition.bind(this);
    }

    handleClick() {
        Reports.submitPurityReport(this.state.longitude, this.state.latitude, this.state.contaminant_ppm, this.state.virus_ppm, this.state.water_condition_selected);
        ons.notification.alert('Submitted!');
        this.navigator.popPage();
    }

    handleLongitudeChange(e) {
        this.setState({longitude: e.target.value});
    }

    handleLatitudeChange(e) {
        this.setState({latitude: e.target.value});
    }

    handleContaminantChange(e) {
        this.setState({contaminant_ppm: e.target.value});
    }

    handleVirusChange(e) {
        this.setState({virus_ppm: e.target.value});
    }


    handleWaterConditionChange(condition) {
        this.setState({water_condition_selected: condition});
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

                  <p>
                    <Input
                      value={this.state.contaminant_ppm}
                      onChange={this.handleContaminantChange}
                      modifier='underbar'
                      float
                      placeholder='Contaminant PPM' />
                  </p>
                  <p>
                    <Input
                      value={this.state.virus_ppm}
                      onChange={this.handleVirusChange}
                      modifier='underbar'
                      float
                      placeholder='Virus PPM' />
                  </p>

                </section>

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

export default PageWaterPurityReportCreate;
