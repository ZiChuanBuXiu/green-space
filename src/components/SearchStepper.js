import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {DropDownMenu, MenuItem, RadioButton, RadioButtonGroup, Slider} from "material-ui";
import CoordinatePickerMap from "./CoordinatePickerMap";

/**
 * It is possible to specify your own step connector by passing an element to the `connector`
 * prop. If you want to remove the connector, pass `null` to the `connector` prop.
 */
const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
        "vertical-align": "top",
        display: "inline-block",
        "*display": "inline",
    },
    horizontalRadioButton: {
        marginBottom: 16,
        "vertical-align": "top",
        display: "inline-block",
        "*display": "inline",
        width: 80
    }
};

const searchItems = require("../configs/menu.json");

class SearchStepper extends Component {
    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);

        this.state = {
            stepIndex: 0,
            type: "Exercise",
            activity: "Running",
            time: "Day",
            range: "1"
        };
    }

    handleChange = (event, index, value) => {
        this.setState({activity: value});
    };

    handleTypeChange = (event, value) => {
        this.setState({type: value});
        this.setState({activity: searchItems.Activities[value][0]});
    };

    handleTimeChange = (event, value) => {
        this.setState({time: value});
    };

    handleRangeChange = (event, value) => {
        this.setState({range: value});
    };

    onUpdate(data) {
        this.setState(data);
    };

    getStepContent(stepIndex) {
        let times = searchItems.Time;
        let ranges = searchItems.Range;
        let activities = Object.keys(searchItems.Activities);
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <p>Choose what types of activity you want:</p>
                        <div>
                            <RadioButtonGroup
                                name={activities}
                                defaultSelected="Exercise"
                                onChange={this.handleTypeChange}
                            >
                                {
                                    activities.map(function (item) {
                                        return (
                                            <RadioButton
                                                value={item}
                                                label={item}
                                                style={styles.radioButton}
                                            />
                                        );
                                    })}
                            </RadioButtonGroup>
                        </div>
                        <div>
                            <p>Choose which activity you want:</p>
                            <DropDownMenu value={this.state.activity} onChange={this.handleChange}>
                                {
                                    searchItems.Activities[this.state.type].map(function (activity) {
                                        return (<MenuItem value={activity} primaryText={activity}/>);
                                    })
                                }
                            </DropDownMenu>
                        </div>
                    </div>
                );

            case 1:
                return (
                    <div>
                        <p>
                            {"Choose what time you want to go out:"}
                        </p>
                        <RadioButtonGroup
                            name={times}
                            defaultSelected="Day"
                            onChange={this.handleTimeChange}
                        >
                            {
                                times.map(function (item) {
                                    return (
                                        <RadioButton
                                            value={item}
                                            label={item}
                                            style={styles.radioButton}
                                        />
                                    );
                                })}
                        </RadioButtonGroup>
                    </div>
                );

            case 2:
                return (
                    <div>
                        <div>
                            <p>Choose your start point by click the map:</p>
                            <CoordinatePickerMap onUpdate={this.onUpdate.bind(this)}/>
                        </div>
                        <div>
                            <p>Choose the range from you home:</p>
                            <RadioButtonGroup
                                name={ranges}
                                defaultSelected="1km"
                                onChange={this.handleRangeChange}
                                style={{"text-align": "justify"}}
                            >
                                {
                                    ranges.map(function (item) {
                                        return (
                                            <RadioButton
                                                value={item}
                                                label={item}
                                                style={styles.horizontalRadioButton}
                                            />
                                        );
                                    })}
                            </RadioButtonGroup>
                        </div>
                    </div>
                );
        }
    }

    handleNext() {
        const {stepIndex} = this.state;

        if (stepIndex < 2) {
            this.setState({stepIndex: stepIndex + 1});
        } else {
            this.props.onUpdate({
                isStepperVisible: false,
                homeCoordinate: this.state.homeCoordinate
            });
            //TODO-Update map
            this.setState({
                stepIndex: 0,
                type: "Exercise",
                activity: "Running",
                time: "Day",
                range: "1"
            });
        }
    }

    handlePrev() {
        const {stepIndex} = this.state;

        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    }

    render() {
        const {stepIndex} = this.state;
        return (
            <div>
                <Dialog
                    title="Choose your preferences for activity"
                    modal={false}
                    open={this.props.isStepperVisible}
                >
                    <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon/>}>
                            <Step>
                                <StepLabel>Select your activity</StepLabel>
                            </Step>

                            <Step>
                                <StepLabel>Select your time</StepLabel>
                            </Step>

                            <Step>
                                <StepLabel>Select your start point and range</StepLabel>
                            </Step>
                        </Stepper>

                        {this.getStepContent(stepIndex)}

                        <div style={{marginTop: 24, marginBottom: 12}}>
                            <FlatButton
                                label="Back"
                                disabled={stepIndex === 0}
                                onClick={this.handlePrev}
                                style={{marginRight: 12}}
                            />
                            <RaisedButton
                                label={stepIndex === 2 ? 'Let\'s try!' : 'Next'}
                                primary={true}
                                onClick={this.handleNext}
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default SearchStepper;