import {DropDownMenu, MenuItem, RadioButton, RadioButtonGroup} from 'material-ui';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';

import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import CoordinatePickerMap from './CoordinatePickerMap';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
        verticalAlign: 'top',
        display: 'inline-block',
        '*display': 'inline',
    },
    horizontalRadioButton: {
        marginBottom: 16,
        verticalAlign: 'top',
        display: 'inline-block',
        '*display': 'inline',
        width: 80
    }
};

const searchItems = require('../configs/menu.json');

const searchResults = [
    {
        'name': 'Carlton Gardens South',
        'coordinate': [144.971298, -37.806056],
        'tweets': [{
            'coordinate': [144.97035602, -37.8058556],
            'content': 'Nothing beats a 6am morning chilly run to start the day #Melbourne #whatwerewethinking… '
        }, {
            'coordinate': [144.97183949, -37.80474889],
            'content': 'A walk in the park. ☔️ #jolomelb #royalexhibitionbuilding #carltongardens #melbourne @ Royal… '
        }, {
            'coordinate': [144.97027778, -37.80611111],
            'content': 'Enjoying melbourne\'s beautiful weather 👌 #Carltongardens #walks #melbourne #nature #australia @…'
        }, {
            'coordinate': [144.97178442, -37.80477536],
            'content': 'Not a bad place for my daily walk with yoda @ Royal Exhibition Building'
        }, {
            'coordinate': [144.97162897, -37.8044494], 'content': 'Morning city run @ Royal Exhibition Building '
        }]
    },
    {
        'name': 'Royal Botanic Gardens',
        'coordinate': [144.979486, -37.829514],
        'tweets': [{
            'coordinate': [144.98311761, -37.83194921],
            'content': 'Wednesday night run sesh along the Yarra River and The Tan with these speed demons! Great job tonight…'
        }, {
            'coordinate': [144.98455411, -37.82976053],
            'content': 'Nothing much. Just causally walking-over at the park 😂 @ Royal Botanical Gardens '
        }, {
            'coordinate': [144.98243168, -37.82937509],
            'content': 'Always nice to run along the Yarra. #recovery #run #learning2tri #sbr #trialliance #tricrazy #trilife… '
        }, {
            'coordinate': [144.9850074, -37.8302916],
            'content': 'Hot and Sweaty after my 4k run around the #Melbourne #Botanical #Garden TAN TRACK #me and my #Ute…'
        }, {
            'coordinate': [144.9850074, -37.8302916],
            'content': '10K run in this  certainly was NOT fun! #exausted #fitness 😵 @ The Tan Running Track,… '
        }]
    },
    {
        'name': 'Alexandra Gardens',
        'coordinate': [144.972644, -37.820480],
        'tweets': [{
            'coordinate': [144.9682, -37.8192],
            'content': 'I just finished running  miles in 38m:47s with #Endomondo #endorphins '
        }, {
            'coordinate': [144.9682465, -37.8192406],
            'content': 'Beautiful Winter walk! #winter #winterishere #socold #wrapupwarm #exploring #ilovethiscity…'
        }, {
            'coordinate': [144.97214638, -37.82049269],
            'content': 'Beautiful Winter walk! #winter #winterishere #socold #wrapupwarm #exploring #ilovethiscity…'
        }, {
            'coordinate': [144.96833333, -37.82027778],
            'content': 'We did it!! Third run of the series done. 🏃 mchughsie #proud #winning 👏💪❤️ @ Royal Botanical…'
        }, {
            'coordinate': [144.97310758, -37.82205093],
            'content': '#Melbourne this is why we love you! 😍🇦🇺 A 29km bike ride along the #CapitalCityTrail with the…'
        }]
    }
];

class SearchStepper extends Component {
    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);

        this.state = {
            stepIndex: 0,
            type: 'Workout',
            activity: 'Running',
            time: 'Day',
            range: '1',
            homeCoordinate: [144.971154, -37.815285],
            isDrawerOpen: false,

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
                                defaultSelected="Workout"
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
                            {'Choose what time you want to go out:'}
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
                    </div>
                );
            case 3:
                return (
                    <div>
                        <p>Choose the range from you home:</p>
                        <RadioButtonGroup
                            name={ranges}
                            defaultSelected="1km"
                            onChange={this.handleRangeChange}
                            style={{textAlign: 'justify'}}
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
                );
        }
    }

    handleNext() {
        const {stepIndex} = this.state;

        if (stepIndex < 3) {
            this.setState({stepIndex: stepIndex + 1});
        } else {
            this.props.onUpdate({
                isStepperVisible: false,
                homeCoordinate: this.state.homeCoordinate,
                searchResults: searchResults,
                isDrawerOpen: true,
                type: this.state.type
            });
            //TODO-Update map
            this.setState({
                stepIndex: 0,
                type: 'Workout',
                activity: 'Running',
                time: 'Day',
                range: '1',
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
                                <StepLabel>Select your start point</StepLabel>
                            </Step>
                            <Step>
                                <StepLabel>Select the range</StepLabel>
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
                                label={stepIndex === 3 ? 'Let\'s try!' : 'Next'}
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