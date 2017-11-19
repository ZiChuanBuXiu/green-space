import MainMap from '../components/MainMap';
import React, {Component} from 'react';
import SearchStepper from "../components/SearchStepper";
import {IconButton} from "material-ui";

import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from "material-ui/AppBar";

class SearchMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            homeCoordinate: [144.971154, -37.815285],
            isStepperVisible: false
        }
    }

    onUpdate = (data) => {
        this.setState(data);
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Green Space Recommendation"
                    iconElementRight={<IconButton onClick={() => {
                        this.setState({isStepperVisible: true})
                    }}>
                        <ActionSearch/>
                    </IconButton>}>
                </AppBar>
                <MainMap homeCoordinate={this.state.homeCoordinate} center={this.state.homeCoordinate}/>
                <SearchStepper isStepperVisible={this.state.isStepperVisible} onUpdate={
                    this.onUpdate.bind(this)
                }/>
            </div>
        );
    }
}

export default SearchMap;