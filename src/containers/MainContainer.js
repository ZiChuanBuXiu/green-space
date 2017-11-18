import {IconButton} from "material-ui";

import ActionSearch from 'material-ui/svg-icons/action/search';
import AppBar from "material-ui/AppBar";
import React, {Component} from 'react';
import SearchMap from "./SearchMap";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStepperVisible: false
        }
    }

    openStepper = () => {
        this.setState({isStepperVisible: true});
    };

    onUpdate = (data)=>{
        this.setState(data);
    };

    render() {
        return (
            <div>
                <AppBar title="Green Space Recommendation"
                        iconElementRight={<IconButton onClick={this.openStepper}><ActionSearch/></IconButton>}>
                </AppBar>
                <SearchMap isStepperVisible={this.state.isStepperVisible} onUpdate={this.onUpdate.bind(this)}/>
            </div>
        )
    }
}

export default MainContainer;