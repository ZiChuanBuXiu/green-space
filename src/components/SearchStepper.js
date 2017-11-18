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
import {DropDownMenu, MenuItem, RadioButton, RadioButtonGroup} from "material-ui";
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

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
    },
};

const searchItems = require("../configs/menu.json");

class SearchStepper extends Component {
    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.state = {
            stepIndex: 0,
            open: true,
            type: "Exercise",
            activity: "Running"
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    handleChange = (event, index, value) => {
        this.setState({activity: value});
    };

    handleTypeChange = (event, value) => {
        this.setState({type: value});
        this.setState({activity: searchItems.Activities[value][0]});
    }

    getStepContent(stepIndex) {
        let times = searchItems.Time;
        let range = searchItems.Range
        let activities = Object.keys(searchItems.Activities);
        let self = this;
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
                    <p>
                        {'An ad group contains one or more ads which target a shared set of keywords.'}
                    </p>
                );

            case 2:
                return (
                    <p>
                        {'Try out different ad text to see what brings in the most customers, and learn ' +
                        'how to enhance your ads using features like ad extensions. If you run into any ' +
                        'problems with your ads, find out how to tell if they\'re running and how to ' +
                        'resolve approval issues.'}
                    </p>
                );
        }
    }

    handleNext() {
        const {stepIndex} = this.state;

        if (stepIndex < 2) {
            this.setState({stepIndex: stepIndex + 1});
        } else {
            this.setState({open: false});
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
                    title="Choose your preference"
                    modal={false}
                    open={this.state.open}
                >
                    <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon/>}>
                            <Step>
                                <StepLabel>Select campaign settings</StepLabel>
                            </Step>

                            <Step>
                                <StepLabel>Create an ad group</StepLabel>
                            </Step>

                            <Step>
                                <StepLabel>Create an ad</StepLabel>
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
                                label={stepIndex === 2 ? 'Finish' : 'Next'}
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